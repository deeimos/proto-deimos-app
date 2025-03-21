PROTO_DIR := proto
OUT_DIR := gen/go

.PHONY: generate
generate:
	protoc -I $(PROTO_DIR) $(PROTO_DIR)/auth-api/*.proto \
	--go_out=$(OUT_DIR) --go_opt=paths=source_relative \
	--go-grpc_out=$(OUT_DIR) --go-grpc_opt=paths=source_relative