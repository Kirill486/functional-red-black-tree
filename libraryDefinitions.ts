export enum Color {
    RED   = 0,
    BLACK = 1,
}

export type nodeKey = number;

export interface ITree<ValueType> {
    _compare: FunctionCompatator;
    root: INode<ValueType>;
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

export type NodeConstructo<ValueType> = new (...args: any[]) => INode<ValueType>;
export type FunctionCompatator = any;
