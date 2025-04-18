// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file proto/public-api/public-auth.proto (package public_api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetUserRequest, GetUserResponse, LoginRequest, LoginResponse, RefreshRequest, RefreshResponse, RegisterRequest, RegisterResponse } from "./public-auth_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service public_api.PublicAuth
 */
export const PublicAuth = {
  typeName: "public_api.PublicAuth",
  methods: {
    /**
     * @generated from rpc public_api.PublicAuth.Register
     */
    register: {
      name: "Register",
      I: RegisterRequest,
      O: RegisterResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc public_api.PublicAuth.Login
     */
    login: {
      name: "Login",
      I: LoginRequest,
      O: LoginResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc public_api.PublicAuth.Refresh
     */
    refresh: {
      name: "Refresh",
      I: RefreshRequest,
      O: RefreshResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc public_api.PublicAuth.GetUser
     */
    getUser: {
      name: "GetUser",
      I: GetUserRequest,
      O: GetUserResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

