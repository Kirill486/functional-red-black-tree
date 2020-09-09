import { RedBlackTree } from "../red-black-tree/rbtreeTree";
import {GenericTree, FunctionCompatator, VisitFunction, HashFunction, IIterator, INode} from '../libraryDefinitions';

export class HashTreeMap<KeyType, ValueType> implements GenericTree<KeyType, ValueType> {
    _compare: FunctionCompatator;
    root: INode<ValueType>;
    forEach: (visit: VisitFunction, lo?: number, hi?: number) => any;
    keys: number[];
    values: ValueType[];
    length: number;
    begin: IIterator<ValueType>;
    end: IIterator<ValueType>;
    get: (key: number) => ValueType;
    insert: (key: number, value: ValueType) => GenericTree<KeyType, ValueType>;
    remove: (key: number) => GenericTree<KeyType, ValueType>;
    at: (idx: number) => IIterator<ValueType>;
    ge: (key: number) => IIterator<ValueType>;
    gt: (key: number) => IIterator<ValueType>;
    lt: (key: number) => IIterator<ValueType>;
    le: (key: number) => IIterator<ValueType>;
    find: (key: number) => IIterator<ValueType>;

    constructor(
        compare: FunctionCompatator,
        root: INode<ValueType>,
        hashFunction: HashFunction<ValueType>,
    ) {
        this.innerSearchTree = new RedBlackTree(compare, root);
        this.hashFunction = hashFunction;

    }

    innerSearchTree: RedBlackTree<ValueType>;
    hashFunction: (ValueType: ValueType) => number;
}