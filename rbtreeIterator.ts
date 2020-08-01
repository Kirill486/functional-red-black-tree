import { ITree, Color, INode, Stack, IIterator } from "./libraryDefinitions"
import { cloneNode, recount, repaint, RBNode } from "./rbtreeNode"
import { RedBlackTree } from "./rbtreeTree"

// Iterator for red black tree
export class RedBlackTreeIterator<ValueType> implements IIterator<ValueType> {
  tree: ITree<ValueType>;
  _stack: Stack<ValueType>

  constructor (tree: ITree<ValueType>, stack: Stack<ValueType>) {
    this.tree = tree;
    this._stack = stack;
  }

  public get valid(): boolean {
    return this._stack.length > 0;
  }

  // enumerable: true
  public get node(): INode<ValueType> {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1];
    }
    return null;
  }

  public clone(): IIterator<ValueType> {
    return new RedBlackTreeIterator<ValueType>(this.tree, this._stack.slice());
  }

  public remove(): ITree<ValueType> {
    const stack = this._stack
    if(stack.length === 0) {
      return this.tree
    }
    // First copy path to node
    const cstack = new Array(stack.length)
    let n = stack[stack.length-1]
    cstack[cstack.length-1] = new RBNode<ValueType>(n._color, n.key, n.value, n.left, n.right, n._count)
    for(let i=stack.length-2; i>=0; --i) {
      const n = stack[i]
      if(n.left === stack[i+1]) {
        cstack[i] = new RBNode<ValueType>(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
      } else {
        cstack[i] = new RBNode<ValueType>(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
      }
    }

    // Get node
    n = cstack[cstack.length-1]
    // console.log("start remove: ", n.value)

    // If not leaf, then swap with previous node
    if(n.left && n.right) {
      // console.log("moving to leaf")

      // First walk to previous leaf
      const split = cstack.length
      n = n.left
      while(n.right) {
        cstack.push(n)
        n = n.right
      }
      // Copy path to leaf
      const v = cstack[split-1]
      cstack.push(new RBNode<ValueType>(n._color, v.key, v.value, n.left, n.right, n._count))
      cstack[split-1].key = n.key
      cstack[split-1].value = n.value

      // Fix up stack
      for(let i=cstack.length-2; i>=split; --i) {
        n = cstack[i]
        cstack[i] = new RBNode<ValueType>(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
      }
      cstack[split-1].left = cstack[split]
    }
    // console.log("stack=", cstack.map(function(v) { return v.value }))

    // Remove leaf node
    n = cstack[cstack.length-1]
    if(n._color === Color.RED) {
      // Easy case: removing red leaf
      // console.log("RED leaf")
      const p = cstack[cstack.length-2]
      if(p.left === n) {
        p.left = null
      } else if(p.right === n) {
        p.right = null
      }
      cstack.pop()
      for(let i=0; i<cstack.length; ++i) {
        cstack[i]._count--
      }
      return new RedBlackTree<ValueType>(this.tree._compare, cstack[0])
    } else {
      if(n.left || n.right) {
        // Second easy case:  Single child black parent
        // console.log("BLACK single child")
        if(n.left) {
          swapNode(n, n.left)
        } else if(n.right) {
          swapNode(n, n.right)
        }
        // Child must be red, so repaint it black to balance color
        n._color = Color.BLACK
        for(let i=0; i<cstack.length-1; ++i) {
          cstack[i]._count--
        }
        return new RedBlackTree<ValueType>(this.tree._compare, cstack[0])
      } else if(cstack.length === 1) {
        // Third easy case: root
        // console.log("ROOT")
        return new RedBlackTree<ValueType>(this.tree._compare, null)
      } else {
        // Hard case: Repaint n, and then do some nasty stuff
        // console.log("BLACK leaf no children")
        for(let i=0; i<cstack.length; ++i) {
          cstack[i]._count--
        }
        const parent = cstack[cstack.length-2]
        fixDoubleBlack(cstack)
        // Fix up links
        if(parent.left === n) {
          parent.left = null
        } else {
          parent.right = null
        }
      }
    }
    return new RedBlackTree<ValueType>(this.tree._compare, cstack[0])
  }

  // enumerable: true
  public get key() {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1].key;
    }
    return;
  }

  public get value() {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1].value;
    }
    return;
  }

  public get index() {
    let idx = 0
    const stack = this._stack
    if(stack.length === 0) {
      const r = this.tree.root
      if(r) {
        return r._count
      }
      return 0
    } else if(stack[stack.length-1].left) {
      idx = stack[stack.length-1].left._count
    }
    for(let s=stack.length-2; s>=0; --s) {
      if(stack[s+1] === stack[s].right) {
        ++idx
        if(stack[s].left) {
          idx += stack[s].left._count
        }
      }
    }
    return idx
  }

  public next(): void {
    const stack = this._stack
    if(stack.length === 0) {
      return
    }
    let n = stack[stack.length-1]
    if(n.right) {
      n = n.right
      while(n) {
        stack.push(n)
        n = n.left
      }
    } else {
      stack.pop()
      while(stack.length > 0 && stack[stack.length-1].right === n) {
        n = stack[stack.length-1]
        stack.pop()
      }
    }
  }

  public get hasNext(): boolean {
      const stack = this._stack
      if(stack.length === 0) {
        return false
      }
      if(stack[stack.length-1].right) {
        return true
      }
      for(let s=stack.length-1; s>0; --s) {
        if(stack[s-1].left === stack[s]) {
          return true
        }
      }
      return false
  }

  public update(value: ValueType): ITree<ValueType> {
    const stack = this._stack
    if(stack.length === 0) {
      throw new Error("Can't update empty node!")
    }
    const cstack = new Array(stack.length)
    let n = stack[stack.length-1]
    cstack[cstack.length-1] = new RBNode<ValueType>(n._color, n.key, value, n.left, n.right, n._count)
    for(let i=stack.length-2; i>=0; --i) {
      n = stack[i]
      if(n.left === stack[i+1]) {
        cstack[i] = new RBNode<ValueType>(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
      } else {
        cstack[i] = new RBNode<ValueType>(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
      }
    }
    return new RedBlackTree<ValueType>(this.tree._compare, cstack[0])
  }

  public prev(): void {
    const stack = this._stack
    if(stack.length === 0) {
      return
    }
    let n = stack[stack.length-1]
    if(n.left) {
      n = n.left
      while(n) {
        stack.push(n)
        n = n.right
      }
    } else {
      stack.pop()
      while(stack.length > 0 && stack[stack.length-1].left === n) {
        n = stack[stack.length-1]
        stack.pop()
      }
    }
  }

  public get hasPrev(): boolean {
    const stack = this._stack
    if(stack.length === 0) {
      return false
    }
    if(stack[stack.length-1].left) {
      return true
    }
    for(let s=stack.length-1; s>0; --s) {
      if(stack[s-1].right === stack[s]) {
        return true
      }
    }
    return false
  }
}

// Swaps two nodes
function swapNode(n: INode<any>, v: INode<any>) {
  n.key = v.key
  n.value = v.value
  n.left = v.left
  n.right = v.right
  n._color = v._color
  n._count = v._count
}

// Fix up a double black node in a tree
function fixDoubleBlack(stack: Stack<any>) {
    let n;
    let p;
    let s;
    let z;
    for(let i=stack.length-1; i>=0; --i) {
      n = stack[i]
      if(i === 0) {
        n._color = Color.BLACK
        return
      }
      // console.log("visit node:", n.key, i, stack[i].key, stack[i-1].key)
      p = stack[i-1]
      if(p.left === n) {
        // console.log("left child")
        s = p.right
        if(s.right && s.right._color === Color.RED) {
          // console.log("case 1: right sibling child red")
          s = p.right = cloneNode(s)
          z = s.right = cloneNode(s.right)
          p.right = s.left
          s.left = p
          s.right = z
          s._color = p._color
          n._color = Color.BLACK
          p._color = Color.BLACK
          z._color = Color.BLACK
          recount(p)
          recount(s)
          if(i > 1) {
            const pp = stack[i-2]
            if(pp.left === p) {
              pp.left = s
            } else {
              pp.right = s
            }
          }
          stack[i-1] = s
          return
        } else if(s.left && s.left._color === Color.RED) {
          // console.log("case 1: left sibling child red")
          s = p.right = cloneNode(s)
          z = s.left = cloneNode(s.left)
          p.right = z.left
          s.left = z.right
          z.left = p
          z.right = s
          z._color = p._color
          p._color = Color.BLACK
          s._color = Color.BLACK
          n._color = Color.BLACK
          recount(p)
          recount(s)
          recount(z)
          if(i > 1) {
            const pp = stack[i-2]
            if(pp.left === p) {
              pp.left = z
            } else {
              pp.right = z
            }
          }
          stack[i-1] = z
          return
        }
        if(s._color === Color.BLACK) {
          if(p._color === Color.RED) {
            // console.log("case 2: black sibling, red parent", p.right.value)
            p._color = Color.BLACK
            p.right = repaint(Color.RED, s)
            return
          } else {
            // console.log("case 2: black sibling, black parent", p.right.value)
            p.right = repaint(Color.RED, s)
            continue
          }
        } else {
          // console.log("case 3: red sibling")
          s = cloneNode(s)
          p.right = s.left
          s.left = p
          s._color = p._color
          p._color = Color.RED
          recount(p)
          recount(s)
          if(i > 1) {
            const pp = stack[i-2]
            if(pp.left === p) {
              pp.left = s
            } else {
              pp.right = s
            }
          }
          stack[i-1] = s
          stack[i] = p
          if(i+1 < stack.length) {
            stack[i+1] = n
          } else {
            stack.push(n)
          }
          i = i+2
        }
      } else {
        // console.log("right child")
        s = p.left
        if(s.left && s.left._color === Color.RED) {
          // console.log("case 1: left sibling child red", p.value, p._color)
          s = p.left = cloneNode(s)
          z = s.left = cloneNode(s.left)
          p.left = s.right
          s.right = p
          s.left = z
          s._color = p._color
          n._color = Color.BLACK
          p._color = Color.BLACK
          z._color = Color.BLACK
          recount(p)
          recount(s)
          if(i > 1) {
            const pp = stack[i-2]
            if(pp.right === p) {
              pp.right = s
            } else {
              pp.left = s
            }
          }
          stack[i-1] = s
          return
        } else if(s.right && s.right._color === Color.RED) {
          // console.log("case 1: right sibling child red")
          s = p.left = cloneNode(s)
          z = s.right = cloneNode(s.right)
          p.left = z.right
          s.right = z.left
          z.right = p
          z.left = s
          z._color = p._color
          p._color = Color.BLACK
          s._color = Color.BLACK
          n._color = Color.BLACK
          recount(p)
          recount(s)
          recount(z)
          if(i > 1) {
            const pp = stack[i-2]
            if(pp.right === p) {
              pp.right = z
            } else {
              pp.left = z
            }
          }
          stack[i-1] = z
          return
        }
        if(s._color === Color.BLACK) {
          if(p._color === Color.RED) {
            // console.log("case 2: black sibling, red parent")
            p._color = Color.BLACK
            p.left = repaint(Color.RED, s)
            return
          } else {
            // console.log("case 2: black sibling, black parent")
            p.left = repaint(Color.RED, s)
            continue
          }
        } else {
          // console.log("case 3: red sibling")
          s = cloneNode(s)
          p.left = s.right
          s.right = p
          s._color = p._color
          p._color = Color.RED
          recount(p)
          recount(s)
          if(i > 1) {
            const pp = stack[i-2]
            if(pp.right === p) {
              pp.right = s
            } else {
              pp.left = s
            }
          }
          stack[i-1] = s
          stack[i] = p
          if(i+1 < stack.length) {
            stack[i+1] = n
          } else {
            stack.push(n)
          }
          i = i+2
        }
      }
    }
}
