PROTO_DIR := proto
GO_OUT_DIR := gen/go
WEB_OUT_DIR := gen/web

GO_PROTO_FILES := $(shell find $(PROTO_DIR) -name "*.proto")

PROTOC := protoc
PROTOC_GEN_WEB := ./node_modules/.bin/protoc-gen-grpc-web

.PHONY: generate generate-go generate-web

generate: generate-go generate-web


generate-go:
	@mkdir -p $(GO_OUT_DIR)
	$(PROTOC) -I $(PROTO_DIR) \
		$(GO_PROTO_FILES) \
		--go_out=$(GO_OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(GO_OUT_DIR) --go-grpc_opt=paths=source_relative

generate-web:
	@mkdir -p $(WEB_OUT_DIR)/public-auth
	@mkdir -p $(WEB_OUT_DIR)/public-servers
	@mkdir -p $(WEB_OUT_DIR)/public-monitoring

	$(PROTOC) -I $(PROTO_DIR) \
		$(PROTO_DIR)/public-api/public-auth.proto \
		--plugin=protoc-gen-grpc-web=$(PROTOC_GEN_WEB) \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(WEB_OUT_DIR)/public-auth

	$(PROTOC) -I $(PROTO_DIR) \
		$(PROTO_DIR)/public-api/public-servers.proto \
		--plugin=protoc-gen-grpc-web=$(PROTOC_GEN_WEB) \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(WEB_OUT_DIR)/public-servers
	
	$(PROTOC) -I $(PROTO_DIR) \
		$(PROTO_DIR)/public-api/public-monitoring.proto \
		--plugin=protoc-gen-grpc-web=$(PROTOC_GEN_WEB) \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(WEB_OUT_DIR)/public-monitoring
