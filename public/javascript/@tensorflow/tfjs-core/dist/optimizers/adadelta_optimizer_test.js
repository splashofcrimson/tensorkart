"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("../index");
var test_util_1 = require("../test_util");
test_util_1.describeWithFlags('AdadeltaOptimizer', test_util_1.ALL_ENVS, function () {
    it('basic', function () {
        var learningRate = .1;
        var rho = .95;
        var optimizer = tf.train.adadelta(learningRate, rho);
        var x = tf.tensor1d([1, 2]).variable();
        var f = function () { return x.square().sum(); };
        var numTensors = tf.memory().numTensors;
        var cost = optimizer.minimize(f, true);
        expect(tf.memory().numTensors).toBe(numTensors + 3);
        test_util_1.expectArraysClose(x, [0.8, 1.6]);
        cost.dispose();
        numTensors = tf.memory().numTensors;
        cost = optimizer.minimize(f, false);
        test_util_1.expectArraysClose(x, [0.64, 1.28]);
        expect(tf.memory().numTensors).toBe(numTensors);
        expect(cost).toBe(null);
        x.dispose();
        optimizer.dispose();
        expect(tf.memory().numTensors).toBe(1);
    });
});
