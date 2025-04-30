// package: public_api
// file: public-api/public-monitoring.proto

import * as public_api_public_monitoring_pb from "../public-api/public-monitoring_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PublicMonitoringStreamServerMetrics = {
  readonly methodName: string;
  readonly service: typeof PublicMonitoring;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof public_api_public_monitoring_pb.PublicServerMetricsRequest;
  readonly responseType: typeof public_api_public_monitoring_pb.PublicServerMetric;
};

export class PublicMonitoring {
  static readonly serviceName: string;
  static readonly StreamServerMetrics: PublicMonitoringStreamServerMetrics;
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

export class PublicMonitoringClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  streamServerMetrics(requestMessage: public_api_public_monitoring_pb.PublicServerMetricsRequest, metadata?: grpc.Metadata): ResponseStream<public_api_public_monitoring_pb.PublicServerMetric>;
}

