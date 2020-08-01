"use strict"

import {createRBTree as makeTree} from '../rbtree';
import { nodeKey } from '../libraryDefinitions';

import * as tape from "tape";
import * as iota from "iota-array";

const COLORS = [ "r", "b", "bb" ]

function printTree(tree) {
  if(!tree) {
    return []
  }
  return [ COLORS[tree._color], tree.key, printTree(tree.left), printTree(tree.right) ]
}

// Ensures the red black axioms are satisfied by tree
function checkTree(tree, t) {
  if(!tree.root) {
    return
  }
  t.equals(tree.root._color, 1, "root is black")
  function checkNode(node) {
    if(!node) {
      return [1, 0]
    }
    if(node._color === 0) {
      t.assert(!node.left || node.left._color === 1, "children of red node must be black")
      t.assert(!node.right || node.right._color === 1, "children of red node must be black")
    } else {
      t.equals(node._color, 1, "node color must be red or black")
    }
    if(node.left) {
      t.assert(tree._compare(node.left.key, node.key) <= 0, "left tree order invariant")
    }
    if(node.right) {
      t.assert(tree._compare(node.right.key, node.key) >= 0, "right tree order invariant")
    }
    const cl = checkNode(node.left)
    const cr = checkNode(node.right)
    t.equals(cl[0], cr[0], "number of black nodes along all paths to root must be constant")
    t.equals(cl[1] + cr[1] + 1, node._count, "item count consistency")
    return [cl[0] + node._color,  cl[1] + cr[1] + 1]
  }
  const r = checkNode(tree.root)
  t.equals(r[1], tree.length, "tree length")
}

tape("insert()", (t) => {
  const t1 = makeTree()

  let u = t1
  const arr = []
  for(let i=20; i>=0; --i) {
    const x = i
    const next = u.insert(x, true)
    checkTree(u, t)
    checkTree(next, t)
    t.equals(u.length, arr.length)
    arr.push(x)
    u = next
  }
  for(let i=-20; i<0; ++i) {
    const x = i
    const next = u.insert(x, true)
    checkTree(u, t)
    checkTree(next, t)
    arr.sort((a,b) => { return a-b })
    let ptr = 0
    u.forEach((k,v) => {
      t.equals(k, arr[ptr++])
    })
    t.equals(ptr, arr.length)
    arr.push(x)
    u = next
  }

  const start = u.begin
  for(let i=-20, j=0; j<=40; ++i, ++j) {
    t.equals(u.at(j).key, i, "checking at()")
    t.equals(start.key, i, "checking iter")
    t.equals(start.index, j, "checking index")
    t.assert(start.valid, "checking valid")
    if(j < 40) {
      t.assert(start.hasNext, "hasNext()")
    } else {
      t.assert(!start.hasNext, "eof hasNext()")
    }
    start.next()
  }
  t.assert(!start.valid, "invalid eof iterator")
  t.assert(!start.hasNext, "hasNext() at eof fail")
  t.equals(start.index, 41, "eof index")

  t.end()
})

tape("foreach", (t) => {
  const u = iota(31).reduce((u, k, v) => {
    return u.insert(k, v)
  }, makeTree())

  // Check basic foreach
  // tslint:disable-next-line: variable-name
  let visit_keys = []
  let visit_vals = []
  u.forEach((k,v) => {
    visit_keys.push(k)
    visit_vals.push(v)
  })
  t.same(visit_keys, u.keys)
  t.same(visit_vals, u.values)

  // Check foreach with termination
  visit_keys = []
  visit_vals = []
  t.equals(u.forEach((k,v) => {
    if(k === 5) {
      return 1000
    }
    visit_keys.push(k)
    visit_vals.push(v)
  }), 1000)
  t.same(visit_keys, u.keys.slice(0, 5))
  t.same(visit_vals, u.values.slice(0, 5))

  // Check half interval foreach
  visit_keys = []
  visit_vals = []
  u.forEach((k,v) => {
    visit_keys.push(k)
    visit_vals.push(v)
  }, 3)
  t.same(visit_keys, u.keys.slice(3))
  t.same(visit_vals, u.values.slice(3))

  // Check half interval foreach with termination
  visit_keys = []
  visit_vals = []
  t.equals(u.forEach((k,v) => {
    if(k === 12) {
      return 1000
    }
    visit_keys.push(k)
    visit_vals.push(v)
  }, 3), 1000)
  t.same(visit_keys, u.keys.slice(3, 12))
  t.same(visit_vals, u.values.slice(3, 12))


  // Check interval foreach
  visit_keys = []
  visit_vals = []
  u.forEach((k,v) => {
    visit_keys.push(k)
    visit_vals.push(v)
  }, 3, 15)
  t.same(visit_keys, u.keys.slice(3, 15))
  t.same(visit_vals, u.values.slice(3, 15))

  // Check interval foreach with termination
  visit_keys = []
  visit_vals = []
  t.equals(u.forEach((k,v) => {
    if(k === 12) {
      return 1000
    }
    visit_keys.push(k)
    visit_vals.push(v)
  }, 3, 15), 1000)
  t.same(visit_keys, u.keys.slice(3, 12))
  t.same(visit_vals, u.values.slice(3, 12))

  t.end()
})

function compareIterators(a, b, t) {
  t.equals(a.tree, b.tree, "iter trees")
  t.equals(a.valid, b.valid, "iter validity")
  if(!b.valid) {
    return
  }
  t.equals(a.node, b.node, "iter node")
  t.equals(a.key, b.key, "iter key")
  t.equals(a.value, b.value, "iter value")
  t.equals(a.index, b.index, "iter index")
}

tape("iterators", (t) => {
  const u = iota(20).reduce((u, k, v) => {
    return u.insert(k, v)
  }, makeTree())

  // Try walking forward
  let iter = u.begin
  const c = iter.clone()
  t.ok(iter.hasNext, "must have next at beginneing")
  t.ok(!iter.hasPrev, "must not have predecessor")
  for(let i=0; i<20; ++i) {
    const v = u.at(i)
    compareIterators(iter, v, t)
    t.equals(iter.index, i)
    iter.next()
  }
  t.ok(!iter.valid, "must be eof iterator")

  // Check if the clone worked
  compareIterators(c, u.begin, t)

  // Try walking backward
  iter = u.end
  t.ok(!iter.hasNext, "must not have next")
  t.ok(iter.hasPrev, "must have predecessor")
  for(let i=19; i>=0; --i) {
    const v = u.at(i)
    compareIterators(iter, v, t)
    t.equals(iter.index, i)
    iter.prev()
  }
  t.ok(!iter.valid, "must be eof iterator")

  t.end()
})


tape("remove()", (t) => {

  const sz = [1, 2,  10, 20, 23, 31, 32, 33]
  for (let n=0; n<sz.length; ++n) {
    const c = sz[n]
    const u = iota(c).reduce((u, k, v) => {
      return u.insert(k, v)
    }, makeTree())
    for(let i=0; i<c; ++i) {
      checkTree(u.remove(i), t)
    }
  }

  t.end()
})

tape("update()", (t) => {
  const arr = [0, 1, 2, 3, 4, 5, 6 ]
  const u = arr.reduce((u, k, v) => {
    return u.insert(k, v)
  }, makeTree())
  for(const iter=u.begin; iter.hasNext; iter.next()) {
    const p = iter.value
    const updated = iter.update(1000)
    t.equals(iter.value, iter.key, "ensure no mutation")
    t.equals(updated.find(iter.key).value, 1000, "ensure update applied")
    checkTree(updated, t)
    checkTree(u, t)
  }
  t.end()
})


tape("keys and values", (t) => {

  const original_keys: nodeKey[] = [ 111, 222, 333, 444, 555, 666 ]
  const original_values = [ 42, 10, false, "!!!", {}, null ]

  let u = makeTree()
  for(let i=0; i<original_keys.length; ++i) {
    u = u.insert(original_keys[i], original_values[i])
  }

  const zipped = iota(6).map((i) => {
    return [ original_keys[i], original_values[i] ]
  })

  zipped.sort((a,b) => {
    if(a[0] < b[0]) { return -1 }
    if(a[0] > b[0]) { return 1 }
    return 0
  })

  const keys = zipped.map((v) => { return v[0] })
  const values = zipped.map((v) => { return v[1] })

  t.same(u.keys, keys)
  t.same(u.values, values)

  t.end()
})

tape("searching", (t) => {

  const arr = [0, 1, 1, 1, 1, 2, 3, 4, 5, 6, 6 ]
  const u = arr.reduce((u, k, v) => {
    return u.insert(k, v)
  }, makeTree())


  for(let i=0; i<arr.length; ++i) {
    if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) {
      t.equals(u.get(arr[i]), i, "get " + arr[i])
    }
  }
  t.equals(u.get(-1), undefined, "get missing")

  t.equals(u.ge(3).index, 6, "ge simple")
  t.equals(u.ge(0.9).index, 1, "ge run start")
  t.equals(u.ge(1).index, 1, "ge run mid")
  t.equals(u.ge(1.1).index, 5, "ge run end")
  t.equals(u.ge(0).index, 0, "ge first")
  t.equals(u.ge(6).index, 9, "ge last")
  t.equals(u.ge(100).valid, false, "ge big")
  t.equals(u.ge(-1).index, 0, "ge small")

  t.equals(u.gt(3).index, 7, "gt simple")
  t.equals(u.gt(0.9).index, 1, "gt run start")
  t.equals(u.gt(1).index, 5, "gt run mid")
  t.equals(u.gt(1.1).index, 5, "gt run end")
  t.equals(u.gt(0).index, 1, "gt first")
  t.equals(u.gt(6).valid, false, "gt last")
  t.equals(u.gt(100).valid, false, "gt big")
  t.equals(u.gt(-1).index, 0, "ge small")

  t.equals(u.le(3).index, 6, "le simple")
  t.equals(u.le(0.9).index, 0, "le run start")
  t.equals(u.le(1).index, 4, "le run mid")
  t.equals(u.le(1.1).index, 4, "le run end")
  t.equals(u.le(0).index, 0, "le first")
  t.equals(u.le(6).index, 10, "le last")
  t.equals(u.le(100).index, 10, "le big")
  t.equals(u.le(-1).valid, false, "le small")

  t.equals(u.lt(3).index, 5, "lt simple")
  t.equals(u.lt(0.9).index, 0, "lt run start")
  t.equals(u.lt(1).index, 0, "lt run mid")
  t.equals(u.lt(1.1).index, 4, "lt run end")
  t.equals(u.lt(0).valid, false, "lt first")
  t.equals(u.lt(6).index, 8, "lt last")
  t.equals(u.lt(100).index, 10, "lt big")
  t.equals(u.lt(-1).valid, false, "lt small")

  t.equals(u.find(-1).valid, false, "find missing small")
  t.equals(u.find(10000).valid, false, "find missing big")
  t.equals(u.find(3).index, 6, "find simple")
  t.ok(u.find(1).index > 0, "find repeat")
  t.ok(u.find(1).index < 5, "find repeat")

  for(let i=0; i<arr.length; ++i) {
    t.equals(u.find(arr[i]).key, arr[i], "find " + i)
  }

  for(let i=0; i<arr.length; ++i) {
    t.equals(u.at(i).key, arr[i], "at " + i)
  }
  t.equals(u.at(-1).valid, false, "at missing small")
  t.equals(u.at(1000).valid, false, "at missing big")


  t.end()
})

tape("slab-sequence", (t) => {

  let tree = makeTree()

  tree=tree.insert(0, 0)
  checkTree(tree, t)
  t.same(tree.values, [0])

  tree=tree.insert(1, 1)
  checkTree(tree, t)
  t.same(tree.values, [0,1])

  tree=tree.insert(0.5, 2)
  checkTree(tree, t)
  t.same(tree.values, [0,2,1])

  tree=tree.insert(0.25, 3)
  checkTree(tree, t)
  t.same(tree.values, [0,3,2,1])

  tree=tree.remove(0)
  checkTree(tree, t)
  t.same(tree.values, [3,2,1])

  tree=tree.insert(0.375, 4)
  checkTree(tree, t)
  t.same(tree.values, [3, 4, 2, 1])

  tree=tree.remove(1)
  checkTree(tree, t)
  t.same(tree.values, [3,4,2])

  tree=tree.remove(0.5)
  checkTree(tree, t)
  t.same(tree.values, [3,4])

  tree=tree.remove(0.375)
  checkTree(tree, t)
  t.same(tree.values, [3])

  tree=tree.remove(0.25)
  checkTree(tree, t)
  t.same(tree.values, [])

  t.end()
})

tape("slab-sequence-2", (t) => {

  let u = makeTree()

  u=u.insert( 12 , 22 )
  u=u.insert( 11 , 3 )
  u=u.insert( 10 , 28 )
  u=u.insert( 13 , 16 )
  u=u.insert( 9 , 9 )
  u=u.insert( 14 , 10 )
  u=u.insert( 8 , 15 )
  u=u.insert( 15 , 29 )
  u=u.insert( 16 , 4 )
  u=u.insert( 7 , 21 )
  u=u.insert( 17 , 23 )
  u=u.insert( 6 , 2 )
  u=u.insert( 5 , 27 )
  u=u.insert( 18 , 17 )
  u=u.insert( 4 , 8 )
  u=u.insert( 31 , 11 )
  u=u.insert( 30 , 30 )
  u=u.insert( 29 , 5 )
  u=u.insert( 28 , 24 )
  u=u.insert( 27 , 18 )
  u=u.insert( 26 , 12 )
  u=u.insert( 25 , 31 )
  u=u.insert( 24 , 6 )
  u=u.insert( 23 , 25 )
  u=u.insert( 19 , 7 )
  u=u.insert( 20 , 13 )
  u=u.insert( 1 , 20 )
  u=u.insert( 0 , 14 )
  u=u.insert( 22 , 0 )
  u=u.insert( 2 , 1 )
  u=u.insert( 3 , 26 )
  u=u.insert( 21 , 19 )
  u=u.remove( 18 )
  u=u.remove( 17 )
  u=u.remove( 16 )
  u=u.remove( 15 )
  u=u.remove( 14 )
  u=u.remove( 13 )
  u=u.remove( 12 )
  u=u.remove( 6 )
  u=u.remove( 7 )
  u=u.remove( 8 )
  u=u.remove( 11 )
  u=u.remove( 4 )
  u=u.remove( 9 )
  u=u.remove( 10 )
  u=u.remove( 5 )
  u=u.remove( 31 )
  u=u.remove( 0 )
  u=u.remove( 30 )
  u=u.remove( 29 )
  u=u.remove( 1 )
  u=u.remove( 28 )
  u=u.remove( 2 )
  u=u.remove( 3 )
  u=u.remove( 27 )
  u=u.remove( 19 )
  u=u.remove( 26 )
  u=u.remove( 20 )
  u=u.remove( 25 )
  u=u.remove( 24 )
  u=u.remove( 21 )
  u=u.remove( 23 )
  u=u.remove( 22 )

  t.end()
})
