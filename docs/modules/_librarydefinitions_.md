[functional-red-black-tree2](../globals.md) › ["libraryDefinitions"](_librarydefinitions_.md)

# Module: "libraryDefinitions"

## Index

### Enumerations

* [Color](../enums/_librarydefinitions_.color.md)

### Interfaces

* [IIterator](../interfaces/_librarydefinitions_.iiterator.md)
* [INode](../interfaces/_librarydefinitions_.inode.md)
* [ITree](../interfaces/_librarydefinitions_.itree.md)

### Type aliases

* [ComparisonResult](_librarydefinitions_.md#comparisonresult)
* [FunctionCompatator](_librarydefinitions_.md#functioncompatator)
* [Stack](_librarydefinitions_.md#stack)
* [VisitFunction](_librarydefinitions_.md#visitfunction)
* [nodeKey](_librarydefinitions_.md#nodekey)

## Type aliases

###  ComparisonResult

Ƭ **ComparisonResult**: *-1 | 0 | 1*

*Defined in [libraryDefinitions.ts:1](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L1)*

___

###  FunctionCompatator

Ƭ **FunctionCompatator**: *function*

*Defined in [libraryDefinitions.ts:64](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L64)*

#### Type declaration:

▸ (`a`: number, `b`: number): *[ComparisonResult](_librarydefinitions_.md#comparisonresult)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

___

###  Stack

Ƭ **Stack**: *Array‹[INode](../interfaces/_librarydefinitions_.inode.md)‹ValueType››*

*Defined in [libraryDefinitions.ts:34](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L34)*

___

###  VisitFunction

Ƭ **VisitFunction**: *function*

*Defined in [libraryDefinitions.ts:65](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L65)*

#### Type declaration:

▸ ‹**ValueType**›(`key`: [nodeKey](_librarydefinitions_.md#nodekey), `value`: ValueType): *any*

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](_librarydefinitions_.md#nodekey) |
`value` | ValueType |

___

###  nodeKey

Ƭ **nodeKey**: *number*

*Defined in [libraryDefinitions.ts:8](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L8)*
