import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class CreateServerRequest extends jspb.Message {
  getEncryptedIp(): string;
  setEncryptedIp(value: string): CreateServerRequest;

  getEncryptedPort(): string;
  setEncryptedPort(value: string): CreateServerRequest;

  getEncryptedDisplayName(): string;
  setEncryptedDisplayName(value: string): CreateServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerRequest): CreateServerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerRequest;
  static deserializeBinaryFromReader(message: CreateServerRequest, reader: jspb.BinaryReader): CreateServerRequest;
}

export namespace CreateServerRequest {
  export type AsObject = {
    encryptedIp: string,
    encryptedPort: string,
    encryptedDisplayName: string,
  }
}

export class CreateServerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerResponse): CreateServerResponse.AsObject;
  static serializeBinaryToWriter(message: CreateServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerResponse;
  static deserializeBinaryFromReader(message: CreateServerResponse, reader: jspb.BinaryReader): CreateServerResponse;
}

export namespace CreateServerResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateServerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateServerRequest;

  getEncryptedIp(): string;
  setEncryptedIp(value: string): UpdateServerRequest;

  getEncryptedPort(): string;
  setEncryptedPort(value: string): UpdateServerRequest;

  getEncryptedDisplayName(): string;
  setEncryptedDisplayName(value: string): UpdateServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerRequest): UpdateServerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerRequest;
  static deserializeBinaryFromReader(message: UpdateServerRequest, reader: jspb.BinaryReader): UpdateServerRequest;
}

export namespace UpdateServerRequest {
  export type AsObject = {
    id: string,
    encryptedIp: string,
    encryptedPort: string,
    encryptedDisplayName: string,
  }
}

export class UpdateServerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerResponse): UpdateServerResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerResponse;
  static deserializeBinaryFromReader(message: UpdateServerResponse, reader: jspb.BinaryReader): UpdateServerResponse;
}

export namespace UpdateServerResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetServerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerRequest): GetServerRequest.AsObject;
  static serializeBinaryToWriter(message: GetServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerRequest;
  static deserializeBinaryFromReader(message: GetServerRequest, reader: jspb.BinaryReader): GetServerRequest;
}

export namespace GetServerRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetServerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetServerResponse;

  getEncryptedIp(): string;
  setEncryptedIp(value: string): GetServerResponse;

  getEncryptedPort(): string;
  setEncryptedPort(value: string): GetServerResponse;

  getEncryptedDisplayName(): string;
  setEncryptedDisplayName(value: string): GetServerResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetServerResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GetServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerResponse): GetServerResponse.AsObject;
  static serializeBinaryToWriter(message: GetServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerResponse;
  static deserializeBinaryFromReader(message: GetServerResponse, reader: jspb.BinaryReader): GetServerResponse;
}

export namespace GetServerResponse {
  export type AsObject = {
    id: string,
    encryptedIp: string,
    encryptedPort: string,
    encryptedDisplayName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetServersListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServersListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServersListRequest): GetServersListRequest.AsObject;
  static serializeBinaryToWriter(message: GetServersListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServersListRequest;
  static deserializeBinaryFromReader(message: GetServersListRequest, reader: jspb.BinaryReader): GetServersListRequest;
}

export namespace GetServersListRequest {
  export type AsObject = {
  }
}

export class GetServersListResponse extends jspb.Message {
  getServersList(): Array<ServerSummary>;
  setServersList(value: Array<ServerSummary>): GetServersListResponse;
  clearServersList(): GetServersListResponse;
  addServers(value?: ServerSummary, index?: number): ServerSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServersListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServersListResponse): GetServersListResponse.AsObject;
  static serializeBinaryToWriter(message: GetServersListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServersListResponse;
  static deserializeBinaryFromReader(message: GetServersListResponse, reader: jspb.BinaryReader): GetServersListResponse;
}

export namespace GetServersListResponse {
  export type AsObject = {
    serversList: Array<ServerSummary.AsObject>,
  }
}

export class ServerSummary extends jspb.Message {
  getId(): string;
  setId(value: string): ServerSummary;

  getEncryptedDisplayName(): string;
  setEncryptedDisplayName(value: string): ServerSummary;

  getEncryptedIp(): string;
  setEncryptedIp(value: string): ServerSummary;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ServerSummary;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ServerSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ServerSummary): ServerSummary.AsObject;
  static serializeBinaryToWriter(message: ServerSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerSummary;
  static deserializeBinaryFromReader(message: ServerSummary, reader: jspb.BinaryReader): ServerSummary;
}

export namespace ServerSummary {
  export type AsObject = {
    id: string,
    encryptedDisplayName: string,
    encryptedIp: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

