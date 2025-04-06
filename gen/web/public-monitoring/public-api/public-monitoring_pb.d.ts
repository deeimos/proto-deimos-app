import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class PublicServerMetricsRequest extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): PublicServerMetricsRequest;

  getToken(): string;
  setToken(value: string): PublicServerMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicServerMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicServerMetricsRequest): PublicServerMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: PublicServerMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicServerMetricsRequest;
  static deserializeBinaryFromReader(message: PublicServerMetricsRequest, reader: jspb.BinaryReader): PublicServerMetricsRequest;
}

export namespace PublicServerMetricsRequest {
  export type AsObject = {
    serverId: string,
    token: string,
  }
}

export class PublicServerMetric extends jspb.Message {
  getCpuUsage(): number;
  setCpuUsage(value: number): PublicServerMetric;

  getMemoryUsage(): number;
  setMemoryUsage(value: number): PublicServerMetric;

  getDiskUsage(): number;
  setDiskUsage(value: number): PublicServerMetric;

  getLoadAvg1(): number;
  setLoadAvg1(value: number): PublicServerMetric;

  getLoadAvg5(): number;
  setLoadAvg5(value: number): PublicServerMetric;

  getLoadAvg15(): number;
  setLoadAvg15(value: number): PublicServerMetric;

  getNetworkRx(): number;
  setNetworkRx(value: number): PublicServerMetric;

  getNetworkTx(): number;
  setNetworkTx(value: number): PublicServerMetric;

  getDiskRead(): number;
  setDiskRead(value: number): PublicServerMetric;

  getDiskWrite(): number;
  setDiskWrite(value: number): PublicServerMetric;

  getProcessCount(): number;
  setProcessCount(value: number): PublicServerMetric;

  getIoWait(): number;
  setIoWait(value: number): PublicServerMetric;

  getUptimeSeconds(): number;
  setUptimeSeconds(value: number): PublicServerMetric;

  getTemperature(): number;
  setTemperature(value: number): PublicServerMetric;

  getStatus(): string;
  setStatus(value: string): PublicServerMetric;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): PublicServerMetric;
  hasTimestamp(): boolean;
  clearTimestamp(): PublicServerMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicServerMetric.AsObject;
  static toObject(includeInstance: boolean, msg: PublicServerMetric): PublicServerMetric.AsObject;
  static serializeBinaryToWriter(message: PublicServerMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicServerMetric;
  static deserializeBinaryFromReader(message: PublicServerMetric, reader: jspb.BinaryReader): PublicServerMetric;
}

export namespace PublicServerMetric {
  export type AsObject = {
    cpuUsage: number,
    memoryUsage: number,
    diskUsage: number,
    loadAvg1: number,
    loadAvg5: number,
    loadAvg15: number,
    networkRx: number,
    networkTx: number,
    diskRead: number,
    diskWrite: number,
    processCount: number,
    ioWait: number,
    uptimeSeconds: number,
    temperature: number,
    status: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

