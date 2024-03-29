/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../deps/phoenix/priv/static/phoenix.js":
/*!**********************************************!*\
  !*** ../deps/phoenix/priv/static/phoenix.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var o = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
      return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    (function (t) {
      e.exports = t.Phoenix = n(2);
    }).call(this, n(1));
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function i(e) {
      return function (e) {
        if (Array.isArray(e)) return a(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || s(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    function r(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            i = !0,
            o = !1,
            r = void 0;

        try {
          for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
        } catch (e) {
          o = !0, r = e;
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (o) throw r;
          }
        }

        return n;
      }(e, t) || s(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function s(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

      return i;
    }

    function c(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function h(e, t, n) {
      return t && u(e.prototype, t), n && u(e, n), e;
    }

    n.r(t), n.d(t, "Channel", function () {
      return A;
    }), n.d(t, "Serializer", function () {
      return M;
    }), n.d(t, "Socket", function () {
      return J;
    }), n.d(t, "LongPoll", function () {
      return H;
    }), n.d(t, "Ajax", function () {
      return D;
    }), n.d(t, "Presence", function () {
      return B;
    });

    var l = "undefined" != typeof self ? self : null,
        f = "undefined" != typeof window ? window : null,
        d = l || f || void 0,
        p = 0,
        v = 1,
        y = 2,
        m = 3,
        g = "closed",
        k = "errored",
        b = "joined",
        j = "joining",
        C = "leaving",
        R = "phx_close",
        S = "phx_error",
        T = "phx_join",
        w = "phx_reply",
        E = "phx_leave",
        x = [R, S, T, w, E],
        O = "longpoll",
        P = "websocket",
        L = function (e) {
      if ("function" == typeof e) return e;
      return function () {
        return e;
      };
    },
        _ = function () {
      function e(t, n, i, o) {
        c(this, e), this.channel = t, this.event = n, this.payload = i || function () {
          return {};
        }, this.receivedResp = null, this.timeout = o, this.timeoutTimer = null, this.recHooks = [], this.sent = !1;
      }

      return h(e, [{
        key: "resend",
        value: function (e) {
          this.timeout = e, this.reset(), this.send();
        }
      }, {
        key: "send",
        value: function () {
          this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef()
          }));
        }
      }, {
        key: "receive",
        value: function (e, t) {
          return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({
            status: e,
            callback: t
          }), this;
        }
      }, {
        key: "reset",
        value: function () {
          this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
        }
      }, {
        key: "matchReceive",
        value: function (e) {
          var t = e.status,
              n = e.response;
          e.ref;
          this.recHooks.filter(function (e) {
            return e.status === t;
          }).forEach(function (e) {
            return e.callback(n);
          });
        }
      }, {
        key: "cancelRefEvent",
        value: function () {
          this.refEvent && this.channel.off(this.refEvent);
        }
      }, {
        key: "cancelTimeout",
        value: function () {
          clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
        }
      }, {
        key: "startTimeout",
        value: function () {
          var e = this;
          this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function (t) {
            e.cancelRefEvent(), e.cancelTimeout(), e.receivedResp = t, e.matchReceive(t);
          }), this.timeoutTimer = setTimeout(function () {
            e.trigger("timeout", {});
          }, this.timeout);
        }
      }, {
        key: "hasReceived",
        value: function (e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }, {
        key: "trigger",
        value: function (e, t) {
          this.channel.trigger(this.refEvent, {
            status: e,
            response: t
          });
        }
      }]), e;
    }(),
        A = function () {
      function e(t, n, i) {
        var o = this;
        c(this, e), this.state = g, this.topic = t, this.params = L(n || {}), this.socket = i, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new _(this, T, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new I(function () {
          o.socket.isConnected() && o.rejoin();
        }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function () {
          return o.rejoinTimer.reset();
        })), this.stateChangeRefs.push(this.socket.onOpen(function () {
          o.rejoinTimer.reset(), o.isErrored() && o.rejoin();
        })), this.joinPush.receive("ok", function () {
          o.state = b, o.rejoinTimer.reset(), o.pushBuffer.forEach(function (e) {
            return e.send();
          }), o.pushBuffer = [];
        }), this.joinPush.receive("error", function () {
          o.state = k, o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.onClose(function () {
          o.rejoinTimer.reset(), o.socket.hasLogger() && o.socket.log("channel", "close ".concat(o.topic, " ").concat(o.joinRef())), o.state = g, o.socket.remove(o);
        }), this.onError(function (e) {
          o.socket.hasLogger() && o.socket.log("channel", "error ".concat(o.topic), e), o.isJoining() && o.joinPush.reset(), o.state = k, o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.joinPush.receive("timeout", function () {
          o.socket.hasLogger() && o.socket.log("channel", "timeout ".concat(o.topic, " (").concat(o.joinRef(), ")"), o.joinPush.timeout), new _(o, E, L({}), o.timeout).send(), o.state = k, o.joinPush.reset(), o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.on(w, function (e, t) {
          o.trigger(o.replyEventName(t), e);
        });
      }

      return h(e, [{
        key: "join",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
          return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush;
        }
      }, {
        key: "onClose",
        value: function (e) {
          this.on(R, e);
        }
      }, {
        key: "onError",
        value: function (e) {
          return this.on(S, function (t) {
            return e(t);
          });
        }
      }, {
        key: "on",
        value: function (e, t) {
          var n = this.bindingRef++;
          return this.bindings.push({
            event: e,
            ref: n,
            callback: t
          }), n;
        }
      }, {
        key: "off",
        value: function (e, t) {
          this.bindings = this.bindings.filter(function (n) {
            return !(n.event === e && (void 0 === t || t === n.ref));
          });
        }
      }, {
        key: "canPush",
        value: function () {
          return this.socket.isConnected() && this.isJoined();
        }
      }, {
        key: "push",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.timeout;
          if (!this.joinedOnce) throw new Error("tried to push '".concat(e, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
          var i = new _(this, e, function () {
            return t;
          }, n);
          return this.canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i;
        }
      }, {
        key: "leave",
        value: function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = C;

          var n = function () {
            e.socket.hasLogger() && e.socket.log("channel", "leave ".concat(e.topic)), e.trigger(R, "leave");
          },
              i = new _(this, E, L({}), t);

          return i.receive("ok", function () {
            return n();
          }).receive("timeout", function () {
            return n();
          }), i.send(), this.canPush() || i.trigger("ok", {}), i;
        }
      }, {
        key: "onMessage",
        value: function (e, t, n) {
          return t;
        }
      }, {
        key: "isLifecycleEvent",
        value: function (e) {
          return x.indexOf(e) >= 0;
        }
      }, {
        key: "isMember",
        value: function (e, t, n, i) {
          return this.topic === e && (!i || i === this.joinRef() || !this.isLifecycleEvent(t) || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
            topic: e,
            event: t,
            payload: n,
            joinRef: i
          }), !1));
        }
      }, {
        key: "joinRef",
        value: function () {
          return this.joinPush.ref;
        }
      }, {
        key: "rejoin",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e));
        }
      }, {
        key: "trigger",
        value: function (e, t, n, i) {
          var o = this.onMessage(e, t, n, i);
          if (t && !o) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");

          for (var r = this.bindings.filter(function (t) {
            return t.event === e;
          }), s = 0; s < r.length; s++) {
            r[s].callback(o, n, i || this.joinRef());
          }
        }
      }, {
        key: "replyEventName",
        value: function (e) {
          return "chan_reply_".concat(e);
        }
      }, {
        key: "isClosed",
        value: function () {
          return this.state === g;
        }
      }, {
        key: "isErrored",
        value: function () {
          return this.state === k;
        }
      }, {
        key: "isJoined",
        value: function () {
          return this.state === b;
        }
      }, {
        key: "isJoining",
        value: function () {
          return this.state === j;
        }
      }, {
        key: "isLeaving",
        value: function () {
          return this.state === C;
        }
      }]), e;
    }(),
        M = {
      encode: function (e, t) {
        var n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(n));
      },
      decode: function (e, t) {
        var n = r(JSON.parse(e), 5);
        return t({
          join_ref: n[0],
          ref: n[1],
          topic: n[2],
          event: n[3],
          payload: n[4]
        });
      }
    },
        J = function () {
      function e(t) {
        var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, e), this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: []
        }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i.timeout || 1e4, this.transport = i.transport || d.WebSocket || H, this.defaultEncoder = M.encode, this.defaultDecoder = M.decode, this.closeWasClean = !1, this.unloaded = !1, this.binaryType = i.binaryType || "arraybuffer", this.transport !== H ? (this.encode = i.encode || this.defaultEncoder, this.decode = i.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f && f.addEventListener && f.addEventListener("unload", function (e) {
          n.conn && (n.unloaded = !0, n.abnormalClose("unloaded"));
        }), this.heartbeatIntervalMs = i.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function (e) {
          return i.rejoinAfterMs ? i.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4;
        }, this.reconnectAfterMs = function (e) {
          return n.unloaded ? 100 : i.reconnectAfterMs ? i.reconnectAfterMs(e) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3;
        }, this.logger = i.logger || null, this.longpollerTimeout = i.longpollerTimeout || 2e4, this.params = L(i.params || {}), this.endPoint = "".concat(t, "/").concat(P), this.vsn = i.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new I(function () {
          n.teardown(function () {
            return n.connect();
          });
        }, this.reconnectAfterMs);
      }

      return h(e, [{
        key: "protocol",
        value: function () {
          return location.protocol.match(/^https/) ? "wss" : "ws";
        }
      }, {
        key: "endPointURL",
        value: function () {
          var e = D.appendParams(D.appendParams(this.endPoint, this.params()), {
            vsn: this.vsn
          });
          return "/" !== e.charAt(0) ? e : "/" === e.charAt(1) ? "".concat(this.protocol(), ":").concat(e) : "".concat(this.protocol(), "://").concat(location.host).concat(e);
        }
      }, {
        key: "disconnect",
        value: function (e, t, n) {
          this.closeWasClean = !0, this.reconnectTimer.reset(), this.teardown(e, t, n);
        }
      }, {
        key: "connect",
        value: function (e) {
          var t = this;
          e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = L(e)), this.conn || (this.closeWasClean = !1, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function () {
            return t.onConnOpen();
          }, this.conn.onerror = function (e) {
            return t.onConnError(e);
          }, this.conn.onmessage = function (e) {
            return t.onConnMessage(e);
          }, this.conn.onclose = function (e) {
            return t.onConnClose(e);
          });
        }
      }, {
        key: "log",
        value: function (e, t, n) {
          this.logger(e, t, n);
        }
      }, {
        key: "hasLogger",
        value: function () {
          return null !== this.logger;
        }
      }, {
        key: "onOpen",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.open.push([t, e]), t;
        }
      }, {
        key: "onClose",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.close.push([t, e]), t;
        }
      }, {
        key: "onError",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.error.push([t, e]), t;
        }
      }, {
        key: "onMessage",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.message.push([t, e]), t;
        }
      }, {
        key: "onConnOpen",
        value: function () {
          this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = !1, this.closeWasClean = !1, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function (e) {
            return (0, r(e, 2)[1])();
          });
        }
      }, {
        key: "resetHeartbeat",
        value: function () {
          var e = this;
          this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function () {
            return e.sendHeartbeat();
          }, this.heartbeatIntervalMs));
        }
      }, {
        key: "teardown",
        value: function (e, t, n) {
          var i = this;
          if (!this.conn) return e && e();
          this.waitForBufferDone(function () {
            i.conn && (t ? i.conn.close(t, n || "") : i.conn.close()), i.waitForSocketClosed(function () {
              i.conn && (i.conn.onclose = function () {}, i.conn = null), e && e();
            });
          });
        }
      }, {
        key: "waitForBufferDone",
        value: function (e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          5 === n || !this.conn || this.conn.bufferedAmount && 0 === this.conn.bufferedAmount ? e() : setTimeout(function () {
            t.waitForBufferDone(e, n + 1);
          }, 150 * n);
        }
      }, {
        key: "waitForSocketClosed",
        value: function (e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          5 !== n && this.conn && this.conn.readyState !== m ? setTimeout(function () {
            t.waitForSocketClosed(e, n + 1);
          }, 150 * n) : e();
        }
      }, {
        key: "onConnClose",
        value: function (e) {
          this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function (t) {
            return (0, r(t, 2)[1])(e);
          });
        }
      }, {
        key: "onConnError",
        value: function (e) {
          this.hasLogger() && this.log("transport", e), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function (t) {
            return (0, r(t, 2)[1])(e);
          });
        }
      }, {
        key: "triggerChanError",
        value: function () {
          this.channels.forEach(function (e) {
            e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(S);
          });
        }
      }, {
        key: "connectionState",
        value: function () {
          switch (this.conn && this.conn.readyState) {
            case p:
              return "connecting";

            case v:
              return "open";

            case y:
              return "closing";

            default:
              return "closed";
          }
        }
      }, {
        key: "isConnected",
        value: function () {
          return "open" === this.connectionState();
        }
      }, {
        key: "remove",
        value: function (e) {
          this.off(e.stateChangeRefs), this.channels = this.channels.filter(function (t) {
            return t.joinRef() !== e.joinRef();
          });
        }
      }, {
        key: "off",
        value: function (e) {
          for (var t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(function (t) {
            var n = r(t, 1)[0];
            return -1 === e.indexOf(n);
          });
        }
      }, {
        key: "channel",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = new A(e, t, this);
          return this.channels.push(n), n;
        }
      }, {
        key: "push",
        value: function (e) {
          var t = this;

          if (this.hasLogger()) {
            var n = e.topic,
                i = e.event,
                o = e.payload,
                r = e.ref,
                s = e.join_ref;
            this.log("push", "".concat(n, " ").concat(i, " (").concat(s, ", ").concat(r, ")"), o);
          }

          this.isConnected() ? this.encode(e, function (e) {
            return t.conn.send(e);
          }) : this.sendBuffer.push(function () {
            return t.encode(e, function (e) {
              return t.conn.send(e);
            });
          });
        }
      }, {
        key: "makeRef",
        value: function () {
          var e = this.ref + 1;
          return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
        }
      }, {
        key: "sendHeartbeat",
        value: function () {
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
            this.pendingHeartbeatRef = this.makeRef(), this.push({
              topic: "phoenix",
              event: "heartbeat",
              payload: {},
              ref: this.pendingHeartbeatRef
            });
          }
        }
      }, {
        key: "abnormalClose",
        value: function (e) {
          this.closeWasClean = !1, this.conn.close(1e3, e);
        }
      }, {
        key: "flushSendBuffer",
        value: function () {
          this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function (e) {
            return e();
          }), this.sendBuffer = []);
        }
      }, {
        key: "onConnMessage",
        value: function (e) {
          var t = this;
          this.decode(e.data, function (e) {
            var n = e.topic,
                i = e.event,
                o = e.payload,
                s = e.ref,
                a = e.join_ref;
            s && s === t.pendingHeartbeatRef && (t.pendingHeartbeatRef = null), t.hasLogger() && t.log("receive", "".concat(o.status || "", " ").concat(n, " ").concat(i, " ").concat(s && "(" + s + ")" || ""), o);

            for (var c = 0; c < t.channels.length; c++) {
              var u = t.channels[c];
              u.isMember(n, i, o, a) && u.trigger(i, o, s, a);
            }

            for (var h = 0; h < t.stateChangeCallbacks.message.length; h++) {
              (0, r(t.stateChangeCallbacks.message[h], 2)[1])(e);
            }
          });
        }
      }, {
        key: "leaveOpenTopic",
        value: function (e) {
          var t = this.channels.find(function (t) {
            return t.topic === e && (t.isJoined() || t.isJoining());
          });
          t && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e, '"')), t.leave());
        }
      }]), e;
    }(),
        H = function () {
      function e(t) {
        c(this, e), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.onopen = function () {}, this.onerror = function () {}, this.onmessage = function () {}, this.onclose = function () {}, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = p, this.poll();
      }

      return h(e, [{
        key: "normalizeEndpoint",
        value: function (e) {
          return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + P), "$1/" + O);
        }
      }, {
        key: "endpointURL",
        value: function () {
          return D.appendParams(this.pollEndpoint, {
            token: this.token
          });
        }
      }, {
        key: "closeAndRetry",
        value: function () {
          this.close(), this.readyState = p;
        }
      }, {
        key: "ontimeout",
        value: function () {
          this.onerror("timeout"), this.closeAndRetry();
        }
      }, {
        key: "poll",
        value: function () {
          var e = this;
          this.readyState !== v && this.readyState !== p || D.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function (t) {
            if (t) {
              var n = t.status,
                  i = t.token,
                  o = t.messages;
              e.token = i;
            } else n = 0;

            switch (n) {
              case 200:
                o.forEach(function (t) {
                  return e.onmessage({
                    data: t
                  });
                }), e.poll();
                break;

              case 204:
                e.poll();
                break;

              case 410:
                e.readyState = v, e.onopen(), e.poll();
                break;

              case 403:
                e.onerror(), e.close();
                break;

              case 0:
              case 500:
                e.onerror(), e.closeAndRetry();
                break;

              default:
                throw new Error("unhandled poll status ".concat(n));
            }
          });
        }
      }, {
        key: "send",
        value: function (e) {
          var t = this;
          D.request("POST", this.endpointURL(), "application/json", e, this.timeout, this.onerror.bind(this, "timeout"), function (e) {
            e && 200 === e.status || (t.onerror(e && e.status), t.closeAndRetry());
          });
        }
      }, {
        key: "close",
        value: function (e, t) {
          this.readyState = m, this.onclose();
        }
      }]), e;
    }(),
        D = function () {
      function e() {
        c(this, e);
      }

      return h(e, null, [{
        key: "request",
        value: function (e, t, n, i, o, r, s) {
          if (d.XDomainRequest) {
            var a = new XDomainRequest();
            this.xdomainRequest(a, e, t, i, o, r, s);
          } else {
            var c = new d.XMLHttpRequest();
            this.xhrRequest(c, e, t, n, i, o, r, s);
          }
        }
      }, {
        key: "xdomainRequest",
        value: function (e, t, n, i, o, r, s) {
          var a = this;
          e.timeout = o, e.open(t, n), e.onload = function () {
            var t = a.parseJSON(e.responseText);
            s && s(t);
          }, r && (e.ontimeout = r), e.onprogress = function () {}, e.send(i);
        }
      }, {
        key: "xhrRequest",
        value: function (e, t, n, i, o, r, s, a) {
          var c = this;
          e.open(t, n, !0), e.timeout = r, e.setRequestHeader("Content-Type", i), e.onerror = function () {
            a && a(null);
          }, e.onreadystatechange = function () {
            if (e.readyState === c.states.complete && a) {
              var t = c.parseJSON(e.responseText);
              a(t);
            }
          }, s && (e.ontimeout = s), e.send(o);
        }
      }, {
        key: "parseJSON",
        value: function (e) {
          if (!e || "" === e) return null;

          try {
            return JSON.parse(e);
          } catch (t) {
            return console && console.log("failed to parse JSON response", e), null;
          }
        }
      }, {
        key: "serialize",
        value: function (e, t) {
          var n = [];

          for (var i in e) if (e.hasOwnProperty(i)) {
            var r = t ? "".concat(t, "[").concat(i, "]") : i,
                s = e[i];
            "object" === o(s) ? n.push(this.serialize(s, r)) : n.push(encodeURIComponent(r) + "=" + encodeURIComponent(s));
          }

          return n.join("&");
        }
      }, {
        key: "appendParams",
        value: function (e, t) {
          if (0 === Object.keys(t).length) return e;
          var n = e.match(/\?/) ? "&" : "?";
          return "".concat(e).concat(n).concat(this.serialize(t));
        }
      }]), e;
    }();

    D.states = {
      complete: 4
    };

    var B = function () {
      function e(t) {
        var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, e);
        var o = i.events || {
          state: "presence_state",
          diff: "presence_diff"
        };
        this.state = {}, this.pendingDiffs = [], this.channel = t, this.joinRef = null, this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {}
        }, this.channel.on(o.state, function (t) {
          var i = n.caller,
              o = i.onJoin,
              r = i.onLeave,
              s = i.onSync;
          n.joinRef = n.channel.joinRef(), n.state = e.syncState(n.state, t, o, r), n.pendingDiffs.forEach(function (t) {
            n.state = e.syncDiff(n.state, t, o, r);
          }), n.pendingDiffs = [], s();
        }), this.channel.on(o.diff, function (t) {
          var i = n.caller,
              o = i.onJoin,
              r = i.onLeave,
              s = i.onSync;
          n.inPendingSyncState() ? n.pendingDiffs.push(t) : (n.state = e.syncDiff(n.state, t, o, r), s());
        });
      }

      return h(e, [{
        key: "onJoin",
        value: function (e) {
          this.caller.onJoin = e;
        }
      }, {
        key: "onLeave",
        value: function (e) {
          this.caller.onLeave = e;
        }
      }, {
        key: "onSync",
        value: function (e) {
          this.caller.onSync = e;
        }
      }, {
        key: "list",
        value: function (t) {
          return e.list(this.state, t);
        }
      }, {
        key: "inPendingSyncState",
        value: function () {
          return !this.joinRef || this.joinRef !== this.channel.joinRef();
        }
      }], [{
        key: "syncState",
        value: function (e, t, n, i) {
          var o = this,
              r = this.clone(e),
              s = {},
              a = {};
          return this.map(r, function (e, n) {
            t[e] || (a[e] = n);
          }), this.map(t, function (e, t) {
            var n = r[e];

            if (n) {
              var i = t.metas.map(function (e) {
                return e.phx_ref;
              }),
                  c = n.metas.map(function (e) {
                return e.phx_ref;
              }),
                  u = t.metas.filter(function (e) {
                return c.indexOf(e.phx_ref) < 0;
              }),
                  h = n.metas.filter(function (e) {
                return i.indexOf(e.phx_ref) < 0;
              });
              u.length > 0 && (s[e] = t, s[e].metas = u), h.length > 0 && (a[e] = o.clone(n), a[e].metas = h);
            } else s[e] = t;
          }), this.syncDiff(r, {
            joins: s,
            leaves: a
          }, n, i);
        }
      }, {
        key: "syncDiff",
        value: function (e, t, n, o) {
          var r = t.joins,
              s = t.leaves,
              a = this.clone(e);
          return n || (n = function () {}), o || (o = function () {}), this.map(r, function (e, t) {
            var o = a[e];

            if (a[e] = t, o) {
              var r,
                  s = a[e].metas.map(function (e) {
                return e.phx_ref;
              }),
                  c = o.metas.filter(function (e) {
                return s.indexOf(e.phx_ref) < 0;
              });
              (r = a[e].metas).unshift.apply(r, i(c));
            }

            n(e, o, t);
          }), this.map(s, function (e, t) {
            var n = a[e];

            if (n) {
              var i = t.metas.map(function (e) {
                return e.phx_ref;
              });
              n.metas = n.metas.filter(function (e) {
                return i.indexOf(e.phx_ref) < 0;
              }), o(e, n, t), 0 === n.metas.length && delete a[e];
            }
          }), a;
        }
      }, {
        key: "list",
        value: function (e, t) {
          return t || (t = function (e, t) {
            return t;
          }), this.map(e, function (e, n) {
            return t(e, n);
          });
        }
      }, {
        key: "map",
        value: function (e, t) {
          return Object.getOwnPropertyNames(e).map(function (n) {
            return t(n, e[n]);
          });
        }
      }, {
        key: "clone",
        value: function (e) {
          return JSON.parse(JSON.stringify(e));
        }
      }]), e;
    }(),
        I = function () {
      function e(t, n) {
        c(this, e), this.callback = t, this.timerCalc = n, this.timer = null, this.tries = 0;
      }

      return h(e, [{
        key: "reset",
        value: function () {
          this.tries = 0, clearTimeout(this.timer);
        }
      }, {
        key: "scheduleTimeout",
        value: function () {
          var e = this;
          clearTimeout(this.timer), this.timer = setTimeout(function () {
            e.tries = e.tries + 1, e.callback();
          }, this.timerCalc(this.tries + 1));
        }
      }]), e;
    }();
  }]);
});

/***/ }),

/***/ "../deps/phoenix_html/priv/static/phoenix_html.js":
/*!********************************************************!*\
  !*** ../deps/phoenix_html/priv/static/phoenix_html.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var PolyfillEvent = eventConstructor();

  function eventConstructor() {
    if (typeof window.CustomEvent === "function") return window.CustomEvent; // IE<=9 Support

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    return CustomEvent;
  }

  function buildHiddenInput(name, value) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  }

  function handleClick(element) {
    var to = element.getAttribute("data-to"),
        method = buildHiddenInput("_method", element.getAttribute("data-method")),
        csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")),
        form = document.createElement("form"),
        target = element.getAttribute("target");
    form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
    form.action = to;
    form.style.display = "hidden";
    if (target) form.target = target;
    form.appendChild(csrf);
    form.appendChild(method);
    document.body.appendChild(form);
    form.submit();
  }

  window.addEventListener("click", function (e) {
    var element = e.target;

    while (element && element.getAttribute) {
      var phoenixLinkEvent = new PolyfillEvent('phoenix.link.click', {
        "bubbles": true,
        "cancelable": true
      });

      if (!element.dispatchEvent(phoenixLinkEvent)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }

      if (element.getAttribute("data-method")) {
        handleClick(element);
        e.preventDefault();
        return false;
      } else {
        element = element.parentNode;
      }
    }
  }, false);
  window.addEventListener('phoenix.link.click', function (e) {
    var message = e.target.getAttribute("data-confirm");

    if (message && !window.confirm(message)) {
      e.preventDefault();
    }
  }, false);
})();

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ "./js/socket.js");
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phoenix_html */ "../deps/phoenix_html/priv/static/phoenix_html.js");
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phoenix_html__WEBPACK_IMPORTED_MODULE_1__);
// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
// import "../css/app.scss"
// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
// import {Socket} from "phoenix"



/***/ }),

/***/ "./js/socket.js":
/*!**********************!*\
  !*** ./js/socket.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phoenix */ "../deps/phoenix/priv/static/phoenix.js");
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phoenix__WEBPACK_IMPORTED_MODULE_0__);
// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "assets/js/app.js".
// To use Phoenix channels, the first step is to import Socket,
// and connect at the socket path in "lib/web/endpoint.ex".
//
// Pass the token on params as below. Or remove it
// from the params if you are not using authentication.

var secretValue = Math.random().toString(36).slice(-12);
var userAgent = window.navigator.userAgent;
var socket = new phoenix__WEBPACK_IMPORTED_MODULE_0__["Socket"]("/socket", {
  params: {
    token: window.userToken,
    secret_value: secretValue,
    userAgent: userAgent
  }
}); // When you connect, you'll often need to authenticate the client.
// For example, imagine you have an authentication plug, `MyAuth`,
// which authenticates the session and assigns a `:current_user`.
// If the current user exists you can assign the user's token in
// the connection for use in the layout.
//
// In your "lib/web/router.ex":
//
//     pipeline :browser do
//       ...
//       plug MyAuth
//       plug :put_user_token
//     end
//
//     defp put_user_token(conn, _) do
//       if current_user = conn.assigns[:current_user] do
//         token = Phoenix.Token.sign(conn, "user socket", current_user.id)
//         assign(conn, :user_token, token)
//       else
//         conn
//       end
//     end
//
// Now you need to pass this token to JavaScript. You can do so
// inside a script tag in "lib/web/templates/layout/app.html.eex":
//
//     <script>window.userToken = "<%= assigns[:user_token] %>";</script>
//
// You will need to verify the user token in the "connect/3" function
// in "lib/web/channels/user_socket.ex":
//
// def connect(%{"token" => token}, socket, _connect_info) do
//   # max_age: 1209600 is equivalent to two weeks in seconds
//   case Phoenix.Token.verify(socket, "user socket", token, max_age: 1209600) do
//     {:ok, user_id} ->
//       {:ok, assign(socket, :user, user_id)}
//     {:error, reason} ->
//       :error
//   end
// end
//
// Finally, connect to the socket:

socket.connect(); // Now that you are connected, you can join channels with a topic:

var lobby_channel = socket.channel("room:lobby", {});
var own_channel = socket.channel("room:" + secretValue, {});
var chatInput = document.querySelector("#chat-input"); // #chat-inputの要素を取り出す

var messagesContainer = document.querySelector("#messages"); // #messagesの要素を取り出す

var nameInput = document.querySelector("#name-input");
var idInput = document.querySelector("#id-input");
chatInput.addEventListener("keypress", function (event) {
  // console.log(idInput);
  // console.log(idInput.value);
  // console.log(idInput.value === "");
  if (event.keyCode === 13 && idInput.value !== "") {
    // エンターコードが押されたらかつidInputが空ではない場合
    console.log("private_msg");
    lobby_channel.push("private_msg", {
      body: chatInput.value,
      name: nameInput.value,
      to_id: idInput.value
    }); // 接続しているトピックへ文字列を送信

    chatInput.value = ""; // 入力欄を空にする
  } else if (event.keyCode === 13) {
    // エンターコードが押されたら
    console.log("new_msg");
    lobby_channel.push("new_msg", {
      body: chatInput.value,
      name: nameInput.value
    }); // 接続しているトピックへ文字列を送信

    chatInput.value = ""; // 入力欄を空にする
  }
});
own_channel.on("private_msg", function (payload) {
  // "private_msg"というイベントが発生したら
  console.log("private_msg");
  var messageItem = document.createElement("li"); // リスト要素を作成

  messageItem.innerText = "[".concat(payload.name, " (wispered)] ").concat(payload.body); // テキストデータを作成。[日付] 本文

  messagesContainer.appendChild(messageItem); // messageItemに要素を追加
});
lobby_channel.on("new_msg", function (payload) {
  // "new_msg"というイベントが発生したら
  console.log("new_msg");
  var messageItem = document.createElement("li"); // リスト要素を作成

  messageItem.innerText = "[".concat(payload.name, "] ").concat(payload.body); // テキストデータを作成。[日付] 本文

  messagesContainer.appendChild(messageItem); // messageItemに要素を追加
});
lobby_channel.join().receive("ok", function (resp) {
  console.log("Joined successfully", resp);
}).receive("error", function (resp) {
  console.log("Unable to join", resp);
});
own_channel.join().receive("ok", function (resp) {
  console.log("Joined private successfully", resp);
}).receive("error", function (resp) {
  console.log("Unable to join", resp);
});
/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map