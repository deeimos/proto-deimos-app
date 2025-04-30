// package: public_api
// file: public-api/public-forecast.proto

var public_api_public_forecast_pb = require("../public-api/public-forecast_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PublicForecast = (function () {
  function PublicForecast() {}
  PublicForecast.serviceName = "public_api.PublicForecast";
  return PublicForecast;
}());

PublicForecast.ServerForecast = {
  methodName: "ServerForecast",
  service: PublicForecast,
  requestStream: false,
  responseStream: false,
  requestType: public_api_public_forecast_pb.PublicForecastRequest,
  responseType: public_api_public_forecast_pb.PublicForecastResponse
};

PublicForecast.StreamServerForecast = {
  methodName: "StreamServerForecast",
  service: PublicForecast,
  requestStream: false,
  responseStream: true,
  requestType: public_api_public_forecast_pb.PublicForecastStreamRequest,
  responseType: public_api_public_forecast_pb.PublicForecastPoint
};

exports.PublicForecast = PublicForecast;

function PublicForecastClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PublicForecastClient.prototype.serverForecast = function serverForecast(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublicForecast.ServerForecast, {
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

PublicForecastClient.prototype.streamServerForecast = function streamServerForecast(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PublicForecast.StreamServerForecast, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.PublicForecastClient = PublicForecastClient;

