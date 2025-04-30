// package: public_api
// file: public-api/public-forecast.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PublicForecastRequest extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicForecastRequest): PublicForecastRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicForecastRequest;
  static deserializeBinaryFromReader(message: PublicForecastRequest, reader: jspb.BinaryReader): PublicForecastRequest;
}

export namespace PublicForecastRequest {
  export type AsObject = {
    serverId: string,
  }
}

export class PublicForecastResponse extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): void;

  clearForecastsList(): void;
  getForecastsList(): Array<PublicForecastPoint>;
  setForecastsList(value: Array<PublicForecastPoint>): void;
  addForecasts(value?: PublicForecastPoint, index?: number): PublicForecastPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublicForecastResponse): PublicForecastResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicForecastResponse;
  static deserializeBinaryFromReader(message: PublicForecastResponse, reader: jspb.BinaryReader): PublicForecastResponse;
}

export namespace PublicForecastResponse {
  export type AsObject = {
    serverId: string,
    forecastsList: Array<PublicForecastPoint.AsObject>,
  }
}

export class PublicForecastStreamRequest extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicForecastStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicForecastStreamRequest): PublicForecastStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicForecastStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicForecastStreamRequest;
  static deserializeBinaryFromReader(message: PublicForecastStreamRequest, reader: jspb.BinaryReader): PublicForecastStreamRequest;
}

export namespace PublicForecastStreamRequest {
  export type AsObject = {
    serverId: string,
  }
}

export class PublicForecastPoint extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCpuLoad(): number;
  setCpuLoad(value: number): void;

  getMemoryLoad(): number;
  setMemoryLoad(value: number): void;

  getDiskUsage(): number;
  setDiskUsage(value: number): void;

  getLoadAvg1(): number;
  setLoadAvg1(value: number): void;

  getLoadAvg5(): number;
  setLoadAvg5(value: number): void;

  getNetworkRx(): number;
  setNetworkRx(value: number): void;

  getNetworkTx(): number;
  setNetworkTx(value: number): void;

  getAvailabilityProbability(): number;
  setAvailabilityProbability(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicForecastPoint.AsObject;
  static toObject(includeInstance: boolean, msg: PublicForecastPoint): PublicForecastPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicForecastPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicForecastPoint;
  static deserializeBinaryFromReader(message: PublicForecastPoint, reader: jspb.BinaryReader): PublicForecastPoint;
}

export namespace PublicForecastPoint {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cpuLoad: number,
    memoryLoad: number,
    diskUsage: number,
    loadAvg1: number,
    loadAvg5: number,
    networkRx: number,
    networkTx: number,
    availabilityProbability: number,
    status: string,
  }
}

