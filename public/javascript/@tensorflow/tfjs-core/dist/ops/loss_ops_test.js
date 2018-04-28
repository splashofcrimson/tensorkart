"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("../index");
var test_util_1 = require("../test_util");
test_util_1.describeWithFlags('computeWeightedLoss', test_util_1.ALL_ENVS, function () {
    it('1D - no weights', function () {
        var losses = tf.tensor1d([1, 2, 3]);
        var y = tf.losses.computeWeightedLoss(losses);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (1 + 2 + 3) / 3);
    });
    it('1D - no weights - Reduction.NONE', function () {
        var losses = tf.tensor1d([1, 2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, undefined, tf.Reduction.NONE);
        expect(y.shape).toEqual([3]);
        test_util_1.expectArraysClose(y, [1, 2, 3]);
    });
    it('1D - no weights - Reduction.MEAN', function () {
        var losses = tf.tensor1d([1, 2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, undefined, tf.Reduction.MEAN);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (1 + 2 + 3) / 3);
    });
    it('1D - no weights - Reduction.SUM', function () {
        var losses = tf.tensor1d([1, 2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, undefined, tf.Reduction.SUM);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (1 + 2 + 3));
    });
    it('1D - weights', function () {
        var losses = tf.tensor1d([1, 2, 3]);
        var weights = tf.tensor1d([0.1, 0, 0.3]);
        var y = tf.losses.computeWeightedLoss(losses, weights);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (1 * 0.1 + 2 * 0 + 3 * 0.3) / 2);
    });
    it('1D - weights - Reduction.NONE', function () {
        var losses = tf.tensor1d([1, 2, 3]);
        var weights = tf.tensor1d([0.1, 0.2, 0.3]);
        var y = tf.losses.computeWeightedLoss(losses, weights, tf.Reduction.NONE);
        expect(y.shape).toEqual([3]);
        test_util_1.expectArraysClose(y, [1 * 0.1, 2 * 0.2, 3 * 0.3]);
    });
    it('1D - weights - Reduction.MEAN', function () {
        var losses = tf.tensor1d([1, 2, 3]);
        var weights = tf.tensor1d([0.1, 0.2, 0.3]);
        var y = tf.losses.computeWeightedLoss(losses, weights, tf.Reduction.MEAN);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (1 * 0.1 + 2 * 0.2 + 3 * 0.3) / 0.6);
    });
    it('1D - weights - Reduction.SUM', function () {
        var losses = tf.tensor1d([1, 2, 3]);
        var weights = tf.tensor1d([0.1, 0.2, 0.3]);
        var y = tf.losses.computeWeightedLoss(losses, weights, tf.Reduction.SUM);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (1 * 0.1 + 2 * 0.2 + 3 * 0.3));
    });
    it('2D - no weights', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var y = tf.losses.computeWeightedLoss(losses);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (4 + 8 + 12 + 8 + 1 + 3) / 6);
    });
    it('2D - weights', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var weights = tf.tensor2d([1, 0, 2, -5, 0, 6], [2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, weights);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (4 * 1 + 8 * 0 + 12 * 2 + (8 * -5) + 1 * 0 + 3 * 6) / 4);
    });
    it('2D - no weights - Reduction.MEAN', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, undefined, tf.Reduction.MEAN);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (4 + 8 + 12 + 8 + 1 + 3) / 6);
    });
    it('2D - weights - Reduction.MEAN', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var weights = tf.tensor2d([1, 0, 2, -5, 0, 6], [2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, weights, tf.Reduction.MEAN);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (4 * 1 + 8 * 0 + 12 * 2 + (8 * -5) + 1 * 0 + 3 * 6) / 4);
    });
    it('2D - no weights - Reduction.SUM', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, undefined, tf.Reduction.SUM);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (4 + 8 + 12 + 8 + 1 + 3));
    });
    it('2D - weights - Reduction.SUM', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var weights = tf.tensor2d([1, 0, 2, -5, 0, 6], [2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, weights, tf.Reduction.SUM);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (4 * 1 + 8 * 0 + 12 * 2 + (8 * -5) + 1 * 0 + 3 * 6));
    });
    it('2D - no weights - Reduction.NONE', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, undefined, tf.Reduction.NONE);
        expect(y.shape).toEqual([2, 3]);
        test_util_1.expectArraysClose(y, [4, 8, 12, 8, 1, 3]);
    });
    it('2D - weights - Reduction.NONE', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var weights = tf.tensor2d([1, 0, 2, -5, 0, 6], [2, 3]);
        var y = tf.losses.computeWeightedLoss(losses, weights, tf.Reduction.NONE);
        expect(y.shape).toEqual([2, 3]);
        test_util_1.expectArraysClose(y, [4 * 1, 8 * 0, 12 * 2, (8 * -5), 1 * 0, 3 * 6]);
    });
    it('throws when passed losses as a non-tensor', function () {
        var weights = tf.tensor2d([1, 0, 2, -5, 0, 6], [2, 3]);
        var e = /Argument 'losses' passed to 'computeWeightedLoss' must be a Tensor/;
        expect(function () { return tf.losses.computeWeightedLoss({}, weights, tf.Reduction.NONE); })
            .toThrowError(e);
    });
    it('throws when passed weights as a non-tensor', function () {
        var losses = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var e = /Argument 'weights' passed to 'computeWeightedLoss' must be a Tensor/;
        expect(function () { return tf.losses.computeWeightedLoss(losses, {}, tf.Reduction.NONE); })
            .toThrowError(e);
    });
});
test_util_1.describeWithFlags('absoluteDifference', test_util_1.ALL_ENVS, function () {
    it('1D', function () {
        var predictions = tf.tensor1d([1, 2, 3]);
        var label = tf.tensor1d([0.3, -0.6, -0.1]);
        var y = tf.losses.absoluteDifference(label, predictions);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (Math.abs(1 - 0.3) + Math.abs(2 - (-0.6)) + Math.abs(3 - (-0.1))) / 3);
    });
    it('1D - weighted - Reduction.SUM_BY_NONZERO_WEIGHTS', function () {
        var predictions = tf.tensor1d([1, 2, 3]);
        var label = tf.tensor1d([0.3, -0.6, -0.1]);
        var weights = tf.tensor1d([0.1, 0.2, 0.3]);
        var y = tf.losses.absoluteDifference(label, predictions, weights);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (Math.abs(1 - 0.3) * 0.1 + Math.abs(2 - (-0.6)) * 0.2 +
            Math.abs(3 - (-0.1)) * 0.3) /
            3);
    });
    it('1D - weighted - Reduction.NONE', function () {
        var predictions = tf.tensor1d([1, 2, 3]);
        var label = tf.tensor1d([0.3, -0.6, -0.1]);
        var weights = tf.tensor1d([0.1, 0.2, 0.3]);
        var y = tf.losses.absoluteDifference(label, predictions, weights, tf.Reduction.NONE);
        expect(y.shape).toEqual([3]);
        test_util_1.expectArraysClose(y, [
            Math.abs(1 - 0.3) * 0.1, Math.abs(2 - (-0.6)) * 0.2,
            Math.abs(3 - (-0.1)) * 0.3
        ]);
    });
    it('1D - Reduction.MEAN', function () {
        var predictions = tf.tensor1d([1, 2, 3]);
        var label = tf.tensor1d([0.3, -0.6, -0.1]);
        var y = tf.losses.absoluteDifference(label, predictions, undefined, tf.Reduction.MEAN);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (Math.abs(1 - 0.3) + Math.abs(2 - (-0.6)) + Math.abs(3 - (-0.1))) / 3);
    });
    it('1D - weighted - Reduction.MEAN', function () {
        var predictions = tf.tensor1d([1, 2, 3]);
        var label = tf.tensor1d([0.3, -0.6, -0.1]);
        var weights = tf.tensor1d([0.1, 0.2, 0.3]);
        var y = tf.losses.absoluteDifference(label, predictions, weights, tf.Reduction.MEAN);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), ((Math.abs(1 - 0.3) * 0.1) + (Math.abs(2 - (-0.6)) * 0.2) +
            (Math.abs(3 - (-0.1)) * 0.3)) /
            0.6);
    });
    it('2D', function () {
        var predictions = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var label = tf.tensor2d([1, 9, 2, -5, -2, 6], [2, 3]);
        var y = tf.losses.absoluteDifference(label, predictions);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (Math.abs(4 - 1) + Math.abs(8 - 9) + Math.abs(12 - 2) +
            Math.abs(8 - (-5)) + Math.abs(1 - (-2)) + Math.abs(3 - 6)) /
            6);
    });
    it('2D - weighted - Reduction.SUM_BY_NONZERO_WEIGHTS', function () {
        var predictions = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var label = tf.tensor2d([1, 9, 2, -5, -2, 6], [2, 3]);
        var weights = tf.tensor2d([3, 0, 5, 0, 4, 2], [2, 3]);
        var y = tf.losses.absoluteDifference(label, predictions, weights);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (Math.abs(4 - 1) * 3 + Math.abs(8 - 9) * 0 + Math.abs(12 - 2) * 5 +
            Math.abs(8 - (-5)) * 0 + Math.abs(1 - (-2)) * 4 +
            Math.abs(3 - 6) * 2) /
            4);
    });
    it('2D - weighted - Reduction.NONE', function () {
        var predictions = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var label = tf.tensor2d([1, 9, 2, -5, -2, 6], [2, 3]);
        var weights = tf.tensor2d([3, 6, 5, 0, 4, 2], [2, 3]);
        var y = tf.losses.absoluteDifference(label, predictions, weights, tf.Reduction.NONE);
        expect(y.shape).toEqual([2, 3]);
        test_util_1.expectArraysClose(y, [
            Math.abs(4 - 1) * 3, Math.abs(8 - 9) * 6, Math.abs(12 - 2) * 5,
            Math.abs(8 - (-5)) * 0, Math.abs(1 - (-2)) * 4, Math.abs(3 - 6) * 2
        ]);
    });
    it('2D - Reduction.MEAN', function () {
        var predictions = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var label = tf.tensor2d([1, 9, 2, -5, -2, 6], [2, 3]);
        var y = tf.losses.absoluteDifference(label, predictions, undefined, tf.Reduction.MEAN);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (Math.abs(4 - 1) + Math.abs(8 - 9) + Math.abs(12 - 2) +
            Math.abs(8 - (-5)) + Math.abs(1 - (-2)) + Math.abs(3 - 6)) /
            6);
    });
    it('2D - weighted - Reduction.MEAN', function () {
        var predictions = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var label = tf.tensor2d([1, 9, 2, -5, -2, 6], [2, 3]);
        var weights = tf.tensor2d([3, 6, 5, 0, 4, 2], [2, 3]);
        var y = tf.losses.absoluteDifference(label, predictions, weights, tf.Reduction.MEAN);
        expect(y.shape).toEqual([]);
        test_util_1.expectNumbersClose(y.get(), (Math.abs(4 - 1) * 3 + Math.abs(8 - 9) * 6 + Math.abs(12 - 2) * 5 +
            Math.abs(8 - (-5)) * 0 + Math.abs(1 - (-2)) * 4 +
            Math.abs(3 - 6) * 2) /
            20);
    });
    it('throws when passed label as a non-tensor', function () {
        var predictions = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var weights = tf.tensor2d([3, 6, 5, 0, 4, 2], [2, 3]);
        var e = /Argument 'labels' passed to 'absoluteDifference' must be a Tensor/;
        expect(function () { return tf.losses.absoluteDifference({}, predictions, weights, tf.Reduction.MEAN); })
            .toThrowError(e);
    });
    it('throws when passed label as a non-tensor', function () {
        var label = tf.tensor2d([1, 9, 2, -5, -2, 6], [2, 3]);
        var weights = tf.tensor2d([3, 6, 5, 0, 4, 2], [2, 3]);
        var e = new RegExp('Argument \'predictions\' passed to \'absoluteDifference\' ' +
            'must be a Tensor');
        expect(function () { return tf.losses.absoluteDifference(label, {}, weights, tf.Reduction.MEAN); })
            .toThrowError(e);
    });
    it('throws when passed weights as a non-tensor', function () {
        var predictions = tf.tensor2d([4, 8, 12, 8, 1, 3], [2, 3]);
        var label = tf.tensor2d([1, 9, 2, -5, -2, 6], [2, 3]);
        var e = /Argument 'weights' passed to 'absoluteDifference' must be a Tensor/;
        expect(function () { return tf.losses.absoluteDifference(label, predictions, {}, tf.Reduction.MEAN); })
            .toThrowError(e);
    });
});
