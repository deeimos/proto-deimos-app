// package: public_api
// file: public-api/public-servers.proto

import * as public_api_public_servers_pb from "../public-api/public-servers_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PublicServersCreateServer = {
  readonly methodName: string;
  readonly service: typeof PublicServers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_servers_pb.CreateServerRequest;
  readonly responseType: typeof public_api_public_servers_pb.CreateServerResponse;
};

type PublicServersUpdateServer = {
  readonly methodName: string;
  readonly service: typeof PublicServers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_servers_pb.UpdateServerRequest;
  readonly responseType: typeof public_api_public_servers_pb.UpdateServerResponse;
};

type PublicServersGetServer = {
  readonly methodName: string;
  readonly service: typeof PublicServers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_servers_pb.GetServerRequest;
  readonly responseType: typeof public_api_public_servers_pb.GetServerResponse;
};

type PublicServersDeleteServer = {
  readonly methodName: string;
  readonly service: typeof PublicServers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_servers_pb.DeleteServerRequest;
  readonly responseType: typeof public_api_public_servers_pb.DeleteServerResponse;
};

type PublicServersGetServersList = {
  readonly methodName: string;
  readonly service: typeof PublicServers;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_api_public_servers_pb.GetServersListRequest;
  readonly responseType: typeof public_api_public_servers_pb.GetServersListResponse;
};

export class PublicServers {
  static readonly serviceName: string;
  static readonly CreateServer: PublicServersCreateServer;
  static readonly UpdateServer: PublicServersUpdateServer;
  static readonly GetServer: PublicServersGetServer;
  static readonly DeleteServer: PublicServersDeleteServer;
  static readonly GetServersList: PublicServersGetServersList;
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

export class PublicServersClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createServer(
    requestMessage: public_api_public_servers_pb.CreateServerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.CreateServerResponse|null) => void
  ): UnaryResponse;
  createServer(
    requestMessage: public_api_public_servers_pb.CreateServerRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.CreateServerResponse|null) => void
  ): UnaryResponse;
  updateServer(
    requestMessage: public_api_public_servers_pb.UpdateServerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.UpdateServerResponse|null) => void
  ): UnaryResponse;
  updateServer(
    requestMessage: public_api_public_servers_pb.UpdateServerRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.UpdateServerResponse|null) => void
  ): UnaryResponse;
  getServer(
    requestMessage: public_api_public_servers_pb.GetServerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.GetServerResponse|null) => void
  ): UnaryResponse;
  getServer(
    requestMessage: public_api_public_servers_pb.GetServerRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.GetServerResponse|null) => void
  ): UnaryResponse;
  deleteServer(
    requestMessage: public_api_public_servers_pb.DeleteServerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.DeleteServerResponse|null) => void
  ): UnaryResponse;
  deleteServer(
    requestMessage: public_api_public_servers_pb.DeleteServerRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.DeleteServerResponse|null) => void
  ): UnaryResponse;
  getServersList(
    requestMessage: public_api_public_servers_pb.GetServersListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.GetServersListResponse|null) => void
  ): UnaryResponse;
  getServersList(
    requestMessage: public_api_public_servers_pb.GetServersListRequest,
    callback: (error: ServiceError|null, responseMessage: public_api_public_servers_pb.GetServersListResponse|null) => void
  ): UnaryResponse;
}

