import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class PublicForecastRequest extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): PublicForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicForecastRequest): PublicForecastRequest.AsObject;
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
  setServerId(value: string): PublicForecastResponse;

  getForecastsList(): Array<PublicForecastPoint>;
  setForecastsList(value: Array<PublicForecastPoint>): PublicForecastResponse;
  clearForecastsList(): PublicForecastResponse;
  addForecasts(value?: PublicForecastPoint, index?: number): PublicForecastPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublicForecastResponse): PublicForecastResponse.AsObject;
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
  setServerId(value: string): PublicForecastStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicForecastStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicForecastStreamRequest): PublicForecastStreamRequest.AsObject;
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
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): PublicForecastPoint;
  hasTimestamp(): boolean;
  clearTimestamp(): PublicForecastPoint;

  getCpuLoad(): number;
  setCpuLoad(value: number): PublicForecastPoint;

  getMemoryLoad(): number;
  setMemoryLoad(value: number): PublicForecastPoint;

  getDiskUsage(): number;
  setDiskUsage(value: number): PublicForecastPoint;

  getLoadAvg1(): number;
  setLoadAvg1(value: number): PublicForecastPoint;

  getLoadAvg5(): number;
  setLoadAvg5(value: number): PublicForecastPoint;

  getNetworkRx(): number;
  setNetworkRx(value: number): PublicForecastPoint;

  getNetworkTx(): number;
  setNetworkTx(value: number): PublicForecastPoint;

  getAvailabilityProbability(): number;
  setAvailabilityProbability(value: number): PublicForecastPoint;

  getStatus(): string;
  setStatus(value: string): PublicForecastPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicForecastPoint.AsObject;
  static toObject(includeInstance: boolean, msg: PublicForecastPoint): PublicForecastPoint.AsObject;
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

