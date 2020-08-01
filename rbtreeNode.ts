import { Color, INode, nodeKey } from "./libraryDefinitions"

export class RBNode<ValueType> implements INode<ValueType> {
    _color: Color;
    _count: number;
    key: nodeKey;
    left: INode<ValueType>;
    right: INode<ValueType>;
    value: ValueType;

    constructor(color: Color, key: nodeKey, value: ValueType, left: INode<any>, right: INode<any>, count) {
        this._color = color;
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
        this._count = count;
    }

}

export function cloneNode(node) {
  return new RBNode(node._color, node.key, node.value, node.left, node.right, node._count) as INode<any>;
}

export function repaint(color, node) {
  return new RBNode(color, node.key, node.value, node.left, node.right, node._count) as INode<any>;
}

export function recount(node) {
  node._count = 1 + (node.left ? node.left._count : 0) + (node.right ? node.right._count : 0)
}
