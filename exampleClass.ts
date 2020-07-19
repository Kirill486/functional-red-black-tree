export class ExampleClass {
    _values: Array<number>;

    constructor(values: number[]) {
        this._values = values;
    }
    
    get getKeys() {
        return [];
    }

    get values() {
        return this._values;
    }
}