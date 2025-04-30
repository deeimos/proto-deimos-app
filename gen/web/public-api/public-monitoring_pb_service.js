// package: public_api
// file: public-api/public-monitoring.proto

var public_api_public_monitoring_pb = require("../public-api/public-monitoring_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PublicMonitoring = (function () {
  function PublicMonitoring() {}
  PublicMonitoring.serviceName = "public_api.PublicMonitoring";
  return PublicMonitoring;
}());

PublicMonitoring.StreamServerMetrics = {
  methodName: "StreamServerMetrics",
  service: PublicMonitoring,
  requestStream: false,
  responseStream: true,
  requestType: public_api_public_monitoring_pb.PublicServerMetricsRequest,
  responseType: public_api_public_monitoring_pb.PublicServerMetric
};

exports.PublicMonitoring = PublicMonitoring;

function PublicMonitoringClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PublicMonitoringClient.prototype.streamServerMetrics = function streamServerMetrics(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PublicMonitoring.StreamServerMetrics, {
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

exports.PublicMonitoringClient = PublicMonitoringClient;

