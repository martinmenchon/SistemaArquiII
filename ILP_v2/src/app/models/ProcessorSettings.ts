
export class ProcessorSettings {

    private _degree: number = 1;
    private _numFUMultifunction: number = 1;
    private _numFUArithmetic: number = 1;
    private _numFUMemory: number = 1;
    private _latencyADD: number = 1;
    private _latencySUB: number = 1;
    private _latencyMUL: number = 1;
    private _latencyDIV: number = 1;
    private _latencyST: number = 1;
    private _latencyLD: number = 1;

    public get degree(): number {
        return this._degree;
    }
    public set degree(value: number) {
        this._degree = value;
    }


    public get numFUMultifunction(): number {
        return this._numFUMultifunction;
    }

    public set numFUMultifunction(value: number) {
        this._numFUMultifunction = value;
    }


    public get numFUArithmetic(): number {
        return this._numFUArithmetic;
    }

    public set numFUArithmetic(value: number) {
        this._numFUArithmetic = value;
    }


    public get numFUMemory(): number {
        return this._numFUMemory;
    }

    public set numFUMemory(value: number) {
        this._numFUMemory = value;
    }


    public get latencyADD(): number {
        return this._latencyADD;
    }

    public set latencyADD(value: number) {
        this._latencyADD = value;
    }


    public get latencySUB(): number {
        return this._latencySUB;
    }

    public set latencySUB(value: number) {
        this._latencySUB = value;
    }


    public get latencyMUL(): number {
        return this._latencyMUL;
    }

    public set latencyMUL(value: number) {
        this._latencyMUL = value;
    }


    public get latencyDIV(): number {
        return this._latencyDIV;
    }

    public set latencyDIV(value: number) {
        this._latencyDIV = value;
    }


    public get latencyST(): number {
        return this._latencyST;
    }

    public set latencyST(value: number) {
        this._latencyST = value;
    }


    public get latencyLD(): number {
        return this._latencyLD;
    }

    public set latencyLD(value: number) {
        this._latencyLD = value;
    }

}