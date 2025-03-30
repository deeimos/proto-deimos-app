PROTO_DIR := proto
OUT_DIR := gen/go
PROTO_FILES := $(shell find $(PROTO_DIR) -name "*.proto")

.PHONY: generate
generate:
	protoc -I $(PROTO_DIR) \
		$(PROTO_FILES) \
		--go_out=$(OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(OUT_DIR) --go-grpc_opt=paths=source_relative
