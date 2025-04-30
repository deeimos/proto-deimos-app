// package: public_api
// file: public-api/public-auth.proto

var public_api_public_auth_pb = require("../public-api/public-auth_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PublicAuth = (function () {
  function PublicAuth() {}
  PublicAuth.serviceName = "public_api.PublicAuth";
  return PublicAuth;
}());

PublicAuth.Register = {
  methodName: "Register",
  service: PublicAuth,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_auth_pb.RegisterRequest,
  responseType: public_api_public_auth_pb.RegisterResponse
};

PublicAuth.Login = {
  methodName: "Login",
  service: PublicAuth,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_auth_pb.LoginRequest,
  responseType: public_api_public_auth_pb.LoginResponse
};

PublicAuth.Refresh = {
  methodName: "Refresh",
  service: PublicAuth,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_auth_pb.RefreshRequest,
  responseType: public_api_public_auth_pb.RefreshResponse
};

PublicAuth.GetUser = {
  methodName: "GetUser",
  service: PublicAuth,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_auth_pb.GetUserRequest,
  responseType: public_api_public_auth_pb.GetUserResponse
};

exports.PublicAuth = PublicAuth;

function PublicAuthClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PublicAuthClient.prototype.register = function register(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicAuth.Register, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PublicAuthClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicAuth.Login, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PublicAuthClient.prototype.refresh = function refresh(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicAuth.Refresh, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

PublicAuthClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicAuth.GetUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.PublicAuthClient = PublicAuthClient;

