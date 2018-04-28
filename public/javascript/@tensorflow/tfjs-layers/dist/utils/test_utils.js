"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var tfjs_backend_1 = require("../backend/tfjs_backend");
var errors_1 = require("../errors");
function expectTensorsClose(actual, expected, epsilon) {
    if (actual == null) {
        throw new errors_1.ValueError('First argument to expectTensorsClose() is not defined.');
    }
    if (expected == null) {
        throw new errors_1.ValueError('Second argument to expectTensorsClose() is not defined.');
    }
    tfjs_core_1.test_util.expectArraysClose(actual, expected, epsilon);
}
exports.expectTensorsClose = expectTensorsClose;
function expectTensorsValuesInRange(actual, low, high) {
    if (actual == null) {
        throw new errors_1.ValueError('First argument to expectTensorsClose() is not defined.');
    }
    tfjs_core_1.test_util.expectValuesInRange(actual.dataSync(), low, high);
}
exports.expectTensorsValuesInRange = expectTensorsValuesInRange;
function describeMathCPUAndGPU(testName, tests) {
    describeMathCPU(testName, tests);
    describeMathGPU(testName, tests);
}
exports.describeMathCPUAndGPU = describeMathCPUAndGPU;
function describeMathCPU(testName, tests) {
    tfjs_core_1.test_util.describeWithFlags(testName, tfjs_core_1.test_util.CPU_ENVS, function () {
        beforeEach(function () {
            tfjs_backend_1.disposeScalarCache();
        });
        tests();
    });
}
exports.describeMathCPU = describeMathCPU;
function describeMathGPU(testName, tests) {
    tfjs_core_1.test_util.describeWithFlags(testName, tfjs_core_1.test_util.WEBGL_ENVS, function () {
        beforeEach(function () {
            tfjs_backend_1.disposeScalarCache();
        });
        tests();
    });
}
exports.describeMathGPU = describeMathGPU;
