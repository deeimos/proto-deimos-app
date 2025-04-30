// package: public_api
// file: public-api/public-monitoring.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PublicServerMetricsRequest extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicServerMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicServerMetricsRequest): PublicServerMetricsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicServerMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicServerMetricsRequest;
  static deserializeBinaryFromReader(message: PublicServerMetricsRequest, reader: jspb.BinaryReader): PublicServerMetricsRequest;
}

export namespace PublicServerMetricsRequest {
  export type AsObject = {
    serverId: string,
  }
}

export class PublicServerMetric extends jspb.Message {
  getCpuUsage(): number;
  setCpuUsage(value: number): void;

  getMemoryUsage(): number;
  setMemoryUsage(value: number): void;

  getDiskUsage(): number;
  setDiskUsage(value: number): void;

  getLoadAvg1(): number;
  setLoadAvg1(value: number): void;

  getLoadAvg5(): number;
  setLoadAvg5(value: number): void;

  getLoadAvg15(): number;
  setLoadAvg15(value: number): void;

  getNetworkRx(): number;
  setNetworkRx(value: number): void;

  getNetworkTx(): number;
  setNetworkTx(value: number): void;

  getDiskRead(): number;
  setDiskRead(value: number): void;

  getDiskWrite(): number;
  setDiskWrite(value: number): void;

  getProcessCount(): number;
  setProcessCount(value: number): void;

  getIoWait(): number;
  setIoWait(value: number): void;

  getUptimeSeconds(): number;
  setUptimeSeconds(value: number): void;

  getTemperature(): number;
  setTemperature(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicServerMetric.AsObject;
  static toObject(includeInstance: boolean, msg: PublicServerMetric): PublicServerMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

