import { Scalar, Tensor, Tensor1D, Tensor2D } from '@tensorflow/tfjs-core';
import { DataFormat, PaddingMode, PoolMode } from '../common';
import { Constraint } from '../constraints';
import { ConcreteTensor, DType, LayerVariable, RnnStepFunction, Shape, SymbolicTensor, TensorInterface } from '../types';
import { epsilon as common_epsilon } from './common';
export declare function disposeScalarCache(): void;
export declare function setBackend(requestedBackend: 'cpu' | 'webgl'): void;
export declare function getBackend(): 'cpu' | 'webgl';
export declare function keep(x: Tensor): Tensor;
export declare function getScalar(value: number, dtype?: DType): Scalar;
export declare const epsilon: typeof common_epsilon;
export declare function isBackendSymbolic(): boolean;
export declare function shape(x: Tensor | TensorInterface): Shape;
export declare function intShape(x: Tensor | TensorInterface): number[];
export declare function ndim(x: Tensor | TensorInterface): number;
export declare function dtype(x: Tensor | SymbolicTensor): DType;
export declare function normalizeAxis(x: Tensor | TensorInterface, axis: number | number[]): number | number[];
export declare function countParams(x: Tensor | TensorInterface): number;
export declare function cast(x: Tensor, dtype: 'float32' | 'int32' | 'bool'): Tensor;
export declare function reshape(x: Tensor, shape: Shape): Tensor;
export declare function transpose(x: Tensor, perm?: number[]): Tensor;
export declare const permuteDimensions: typeof transpose;
export declare function reverse(x: Tensor, axes: number | number[]): Tensor;
export declare function expandDims(x: Tensor, axis?: number): Tensor;
export declare function squeeze(x: Tensor, axis: number): Tensor;
export declare function temporalPadding(x: Tensor, padding?: [number, number]): Tensor;
export declare function spatial2dPadding(x: Tensor, padding?: [[number, number], [number, number]], dataFormat?: DataFormat): Tensor;
export declare function repeat(x: Tensor, n: number): Tensor;
export declare function flatten(x: Tensor): Tensor;
export declare function batchFlatten(x: Tensor): Tensor;
export declare function sliceAlongFirstAxis(array: Tensor, start: number, size: number): Tensor;
export declare function sliceAlongLastAxis(array: Tensor, start: number, size: number): Tensor;
export declare function normalizeBatchInTraining(x: Tensor, gamma: Tensor, beta: Tensor, reductionAxes: number[], epsilon?: number): [Tensor, Tensor, Tensor];
export declare function concatenate(tensors: Tensor[], axis?: number): Tensor;
export declare function concatAlongFirstAxis(a: Tensor, b: Tensor): Tensor;
export declare function tile(x: Tensor, n: number | number[]): Tensor;
export declare function variable(x: Tensor, dtype?: DType, name?: string, constraint?: Constraint): LayerVariable;
export declare function batchGetValue(xs: LayerVariable[]): Tensor[];
export declare function batchSetValue(variablesAndValues: Array<[LayerVariable, Tensor]>): void;
export declare function zeros(shape: Shape, dtype?: DType): Tensor;
export declare function zerosVariable(shape: Shape, dtype?: DType, name?: string): LayerVariable;
export declare function zerosLike(x: Tensor, dtype?: DType, name?: string): LayerVariable;
export declare function ones(shape: Shape, dtype?: DType): Tensor;
export declare function onesVariable(shape: Shape, dtype?: DType, name?: string): LayerVariable;
export declare function onesLike(x: Tensor, dtype?: DType, name?: string): LayerVariable;
export declare function identity(x: Tensor): Tensor;
export declare function eye(size: number, dtype?: DType, name?: string): Tensor;
export declare function eyeVariable(size: number, dtype?: DType, name?: string): LayerVariable;
export declare function neg(x: Tensor): Tensor;
export declare function add(x: Tensor, y: Tensor): Tensor;
export declare function subtract(x: Tensor, y: Tensor): Tensor;
export declare function multiply(x: Tensor, y: Tensor): Tensor;
export declare function divide(x: Tensor, y: Tensor): Tensor;
export declare function scalarTimesArray(c: Scalar, x: Tensor): Tensor;
export declare function scalarPlusArray(c: Scalar, x: Tensor): Tensor;
export declare function randomUniform(shape: Shape, minval: number, maxval: number, dtype?: DType, seed?: number): Tensor;
export declare function randomUniformVariable(shape: Shape, minval: number, maxval: number, dtype?: DType, seed?: number, name?: string): LayerVariable;
export declare function truncatedNormal(shape: Shape, mean?: number, stddev?: number, dtype?: DType, seed?: number): Tensor;
export declare function truncatedNormalVariable(shape: Shape, mean?: number, stddev?: number, dtype?: DType, seed?: number, name?: string): LayerVariable;
export declare function randomNormal(shape: Shape, mean?: number, stddev?: number, dtype?: DType, seed?: number): Tensor;
export declare function randomNormalVariable(shape: Shape, mean?: number, stddev?: number, dtype?: DType, seed?: number, name?: string): LayerVariable;
export declare function update(x: LayerVariable, xNew: Tensor): LayerVariable;
export declare function updateAdd(x: LayerVariable, increment: Tensor): LayerVariable;
export declare function updateSub(x: LayerVariable, decrement: Tensor): LayerVariable;
export declare function dot(x: Tensor, y: Tensor): Tensor;
export declare function sign(x: Tensor): Tensor;
export declare function qr(x: Tensor2D): [Tensor, Tensor];
export declare function oneHot(indices: Tensor, numClasses: number): Tensor;
export declare function mean(x: Tensor, axis?: number | number[], keepDims?: boolean): Scalar | Tensor;
export declare function argmax(x: Tensor, axis?: number): Tensor;
export declare function gather(reference: Tensor, indices: number[] | Tensor1D, axis?: number): Tensor;
export declare function max(x: Tensor, axis?: number | number[], keepDims?: boolean): Scalar | Tensor;
export declare function min(x: Tensor, axis?: number | number[], keepDims?: boolean): Scalar | Tensor;
export declare function minimum(x: Tensor, y: Tensor): Tensor;
export declare function sum(x: Tensor, axis?: number | number[], keepDims?: boolean): Tensor;
export declare function abs(x: Tensor): Tensor;
export declare function square(x: Tensor): Tensor;
export declare function sqrt(x: Tensor): Tensor;
export declare function exp(x: Tensor): Tensor;
export declare function log(x: Tensor): Tensor;
export declare function pow(x: Tensor, a: Tensor | number): Tensor;
export declare function clip(x: Tensor, minValue: number, maxValue: number): Tensor;
export declare function equal(x: Tensor, y: Tensor): Tensor;
export declare function greater(x: Tensor, y: Tensor): Tensor;
export declare function greaterEqual(x: Tensor, y: Tensor): Tensor;
export declare function maximum(x: Tensor, y: Tensor): Tensor;
export declare function sin(x: ConcreteTensor): Tensor;
export declare function cos(x: ConcreteTensor): Tensor;
export declare function batchNormalization(x: Tensor, mean: Tensor, variance: Tensor, beta?: Tensor, gamma?: Tensor, epsilon?: number): Tensor;
export declare function biasAdd(x: Tensor, bias: Tensor, dataFormat?: DataFormat): Tensor;
export declare function elu(x: Tensor, alpha?: number): Tensor;
export declare function selu(x: Tensor): Tensor;
export declare function relu(x: Tensor): Tensor;
export declare function softplus(x: Tensor): Tensor;
export declare function softsign(x: Tensor): Tensor;
export declare function tanh(x: Tensor): Tensor;
export declare function dropout(x: Tensor, level: Scalar, noiseShape?: number[], seed?: number): Tensor;
export declare function l2Normalize(x: Tensor, axis?: number): Tensor;
export declare function conv1dWithBias(x: Tensor, kernel: Tensor, bias: Tensor, strides?: number, padding?: string, dataFormat?: DataFormat, dilationRate?: number): Tensor;
export declare function conv1d(x: Tensor, kernel: Tensor, strides?: number, padding?: string, dataFormat?: DataFormat, dilationRate?: number): Tensor;
export declare function conv2d(x: Tensor, kernel: Tensor, strides?: number[], padding?: string, dataFormat?: DataFormat, dilationRate?: [number, number]): Tensor;
export declare function conv2dWithBias(x: Tensor, kernel: Tensor, bias: Tensor, strides?: number[], padding?: string, dataFormat?: DataFormat, dilationRate?: [number, number]): Tensor;
export declare function depthwiseConv2d(x: Tensor, depthwiseKernel: Tensor, strides?: [number, number], padding?: string, dataFormat?: DataFormat, dilationRate?: [number, number]): Tensor;
export declare function pool2d(x: Tensor, poolSize: [number, number], strides?: [number, number], padding?: PaddingMode, dataFormat?: DataFormat, poolMode?: PoolMode): Tensor;
export declare function nameScope<T>(name: string, fn: () => T): T;
export declare function floatx(): DType;
export declare function getUid(prefix?: string): string;
export declare function softmax(x: Tensor, axis?: number): Tensor;
export declare function categoricalCrossentropy(target: Tensor, output: Tensor, fromLogits?: boolean): Tensor;
export declare function sparseCategoricalCrossentropy(target: Tensor, output: Tensor, fromLogits?: boolean): Tensor;
export declare function binaryCrossentropy(target: Tensor, output: Tensor, fromLogits?: boolean): Tensor;
export declare function sigmoidCrossEntropyWithLogits(target: Tensor, output: Tensor): Tensor;
export declare function sigmoid(x: Tensor): Tensor;
export declare function hardSigmoid(x: Tensor): Tensor;
export declare function inTrainPhase<T>(x: () => T, alt: () => T, training?: boolean): T;
export declare function rnn(stepFunction: RnnStepFunction, inputs: Tensor, initialStates: Tensor[], goBackwards?: boolean, mask?: Tensor, constants?: Tensor[], unroll?: boolean, inputLength?: number): [Tensor, Tensor, Tensor[]];
export declare function gradients(lossFn: () => Scalar, variables: LayerVariable[]): Tensor[];
