"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("../index");
var test_util_1 = require("../test_util");
test_util_1.describeWithFlags('logicalNot', test_util_1.ALL_ENVS, function () {
    it('Tensor1D.', function () {
        var a = tf.tensor1d([1, 0, 0], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [0, 1, 1]);
        a = tf.tensor1d([0, 0, 0], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [1, 1, 1]);
        a = tf.tensor1d([1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [0, 0]);
    });
    it('Tests chaining in Tensor1D', function () {
        var a = tf.tensor1d([1, 0, 0], 'bool');
        test_util_1.expectArraysClose(a.logicalNot(), [0, 1, 1]);
        a = tf.tensor1d([0, 0, 0], 'bool');
        test_util_1.expectArraysClose(a.logicalNot(), [1, 1, 1]);
        a = tf.tensor1d([1, 1], 'bool');
        test_util_1.expectArraysClose(a.logicalNot(), [0, 0]);
    });
    it('Tensor2D', function () {
        var a = tf.tensor2d([[1, 0, 1], [0, 0, 0]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [0, 1, 0, 1, 1, 1]);
        a = tf.tensor2d([[0, 0, 0], [1, 1, 1]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [1, 1, 1, 0, 0, 0]);
    });
    it('Tensor3D', function () {
        var a = tf.tensor3d([[[1], [0], [1]], [[0], [0], [0]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [0, 1, 0, 1, 1, 1]);
        a = tf.tensor3d([[[0], [0], [0]], [[1], [1], [1]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [1, 1, 1, 0, 0, 0]);
    });
    it('Tensor4D', function () {
        var a = tf.tensor4d([1, 0, 1, 0], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [0, 1, 0, 1]);
        a = tf.tensor4d([0, 0, 0, 0], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [1, 1, 1, 1]);
        a = tf.tensor4d([1, 1, 1, 1], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalNot(a), [0, 0, 0, 0]);
    });
    it('throws when passed a non-tensor', function () {
        expect(function () { return tf.logicalNot({}); })
            .toThrowError(/Argument 'x' passed to 'logicalNot' must be a Tensor/);
    });
});
test_util_1.describeWithFlags('logicalAnd', test_util_1.ALL_ENVS, function () {
    it('Tensor1D.', function () {
        var a = tf.tensor1d([1, 0, 0], 'bool');
        var b = tf.tensor1d([0, 1, 0], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 0]);
        a = tf.tensor1d([0, 0, 0], 'bool');
        b = tf.tensor1d([0, 0, 0], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 0]);
        a = tf.tensor1d([1, 1], 'bool');
        b = tf.tensor1d([1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [1, 1]);
    });
    it('mismatched Tensor1D shapes', function () {
        var a = tf.tensor1d([1, 0], 'bool');
        var b = tf.tensor1d([0, 1, 0], 'bool');
        var f = function () {
            tf.logicalAnd(a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor2D', function () {
        var a = tf.tensor2d([[1, 0, 1], [0, 0, 0]], [2, 3], 'bool');
        var b = tf.tensor2d([[0, 0, 0], [0, 1, 0]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 0, 0, 0, 0]);
        a = tf.tensor2d([[0, 0, 0], [1, 1, 1]], [2, 3], 'bool');
        b = tf.tensor2d([[0, 0, 0], [1, 1, 1]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 0, 1, 1, 1]);
    });
    it('broadcasting Tensor2D shapes', function () {
        var a = tf.tensor2d([[1], [0]], [2, 1], 'bool');
        var b = tf.tensor2d([[0, 1, 0], [0, 1, 0]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 1, 0, 0, 0, 0]);
    });
    it('Tensor3D', function () {
        var a = tf.tensor3d([[[1], [0], [1]], [[0], [0], [1]]], [2, 3, 1], 'bool');
        var b = tf.tensor3d([[[0], [0], [1]], [[1], [0], [0]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 1, 0, 0, 0]);
        a = tf.tensor3d([[[0], [0], [0]], [[1], [1], [1]]], [2, 3, 1], 'bool');
        b = tf.tensor3d([[[0], [0], [0]], [[1], [1], [1]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 0, 1, 1, 1]);
    });
    it('broadcasting Tensor3D shapes', function () {
        var a = tf.tensor3d([[[1, 0], [0, 0], [1, 1]], [[0, 0], [0, 1], [0, 0]]], [2, 3, 2], 'bool');
        var b = tf.tensor3d([[[0], [0], [1]], [[1], [0], [0]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]);
    });
    it('Tensor4D', function () {
        var a = tf.tensor4d([1, 0, 1, 0], [2, 2, 1, 1], 'bool');
        var b = tf.tensor4d([0, 1, 1, 0], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 1, 0]);
        a = tf.tensor4d([0, 0, 0, 0], [2, 2, 1, 1], 'bool');
        b = tf.tensor4d([0, 0, 0, 0], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [0, 0, 0, 0]);
        a = tf.tensor4d([1, 1, 1, 1], [2, 2, 1, 1], 'bool');
        b = tf.tensor4d([1, 1, 1, 1], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [1, 1, 1, 1]);
    });
    it('broadcasting Tensor4D shapes', function () {
        var a = tf.tensor4d([1, 0, 1, 0], [2, 2, 1, 1], 'bool');
        var b = tf.tensor4d([[[[1, 0]], [[0, 0]]], [[[0, 0]], [[1, 1]]]], [2, 2, 1, 2], 'bool');
        test_util_1.expectArraysClose(tf.logicalAnd(a, b), [1, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('throws when passed a as a non-tensor', function () {
        expect(function () { return tf.logicalAnd({}, tf.scalar(1, 'bool')); })
            .toThrowError(/Argument 'a' passed to 'logicalAnd' must be a Tensor/);
    });
    it('throws when passed b as a non-tensor', function () {
        expect(function () { return tf.logicalAnd(tf.scalar(1, 'bool'), {}); })
            .toThrowError(/Argument 'b' passed to 'logicalAnd' must be a Tensor/);
    });
});
test_util_1.describeWithFlags('logicalOr', test_util_1.ALL_ENVS, function () {
    it('Tensor1D.', function () {
        var a = tf.tensor1d([1, 0, 0], 'bool');
        var b = tf.tensor1d([0, 1, 0], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 1, 0]);
        a = tf.tensor1d([0, 0, 0], 'bool');
        b = tf.tensor1d([0, 0, 0], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [0, 0, 0]);
        a = tf.tensor1d([1, 1], 'bool');
        b = tf.tensor1d([1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 1]);
    });
    it('mismatched Tensor1D shapes', function () {
        var a = tf.tensor1d([1, 0], 'bool');
        var b = tf.tensor1d([0, 1, 0], 'bool');
        var f = function () {
            tf.logicalOr(a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor2D', function () {
        var a = tf.tensor2d([[1, 0, 1], [0, 0, 0]], [2, 3], 'bool');
        var b = tf.tensor2d([[0, 0, 0], [0, 1, 0]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 0, 1, 0, 1, 0]);
        a = tf.tensor2d([[0, 0, 0], [1, 1, 1]], [2, 3], 'bool');
        b = tf.tensor2d([[0, 0, 0], [1, 1, 1]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [0, 0, 0, 1, 1, 1]);
    });
    it('broadcasting Tensor2D shapes', function () {
        var a = tf.tensor2d([[1], [0]], [2, 1], 'bool');
        var b = tf.tensor2d([[0, 0, 0], [0, 1, 0]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 1, 1, 0, 1, 0]);
    });
    it('Tensor3D', function () {
        var a = tf.tensor3d([[[1], [0], [1]], [[0], [0], [0]]], [2, 3, 1], 'bool');
        var b = tf.tensor3d([[[0], [0], [1]], [[1], [0], [0]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 0, 1, 1, 0, 0]);
        a = tf.tensor3d([[[0], [0], [0]], [[1], [1], [1]]], [2, 3, 1], 'bool');
        b = tf.tensor3d([[[0], [0], [0]], [[1], [1], [1]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [0, 0, 0, 1, 1, 1]);
    });
    it('broadcasting Tensor3D shapes', function () {
        var a = tf.tensor3d([[[1, 0], [0, 0], [1, 1]], [[0, 0], [0, 1], [0, 0]]], [2, 3, 2], 'bool');
        var b = tf.tensor3d([[[0], [0], [1]], [[1], [0], [0]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0]);
    });
    it('Tensor4D', function () {
        var a = tf.tensor4d([1, 0, 1, 0], [2, 2, 1, 1], 'bool');
        var b = tf.tensor4d([0, 1, 0, 0], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 1, 1, 0]);
        a = tf.tensor4d([0, 0, 0, 0], [2, 2, 1, 1], 'bool');
        b = tf.tensor4d([0, 0, 0, 0], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [0, 0, 0, 0]);
        a = tf.tensor4d([1, 1, 1, 1], [2, 2, 1, 1], 'bool');
        b = tf.tensor4d([1, 1, 1, 1], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 1, 1, 1]);
    });
    it('broadcasting Tensor4D shapes', function () {
        var a = tf.tensor4d([1, 0, 1, 0], [2, 2, 1, 1], 'bool');
        var b = tf.tensor4d([[[[1, 0]], [[0, 0]]], [[[0, 0]], [[1, 1]]]], [2, 2, 1, 2], 'bool');
        test_util_1.expectArraysClose(tf.logicalOr(a, b), [1, 1, 0, 0, 1, 1, 1, 1]);
    });
    it('throws when passed a as a non-tensor', function () {
        expect(function () { return tf.logicalOr({}, tf.scalar(1, 'bool')); })
            .toThrowError(/Argument 'a' passed to 'logicalOr' must be a Tensor/);
    });
    it('throws when passed b as a non-tensor', function () {
        expect(function () { return tf.logicalOr(tf.scalar(1, 'bool'), {}); })
            .toThrowError(/Argument 'b' passed to 'logicalOr' must be a Tensor/);
    });
});
test_util_1.describeWithFlags('logicalXor', test_util_1.ALL_ENVS, function () {
    it('Tensor1D.', function () {
        var a = tf.tensor1d([1, 0, 0], 'bool');
        var b = tf.tensor1d([0, 1, 0], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [1, 1, 0]);
        a = tf.tensor1d([0, 0, 0], 'bool');
        b = tf.tensor1d([0, 0, 0], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [0, 0, 0]);
        a = tf.tensor1d([1, 1], 'bool');
        b = tf.tensor1d([1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [0, 0]);
    });
    it('mismatched Tensor1D shapes', function () {
        var a = tf.tensor1d([1, 0], 'bool');
        var b = tf.tensor1d([0, 1, 0], 'bool');
        var f = function () {
            tf.logicalXor(a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor2D', function () {
        var a = tf.tensor2d([[1, 0, 1], [0, 0, 0]], [2, 3], 'bool');
        var b = tf.tensor2d([[0, 0, 0], [0, 1, 0]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [1, 0, 1, 0, 1, 0]);
        a = tf.tensor2d([[0, 0, 0], [1, 1, 1]], [2, 3], 'bool');
        b = tf.tensor2d([[0, 0, 0], [1, 1, 1]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [0, 0, 0, 0, 0, 0]);
    });
    it('broadcasting Tensor2D shapes', function () {
        var a = tf.tensor2d([[1], [0]], [2, 1], 'bool');
        var b = tf.tensor2d([[0, 0, 0], [0, 1, 0]], [2, 3], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [1, 1, 1, 0, 1, 0]);
    });
    it('Tensor3D', function () {
        var a = tf.tensor3d([[[1], [0], [1]], [[0], [0], [0]]], [2, 3, 1], 'bool');
        var b = tf.tensor3d([[[0], [0], [1]], [[1], [0], [0]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [1, 0, 0, 1, 0, 0]);
        a = tf.tensor3d([[[0], [0], [0]], [[1], [1], [1]]], [2, 3, 1], 'bool');
        b = tf.tensor3d([[[0], [0], [0]], [[1], [1], [1]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [0, 0, 0, 0, 0, 0]);
    });
    it('broadcasting Tensor3D shapes', function () {
        var a = tf.tensor3d([[[1, 0], [0, 0], [1, 1]], [[0, 0], [0, 1], [0, 0]]], [2, 3, 2], 'bool');
        var b = tf.tensor3d([[[0], [0], [1]], [[1], [0], [0]]], [2, 3, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0]);
    });
    it('Tensor4D', function () {
        var a = tf.tensor4d([1, 0, 1, 0], [2, 2, 1, 1], 'bool');
        var b = tf.tensor4d([0, 1, 1, 0], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [1, 1, 0, 0]);
        a = tf.tensor4d([0, 0, 0, 0], [2, 2, 1, 1], 'bool');
        b = tf.tensor4d([0, 0, 0, 0], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [0, 0, 0, 0]);
        a = tf.tensor4d([1, 1, 1, 1], [2, 2, 1, 1], 'bool');
        b = tf.tensor4d([1, 1, 1, 1], [2, 2, 1, 1], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [0, 0, 0, 0]);
    });
    it('broadcasting Tensor4D shapes', function () {
        var a = tf.tensor4d([1, 0, 1, 0], [2, 2, 1, 1], 'bool');
        var b = tf.tensor4d([[[[1, 0]], [[0, 0]]], [[[0, 0]], [[1, 1]]]], [2, 2, 1, 2], 'bool');
        test_util_1.expectArraysClose(tf.logicalXor(a, b), [0, 1, 0, 0, 1, 1, 1, 1]);
    });
    it('throws when passed a as a non-tensor', function () {
        expect(function () { return tf.logicalXor({}, tf.scalar(1, 'bool')); })
            .toThrowError(/Argument 'a' passed to 'logicalXor' must be a Tensor/);
    });
    it('throws when passed b as a non-tensor', function () {
        expect(function () { return tf.logicalXor(tf.scalar(1, 'bool'), {}); })
            .toThrowError(/Argument 'b' passed to 'logicalXor' must be a Tensor/);
    });
});
test_util_1.describeWithFlags('where', test_util_1.ALL_ENVS, function () {
    it('Scalars.', function () {
        var a = tf.scalar(10);
        var b = tf.scalar(20);
        var c = tf.scalar(1, 'bool');
        test_util_1.expectArraysClose(tf.where(c, a, b), [10]);
    });
    it('Tensor1D', function () {
        var c = tf.tensor1d([1, 0, 1, 0], 'bool');
        var a = tf.tensor1d([10, 10, 10, 10]);
        var b = tf.tensor1d([20, 20, 20, 20]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [10, 20, 10, 20]);
    });
    it('Tensor1D different a/b shapes', function () {
        var c = tf.tensor1d([1, 0, 1, 0], 'bool');
        var a = tf.tensor1d([10, 10, 10]);
        var b = tf.tensor1d([20, 20, 20, 20]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
        c = tf.tensor1d([1, 0, 1, 0], 'bool');
        a = tf.tensor1d([10, 10, 10, 10]);
        b = tf.tensor1d([20, 20, 20]);
        f = function () {
            tf.where(c, a, b);
        };
    });
    it('Tensor1D different condition/a shapes', function () {
        var c = tf.tensor1d([1, 0, 1, 0], 'bool');
        var a = tf.tensor1d([10, 10, 10]);
        var b = tf.tensor1d([20, 20, 20]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor2D', function () {
        var c = tf.tensor2d([[1, 0], [0, 1]], [2, 2], 'bool');
        var a = tf.tensor2d([[10, 10], [10, 10]], [2, 2]);
        var b = tf.tensor2d([[5, 5], [5, 5]], [2, 2]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [10, 5, 5, 10]);
    });
    it('Tensor2D different a/b shapes', function () {
        var c = tf.tensor2d([[1, 1], [0, 0]], [2, 2], 'bool');
        var a = tf.tensor2d([[5, 5, 5], [5, 5, 5]], [2, 3]);
        var b = tf.tensor2d([[4, 4], [4, 4]], [2, 2]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
        c = tf.tensor2d([[1, 1], [0, 0]], [2, 2], 'bool');
        a = tf.tensor2d([[5, 5], [5, 5]], [2, 2]);
        b = tf.tensor2d([[4, 4, 4], [4, 4, 4]], [2, 3]);
        f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor2D different condition/a shapes', function () {
        var c = tf.tensor2d([[1, 0], [0, 1]], [2, 2], 'bool');
        var a = tf.tensor2d([[10, 10, 10], [10, 10, 10]], [2, 3]);
        var b = tf.tensor2d([[5, 5, 5], [5, 5, 5]], [2, 3]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor2D different `a` dimension w/ condition rank=1', function () {
        var c = tf.tensor1d([1, 0, 1, 0], 'bool');
        var a = tf.tensor2d([[10, 10], [10, 10]], [2, 2]);
        var b = tf.tensor2d([[5, 5], [5, 5]], [2, 2]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
        a = tf.tensor2d([[10], [10], [10], [10]], [4, 1]);
        b = tf.tensor2d([[5], [5], [5], [5]], [4, 1]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [10, 5, 10, 5]);
        a = tf.tensor2d([[10, 10], [10, 10], [10, 10], [10, 10]], [4, 2]);
        b = tf.tensor2d([[5, 5], [5, 5], [5, 5], [5, 5]], [4, 2]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [10, 10, 5, 5, 10, 10, 5, 5]);
    });
    it('Tensor3D', function () {
        var c = tf.tensor3d([[[1], [0], [1]], [[0], [0], [0]]], [2, 3, 1], 'bool');
        var a = tf.tensor3d([[[5], [5], [5]], [[5], [5], [5]]], [2, 3, 1]);
        var b = tf.tensor3d([[[3], [3], [3]], [[3], [3], [3]]], [2, 3, 1]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [5, 3, 5, 3, 3, 3]);
    });
    it('Tensor3D different a/b shapes', function () {
        var c = tf.tensor3d([[[1], [0], [1]], [[0], [0], [0]]], [2, 3, 1], 'bool');
        var a = tf.tensor3d([[[5], [5]], [[5], [5]]], [2, 2, 1]);
        var b = tf.tensor3d([[[3], [3], [3]], [[3], [3], [3]]], [2, 3, 1]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
        a = tf.tensor3d([[[5], [5], [5]], [[5], [5], [5]]], [2, 3, 1]);
        b = tf.tensor3d([[[3], [3]], [[3], [3]]], [2, 2, 1]);
        f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor3D different condition/a shapes', function () {
        var c = tf.tensor3d([[[1], [0]], [[0], [0]]], [2, 2, 1], 'bool');
        var a = tf.tensor3d([[[5], [5], [5]], [[5], [5], [5]]], [2, 3, 1]);
        var b = tf.tensor3d([[[3], [3], [3]], [[3], [3], [3]]], [2, 3, 1]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor3D different `a` dimension w/ condition rank=1', function () {
        var c = tf.tensor1d([1, 0, 1, 0], 'bool');
        var a = tf.tensor3d([[[9, 9], [9, 9]], [[9, 9], [9, 9]]], [2, 2, 2]);
        var b = tf.tensor3d([[[8, 8], [8, 8]], [[8, 8], [8, 8]]], [2, 2, 2]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
        a = tf.tensor3d([[[9]], [[9]], [[9]], [[9]]], [4, 1, 1]);
        b = tf.tensor3d([[[8]], [[8]], [[8]], [[8]]], [4, 1, 1]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [9, 8, 9, 8]);
        a = tf.tensor3d([[[9], [9]], [[9], [9]], [[9], [9]], [[9], [9]]], [4, 2, 1]);
        b = tf.tensor3d([[[8], [8]], [[8], [8]], [[8], [8]], [[8], [8]]], [4, 2, 1]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [9, 9, 8, 8, 9, 9, 8, 8]);
    });
    it('Tensor4D', function () {
        var c = tf.tensor4d([1, 0, 1, 1], [2, 2, 1, 1], 'bool');
        var a = tf.tensor4d([7, 7, 7, 7], [2, 2, 1, 1]);
        var b = tf.tensor4d([3, 3, 3, 3], [2, 2, 1, 1]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [7, 3, 7, 7]);
    });
    it('Tensor4D different a/b shapes', function () {
        var c = tf.tensor4d([1, 0, 1, 1], [2, 2, 1, 1], 'bool');
        var a = tf.tensor4d([7, 7, 7, 7, 7, 7, 7, 7], [2, 2, 2, 1]);
        var b = tf.tensor4d([3, 3, 3, 3], [2, 2, 1, 1]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
        a = tf.tensor4d([7, 7, 7, 7], [2, 2, 1, 1]);
        b = tf.tensor4d([3, 3, 3, 3, 3, 3, 3, 3], [2, 2, 2, 1]);
        f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor4D different condition/a shapes', function () {
        var c = tf.tensor4d([1, 0, 1, 1, 1, 0, 1, 1], [2, 2, 2, 1], 'bool');
        var a = tf.tensor4d([7, 7, 7, 7], [2, 2, 1, 1]);
        var b = tf.tensor4d([3, 3, 3, 3], [2, 2, 1, 1]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
    });
    it('Tensor4D different `a` dimension w/ condition rank=1', function () {
        var c = tf.tensor1d([1, 0, 1, 0], 'bool');
        var a = tf.tensor4d([7, 7, 7, 7, 7, 7, 7, 7], [2, 2, 2, 1]);
        var b = tf.tensor4d([3, 3, 3, 3, 3, 3, 3, 3], [2, 2, 2, 1]);
        var f = function () {
            tf.where(c, a, b);
        };
        expect(f).toThrowError();
        a = tf.tensor4d([7, 7, 7, 7], [4, 1, 1, 1]);
        b = tf.tensor4d([3, 3, 3, 3], [4, 1, 1, 1]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [7, 3, 7, 3]);
        a = tf.tensor4d([7, 7, 7, 7, 7, 7, 7, 7], [4, 2, 1, 1]);
        b = tf.tensor4d([3, 3, 3, 3, 3, 3, 3, 3], [4, 2, 1, 1]);
        test_util_1.expectArraysClose(tf.where(c, a, b), [7, 7, 3, 3, 7, 7, 3, 3]);
    });
    it('throws when passed condition as a non-tensor', function () {
        expect(function () { return tf.where({}, tf.scalar(1, 'bool'), tf.scalar(1, 'bool')); })
            .toThrowError(/Argument 'condition' passed to 'where' must be a Tensor/);
    });
    it('throws when passed a as a non-tensor', function () {
        expect(function () { return tf.where(tf.scalar(1, 'bool'), {}, tf.scalar(1, 'bool')); })
            .toThrowError(/Argument 'a' passed to 'where' must be a Tensor/);
    });
    it('throws when passed b as a non-tensor', function () {
        expect(function () { return tf.where(tf.scalar(1, 'bool'), tf.scalar(1, 'bool'), {}); })
            .toThrowError(/Argument 'b' passed to 'where' must be a Tensor/);
    });
});
