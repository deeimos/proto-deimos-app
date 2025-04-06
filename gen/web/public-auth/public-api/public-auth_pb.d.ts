import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class RegisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    name: string,
    email: string,
    password: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getId(): string;
  setId(value: string): RegisterResponse;

  getEmail(): string;
  setEmail(value: string): RegisterResponse;

  getName(): string;
  setName(value: string): RegisterResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RegisterResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): RegisterResponse;

  getToken(): string;
  setToken(value: string): RegisterResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    id: string,
    email: string,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    token: string,
    refreshToken: string,
  }
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getId(): string;
  setId(value: string): LoginResponse;

  getEmail(): string;
  setEmail(value: string): LoginResponse;

  getName(): string;
  setName(value: string): LoginResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LoginResponse;

  getToken(): string;
  setToken(value: string): LoginResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    id: string,
    email: string,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    token: string,
    refreshToken: string,
  }
}

export class RefreshRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshRequest): RefreshRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshRequest;
  static deserializeBinaryFromReader(message: RefreshRequest, reader: jspb.BinaryReader): RefreshRequest;
}

export namespace RefreshRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

export class RefreshResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): RefreshResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshResponse): RefreshResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshResponse;
  static deserializeBinaryFromReader(message: RefreshResponse, reader: jspb.BinaryReader): RefreshResponse;
}

export namespace RefreshResponse {
  export type AsObject = {
    token: string,
    refreshToken: string,
  }
}

export class GetUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetUserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserResponse;

  getName(): string;
  setName(value: string): GetUserResponse;

  getEmail(): string;
  setEmail(value: string): GetUserResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetUserResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

