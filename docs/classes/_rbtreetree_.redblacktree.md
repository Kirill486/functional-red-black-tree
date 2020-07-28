[functional-red-black-tree2](../globals.md) › ["rbtreeTree"](../modules/_rbtreetree_.md) › [RedBlackTree](_rbtreetree_.redblacktree.md)

# Class: RedBlackTree ‹**ValueType**›

## Type parameters

▪ **ValueType**

## Hierarchy

* **RedBlackTree**

## Implements

* [ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›

## Index

### Constructors

* [constructor](_rbtreetree_.redblacktree.md#constructor)

### Properties

* [_compare](_rbtreetree_.redblacktree.md#_compare)
* [root](_rbtreetree_.redblacktree.md#root)

### Accessors

* [begin](_rbtreetree_.redblacktree.md#begin)
* [end](_rbtreetree_.redblacktree.md#end)
* [keys](_rbtreetree_.redblacktree.md#keys)
* [length](_rbtreetree_.redblacktree.md#length)
* [values](_rbtreetree_.redblacktree.md#values)

### Methods

* [at](_rbtreetree_.redblacktree.md#at)
* [find](_rbtreetree_.redblacktree.md#find)
* [forEach](_rbtreetree_.redblacktree.md#foreach)
* [ge](_rbtreetree_.redblacktree.md#ge)
* [get](_rbtreetree_.redblacktree.md#get)
* [gt](_rbtreetree_.redblacktree.md#gt)
* [insert](_rbtreetree_.redblacktree.md#insert)
* [le](_rbtreetree_.redblacktree.md#le)
* [lt](_rbtreetree_.redblacktree.md#lt)
* [remove](_rbtreetree_.redblacktree.md#remove)

## Constructors

###  constructor

\+ **new RedBlackTree**(`compare`: [FunctionCompatator](../modules/_librarydefinitions_.md#functioncompatator), `root`: [INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType›): *[RedBlackTree](_rbtreetree_.redblacktree.md)*

*Defined in [rbtreeTree.ts:7](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`compare` | [FunctionCompatator](../modules/_librarydefinitions_.md#functioncompatator) |
`root` | [INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType› |

**Returns:** *[RedBlackTree](_rbtreetree_.redblacktree.md)*

## Properties

###  _compare

• **_compare**: *[FunctionCompatator](../modules/_librarydefinitions_.md#functioncompatator)*

*Implementation of [ITree](../interfaces/_librarydefinitions_.itree.md).[_compare](../interfaces/_librarydefinitions_.itree.md#readonly-_compare)*

*Defined in [rbtreeTree.ts:6](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L6)*

___

###  root

• **root**: *[INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType›*

*Implementation of [ITree](../interfaces/_librarydefinitions_.itree.md).[root](../interfaces/_librarydefinitions_.itree.md#root)*

*Defined in [rbtreeTree.ts:7](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L7)*

## Accessors

###  begin

• **get begin**(): *[IIterator](../interfaces/_librarydefinitions_.iiterator.md)‹ValueType›*

*Defined in [rbtreeTree.ts:229](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L229)*

**Returns:** *[IIterator](../interfaces/_librarydefinitions_.iiterator.md)‹ValueType›*

___

###  end

• **get end**(): *[IIterator](../interfaces/_librarydefinitions_.iiterator.md)‹ValueType›*

*Defined in [rbtreeTree.ts:239](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L239)*

**Returns:** *[IIterator](../interfaces/_librarydefinitions_.iiterator.md)‹ValueType›*

___

###  keys

• **get keys**(): *[nodeKey](../modules/_librarydefinitions_.md#nodekey)[]*

*Defined in [rbtreeTree.ts:42](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L42)*

**Returns:** *[nodeKey](../modules/_librarydefinitions_.md#nodekey)[]*

___

###  length

• **get length**(): *number*

*Defined in [rbtreeTree.ts:58](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L58)*

**Returns:** *number*

___

###  values

• **get values**(): *ValueType[]*

*Defined in [rbtreeTree.ts:50](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L50)*

**Returns:** *ValueType[]*

## Methods

###  at

▸ **at**(`idx`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

*Defined in [rbtreeTree.ts:249](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L249)*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

___

###  find

▸ **find**(`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

*Defined in [rbtreeTree.ts:364](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L364)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

___

###  forEach

▸ **forEach**(`visit`: [VisitFunction](../modules/_librarydefinitions_.md#visitfunction), `lo?`: [nodeKey](../modules/_librarydefinitions_.md#nodekey), `hi?`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *any*

*Defined in [rbtreeTree.ts:14](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`visit` | [VisitFunction](../modules/_librarydefinitions_.md#visitfunction) |
`lo?` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |
`hi?` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *any*

___

###  ge

▸ **ge**(`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

*Defined in [rbtreeTree.ts:280](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L280)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

___

###  get

▸ **get**(`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *ValueType*

*Defined in [rbtreeTree.ts:391](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L391)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *ValueType*

___

###  gt

▸ **gt**(`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

*Defined in [rbtreeTree.ts:301](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L301)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

___

###  insert

▸ **insert**(`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey), `value`: ValueType): *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*

*Defined in [rbtreeTree.ts:65](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |
`value` | ValueType |

**Returns:** *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*

___

###  le

▸ **le**(`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

*Defined in [rbtreeTree.ts:343](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L343)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

___

###  lt

▸ **lt**(`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

*Defined in [rbtreeTree.ts:322](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)‹ValueType›*

___

###  remove

▸ **remove**(`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*

*Defined in [rbtreeTree.ts:383](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L383)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

**Returns:** *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*
