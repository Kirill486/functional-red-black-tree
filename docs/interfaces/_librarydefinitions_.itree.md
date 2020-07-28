[functional-red-black-tree2](../globals.md) › ["libraryDefinitions"](../modules/_librarydefinitions_.md) › [ITree](_librarydefinitions_.itree.md)

# Interface: ITree ‹**ValueType**›

## Type parameters

▪ **ValueType**

## Hierarchy

* **ITree**

## Implemented by

* [RedBlackTree](../classes/_rbtreetree_.redblacktree.md)

## Index

### Properties

* [_compare](_librarydefinitions_.itree.md#readonly-_compare)
* [at](_librarydefinitions_.itree.md#at)
* [begin](_librarydefinitions_.itree.md#readonly-begin)
* [end](_librarydefinitions_.itree.md#readonly-end)
* [find](_librarydefinitions_.itree.md#find)
* [forEach](_librarydefinitions_.itree.md#foreach)
* [ge](_librarydefinitions_.itree.md#ge)
* [get](_librarydefinitions_.itree.md#get)
* [gt](_librarydefinitions_.itree.md#gt)
* [insert](_librarydefinitions_.itree.md#insert)
* [keys](_librarydefinitions_.itree.md#readonly-keys)
* [le](_librarydefinitions_.itree.md#le)
* [length](_librarydefinitions_.itree.md#readonly-length)
* [lt](_librarydefinitions_.itree.md#lt)
* [remove](_librarydefinitions_.itree.md#remove)
* [root](_librarydefinitions_.itree.md#root)
* [values](_librarydefinitions_.itree.md#readonly-values)

## Properties

### `Readonly` _compare

• **_compare**: *[FunctionCompatator](../modules/_librarydefinitions_.md#functioncompatator)*

*Defined in [libraryDefinitions.ts:11](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L11)*

___

###  at

• **at**: *function*

*Defined in [libraryDefinitions.ts:26](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L26)*

#### Type declaration:

▸ (`idx`: number): *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

___

### `Readonly` begin

• **begin**: *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:19](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L19)*

___

### `Readonly` end

• **end**: *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:20](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L20)*

___

###  find

• **find**: *function*

*Defined in [libraryDefinitions.ts:31](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L31)*

#### Type declaration:

▸ (`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

___

###  forEach

• **forEach**: *function*

*Defined in [libraryDefinitions.ts:14](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L14)*

#### Type declaration:

▸ (`visit`: [VisitFunction](../modules/_librarydefinitions_.md#visitfunction), `lo?`: [nodeKey](../modules/_librarydefinitions_.md#nodekey), `hi?`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`visit` | [VisitFunction](../modules/_librarydefinitions_.md#visitfunction) |
`lo?` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |
`hi?` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

___

###  ge

• **ge**: *function*

*Defined in [libraryDefinitions.ts:27](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L27)*

#### Type declaration:

▸ (`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

___

###  get

• **get**: *function*

*Defined in [libraryDefinitions.ts:22](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L22)*

#### Type declaration:

▸ (`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *ValueType*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

___

###  gt

• **gt**: *function*

*Defined in [libraryDefinitions.ts:28](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L28)*

#### Type declaration:

▸ (`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

___

###  insert

• **insert**: *function*

*Defined in [libraryDefinitions.ts:23](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L23)*

#### Type declaration:

▸ (`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey), `value`: ValueType): *[ITree](_librarydefinitions_.itree.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |
`value` | ValueType |

___

### `Readonly` keys

• **keys**: *[nodeKey](../modules/_librarydefinitions_.md#nodekey)[]*

*Defined in [libraryDefinitions.ts:16](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L16)*

___

###  le

• **le**: *function*

*Defined in [libraryDefinitions.ts:30](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L30)*

#### Type declaration:

▸ (`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

___

### `Readonly` length

• **length**: *number*

*Defined in [libraryDefinitions.ts:18](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L18)*

___

###  lt

• **lt**: *function*

*Defined in [libraryDefinitions.ts:29](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L29)*

#### Type declaration:

▸ (`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[IIterator](_librarydefinitions_.iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

___

###  remove

• **remove**: *function*

*Defined in [libraryDefinitions.ts:24](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L24)*

#### Type declaration:

▸ (`key`: [nodeKey](../modules/_librarydefinitions_.md#nodekey)): *[ITree](_librarydefinitions_.itree.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../modules/_librarydefinitions_.md#nodekey) |

___

###  root

• **root**: *[INode](_librarydefinitions_.inode.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:12](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L12)*

___

### `Readonly` values

• **values**: *ValueType[]*

*Defined in [libraryDefinitions.ts:17](https://github.com/Kirill486/functional-red-black-tree/blob/e575cd5/libraryDefinitions.ts#L17)*
