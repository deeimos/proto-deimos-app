PROTO_DIR    := proto
GO_OUT_DIR   := gen/go
PY_OUT_DIR   := gen/python

GO_PROTO_FILES := $(shell find $(PROTO_DIR) -name "*.proto")
PY_PROTO_FILES := $(PROTO_DIR)/forecast-api/forecast-api.proto

.PHONY: generate generate-go generate-python clean

generate: generate-go generate-python

generate-go:
	@mkdir -p $(GO_OUT_DIR)
	protoc -I $(PROTO_DIR) \
		$(GO_PROTO_FILES) \
		--go_out=$(GO_OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(GO_OUT_DIR) --go-grpc_opt=paths=source_relative

generate-python:
	@mkdir -p $(PY_OUT_DIR)
	python3 -m grpc_tools.protoc -I$(PROTO_DIR) \
		--python_out=$(PY_OUT_DIR) \
		--grpc_python_out=$(PY_OUT_DIR) \
		$(PY_PROTO_FILES)

clean:
	rm -rf gen/*
