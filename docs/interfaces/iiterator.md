[functional-red-black-tree2](../globals.md) › [IIterator](iiterator.md)

# Interface: IIterator ‹**ValueType**›

## Type parameters

▪ **ValueType**

## Hierarchy

* **IIterator**

## Index

### Properties

* [_stack](iiterator.md#_stack)
* [clone](iiterator.md#clone)
* [hasNext](iiterator.md#readonly-hasnext)
* [hasPrev](iiterator.md#readonly-hasprev)
* [index](iiterator.md#readonly-index)
* [key](iiterator.md#readonly-key)
* [next](iiterator.md#next)
* [node](iiterator.md#readonly-node)
* [prev](iiterator.md#prev)
* [remove](iiterator.md#remove)
* [tree](iiterator.md#tree)
* [update](iiterator.md#update)
* [valid](iiterator.md#readonly-valid)
* [value](iiterator.md#readonly-value)

## Properties

###  _stack

• **_stack**: *[Stack](../globals.md#stack)‹ValueType›*

*Defined in [libraryDefinitions.ts:94](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L94)*

We do not interface this

___

###  clone

• **clone**: *function*

*Defined in [libraryDefinitions.ts:121](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L121)*

Returns a **new Iterator** that points at the same tree element

#### Type declaration:

▸ (): *[IIterator](iiterator.md)‹ValueType›*

___

### `Readonly` hasNext

• **hasNext**: *boolean*

*Defined in [libraryDefinitions.ts:112](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L112)*

If true, then the iterator is not at the end of the sequence

___

### `Readonly` hasPrev

• **hasPrev**: *boolean*

*Defined in [libraryDefinitions.ts:115](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L115)*

If true, then the iterator is not at the beginning of the sequence

___

### `Readonly` index

• **index**: *number*

*Defined in [libraryDefinitions.ts:109](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L109)*

Returns the position of this iterator in the sequence

___

### `Readonly` key

• **key**: *number*

*Defined in [libraryDefinitions.ts:103](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L103)*

The key of the item referenced by the iterator

___

###  next

• **next**: *function*

*Defined in [libraryDefinitions.ts:130](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L130)*

Moves the iterator backward one element

#### Type declaration:

▸ (): *void*

___

### `Readonly` node

• **node**: *[INode](inode.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:100](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L100)*

The value of the node at the iterator's current position

___

###  prev

• **prev**: *function*

*Defined in [libraryDefinitions.ts:127](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L127)*

Advances the iterator to the next position

#### Type declaration:

▸ (): *void*

___

###  remove

• **remove**: *function*

*Defined in [libraryDefinitions.ts:124](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L124)*

reates a **new tree** with the **item that is pointed by the iterator** removed

#### Type declaration:

▸ (): *[ITree](itree.md)‹ValueType›*

___

###  tree

• **tree**: *[ITree](itree.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:91](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L91)*

The tree associated to the iterator

___

###  update

• **update**: *function*

*Defined in [libraryDefinitions.ts:118](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L118)*

Creates a **new tree** with the **item that is pointed by the iterator** updated

#### Type declaration:

▸ (`value`: ValueType): *[ITree](itree.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ValueType |

___

### `Readonly` valid

• **valid**: *boolean*

*Defined in [libraryDefinitions.ts:97](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L97)*

Checks if the iterator is valid

___

### `Readonly` value

• **value**: *ValueType*

*Defined in [libraryDefinitions.ts:106](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L106)*

The value of the item referenced by the iterator
