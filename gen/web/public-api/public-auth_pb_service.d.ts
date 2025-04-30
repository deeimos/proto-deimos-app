// package: public_api
// file: public-api/public-auth.proto

import * as public_api_public_auth_pb from "../public-api/public-auth_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PublicAuthRegister = {
  readonly methodName: string;
  readonly service: typeof PublicAuth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_auth_pb.RegisterRequest;
  readonly responseType: typeof public_api_public_auth_pb.RegisterResponse;
};

type PublicAuthLogin = {
  readonly methodName: string;
  readonly service: typeof PublicAuth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_auth_pb.LoginRequest;
  readonly responseType: typeof public_api_public_auth_pb.LoginResponse;
};

type PublicAuthRefresh = {
  readonly methodName: string;
  readonly service: typeof PublicAuth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_auth_pb.RefreshRequest;
  readonly responseType: typeof public_api_public_auth_pb.RefreshResponse;
};

type PublicAuthGetUser = {
  readonly methodName: string;
  readonly service: typeof PublicAuth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_auth_pb.GetUserRequest;
  readonly responseType: typeof public_api_public_auth_pb.GetUserResponse;
};

export class PublicAuth {
  static readonly serviceName: string;
  static readonly Register: PublicAuthRegister;
  static readonly Login: PublicAuthLogin;
  static readonly Refresh: PublicAuthRefresh;
  static readonly GetUser: PublicAuthGetUser;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class PublicAuthClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  register(
    requestMessage: public_api_public_auth_pb.RegisterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_auth_pb.RegisterResponse|null) => void
  ): UnaryResponse;
  register(
    requestMessage: public_api_public_auth_pb.RegisterRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_auth_pb.RegisterResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: public_api_public_auth_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_auth_pb.LoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: public_api_public_auth_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_auth_pb.LoginResponse|null) => void
  ): UnaryResponse;
  refresh(
    requestMessage: public_api_public_auth_pb.RefreshRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_auth_pb.RefreshResponse|null) => void
  ): UnaryResponse;
  refresh(
    requestMessage: public_api_public_auth_pb.RefreshRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_auth_pb.RefreshResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: public_api_public_auth_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_auth_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: public_api_public_auth_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_auth_pb.GetUserResponse|null) => void
  ): UnaryResponse;
}

