export PATH := $(abspath ./node_modules/.bin):$(PATH)

PROTO_DIR := proto
GO_OUT_DIR := gen/go
CONNECT_OUT_DIR := gen/connect
PY_OUT_DIR := gen/python

GO_PROTO_FILES := $(shell find $(PROTO_DIR) -name "*.proto")
PY_PROTO_FILES := $(PROTO_DIR)/forecast-api/forecast-api.proto

PROTOC := protoc

.PHONY: generate generate-go generate-connect generate-python

generate: generate-go generate-connect generate-python

generate-go:
	@mkdir -p $(GO_OUT_DIR)
	$(PROTOC) -I $(PROTO_DIR) \
		$(GO_PROTO_FILES) \
		--go_out=$(GO_OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(GO_OUT_DIR) --go-grpc_opt=paths=source_relative

generate-connect:
	@mkdir -p $(CONNECT_OUT_DIR)
	buf generate --path proto/public-api

generate-python:
	@mkdir -p $(PY_OUT_DIR)
	python3 -m grpc_tools.protoc -I$(PROTO_DIR) \
		--python_out=$(PY_OUT_DIR) \
		--grpc_python_out=$(PY_OUT_DIR) \
		$(PY_PROTO_FILES)