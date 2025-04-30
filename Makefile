export PATH := $(abspath ./node_modules/.bin):$(PATH)

PROTO_DIR := proto
GO_OUT_DIR := gen/go
WEB_OUT_DIR := gen/web
PY_OUT_DIR := gen/python

GO_PROTO_FILES := $(shell find $(PROTO_DIR) -name "*.proto")
PY_PROTO_FILES := $(PROTO_DIR)/forecast-api/forecast-api.proto

PROTOC := protoc
PROTOC_GEN_WEB := ./node_modules/.bin/protoc-gen-grpc-web

.PHONY: generate generate-go generate-python generate-web

generate: generate-go generate-python generate-web

generate-go:
	@mkdir -p $(GO_OUT_DIR)
	$(PROTOC) -I $(PROTO_DIR) \
		$(GO_PROTO_FILES) \
		--go_out=$(GO_OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(GO_OUT_DIR) --go-grpc_opt=paths=source_relative

generate-python:
	@mkdir -p $(PY_OUT_DIR)
	python3 -m grpc_tools.protoc -I$(PROTO_DIR) \
		--python_out=$(PY_OUT_DIR) \
		--grpc_python_out=$(PY_OUT_DIR) \
		$(PY_PROTO_FILES)

generate-web:
	@mkdir -p $(WEB_OUT_DIR)/public-auth
	@mkdir -p $(WEB_OUT_DIR)/public-servers
	@mkdir -p $(WEB_OUT_DIR)/public-monitoring
	@mkdir -p $(WEB_OUT_DIR)/public-forecast

	$(PROTOC) -I $(PROTO_DIR) \
		--plugin=protoc-gen-grpc-web=$(PROTOC_GEN_WEB) \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(WEB_OUT_DIR)/public-auth \
		$(PROTO_DIR)/public-api/public-auth.proto

	$(PROTOC) -I $(PROTO_DIR) \
		--plugin=protoc-gen-grpc-web=$(PROTOC_GEN_WEB) \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(WEB_OUT_DIR)/public-servers \
		$(PROTO_DIR)/public-api/public-servers.proto

	$(PROTOC) -I $(PROTO_DIR) \
		--plugin=protoc-gen-grpc-web=$(PROTOC_GEN_WEB) \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(WEB_OUT_DIR)/public-monitoring \
		$(PROTO_DIR)/public-api/public-monitoring.proto

	$(PROTOC) -I $(PROTO_DIR) \
		--plugin=protoc-gen-grpc-web=$(PROTOC_GEN_WEB) \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(WEB_OUT_DIR)/public-forecast \
		$(PROTO_DIR)/public-api/public-forecast.proto