export declare type ArrayTypes = Uint8Array | Int32Array | Float32Array;
export declare function isInteger(x: number): boolean;
export declare function arrayProd(array: number[] | ArrayTypes, begin?: number, end?: number): number;
export declare function min(array: number[] | Float32Array): number;
export declare function max(array: number[] | Float32Array): number;
export declare function sum(array: number[] | Float32Array): number;
export declare function mean(array: number[] | Float32Array): number;
export declare function variance(array: number[] | Float32Array): number;
export declare function range(begin: number, end: number): number[];
