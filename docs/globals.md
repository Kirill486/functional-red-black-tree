[functional-red-black-tree2](globals.md)

# functional-red-black-tree2

## Index

### Enumerations

* [Color](enums/color.md)

### Interfaces

* [IIterator](interfaces/iiterator.md)
* [INode](interfaces/inode.md)
* [ITree](interfaces/itree.md)

### Type aliases

* [ComparisonResult](globals.md#comparisonresult)
* [FunctionCompatator](globals.md#functioncompatator)
* [Stack](globals.md#stack)
* [VisitFunction](globals.md#visitfunction)
* [nodeKey](globals.md#nodekey)

## Type aliases

###  ComparisonResult

Ƭ **ComparisonResult**: *-1 | 0 | 1*

*Defined in [libraryDefinitions.ts:2](https://github.com/Kirill486/functional-red-black-tree/blob/450d033/libraryDefinitions.ts#L2)*

The same semantics as ```array.sort()```

___

###  FunctionCompatator

Ƭ **FunctionCompatator**: *function*

*Defined in [libraryDefinitions.ts:134](https://github.com/Kirill486/functional-red-black-tree/blob/450d033/libraryDefinitions.ts#L134)*

Comparison function, same semantics as ```array.sort()```

#### Type declaration:

▸ (`a`: number, `b`: number): *[ComparisonResult](globals.md#comparisonresult)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

___

###  Stack

Ƭ **Stack**: *Array‹[INode](interfaces/inode.md)‹ValueType››*

*Defined in [libraryDefinitions.ts:67](https://github.com/Kirill486/functional-red-black-tree/blob/450d033/libraryDefinitions.ts#L67)*

___

###  VisitFunction

Ƭ **VisitFunction**: *function*

*Defined in [libraryDefinitions.ts:137](https://github.com/Kirill486/functional-red-black-tree/blob/450d033/libraryDefinitions.ts#L137)*

A function to execute for each node or each element

#### Type declaration:

▸ ‹**ValueType**›(`key`: [nodeKey](globals.md#nodekey), `value`: ValueType): *any*

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](globals.md#nodekey) |
`value` | ValueType |

___

###  nodeKey

Ƭ **nodeKey**: *number*

*Defined in [libraryDefinitions.ts:11](https://github.com/Kirill486/functional-red-black-tree/blob/450d033/libraryDefinitions.ts#L11)*

Tree stores data by number keys
