// package: public_api
// file: public-api/public-servers.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateServerRequest extends jspb.Message {
  getEncryptedIp(): string;
  setEncryptedIp(value: string): void;

  getEncryptedPort(): string;
  setEncryptedPort(value: string): void;

  getEncryptedDisplayName(): string;
  setEncryptedDisplayName(value: string): void;

  getIsMonitoringEnabled(): boolean;
  setIsMonitoringEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerRequest): CreateServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerRequest;
  static deserializeBinaryFromReader(message: CreateServerRequest, reader: jspb.BinaryReader): CreateServerRequest;
}

export namespace CreateServerRequest {
  export type AsObject = {
    encryptedIp: string,
    encryptedPort: string,
    encryptedDisplayName: string,
    isMonitoringEnabled: boolean,
  }
}

export class CreateServerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerResponse): CreateServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setId(value: string): void;

  getEncryptedIp(): string;
  setEncryptedIp(value: string): void;

  getEncryptedPort(): string;
  setEncryptedPort(value: string): void;

  getEncryptedDisplayName(): string;
  setEncryptedDisplayName(value: string): void;

  getIsMonitoringEnabled(): boolean;
  setIsMonitoringEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerRequest): UpdateServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    isMonitoringEnabled: boolean,
  }
}

export class UpdateServerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerResponse): UpdateServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerRequest): GetServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setId(value: string): void;

  getEncryptedIp(): string;
  setEncryptedIp(value: string): void;

  getEncryptedPort(): string;
  setEncryptedPort(value: string): void;

  getEncryptedDisplayName(): string;
  setEncryptedDisplayName(value: string): void;

  getIsMonitoringEnabled(): boolean;
  setIsMonitoringEnabled(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerResponse): GetServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    isMonitoringEnabled: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetServersListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServersListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServersListRequest): GetServersListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServersListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServersListRequest;
  static deserializeBinaryFromReader(message: GetServersListRequest, reader: jspb.BinaryReader): GetServersListRequest;
}

export namespace GetServersListRequest {
  export type AsObject = {
  }
}

export class GetServersListResponse extends jspb.Message {
  clearServersList(): void;
  getServersList(): Array<GetServerResponse>;
  setServersList(value: Array<GetServerResponse>): void;
  addServers(value?: GetServerResponse, index?: number): GetServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServersListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServersListResponse): GetServersListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServersListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServersListResponse;
  static deserializeBinaryFromReader(message: GetServersListResponse, reader: jspb.BinaryReader): GetServersListResponse;
}

export namespace GetServersListResponse {
  export type AsObject = {
    serversList: Array<GetServerResponse.AsObject>,
  }
}

export class DeleteServerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerRequest): DeleteServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerRequest;
  static deserializeBinaryFromReader(message: DeleteServerRequest, reader: jspb.BinaryReader): DeleteServerRequest;
}

export namespace DeleteServerRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteServerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerResponse): DeleteServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerResponse;
  static deserializeBinaryFromReader(message: DeleteServerResponse, reader: jspb.BinaryReader): DeleteServerResponse;
}

export namespace DeleteServerResponse {
  export type AsObject = {
    id: string,
  }
}

