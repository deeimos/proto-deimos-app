export PATH := $(abspath ./node_modules/.bin):$(PATH)

PROTO_DIR := proto
GO_OUT_DIR := gen/go
CONNECT_OUT_DIR := gen/connect

GO_PROTO_FILES := $(shell find $(PROTO_DIR) -name "*.proto")

PROTOC := protoc

.PHONY: generate generate-go generate-connect

generate: generate-go generate-connect

generate-go:
	@mkdir -p $(GO_OUT_DIR)
	$(PROTOC) -I $(PROTO_DIR) \
		$(GO_PROTO_FILES) \
		--go_out=$(GO_OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(GO_OUT_DIR) --go-grpc_opt=paths=source_relative

generate-connect:
	@mkdir -p $(CONNECT_OUT_DIR)
	buf generate --path proto/public-api