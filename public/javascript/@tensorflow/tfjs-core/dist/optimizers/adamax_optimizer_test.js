"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("../index");
var test_util_1 = require("../test_util");
test_util_1.describeWithFlags('AdamaxOptimizer', test_util_1.ALL_ENVS, function () {
    it('basic', function () {
        var learningRate = 0.1;
        var beta1 = 0.8;
        var beta2 = 0.9;
        var decay = 0.1;
        var optimizer = tf.train.adamax(learningRate, beta1, beta2, undefined, decay);
        var x = tf.tensor1d([2, 4]).variable();
        var f = function () { return x.square().sum(); };
        var numTensors = tf.memory().numTensors;
        var cost = optimizer.minimize(f, true);
        expect(tf.memory().numTensors).toBe(numTensors + 3);
        test_util_1.expectArraysClose(x, [1.9, 3.9]);
        cost.dispose();
        numTensors = tf.memory().numTensors;
        cost = optimizer.minimize(f, false);
        test_util_1.expectArraysClose(x, [1.80697, 3.8086]);
        expect(tf.memory().numTensors).toBe(numTensors);
        expect(cost).toBe(null);
        x.dispose();
        optimizer.dispose();
        expect(tf.memory().numTensors).toBe(1);
    });
});
