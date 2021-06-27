export class SimulationStep {

    private _cycle: number;
    private _planificatedSetString: string;
    private _chosenSetString: string;


    constructor(cycle:number, planificatedSetString: string, chosenSet: string){
        this._cycle = cycle;
        this._planificatedSetString = planificatedSetString;
        this._chosenSetString = chosenSet;
    }


    public get cycle(): number {
        return this._cycle;
    }
    public set cycle(value: number) {
        this._cycle = value;
    }


    public get planificatedSetString(): string {
        return this._planificatedSetString;
    }
    public set planificatedSetString(value: string) {
        this._planificatedSetString = value;
    }


    public get chosenSetString(): string {
        return this._chosenSetString;
    }
    public set chosenSetString(value: string) {
        this._chosenSetString = value;
    }

}
