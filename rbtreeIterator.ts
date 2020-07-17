import { ITree, Color, INode, Stack } from "./libraryDefinitions"
import { cloneNode, recount, repaint, RBNode } from "./rbtreeNode"
import { RedBlackTree } from "./rbtreeTree"

//Iterator for red black tree
export function RedBlackTreeIterator<ValueType>(tree: ITree<ValueType>, stack: Stack<ValueType>) {
    this.tree = tree
    this._stack = stack
  }
  
  var iproto = RedBlackTreeIterator.prototype
  
  //Test if iterator is valid
  Object.defineProperty(iproto, "valid", {
    get: function() {
      return this._stack.length > 0
    }
  })
  
  //Node of the iterator
  Object.defineProperty(iproto, "node", {
    get: function() {
      if(this._stack.length > 0) {
        return this._stack[this._stack.length-1]
      }
      return null
    },
    enumerable: true
  })
  
  //Makes a copy of an iterator
  iproto.clone = function() {
    return new RedBlackTreeIterator(this.tree, this._stack.slice())
  }
  
  //Swaps two nodes
  function swapNode(n: INode<any>, v: INode<any>) {
    n.key = v.key
    n.value = v.value
    n.left = v.left
    n.right = v.right
    n._color = v._color
    n._count = v._count
  }
  
  //Fix up a double black node in a tree
  function fixDoubleBlack(stack) {
    var n, p, s, z
    for(var i=stack.length-1; i>=0; --i) {
      n = stack[i]
      if(i === 0) {
        n._color = Color.BLACK
        return
      }
      //console.log("visit node:", n.key, i, stack[i].key, stack[i-1].key)
      p = stack[i-1]
      if(p.left === n) {
        //console.log("left child")
        s = p.right
        if(s.right && s.right._color === Color.RED) {
          //console.log("case 1: right sibling child red")
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
            var pp = stack[i-2]
            if(pp.left === p) {
              pp.left = s
            } else {
              pp.right = s
            }
          }
          stack[i-1] = s
          return
        } else if(s.left && s.left._color === Color.RED) {
          //console.log("case 1: left sibling child red")
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
            var pp = stack[i-2]
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
            //console.log("case 2: black sibling, red parent", p.right.value)
            p._color = Color.BLACK
            p.right = repaint(Color.RED, s)
            return
          } else {
            //console.log("case 2: black sibling, black parent", p.right.value)
            p.right = repaint(Color.RED, s)
            continue  
          }
        } else {
          //console.log("case 3: red sibling")
          s = cloneNode(s)
          p.right = s.left
          s.left = p
          s._color = p._color
          p._color = Color.RED
          recount(p)
          recount(s)
          if(i > 1) {
            var pp = stack[i-2]
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
        //console.log("right child")
        s = p.left
        if(s.left && s.left._color === Color.RED) {
          //console.log("case 1: left sibling child red", p.value, p._color)
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
            var pp = stack[i-2]
            if(pp.right === p) {
              pp.right = s
            } else {
              pp.left = s
            }
          }
          stack[i-1] = s
          return
        } else if(s.right && s.right._color === Color.RED) {
          //console.log("case 1: right sibling child red")
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
            var pp = stack[i-2]
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
            //console.log("case 2: black sibling, red parent")
            p._color = Color.BLACK
            p.left = repaint(Color.RED, s)
            return
          } else {
            //console.log("case 2: black sibling, black parent")
            p.left = repaint(Color.RED, s)
            continue  
          }
        } else {
          //console.log("case 3: red sibling")
          s = cloneNode(s)
          p.left = s.right
          s.right = p
          s._color = p._color
          p._color = Color.RED
          recount(p)
          recount(s)
          if(i > 1) {
            var pp = stack[i-2]
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
  
  //Removes item at iterator from tree
  iproto.remove = function() {
    var stack = this._stack
    if(stack.length === 0) {
      return this.tree
    }
    //First copy path to node
    var cstack = new Array(stack.length)
    var n = stack[stack.length-1]
    cstack[cstack.length-1] = new RBNode(n._color, n.key, n.value, n.left, n.right, n._count)
    for(var i=stack.length-2; i>=0; --i) {
      var n = stack[i]
      if(n.left === stack[i+1]) {
        cstack[i] = new RBNode(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
      } else {
        cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
      }
    }
  
    //Get node
    n = cstack[cstack.length-1]
    //console.log("start remove: ", n.value)
  
    //If not leaf, then swap with previous node
    if(n.left && n.right) {
      //console.log("moving to leaf")
  
      //First walk to previous leaf
      var split = cstack.length
      n = n.left
      while(n.right) {
        cstack.push(n)
        n = n.right
      }
      //Copy path to leaf
      var v = cstack[split-1]
      cstack.push(new RBNode(n._color, v.key, v.value, n.left, n.right, n._count))
      cstack[split-1].key = n.key
      cstack[split-1].value = n.value
  
      //Fix up stack
      for(var i=cstack.length-2; i>=split; --i) {
        n = cstack[i]
        cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
      }
      cstack[split-1].left = cstack[split]
    }
    //console.log("stack=", cstack.map(function(v) { return v.value }))
  
    //Remove leaf node
    n = cstack[cstack.length-1]
    if(n._color === Color.RED) {
      //Easy case: removing red leaf
      //console.log("RED leaf")
      var p = cstack[cstack.length-2]
      if(p.left === n) {
        p.left = null
      } else if(p.right === n) {
        p.right = null
      }
      cstack.pop()
      for(var i=0; i<cstack.length; ++i) {
        cstack[i]._count--
      }
      return new RedBlackTree(this.tree._compare, cstack[0])
    } else {
      if(n.left || n.right) {
        //Second easy case:  Single child black parent
        //console.log("BLACK single child")
        if(n.left) {
          swapNode(n, n.left)
        } else if(n.right) {
          swapNode(n, n.right)
        }
        //Child must be red, so repaint it black to balance color
        n._color = Color.BLACK
        for(var i=0; i<cstack.length-1; ++i) {
          cstack[i]._count--
        }
        return new RedBlackTree(this.tree._compare, cstack[0])
      } else if(cstack.length === 1) {
        //Third easy case: root
        //console.log("ROOT")
        return new RedBlackTree(this.tree._compare, null)
      } else {
        //Hard case: Repaint n, and then do some nasty stuff
        //console.log("BLACK leaf no children")
        for(var i=0; i<cstack.length; ++i) {
          cstack[i]._count--
        }
        var parent = cstack[cstack.length-2]
        fixDoubleBlack(cstack)
        //Fix up links
        if(parent.left === n) {
          parent.left = null
        } else {
          parent.right = null
        }
      }
    }
    return new RedBlackTree(this.tree._compare, cstack[0])
  }
  
  //Returns key
  Object.defineProperty(iproto, "key", {
    get: function() {
      if(this._stack.length > 0) {
        return this._stack[this._stack.length-1].key
      }
      return
    },
    enumerable: true
  })
  
  //Returns value
  Object.defineProperty(iproto, "value", {
    get: function() {
      if(this._stack.length > 0) {
        return this._stack[this._stack.length-1].value
      }
      return
    },
    enumerable: true
  })
  
  
  //Returns the position of this iterator in the sorted list
  Object.defineProperty(iproto, "index", {
    get: function() {
      var idx = 0
      var stack = this._stack
      if(stack.length === 0) {
        var r = this.tree.root
        if(r) {
          return r._count
        }
        return 0
      } else if(stack[stack.length-1].left) {
        idx = stack[stack.length-1].left._count
      }
      for(var s=stack.length-2; s>=0; --s) {
        if(stack[s+1] === stack[s].right) {
          ++idx
          if(stack[s].left) {
            idx += stack[s].left._count
          }
        }
      }
      return idx
    },
    enumerable: true
  })
  
  //Advances iterator to next element in list
  iproto.next = function(): void {
    var stack = this._stack
    if(stack.length === 0) {
      return
    }
    var n = stack[stack.length-1]
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
  
  //Checks if iterator is at end of tree
  Object.defineProperty(iproto, "hasNext", {
    get: function(): boolean {
      var stack = this._stack
      if(stack.length === 0) {
        return false
      }
      if(stack[stack.length-1].right) {
        return true
      }
      for(var s=stack.length-1; s>0; --s) {
        if(stack[s-1].left === stack[s]) {
          return true
        }
      }
      return false
    }
  })
  
  //Update value
  iproto.update = function(value): ITree<any> {
    var stack = this._stack
    if(stack.length === 0) {
      throw new Error("Can't update empty node!")
    }
    var cstack = new Array(stack.length)
    var n = stack[stack.length-1]
    cstack[cstack.length-1] = new RBNode(n._color, n.key, value, n.left, n.right, n._count)
    for(var i=stack.length-2; i>=0; --i) {
      n = stack[i]
      if(n.left === stack[i+1]) {
        cstack[i] = new RBNode(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
      } else {
        cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
      }
    }
    return new RedBlackTree(this.tree._compare, cstack[0])
  }
  
  //Moves iterator backward one element
  iproto.prev = function(): void {
    var stack = this._stack
    if(stack.length === 0) {
      return
    }
    var n = stack[stack.length-1]
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
  
  //Checks if iterator is at start of tree
  Object.defineProperty(iproto, "hasPrev", {
    get: function(): boolean {
      var stack = this._stack
      if(stack.length === 0) {
        return false
      }
      if(stack[stack.length-1].left) {
        return true
      }
      for(var s=stack.length-1; s>0; --s) {
        if(stack[s-1].right === stack[s]) {
          return true
        }
      }
      return false
    }
  })