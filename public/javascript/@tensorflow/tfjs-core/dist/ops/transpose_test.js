"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("../index");
var test_util_1 = require("../test_util");
test_util_1.describeWithFlags('transpose', test_util_1.ALL_ENVS, function () {
    it('2D (no change)', function () {
        var t = tf.tensor2d([1, 11, 2, 22, 3, 33, 4, 44], [2, 4]);
        var t2 = tf.transpose(t, [0, 1]);
        expect(t2.shape).toEqual(t.shape);
        test_util_1.expectArraysClose(t2, t);
    });
    it('2D (transpose)', function () {
        var t = tf.tensor2d([1, 11, 2, 22, 3, 33, 4, 44], [2, 4]);
        var t2 = tf.transpose(t, [1, 0]);
        expect(t2.shape).toEqual([4, 2]);
        test_util_1.expectArraysClose(t2, [1, 3, 11, 33, 2, 4, 22, 44]);
    });
    it('3D [r, c, d] => [d, r, c]', function () {
        var t = tf.tensor3d([1, 11, 2, 22, 3, 33, 4, 44], [2, 2, 2]);
        var t2 = tf.transpose(t, [2, 0, 1]);
        expect(t2.shape).toEqual([2, 2, 2]);
        test_util_1.expectArraysClose(t2, [1, 2, 3, 4, 11, 22, 33, 44]);
    });
    it('3D [r, c, d] => [d, c, r]', function () {
        var t = tf.tensor3d([1, 11, 2, 22, 3, 33, 4, 44], [2, 2, 2]);
        var t2 = tf.transpose(t, [2, 1, 0]);
        expect(t2.shape).toEqual([2, 2, 2]);
        test_util_1.expectArraysClose(t2, [1, 3, 2, 4, 11, 33, 22, 44]);
    });
    it('gradient 3D [r, c, d] => [d, c, r]', function () {
        var t = tf.tensor3d([1, 11, 2, 22, 3, 33, 4, 44], [2, 2, 2]);
        var perm = [2, 1, 0];
        var dy = tf.tensor3d([111, 211, 121, 221, 112, 212, 122, 222], [2, 2, 2]);
        var dt = tf.grad(function (t) { return t.transpose(perm); })(t, dy);
        expect(dt.shape).toEqual(t.shape);
        expect(dt.dtype).toEqual('float32');
        test_util_1.expectArraysClose(dt, [111, 112, 121, 122, 211, 212, 221, 222]);
    });
    it('throws when passed a non-tensor', function () {
        expect(function () { return tf.transpose({}); })
            .toThrowError(/Argument 'x' passed to 'transpose' must be a Tensor/);
    });
});
