export PATH := $(abspath ./node_modules/.bin):$(PATH)

PROTO_DIR    := proto
GO_OUT_DIR   := gen/go
PY_OUT_DIR   := gen/python
WEB_OUT_DIR  := gen/web

GO_PROTO_FILES := $(shell find $(PROTO_DIR) -name "*.proto")
PY_PROTO_FILES := $(PROTO_DIR)/forecast-api/forecast-api.proto

PROTOC    := protoc
TS_PLUGIN := ./node_modules/.bin/protoc-gen-ts

.PHONY: generate generate-go generate-python generate-web clean

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
	@mkdir -p $(WEB_OUT_DIR)

	$(PROTOC) -I $(PROTO_DIR) \
	  --plugin=protoc-gen-ts=$(TS_PLUGIN) \
	  --ts_out=service=grpc-web:$(WEB_OUT_DIR) \
	    $(PROTO_DIR)/public-api/public-auth.proto \
	    $(PROTO_DIR)/public-api/public-servers.proto \
	    $(PROTO_DIR)/public-api/public-monitoring.proto \
	    $(PROTO_DIR)/public-api/public-forecast.proto

clean:
	rm -rf gen/*
