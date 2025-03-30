// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.29.3
// source: servers-api/servers-api.proto

package servers_apiv1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	ServersAPI_CreateServer_FullMethodName   = "/servers_api.ServersAPI/CreateServer"
	ServersAPI_UpdateServer_FullMethodName   = "/servers_api.ServersAPI/UpdateServer"
	ServersAPI_GetServer_FullMethodName      = "/servers_api.ServersAPI/GetServer"
	ServersAPI_GetServersList_FullMethodName = "/servers_api.ServersAPI/GetServersList"
)

// ServersAPIClient is the client API for ServersAPI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServersAPIClient interface {
	CreateServer(ctx context.Context, in *CreateServerRequest, opts ...grpc.CallOption) (*CreateServerResponse, error)
	UpdateServer(ctx context.Context, in *UpdateServerRequest, opts ...grpc.CallOption) (*UpdateServerResponse, error)
	GetServer(ctx context.Context, in *GetServerRequest, opts ...grpc.CallOption) (*GetServerResponse, error)
	GetServersList(ctx context.Context, in *GetServersListRequest, opts ...grpc.CallOption) (*GetServersListResponse, error)
}

type serversAPIClient struct {
	cc grpc.ClientConnInterface
}

func NewServersAPIClient(cc grpc.ClientConnInterface) ServersAPIClient {
	return &serversAPIClient{cc}
}

func (c *serversAPIClient) CreateServer(ctx context.Context, in *CreateServerRequest, opts ...grpc.CallOption) (*CreateServerResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(CreateServerResponse)
	err := c.cc.Invoke(ctx, ServersAPI_CreateServer_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serversAPIClient) UpdateServer(ctx context.Context, in *UpdateServerRequest, opts ...grpc.CallOption) (*UpdateServerResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UpdateServerResponse)
	err := c.cc.Invoke(ctx, ServersAPI_UpdateServer_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serversAPIClient) GetServer(ctx context.Context, in *GetServerRequest, opts ...grpc.CallOption) (*GetServerResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetServerResponse)
	err := c.cc.Invoke(ctx, ServersAPI_GetServer_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serversAPIClient) GetServersList(ctx context.Context, in *GetServersListRequest, opts ...grpc.CallOption) (*GetServersListResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetServersListResponse)
	err := c.cc.Invoke(ctx, ServersAPI_GetServersList_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServersAPIServer is the server API for ServersAPI service.
// All implementations must embed UnimplementedServersAPIServer
// for forward compatibility.
type ServersAPIServer interface {
	CreateServer(context.Context, *CreateServerRequest) (*CreateServerResponse, error)
	UpdateServer(context.Context, *UpdateServerRequest) (*UpdateServerResponse, error)
	GetServer(context.Context, *GetServerRequest) (*GetServerResponse, error)
	GetServersList(context.Context, *GetServersListRequest) (*GetServersListResponse, error)
	mustEmbedUnimplementedServersAPIServer()
}

// UnimplementedServersAPIServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedServersAPIServer struct{}

func (UnimplementedServersAPIServer) CreateServer(context.Context, *CreateServerRequest) (*CreateServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateServer not implemented")
}
func (UnimplementedServersAPIServer) UpdateServer(context.Context, *UpdateServerRequest) (*UpdateServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateServer not implemented")
}
func (UnimplementedServersAPIServer) GetServer(context.Context, *GetServerRequest) (*GetServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetServer not implemented")
}
func (UnimplementedServersAPIServer) GetServersList(context.Context, *GetServersListRequest) (*GetServersListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetServersList not implemented")
}
func (UnimplementedServersAPIServer) mustEmbedUnimplementedServersAPIServer() {}
func (UnimplementedServersAPIServer) testEmbeddedByValue()                    {}

// UnsafeServersAPIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServersAPIServer will
// result in compilation errors.
type UnsafeServersAPIServer interface {
	mustEmbedUnimplementedServersAPIServer()
}

func RegisterServersAPIServer(s grpc.ServiceRegistrar, srv ServersAPIServer) {
	// If the following call pancis, it indicates UnimplementedServersAPIServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&ServersAPI_ServiceDesc, srv)
}

func _ServersAPI_CreateServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServersAPIServer).CreateServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ServersAPI_CreateServer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServersAPIServer).CreateServer(ctx, req.(*CreateServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServersAPI_UpdateServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServersAPIServer).UpdateServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ServersAPI_UpdateServer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServersAPIServer).UpdateServer(ctx, req.(*UpdateServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServersAPI_GetServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServersAPIServer).GetServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ServersAPI_GetServer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServersAPIServer).GetServer(ctx, req.(*GetServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServersAPI_GetServersList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetServersListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServersAPIServer).GetServersList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ServersAPI_GetServersList_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServersAPIServer).GetServersList(ctx, req.(*GetServersListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ServersAPI_ServiceDesc is the grpc.ServiceDesc for ServersAPI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ServersAPI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "servers_api.ServersAPI",
	HandlerType: (*ServersAPIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateServer",
			Handler:    _ServersAPI_CreateServer_Handler,
		},
		{
			MethodName: "UpdateServer",
			Handler:    _ServersAPI_UpdateServer_Handler,
		},
		{
			MethodName: "GetServer",
			Handler:    _ServersAPI_GetServer_Handler,
		},
		{
			MethodName: "GetServersList",
			Handler:    _ServersAPI_GetServersList_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "servers-api/servers-api.proto",
}
