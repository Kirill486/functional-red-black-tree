[functional-red-black-tree2](../globals.md) › ["rbtreeTree"](_rbtreetree_.md)

# Module: "rbtreeTree"

## Index

### Classes

* [RedBlackTree](../classes/_rbtreetree_.redblacktree.md)

### Functions

* [createRBTree](_rbtreetree_.md#const-createrbtree)
* [defaultCompare](_rbtreetree_.md#const-defaultcompare)
* [doVisit](_rbtreetree_.md#dovisit)
* [doVisitFull](_rbtreetree_.md#dovisitfull)
* [doVisitHalf](_rbtreetree_.md#dovisithalf)

## Functions

### `Const` createRBTree

▸ **createRBTree**‹**ValueType**›(`compare?`: [FunctionCompatator](_librarydefinitions_.md#functioncompatator)): *[RedBlackTree](../classes/_rbtreetree_.redblacktree.md)‹ValueType›*

*Defined in [rbtreeTree.ts:470](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L470)*

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type |
------ | ------ |
`compare?` | [FunctionCompatator](_librarydefinitions_.md#functioncompatator) |

**Returns:** *[RedBlackTree](../classes/_rbtreetree_.redblacktree.md)‹ValueType›*

___

### `Const` defaultCompare

▸ **defaultCompare**(`a`: [nodeKey](_librarydefinitions_.md#nodekey), `b`: [nodeKey](_librarydefinitions_.md#nodekey)): *1 | -1 | 0*

*Defined in [rbtreeTree.ts:459](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L459)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [nodeKey](_librarydefinitions_.md#nodekey) |
`b` | [nodeKey](_librarydefinitions_.md#nodekey) |

**Returns:** *1 | -1 | 0*

___

###  doVisit

▸ **doVisit**‹**ValueType**›(`lo`: [nodeKey](_librarydefinitions_.md#nodekey), `hi`: [nodeKey](_librarydefinitions_.md#nodekey), `compare`: [FunctionCompatator](_librarydefinitions_.md#functioncompatator), `visit`: [VisitFunction](_librarydefinitions_.md#visitfunction), `node`: [INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType›): *any*

*Defined in [rbtreeTree.ts:439](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L439)*

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type |
------ | ------ |
`lo` | [nodeKey](_librarydefinitions_.md#nodekey) |
`hi` | [nodeKey](_librarydefinitions_.md#nodekey) |
`compare` | [FunctionCompatator](_librarydefinitions_.md#functioncompatator) |
`visit` | [VisitFunction](_librarydefinitions_.md#visitfunction) |
`node` | [INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType› |

**Returns:** *any*

___

###  doVisitFull

▸ **doVisitFull**(`visit`: any, `node`: any): *any*

*Defined in [rbtreeTree.ts:410](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L410)*

**Parameters:**

Name | Type |
------ | ------ |
`visit` | any |
`node` | any |

**Returns:** *any*

___

###  doVisitHalf

▸ **doVisitHalf**‹**ValueType**›(`lo`: [nodeKey](_librarydefinitions_.md#nodekey), `compare`: [FunctionCompatator](_librarydefinitions_.md#functioncompatator), `visit`: [VisitFunction](_librarydefinitions_.md#visitfunction), `node`: [INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType›): *any*

*Defined in [rbtreeTree.ts:423](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeTree.ts#L423)*

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type |
------ | ------ |
`lo` | [nodeKey](_librarydefinitions_.md#nodekey) |
`compare` | [FunctionCompatator](_librarydefinitions_.md#functioncompatator) |
`visit` | [VisitFunction](_librarydefinitions_.md#visitfunction) |
`node` | [INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType› |

**Returns:** *any*
