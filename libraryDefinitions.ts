export enum Color {
    RED   = 0,
    BLACK = 1,
}

export type nodeKey = number;

export interface ITree<ValueType> {
    readonly _compare: FunctionCompatator;
    root: INode<ValueType>;

    forEach: any;

    readonly keys: nodeKey[];
    readonly values: ValueType[];
    readonly length: number;
    readonly begin: INode<ValueType>;
    readonly end: INode<ValueType>;

    get: (key: nodeKey) => ValueType;
    insert: (key: nodeKey, value: ValueType) => ITree<ValueType>;
    remove: (key: nodeKey) => void;

    at: (idx: number) => IIterator<ValueType>;
    ge: (key: nodeKey) => IIterator<ValueType>;
    gt: (key: nodeKey) => IIterator<ValueType>;
    lt: (key: nodeKey) => IIterator<ValueType>;
    le: (key: nodeKey) => IIterator<ValueType>;
    find: (key: nodeKey) => IIterator<ValueType>;
}

export type Stack<ValueType> = Array<INode<ValueType>>

export interface INode<ValueType>{
    key: nodeKey;
    value: ValueType;
    left: INode<ValueType>;
    right: INode<ValueType>;
    _count: number;
    _color: Color;
}

export interface IIterator<ValueType> {
    readonly valid: boolean;
    readonly node: INode<ValueType>;
    readonly key: number;
    readonly value: ValueType;
    readonly index: number;
    readonly hasNext: boolean;
    readonly hasPrev: boolean;

    update: (value: ValueType) => ITree<ValueType>;
    clone: () => IIterator<ValueType>;
    remove: () => ITree<ValueType>;
    prev: () => void;
    next: () => void;
}

export type FunctionCompatator = <ValueType>(a: ValueType, b: ValueType) => -1 | 0 | 1;
