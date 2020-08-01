import { RedBlackTreeIterator } from "./rbtreeIterator"
import { Color, INode, nodeKey, FunctionCompatator, ITree, Stack, VisitFunction, ComparisonResult, IIterator } from "./libraryDefinitions";
import { recount, repaint, RBNode } from "./rbtreeNode"

export class RedBlackTree<ValueType> implements ITree<ValueType> {
  _compare: FunctionCompatator;
  root: INode<ValueType>;

  constructor (compare: FunctionCompatator, root: INode<ValueType>) {
    this._compare = compare
    this.root = root
  }

  forEach(visit: VisitFunction, lo?: nodeKey, hi?: nodeKey) {
    if(!this.root) {
      return
    }

    const argumentsLength =
      (typeof hi === "number") && (typeof lo === "number") && 3 ||
      (typeof lo === "number") && 2 ||
      1;

    switch(argumentsLength) {
      case 1:
        return doVisitFull(visit, this.root)
      break

      case 2:
        return doVisitHalf(lo, this._compare, visit, this.root)
      break

      case 3:
        if(this._compare(lo, hi) >= 0) {
          return
        }
        return doVisit(lo, hi, this._compare, visit, this.root)
      break
    }
  }

  get keys(): nodeKey[] {
    const result = []
    this.forEach((k,v) => {
      result.push(k)
    })
    return result
  }

  get values(): ValueType[] {
    const result = []
    this.forEach((k,v) => {
      result.push(v)
    })
    return result
  }

  get length() {
    if(this.root) {
      return this.root._count
    }
    return 0
  }

  insert = function(key: nodeKey, value: ValueType): ITree<ValueType> {
    const cmp = this._compare
    // Find point to insert new node at
    let n = this.root
    const n_stack = []
    const d_stack = []
    while(n) {
      const d = cmp(key, n.key)
      n_stack.push(n)
      d_stack.push(d)
      if(d <= 0) {
        n = n.left
      } else {
        n = n.right
      }
    }
    // Rebuild path to leaf node
    n_stack.push(new RBNode<ValueType>(Color.RED, key, value, null, null, 1))
    for(let s=n_stack.length-2; s>=0; --s) {
      const n = n_stack[s]
      if(d_stack[s] <= 0) {
        n_stack[s] = new RBNode<ValueType>(n._color, n.key, n.value, n_stack[s+1], n.right, n._count+1)
      } else {
        n_stack[s] = new RBNode<ValueType>(n._color, n.key, n.value, n.left, n_stack[s+1], n._count+1)
      }
    }
    // Rebalance tree using rotations
    // console.log("start insert", key, d_stack)
    for(let s=n_stack.length-1; s>1; --s) {
      const p = n_stack[s-1]
      const n = n_stack[s]
      if(p._color === Color.BLACK || n._color === Color.BLACK) {
        break
      }
      const pp = n_stack[s-2]
      if(pp.left === p) {
        if(p.left === n) {
          const y = pp.right
          if(y && y._color === Color.RED) {
            // console.log("LLr")
            p._color = Color.BLACK
            pp.right = repaint(Color.BLACK, y)
            pp._color = Color.RED
            s -= 1
          } else {
            // console.log("LLb")
            pp._color = Color.RED
            pp.left = p.right
            p._color = Color.BLACK
            p.right = pp
            n_stack[s-2] = p
            n_stack[s-1] = n
            recount(pp)
            recount(p)
            if(s >= 3) {
              const ppp = n_stack[s-3]
              if(ppp.left === pp) {
                ppp.left = p
              } else {
                ppp.right = p
              }
            }
            break
          }
        } else {
          const y = pp.right
          if(y && y._color === Color.RED) {
            // console.log("LRr")
            p._color = Color.BLACK
            pp.right = repaint(Color.BLACK, y)
            pp._color = Color.RED
            s -= 1
          } else {
            // console.log("LRb")
            p.right = n.left
            pp._color = Color.RED
            pp.left = n.right
            n._color = Color.BLACK
            n.left = p
            n.right = pp
            n_stack[s-2] = n
            n_stack[s-1] = p
            recount(pp)
            recount(p)
            recount(n)
            if(s >= 3) {
              const ppp = n_stack[s-3]
              if(ppp.left === pp) {
                ppp.left = n
              } else {
                ppp.right = n
              }
            }
            break
          }
        }
      } else {
        if(p.right === n) {
          const y = pp.left
          if(y && y._color === Color.RED) {
            // console.log("RRr", y.key)
            p._color = Color.BLACK
            pp.left = repaint(Color.BLACK, y)
            pp._color = Color.RED
            s -= 1
          } else {
            // console.log("RRb")
            pp._color = Color.RED
            pp.right = p.left
            p._color = Color.BLACK
            p.left = pp
            n_stack[s-2] = p
            n_stack[s-1] = n
            recount(pp)
            recount(p)
            if(s >= 3) {
              const ppp = n_stack[s-3]
              if(ppp.right === pp) {
                ppp.right = p
              } else {
                ppp.left = p
              }
            }
            break
          }
        } else {
          const y = pp.left
          if(y && y._color === Color.RED) {
            // console.log("RLr")
            p._color = Color.BLACK
            pp.left = repaint(Color.BLACK, y)
            pp._color = Color.RED
            s -= 1
          } else {
            // console.log("RLb")
            p.left = n.right
            pp._color = Color.RED
            pp.right = n.left
            n._color = Color.BLACK
            n.right = p
            n.left = pp
            n_stack[s-2] = n
            n_stack[s-1] = p
            recount(pp)
            recount(p)
            recount(n)
            if(s >= 3) {
              const ppp = n_stack[s-3]
              if(ppp.right === pp) {
                ppp.right = n
              } else {
                ppp.left = n
              }
            }
            break
          }
        }
      }
    }
    // Return new tree
    n_stack[0]._color = Color.BLACK
    return new RedBlackTree(cmp, n_stack[0]);
  }

  get begin() {
    const stack = []
      let n = this.root
      while(n) {
        stack.push(n)
        n = n.left
      }
    return new RedBlackTreeIterator<ValueType>(this, stack) as IIterator<ValueType>;
  }

  get end() {
    const stack = []
    let n = this.root
    while(n) {
      stack.push(n)
      n = n.right
    }
    return new RedBlackTreeIterator<ValueType>(this, stack) as IIterator<ValueType>;
  }

  at(idx: nodeKey) {
    if(idx < 0) {
      return new RedBlackTreeIterator<ValueType>(this, [])
    }
    let n: INode<any> = this.root
    const stack: Stack<any> = []
    while(true) {
      stack.push(n)
      if(n.left) {
        if(idx < n.left._count) {
          n = n.left
          continue
        }
        idx -= n.left._count
      }
      if(!idx) {
        return new RedBlackTreeIterator<ValueType>(this, stack)
      }
      idx -= 1
      if(n.right) {
        if(idx >= n.right._count) {
          break
        }
        n = n.right
      } else {
        break
      }
    }
    return new RedBlackTreeIterator<ValueType>(this, [])
  }

  ge(key: nodeKey) {
    const cmp = this._compare
    let n = this.root
    const stack = []
    let last_ptr = 0
    while(n) {
      const d = cmp(key, n.key)
      stack.push(n)
      if(d <= 0) {
        last_ptr = stack.length
      }
      if(d <= 0) {
        n = n.left
      } else {
        n = n.right
      }
    }
    stack.length = last_ptr
    return new RedBlackTreeIterator<ValueType>(this, stack)
  }

  gt(key: nodeKey) {
    const cmp = this._compare
    let n = this.root
    const stack = []
    let last_ptr = 0
    while(n) {
      const d = cmp(key, n.key)
      stack.push(n)
      if(d < 0) {
        last_ptr = stack.length
      }
      if(d < 0) {
        n = n.left
      } else {
        n = n.right
      }
    }
    stack.length = last_ptr
    return new RedBlackTreeIterator<ValueType>(this, stack)
  }

  lt(key: nodeKey) {
    const cmp = this._compare
    let n = this.root
    const stack = []
    let last_ptr = 0
    while(n) {
      const d = cmp(key, n.key)
      stack.push(n)
      if(d > 0) {
        last_ptr = stack.length
      }
      if(d <= 0) {
        n = n.left
      } else {
        n = n.right
      }
    }
    stack.length = last_ptr
    return new RedBlackTreeIterator<ValueType>(this, stack)
  }

  le(key: nodeKey) {
    const cmp = this._compare
    let n = this.root
    const stack = []
    let last_ptr = 0
    while(n) {
      const d = cmp(key, n.key)
      stack.push(n)
      if(d >= 0) {
        last_ptr = stack.length
      }
      if(d < 0) {
        n = n.left
      } else {
        n = n.right
      }
    }
    stack.length = last_ptr
    return new RedBlackTreeIterator<ValueType>(this, stack)
  }

  find(key: nodeKey) {
    const cmp = this._compare
    let n = this.root
    const stack = []
    while(n) {
      const d = cmp(key, n.key)
      stack.push(n)
      if(d === 0) {
        return new RedBlackTreeIterator<ValueType>(this, stack)
      }
      if(d <= 0) {
        n = n.left
      } else {
        n = n.right
      }
    }
    return new RedBlackTreeIterator<ValueType>(this, [])
  }

  remove(key: nodeKey): ITree<ValueType> {
    const iter = this.find(key)
    if(iter) {
      return iter.remove()
    }
    return this
  }

  get(key: nodeKey): ValueType {
    const cmp = this._compare
    let n = this.root
    while(n) {
      const d = cmp(key, n.key)
      if(d === 0) {
        return n.value
      }
      if(d <= 0) {
        n = n.left
      } else {
        n = n.right
      }
    }
    return
  }
}

  // Visit all nodes inorder
  function doVisitFull(visit, node) {
    if(node.left) {
      const v = doVisitFull(visit, node.left)
      if(v) { return v }
    }
    const v = visit(node.key, node.value)
    if(v) { return v }
    if(node.right) {
      return doVisitFull(visit, node.right)
    }
  }

  // Visit half nodes in order
  function doVisitHalf<ValueType>(lo: nodeKey, compare: FunctionCompatator, visit: VisitFunction, node: INode<ValueType>) {
    const l = compare(lo, node.key)
    if(l <= 0) {
      if(node.left) {
        const v = doVisitHalf(lo, compare, visit, node.left)
        if(v) { return v }
      }
      const v = visit(node.key, node.value)
      if(v) { return v }
    }
    if(node.right) {
      return doVisitHalf(lo, compare, visit, node.right)
    }
  }

  // Visit all nodes within a range
  function doVisit<ValueType>(lo: nodeKey, hi: nodeKey, compare: FunctionCompatator, visit: VisitFunction, node: INode<ValueType>) {
    const l = compare(lo, node.key)
    const h = compare(hi, node.key)
    let v
    if(l <= 0) {
      if(node.left) {
        v = doVisit(lo, hi, compare, visit, node.left)
        if(v) { return v }
      }
      if(h > 0) {
        v = visit(node.key, node.value)
        if(v) { return v }
      }
    }
    if(h > 0 && node.right) {
      return doVisit(lo, hi, compare, visit, node.right)
    }
  }

// Default comparison function
export const defaultCompare: FunctionCompatator = (a: nodeKey, b: nodeKey) => {
  if(a < b) {
    return -1
  }
  if(a > b) {
    return 1
  }
  return 0
}

  // Build a tree
export const createRBTree = <ValueType>(compare?: FunctionCompatator) => {
  return new RedBlackTree<ValueType>(compare || defaultCompare, null);
}
