"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("./index");
var test_util_1 = require("./test_util");
test_util_1.describeWithFlags('time webgl', test_util_1.WEBGL_ENVS, function () {
    it('upload + compute', function () { return __awaiter(_this, void 0, void 0, function () {
        var a, time;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = tf.zeros([10, 10]);
                    return [4, tf.time(function () { return a.square(); })];
                case 1:
                    time = _a.sent();
                    expect(time.uploadWaitMs > 0);
                    expect(time.downloadWaitMs === 0);
                    expect(time.kernelMs > 0);
                    expect(time.wallMs >= time.kernelMs);
                    return [2];
            }
        });
    }); });
    it('upload + compute + dataSync', function () { return __awaiter(_this, void 0, void 0, function () {
        var a, time;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = tf.zeros([10, 10]);
                    return [4, tf.time(function () { return a.square().dataSync(); })];
                case 1:
                    time = _a.sent();
                    expect(time.uploadWaitMs > 0);
                    expect(time.downloadWaitMs > 0);
                    expect(time.kernelMs > 0);
                    expect(time.wallMs >= time.kernelMs);
                    return [2];
            }
        });
    }); });
    it('upload + compute + data', function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        var a, time;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = tf.zeros([10, 10]);
                    return [4, tf.time(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, a.square().data()];
                                case 1: return [2, _a.sent()];
                            }
                        }); }); })];
                case 1:
                    time = _a.sent();
                    expect(time.uploadWaitMs > 0);
                    expect(time.downloadWaitMs > 0);
                    expect(time.kernelMs > 0);
                    expect(time.wallMs >= time.kernelMs);
                    return [2];
            }
        });
    }); });
    it('preupload (not included) + compute + data', function () { return __awaiter(_this, void 0, void 0, function () {
        var a, time;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = tf.zeros([10, 10]);
                    a.square();
                    return [4, tf.time(function () { return a.sqrt(); })];
                case 1:
                    time = _a.sent();
                    expect(time.uploadWaitMs === 0);
                    expect(time.downloadWaitMs === 0);
                    expect(time.kernelMs > 0);
                    expect(time.wallMs >= time.kernelMs);
                    return [2];
            }
        });
    }); });
});
test_util_1.describeWithFlags('time cpu', test_util_1.CPU_ENVS, function () {
    it('simple upload', function () { return __awaiter(_this, void 0, void 0, function () {
        var a, time;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = tf.zeros([10, 10]);
                    return [4, tf.time(function () { return a.square(); })];
                case 1:
                    time = _a.sent();
                    expect(time.kernelMs > 0);
                    expect(time.wallMs >= time.kernelMs);
                    return [2];
            }
        });
    }); });
});
