[functional-red-black-tree2](../globals.md) › ["libraryDefinitions"](../modules/_librarydefinitions_.md) › [IIterator](_librarydefinitions_.iiterator.md)

# Interface: IIterator ‹**ValueType**›

## Type parameters

▪ **ValueType**

## Hierarchy

* **IIterator**

## Implemented by

* [RedBlackTreeIterator](../classes/_rbtreeiterator_.redblacktreeiterator.md)

## Index

### Properties

* [_stack](_librarydefinitions_.iiterator.md#_stack)
* [clone](_librarydefinitions_.iiterator.md#clone)
* [hasNext](_librarydefinitions_.iiterator.md#readonly-hasnext)
* [hasPrev](_librarydefinitions_.iiterator.md#readonly-hasprev)
* [index](_librarydefinitions_.iiterator.md#readonly-index)
* [key](_librarydefinitions_.iiterator.md#readonly-key)
* [next](_librarydefinitions_.iiterator.md#next)
* [node](_librarydefinitions_.iiterator.md#readonly-node)
* [prev](_librarydefinitions_.iiterator.md#prev)
* [remove](_librarydefinitions_.iiterator.md#remove)
* [tree](_librarydefinitions_.iiterator.md#tree)
* [update](_librarydefinitions_.iiterator.md#update)
* [valid](_librarydefinitions_.iiterator.md#readonly-valid)
* [value](_librarydefinitions_.iiterator.md#readonly-value)

## Properties

###  _stack

• **_stack**: *[Stack](../modules/_librarydefinitions_.md#stack)‹ValueType›*

*Defined in [libraryDefinitions.ts:47](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L47)*

___

###  clone

• **clone**: *function*

*Defined in [libraryDefinitions.ts:58](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L58)*

#### Type declaration:

▸ (): *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

___

### `Readonly` hasNext

• **hasNext**: *boolean*

*Defined in [libraryDefinitions.ts:54](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L54)*

___

### `Readonly` hasPrev

• **hasPrev**: *boolean*

*Defined in [libraryDefinitions.ts:55](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L55)*

___

### `Readonly` index

• **index**: *number*

*Defined in [libraryDefinitions.ts:53](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L53)*

___

### `Readonly` key

• **key**: *number*

*Defined in [libraryDefinitions.ts:51](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L51)*

___

###  next

• **next**: *function*

*Defined in [libraryDefinitions.ts:61](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L61)*

#### Type declaration:

▸ (): *void*

___

### `Readonly` node

• **node**: *[INode](_librarydefinitions_.inode.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:50](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L50)*

___

###  prev

• **prev**: *function*

*Defined in [libraryDefinitions.ts:60](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L60)*

#### Type declaration:

▸ (): *void*

___

###  remove

• **remove**: *function*

*Defined in [libraryDefinitions.ts:59](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L59)*

#### Type declaration:

▸ (): *[ITree](_librarydefinitions_.itree.md)‹ValueType›*

___

###  tree

• **tree**: *[ITree](_librarydefinitions_.itree.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:46](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L46)*

___

###  update

• **update**: *function*

*Defined in [libraryDefinitions.ts:57](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L57)*

#### Type declaration:

▸ (`value`: ValueType): *[ITree](_librarydefinitions_.itree.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ValueType |

___

### `Readonly` valid

• **valid**: *boolean*

*Defined in [libraryDefinitions.ts:49](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L49)*

___

### `Readonly` value

• **value**: *ValueType*

*Defined in [libraryDefinitions.ts:52](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L52)*
