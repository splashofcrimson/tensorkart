import { Optimizer, Scalar, Tensor, Tensor1D } from '@tensorflow/tfjs-core';
import { Callback, CustomCallbackConfig, History } from '../callbacks';
import { LossOrMetricFn, Shape } from '../types';
import { Container, ContainerConfig } from './topology';
export declare function isDataTensor(x: Tensor | Tensor[] | {
    [inputName: string]: Tensor;
} | {
    [inputName: string]: Tensor[];
}): boolean;
export declare function isDataArray(x: Tensor | Tensor[] | {
    [inputName: string]: Tensor;
}): boolean;
export declare function isDataDict(x: Tensor | Tensor[] | {
    [inputName: string]: Tensor;
}): boolean;
export declare function standardizeInputData(data: Tensor | Tensor[] | {
    [inputName: string]: Tensor;
}, names: string[], shapes?: Shape[], checkBatchAxis?: boolean, exceptionPrefix?: string): Tensor[];
export declare function checkArrayLengths(inputs: Tensor[], targets: Tensor[], weights?: Tensor[]): void;
export declare function makeBatches(size: number, batchSize: number): Array<[number, number]>;
export declare function sliceArraysByIndices(arrays: Tensor | Tensor[], indices: Tensor1D): Tensor | Tensor[];
export declare enum ModelLoggingVerbosity {
    SILENT = 0,
    VERBOSE = 1,
}
export interface ModelPredictConfig {
    batchSize?: number;
    verbose?: boolean;
}
export interface ModelEvaluateConfig {
    batchSize?: number;
    verbose?: ModelLoggingVerbosity;
    sampleWeight?: Tensor;
    steps?: number;
}
export interface ModelFitConfig {
    batchSize?: number;
    epochs?: number;
    verbose?: ModelLoggingVerbosity;
    callbacks?: Callback[] | CustomCallbackConfig | CustomCallbackConfig[];
    validationSplit?: number;
    validationData?: [Tensor | Tensor[], Tensor | Tensor[]] | [Tensor | Tensor[], Tensor | Tensor[], Tensor | Tensor[]];
    shuffle?: boolean;
    classWeight?: {
        [classIndex: string]: number;
    };
    sampleWeight?: Tensor;
    initialEpoch?: number;
    stepsPerEpoch?: number;
    validationSteps?: number;
}
export interface ModelCompileConfig {
    optimizer: string | Optimizer;
    loss: string | string[] | {
        [outputName: string]: string;
    } | LossOrMetricFn | LossOrMetricFn[] | {
        [outputName: string]: LossOrMetricFn;
    };
    metrics?: string[] | {
        [outputName: string]: string;
    };
}
export declare class Model extends Container {
    optimizer: Optimizer;
    loss: string | string[] | {
        [outputName: string]: string;
    } | LossOrMetricFn | LossOrMetricFn[] | {
        [outputName: string]: LossOrMetricFn;
    };
    lossFunctions: LossOrMetricFn[];
    private feedOutputShapes;
    private feedLossFns;
    private collectedTrainableWeights;
    private testFunction;
    history: History;
    metrics: string[] | {
        [outputName: string]: string;
    };
    metricsNames: string[];
    metricsTensors: Array<[LossOrMetricFn, number]>;
    constructor(config: ContainerConfig);
    getClassName(): string;
    compile(config: ModelCompileConfig): void;
    private checkTrainableWeightsConsistency();
    evaluate(x: Tensor | Tensor[], y: Tensor | Tensor[], config?: ModelEvaluateConfig): Scalar | Scalar[];
    private checkNumSamples(ins, batchSize?, steps?, stepsName?);
    private predictLoop(ins, batchSize?, verbose?);
    predict(x: Tensor | Tensor[], config?: ModelPredictConfig): Tensor | Tensor[];
    predictOnBatch(x: Tensor): Tensor | Tensor[];
    protected standardizeUserData(x: Tensor | Tensor[] | {
        [inputName: string]: Tensor;
    }, y: Tensor | Tensor[] | {
        [inputName: string]: Tensor;
    }, checkBatchAxis?: boolean, batchSize?: number): [Tensor[], Tensor[], Tensor[]];
    private fitLoop(f, ins, outLabels?, batchSize?, epochs?, verbose?, callbacks?, valF?, valIns?, shuffle?, callbackMetrics?, initialEpoch?, stepsPerEpoch?, validationSteps?);
    private testLoop(f, ins, batchSize?, verbose?, steps?);
    private getDedupedMetricsNames();
    private makeTestFunction();
    fit(x: Tensor | Tensor[] | {
        [inputName: string]: Tensor;
    }, y: Tensor | Tensor[] | {
        [inputName: string]: Tensor;
    }, config?: ModelFitConfig): Promise<History>;
}
