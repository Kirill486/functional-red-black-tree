export enum Color {
    RED   = 0,
    BLACK = 1,
}

export type key = number;

export interface INode<ValueType>{
    key: key;
    value: ValueType;
    left: INode<ValueType>;
    right: INode<ValueType>;
    _count: number;
    _color: Color;
}

export type NodeConstructo<ValueType> = new (...args: any[]) => INode<ValueType>;
export type FunctionCompatator = any;
