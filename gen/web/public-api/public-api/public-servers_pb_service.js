// package: public_api
// file: public-api/public-servers.proto

var public_api_public_servers_pb = require("../public-api/public-servers_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PublicServers = (function () {
  function PublicServers() {}
  PublicServers.serviceName = "public_api.PublicServers";
  return PublicServers;
}());

PublicServers.CreateServer = {
  methodName: "CreateServer",
  service: PublicServers,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_servers_pb.CreateServerRequest,
  responseType: public_api_public_servers_pb.CreateServerResponse
};

PublicServers.UpdateServer = {
  methodName: "UpdateServer",
  service: PublicServers,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_servers_pb.UpdateServerRequest,
  responseType: public_api_public_servers_pb.UpdateServerResponse
};

PublicServers.GetServer = {
  methodName: "GetServer",
  service: PublicServers,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_servers_pb.GetServerRequest,
  responseType: public_api_public_servers_pb.GetServerResponse
};

PublicServers.DeleteServer = {
  methodName: "DeleteServer",
  service: PublicServers,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_servers_pb.DeleteServerRequest,
  responseType: public_api_public_servers_pb.DeleteServerResponse
};

PublicServers.GetServersList = {
  methodName: "GetServersList",
  service: PublicServers,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_servers_pb.GetServersListRequest,
  responseType: public_api_public_servers_pb.GetServersListResponse
};

exports.PublicServers = PublicServers;

function PublicServersClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PublicServersClient.prototype.createServer = function createServer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicServers.CreateServer, {
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

PublicServersClient.prototype.updateServer = function updateServer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicServers.UpdateServer, {
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

PublicServersClient.prototype.getServer = function getServer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicServers.GetServer, {
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

PublicServersClient.prototype.deleteServer = function deleteServer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicServers.DeleteServer, {
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

PublicServersClient.prototype.getServersList = function getServersList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicServers.GetServersList, {
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

exports.PublicServersClient = PublicServersClient;

