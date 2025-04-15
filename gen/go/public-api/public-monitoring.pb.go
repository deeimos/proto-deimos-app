// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.5
// 	protoc        v5.29.3
// source: public-api/public-monitoring.proto

package public_apiv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type PublicServerMetricsRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	ServerId      string                 `protobuf:"bytes,1,opt,name=server_id,json=serverId,proto3" json:"server_id,omitempty"`
	Token         string                 `protobuf:"bytes,2,opt,name=token,proto3" json:"token,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PublicServerMetricsRequest) Reset() {
	*x = PublicServerMetricsRequest{}
	mi := &file_public_api_public_monitoring_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PublicServerMetricsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublicServerMetricsRequest) ProtoMessage() {}

func (x *PublicServerMetricsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_public_api_public_monitoring_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublicServerMetricsRequest.ProtoReflect.Descriptor instead.
func (*PublicServerMetricsRequest) Descriptor() ([]byte, []int) {
	return file_public_api_public_monitoring_proto_rawDescGZIP(), []int{0}
}

func (x *PublicServerMetricsRequest) GetServerId() string {
	if x != nil {
		return x.ServerId
	}
	return ""
}

func (x *PublicServerMetricsRequest) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

type PublicServerMetric struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	CpuUsage      float64                `protobuf:"fixed64,1,opt,name=cpu_usage,json=cpuUsage,proto3" json:"cpu_usage,omitempty"`
	MemoryUsage   float64                `protobuf:"fixed64,2,opt,name=memory_usage,json=memoryUsage,proto3" json:"memory_usage,omitempty"`
	DiskUsage     float64                `protobuf:"fixed64,3,opt,name=disk_usage,json=diskUsage,proto3" json:"disk_usage,omitempty"`
	LoadAvg_1     float64                `protobuf:"fixed64,4,opt,name=load_avg_1,json=loadAvg1,proto3" json:"load_avg_1,omitempty"`
	LoadAvg_5     float64                `protobuf:"fixed64,5,opt,name=load_avg_5,json=loadAvg5,proto3" json:"load_avg_5,omitempty"`
	LoadAvg_15    float64                `protobuf:"fixed64,6,opt,name=load_avg_15,json=loadAvg15,proto3" json:"load_avg_15,omitempty"`
	NetworkRx     float64                `protobuf:"fixed64,7,opt,name=network_rx,json=networkRx,proto3" json:"network_rx,omitempty"`
	NetworkTx     float64                `protobuf:"fixed64,8,opt,name=network_tx,json=networkTx,proto3" json:"network_tx,omitempty"`
	DiskRead      float64                `protobuf:"fixed64,9,opt,name=disk_read,json=diskRead,proto3" json:"disk_read,omitempty"`
	DiskWrite     float64                `protobuf:"fixed64,10,opt,name=disk_write,json=diskWrite,proto3" json:"disk_write,omitempty"`
	ProcessCount  int32                  `protobuf:"varint,11,opt,name=process_count,json=processCount,proto3" json:"process_count,omitempty"`
	IoWait        float64                `protobuf:"fixed64,12,opt,name=io_wait,json=ioWait,proto3" json:"io_wait,omitempty"`
	UptimeSeconds int64                  `protobuf:"varint,13,opt,name=uptime_seconds,json=uptimeSeconds,proto3" json:"uptime_seconds,omitempty"`
	Temperature   float64                `protobuf:"fixed64,14,opt,name=temperature,proto3" json:"temperature,omitempty"`
	Status        string                 `protobuf:"bytes,15,opt,name=status,proto3" json:"status,omitempty"`
	Timestamp     *timestamppb.Timestamp `protobuf:"bytes,16,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PublicServerMetric) Reset() {
	*x = PublicServerMetric{}
	mi := &file_public_api_public_monitoring_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PublicServerMetric) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublicServerMetric) ProtoMessage() {}

func (x *PublicServerMetric) ProtoReflect() protoreflect.Message {
	mi := &file_public_api_public_monitoring_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublicServerMetric.ProtoReflect.Descriptor instead.
func (*PublicServerMetric) Descriptor() ([]byte, []int) {
	return file_public_api_public_monitoring_proto_rawDescGZIP(), []int{1}
}

func (x *PublicServerMetric) GetCpuUsage() float64 {
	if x != nil {
		return x.CpuUsage
	}
	return 0
}

func (x *PublicServerMetric) GetMemoryUsage() float64 {
	if x != nil {
		return x.MemoryUsage
	}
	return 0
}

func (x *PublicServerMetric) GetDiskUsage() float64 {
	if x != nil {
		return x.DiskUsage
	}
	return 0
}

func (x *PublicServerMetric) GetLoadAvg_1() float64 {
	if x != nil {
		return x.LoadAvg_1
	}
	return 0
}

func (x *PublicServerMetric) GetLoadAvg_5() float64 {
	if x != nil {
		return x.LoadAvg_5
	}
	return 0
}

func (x *PublicServerMetric) GetLoadAvg_15() float64 {
	if x != nil {
		return x.LoadAvg_15
	}
	return 0
}

func (x *PublicServerMetric) GetNetworkRx() float64 {
	if x != nil {
		return x.NetworkRx
	}
	return 0
}

func (x *PublicServerMetric) GetNetworkTx() float64 {
	if x != nil {
		return x.NetworkTx
	}
	return 0
}

func (x *PublicServerMetric) GetDiskRead() float64 {
	if x != nil {
		return x.DiskRead
	}
	return 0
}

func (x *PublicServerMetric) GetDiskWrite() float64 {
	if x != nil {
		return x.DiskWrite
	}
	return 0
}

func (x *PublicServerMetric) GetProcessCount() int32 {
	if x != nil {
		return x.ProcessCount
	}
	return 0
}

func (x *PublicServerMetric) GetIoWait() float64 {
	if x != nil {
		return x.IoWait
	}
	return 0
}

func (x *PublicServerMetric) GetUptimeSeconds() int64 {
	if x != nil {
		return x.UptimeSeconds
	}
	return 0
}

func (x *PublicServerMetric) GetTemperature() float64 {
	if x != nil {
		return x.Temperature
	}
	return 0
}

func (x *PublicServerMetric) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *PublicServerMetric) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

var File_public_api_public_monitoring_proto protoreflect.FileDescriptor

var file_public_api_public_monitoring_proto_rawDesc = string([]byte{
	0x0a, 0x22, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x75, 0x62,
	0x6c, 0x69, 0x63, 0x2d, 0x6d, 0x6f, 0x6e, 0x69, 0x74, 0x6f, 0x72, 0x69, 0x6e, 0x67, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x5f, 0x61, 0x70, 0x69,
	0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0x4f, 0x0a, 0x1a, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x53, 0x65, 0x72, 0x76, 0x65,
	0x72, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x1b, 0x0a, 0x09, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x49, 0x64, 0x12, 0x14, 0x0a, 0x05,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x22, 0xa2, 0x04, 0x0a, 0x12, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x53, 0x65, 0x72,
	0x76, 0x65, 0x72, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x70, 0x75,
	0x5f, 0x75, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x01, 0x52, 0x08, 0x63, 0x70,
	0x75, 0x55, 0x73, 0x61, 0x67, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79,
	0x5f, 0x75, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0b, 0x6d, 0x65,
	0x6d, 0x6f, 0x72, 0x79, 0x55, 0x73, 0x61, 0x67, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x64, 0x69, 0x73,
	0x6b, 0x5f, 0x75, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x52, 0x09, 0x64,
	0x69, 0x73, 0x6b, 0x55, 0x73, 0x61, 0x67, 0x65, 0x12, 0x1c, 0x0a, 0x0a, 0x6c, 0x6f, 0x61, 0x64,
	0x5f, 0x61, 0x76, 0x67, 0x5f, 0x31, 0x18, 0x04, 0x20, 0x01, 0x28, 0x01, 0x52, 0x08, 0x6c, 0x6f,
	0x61, 0x64, 0x41, 0x76, 0x67, 0x31, 0x12, 0x1c, 0x0a, 0x0a, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x61,
	0x76, 0x67, 0x5f, 0x35, 0x18, 0x05, 0x20, 0x01, 0x28, 0x01, 0x52, 0x08, 0x6c, 0x6f, 0x61, 0x64,
	0x41, 0x76, 0x67, 0x35, 0x12, 0x1e, 0x0a, 0x0b, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x61, 0x76, 0x67,
	0x5f, 0x31, 0x35, 0x18, 0x06, 0x20, 0x01, 0x28, 0x01, 0x52, 0x09, 0x6c, 0x6f, 0x61, 0x64, 0x41,
	0x76, 0x67, 0x31, 0x35, 0x12, 0x1d, 0x0a, 0x0a, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x5f,
	0x72, 0x78, 0x18, 0x07, 0x20, 0x01, 0x28, 0x01, 0x52, 0x09, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72,
	0x6b, 0x52, 0x78, 0x12, 0x1d, 0x0a, 0x0a, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x74,
	0x78, 0x18, 0x08, 0x20, 0x01, 0x28, 0x01, 0x52, 0x09, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b,
	0x54, 0x78, 0x12, 0x1b, 0x0a, 0x09, 0x64, 0x69, 0x73, 0x6b, 0x5f, 0x72, 0x65, 0x61, 0x64, 0x18,
	0x09, 0x20, 0x01, 0x28, 0x01, 0x52, 0x08, 0x64, 0x69, 0x73, 0x6b, 0x52, 0x65, 0x61, 0x64, 0x12,
	0x1d, 0x0a, 0x0a, 0x64, 0x69, 0x73, 0x6b, 0x5f, 0x77, 0x72, 0x69, 0x74, 0x65, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x01, 0x52, 0x09, 0x64, 0x69, 0x73, 0x6b, 0x57, 0x72, 0x69, 0x74, 0x65, 0x12, 0x23,
	0x0a, 0x0d, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18,
	0x0b, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x43, 0x6f,
	0x75, 0x6e, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x69, 0x6f, 0x5f, 0x77, 0x61, 0x69, 0x74, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x01, 0x52, 0x06, 0x69, 0x6f, 0x57, 0x61, 0x69, 0x74, 0x12, 0x25, 0x0a, 0x0e,
	0x75, 0x70, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x18, 0x0d,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x0d, 0x75, 0x70, 0x74, 0x69, 0x6d, 0x65, 0x53, 0x65, 0x63, 0x6f,
	0x6e, 0x64, 0x73, 0x12, 0x20, 0x0a, 0x0b, 0x74, 0x65, 0x6d, 0x70, 0x65, 0x72, 0x61, 0x74, 0x75,
	0x72, 0x65, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0b, 0x74, 0x65, 0x6d, 0x70, 0x65, 0x72,
	0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x0f, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x38, 0x0a,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x10, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x32, 0x75, 0x0a, 0x10, 0x50, 0x75, 0x62, 0x6c, 0x69,
	0x63, 0x4d, 0x6f, 0x6e, 0x69, 0x74, 0x6f, 0x72, 0x69, 0x6e, 0x67, 0x12, 0x61, 0x0a, 0x13, 0x53,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x4d, 0x65, 0x74, 0x72, 0x69,
	0x63, 0x73, 0x12, 0x26, 0x2e, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x5f, 0x61, 0x70, 0x69, 0x2e,
	0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x4d, 0x65, 0x74, 0x72,
	0x69, 0x63, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x70, 0x75, 0x62,
	0x6c, 0x69, 0x63, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x53, 0x65,
	0x72, 0x76, 0x65, 0x72, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x22, 0x00, 0x30, 0x01, 0x42, 0x23,
	0x5a, 0x21, 0x64, 0x65, 0x69, 0x6d, 0x6f, 0x73, 0x2e, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x5f,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x3b, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x5f, 0x61, 0x70,
	0x69, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
})

var (
	file_public_api_public_monitoring_proto_rawDescOnce sync.Once
	file_public_api_public_monitoring_proto_rawDescData []byte
)

func file_public_api_public_monitoring_proto_rawDescGZIP() []byte {
	file_public_api_public_monitoring_proto_rawDescOnce.Do(func() {
		file_public_api_public_monitoring_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_public_api_public_monitoring_proto_rawDesc), len(file_public_api_public_monitoring_proto_rawDesc)))
	})
	return file_public_api_public_monitoring_proto_rawDescData
}

var file_public_api_public_monitoring_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_public_api_public_monitoring_proto_goTypes = []any{
	(*PublicServerMetricsRequest)(nil), // 0: public_api.PublicServerMetricsRequest
	(*PublicServerMetric)(nil),         // 1: public_api.PublicServerMetric
	(*timestamppb.Timestamp)(nil),      // 2: google.protobuf.Timestamp
}
var file_public_api_public_monitoring_proto_depIdxs = []int32{
	2, // 0: public_api.PublicServerMetric.timestamp:type_name -> google.protobuf.Timestamp
	0, // 1: public_api.PublicMonitoring.StreamServerMetrics:input_type -> public_api.PublicServerMetricsRequest
	1, // 2: public_api.PublicMonitoring.StreamServerMetrics:output_type -> public_api.PublicServerMetric
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_public_api_public_monitoring_proto_init() }
func file_public_api_public_monitoring_proto_init() {
	if File_public_api_public_monitoring_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_public_api_public_monitoring_proto_rawDesc), len(file_public_api_public_monitoring_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_public_api_public_monitoring_proto_goTypes,
		DependencyIndexes: file_public_api_public_monitoring_proto_depIdxs,
		MessageInfos:      file_public_api_public_monitoring_proto_msgTypes,
	}.Build()
	File_public_api_public_monitoring_proto = out.File
	file_public_api_public_monitoring_proto_goTypes = nil
	file_public_api_public_monitoring_proto_depIdxs = nil
}
