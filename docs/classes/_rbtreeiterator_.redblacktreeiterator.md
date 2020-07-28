[functional-red-black-tree2](../globals.md) › ["rbtreeIterator"](../modules/_rbtreeiterator_.md) › [RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)

# Class: RedBlackTreeIterator ‹**ValueType**›

## Type parameters

▪ **ValueType**

## Hierarchy

* **RedBlackTreeIterator**

## Implements

* [IIterator](../interfaces/_librarydefinitions_.iiterator.md)‹ValueType›

## Index

### Constructors

* [constructor](_rbtreeiterator_.redblacktreeiterator.md#constructor)

### Properties

* [_stack](_rbtreeiterator_.redblacktreeiterator.md#_stack)
* [tree](_rbtreeiterator_.redblacktreeiterator.md#tree)

### Accessors

* [hasNext](_rbtreeiterator_.redblacktreeiterator.md#hasnext)
* [hasPrev](_rbtreeiterator_.redblacktreeiterator.md#hasprev)
* [index](_rbtreeiterator_.redblacktreeiterator.md#index)
* [key](_rbtreeiterator_.redblacktreeiterator.md#key)
* [node](_rbtreeiterator_.redblacktreeiterator.md#node)
* [valid](_rbtreeiterator_.redblacktreeiterator.md#valid)
* [value](_rbtreeiterator_.redblacktreeiterator.md#value)

### Methods

* [clone](_rbtreeiterator_.redblacktreeiterator.md#clone)
* [next](_rbtreeiterator_.redblacktreeiterator.md#next)
* [prev](_rbtreeiterator_.redblacktreeiterator.md#prev)
* [remove](_rbtreeiterator_.redblacktreeiterator.md#remove)
* [update](_rbtreeiterator_.redblacktreeiterator.md#update)

## Constructors

###  constructor

\+ **new RedBlackTreeIterator**(`tree`: [ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›, `stack`: [Stack](../modules/_librarydefinitions_.md#stack)‹ValueType›): *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)*

*Defined in [rbtreeIterator.ts:8](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType› |
`stack` | [Stack](../modules/_librarydefinitions_.md#stack)‹ValueType› |

**Returns:** *[RedBlackTreeIterator](_rbtreeiterator_.redblacktreeiterator.md)*

## Properties

###  _stack

• **_stack**: *[Stack](../modules/_librarydefinitions_.md#stack)‹ValueType›*

*Implementation of [IIterator](../interfaces/_librarydefinitions_.iiterator.md).[_stack](../interfaces/_librarydefinitions_.iiterator.md#_stack)*

*Defined in [rbtreeIterator.ts:8](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L8)*

___

###  tree

• **tree**: *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*

*Implementation of [IIterator](../interfaces/_librarydefinitions_.iiterator.md).[tree](../interfaces/_librarydefinitions_.iiterator.md#tree)*

*Defined in [rbtreeIterator.ts:7](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L7)*

## Accessors

###  hasNext

• **get hasNext**(): *boolean*

*Defined in [rbtreeIterator.ts:192](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L192)*

**Returns:** *boolean*

___

###  hasPrev

• **get hasPrev**(): *boolean*

*Defined in [rbtreeIterator.ts:248](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L248)*

**Returns:** *boolean*

___

###  index

• **get index**(): *number*

*Defined in [rbtreeIterator.ts:148](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L148)*

**Returns:** *number*

___

###  key

• **get key**(): *number*

*Defined in [rbtreeIterator.ts:134](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L134)*

**Returns:** *number*

___

###  node

• **get node**(): *[INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType›*

*Defined in [rbtreeIterator.ts:20](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L20)*

**Returns:** *[INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType›*

___

###  valid

• **get valid**(): *boolean*

*Defined in [rbtreeIterator.ts:15](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L15)*

**Returns:** *boolean*

___

###  value

• **get value**(): *ValueType*

*Defined in [rbtreeIterator.ts:141](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L141)*

**Returns:** *ValueType*

## Methods

###  clone

▸ **clone**(): *[IIterator](../interfaces/_librarydefinitions_.iiterator.md)‹ValueType›*

*Defined in [rbtreeIterator.ts:27](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L27)*

**Returns:** *[IIterator](../interfaces/_librarydefinitions_.iiterator.md)‹ValueType›*

___

###  next

▸ **next**(): *void*

*Defined in [rbtreeIterator.ts:171](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L171)*

**Returns:** *void*

___

###  prev

▸ **prev**(): *void*

*Defined in [rbtreeIterator.ts:227](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L227)*

**Returns:** *void*

___

###  remove

▸ **remove**(): *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*

*Defined in [rbtreeIterator.ts:31](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L31)*

**Returns:** *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*

___

###  update

▸ **update**(`value`: ValueType): *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*

*Defined in [rbtreeIterator.ts:208](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/rbtreeIterator.ts#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ValueType |

**Returns:** *[ITree](../interfaces/_librarydefinitions_.itree.md)‹ValueType›*
