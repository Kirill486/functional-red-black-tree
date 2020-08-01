[functional-red-black-tree2](../globals.md) › [ITree](itree.md)

# Interface: ITree ‹**ValueType**›

## Type parameters

▪ **ValueType**

## Hierarchy

* **ITree**

## Index

### Properties

* [_compare](itree.md#readonly-_compare)
* [at](itree.md#at)
* [begin](itree.md#readonly-begin)
* [end](itree.md#readonly-end)
* [find](itree.md#find)
* [forEach](itree.md#foreach)
* [ge](itree.md#ge)
* [get](itree.md#get)
* [gt](itree.md#gt)
* [insert](itree.md#insert)
* [keys](itree.md#readonly-keys)
* [le](itree.md#le)
* [length](itree.md#readonly-length)
* [lt](itree.md#lt)
* [remove](itree.md#remove)
* [root](itree.md#root)
* [values](itree.md#readonly-values)

## Properties

### `Readonly` _compare

• **_compare**: *[FunctionCompatator](../globals.md#functioncompatator)*

*Defined in [libraryDefinitions.ts:16](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L16)*

Comparison function, same semantics as ```array.sort()```

___

###  at

• **at**: *function*

*Defined in [libraryDefinitions.ts:49](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L49)*

Finds an iterator starting at the given element, otherwise

#### Type declaration:

▸ (`idx`: number): *[IIterator](iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

___

### `Readonly` begin

• **begin**: *[IIterator](iiterator.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:34](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L34)*

An iterator pointing to the first element in the tree

___

### `Readonly` end

• **end**: *[IIterator](iiterator.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:37](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L37)*

An iterator pointing to the last element in the tree

___

###  find

• **find**: *function*

*Defined in [libraryDefinitions.ts:64](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L64)*

Returns an iterator pointing to the first item in the tree with key, otherwise.

#### Type declaration:

▸ (`key`: [nodeKey](../globals.md#nodekey)): *[IIterator](iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../globals.md#nodekey) |

___

###  forEach

• **forEach**: *function*

*Defined in [libraryDefinitions.ts:22](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L22)*

Walks a visit function over the nodes of the tree in order.

#### Type declaration:

▸ (`visit`: [VisitFunction](../globals.md#visitfunction), `lo?`: [nodeKey](../globals.md#nodekey), `hi?`: [nodeKey](../globals.md#nodekey)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`visit` | [VisitFunction](../globals.md#visitfunction) |
`lo?` | [nodeKey](../globals.md#nodekey) |
`hi?` | [nodeKey](../globals.md#nodekey) |

___

###  ge

• **ge**: *function*

*Defined in [libraryDefinitions.ts:52](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L52)*

Find the first item in the tree whose ```key is >= key```

#### Type declaration:

▸ (`key`: [nodeKey](../globals.md#nodekey)): *[IIterator](iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../globals.md#nodekey) |

___

###  get

• **get**: *function*

*Defined in [libraryDefinitions.ts:40](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L40)*

Retrieves the value associated to the given key

#### Type declaration:

▸ (`key`: [nodeKey](../globals.md#nodekey)): *ValueType*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../globals.md#nodekey) |

___

###  gt

• **gt**: *function*

*Defined in [libraryDefinitions.ts:55](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L55)*

Finds the first item in the tree whose ```key is > key```

#### Type declaration:

▸ (`key`: [nodeKey](../globals.md#nodekey)): *[IIterator](iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../globals.md#nodekey) |

___

###  insert

• **insert**: *function*

*Defined in [libraryDefinitions.ts:43](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L43)*

Creates a **new tree** with the new pair inserted

#### Type declaration:

▸ (`key`: [nodeKey](../globals.md#nodekey), `value`: ValueType): *[ITree](itree.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../globals.md#nodekey) |
`value` | ValueType |

___

### `Readonly` keys

• **keys**: *[nodeKey](../globals.md#nodekey)[]*

*Defined in [libraryDefinitions.ts:25](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L25)*

A sorted array of all the keys in the tree

___

###  le

• **le**: *function*

*Defined in [libraryDefinitions.ts:61](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L61)*

Finds the last item in the tree whose ```key is <= key```

#### Type declaration:

▸ (`key`: [nodeKey](../globals.md#nodekey)): *[IIterator](iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../globals.md#nodekey) |

___

### `Readonly` length

• **length**: *number*

*Defined in [libraryDefinitions.ts:31](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L31)*

The number of items in the tree

___

###  lt

• **lt**: *function*

*Defined in [libraryDefinitions.ts:58](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L58)*

Finds the last item in the tree whose ```key is < key```

#### Type declaration:

▸ (`key`: [nodeKey](../globals.md#nodekey)): *[IIterator](iiterator.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../globals.md#nodekey) |

___

###  remove

• **remove**: *function*

*Defined in [libraryDefinitions.ts:46](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L46)*

Creates a **new tree** with the **first item with given key** removed

#### Type declaration:

▸ (`key`: [nodeKey](../globals.md#nodekey)): *[ITree](itree.md)‹ValueType›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [nodeKey](../globals.md#nodekey) |

___

###  root

• **root**: *[INode](inode.md)‹ValueType›*

*Defined in [libraryDefinitions.ts:19](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L19)*

The root node of the tree

___

### `Readonly` values

• **values**: *ValueType[]*

*Defined in [libraryDefinitions.ts:28](https://github.com/Kirill486/functional-red-black-tree/blob/4069834/libraryDefinitions.ts#L28)*

An array array of all the values in the tree
