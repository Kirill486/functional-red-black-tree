/** The same semantics as ```array.sort()``` */
export type ComparisonResult = -1 | 0 | 1;

/** Node color */
export enum Color {
    RED   = 0,
    BLACK = 1,
}

/** Tree stores data by number keys */
export type nodeKey = number;

export interface ITree<ValueType> {

    /** Comparison function, same semantics as ```array.sort()``` */
    readonly _compare: FunctionCompatator;

    /** The root node of the tree */
    root: INode<ValueType>;

    /** Walks a visit function over the nodes of the tree in order. */
    forEach: (visit: VisitFunction, lo?: nodeKey, hi?: nodeKey) => any;

    /** A sorted array of all the keys in the tree */
    readonly keys: nodeKey[];

    /** An array array of all the values in the tree */
    readonly values: ValueType[];

    /** The number of items in the tree */
    readonly length: number;

    /** An iterator pointing to the first element in the tree */
    readonly begin: IIterator<ValueType>;

    /** An iterator pointing to the last element in the tree */
    readonly end: IIterator<ValueType>;

    /** Retrieves the value associated to the given key */
    get: (key: nodeKey) => ValueType;

    /** Creates a **new tree** with the new pair inserted */
    insert: (key: nodeKey, value: ValueType) => ITree<ValueType>;

    /** Creates a **new tree** with the **first item with given key** removed */
    remove: (key: nodeKey) => ITree<ValueType>;

    /** Finds an iterator starting at the given element, otherwise */
    at: (idx: number) => IIterator<ValueType>;

    /** Find the first item in the tree whose ```key is >= key``` */
    ge: (key: nodeKey) => IIterator<ValueType>;

    /** Finds the first item in the tree whose ```key is > key``` */
    gt: (key: nodeKey) => IIterator<ValueType>;

    /** Finds the last item in the tree whose ```key is < key``` */
    lt: (key: nodeKey) => IIterator<ValueType>;

    /** Finds the last item in the tree whose ```key is <= key``` */
    le: (key: nodeKey) => IIterator<ValueType>;

    /** Returns an iterator pointing to the first item in the tree with key, otherwise. */
    find: (key: nodeKey) => IIterator<ValueType>;
}

export type Stack<ValueType> = INode<ValueType>[];

export interface INode<ValueType>{
    /** The key associated to the node */
    key: nodeKey;

    /** The value associated to the node */
    value: ValueType;

    /** The left subtree of the node */
    left: INode<ValueType>;

    /** The right subtree of the node */
    right: INode<ValueType>;

    /** Node leaves count */
    _count: number;

    /** Node color */
    _color: Color;
}

export interface IIterator<ValueType> {
    /** The tree associated to the iterator */
    tree: ITree<ValueType>;

    /** We do not interface this */
    _stack: Stack<ValueType>

    /** Checks if the iterator is valid */
    readonly valid: boolean;

    /** The value of the node at the iterator's current position */
    readonly node: INode<ValueType>;

    /** The key of the item referenced by the iterator */
    readonly key: number;

    /** The value of the item referenced by the iterator */
    readonly value: ValueType;

    /** Returns the position of this iterator in the sequence */
    readonly index: number;

    /** If true, then the iterator is not at the end of the sequence */
    readonly hasNext: boolean;

    /** If true, then the iterator is not at the beginning of the sequence */
    readonly hasPrev: boolean;

    /** Creates a **new tree** with the **item that is pointed by the iterator** updated */
    update: (value: ValueType) => ITree<ValueType>;

    /** Returns a **new Iterator** that points at the same tree element */
    clone: () => IIterator<ValueType>;

    /** reates a **new tree** with the **item that is pointed by the iterator** removed */
    remove: () => ITree<ValueType>;

    /** Advances the iterator to the next position */
    prev: () => void;

    /** Moves the iterator backward one element */
    next: () => void;
}

/** Comparison function, same semantics as ```array.sort()``` */
export type FunctionCompatator = (a: number, b: number) => ComparisonResult;

/** A function to execute for each node or each element */
export type VisitFunction = <ValueType>(key: nodeKey, value: ValueType) => any;
