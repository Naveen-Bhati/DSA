//iterative preorder Root,left,right

class Node{
    constructor(value){
        this.left = null
        this.right=null
        this.value=value
    }
}
class Tree{
    constructor(root){
        this.root = root||null 
    }
    isTreeEmpty(root){
        return !!root
    }
    insertNode(givenRoot,givenNode){
        // console.log("given root===>",givenRoot,givenNode)
        
        if(givenRoot.value>givenNode.value){
            if(givenRoot?.left){
                this.insertNode(givenRoot.left,givenNode)
            }else
            givenRoot.left = givenNode
        }else{
            if(givenRoot?.right){
                this.insertNode(givenRoot.right,givenNode)
            }else
            givenRoot.right = givenNode
        }
    }
    addNode(value){
      const newNode = new Node(value)
      if(!this.root){
          this.root = newNode
          return;
      }
          
           this.insertNode(this.root,newNode)
          
     
} 
    searchNode(root,value){
  if(!root) return false
    //check if root value is the same
    if(root.value===value) return true
    
    //if value is > root.value search in the right side
    if(value>root.value){
      return this.searchNode(root.right,value)
    }
    
    return this.searchNode(root.left,value)
    //if value<root.value search in the left side
}

    //DFS
    //preOrder
     preOrder(root){
       if(!root) return null
       
       console.log(root.value)
       this.preOrder(root.left)
       this.preOrder(root.right)
       
     }   
    //inOrder
    inOrder(root){
       if(!root) return null
       
       this.inOrder(root.left)
       console.log(root.value)
       this.inOrder(root.right)
       
     }   
    //postOrder
    postOrder(root){
       if(!root) return null
       
       this.postOrder(root.left)
       this.postOrder(root.right)
       console.log(root.value)
       
     }   

    
    //BFS
    //BreadthFirstTraversinfg
    traverseBFS(){
      let queue = []
      
      queue.push(this.root)
      while(queue.length){
        let currentNode = queue.shift()
        console.log(currentNode.value)
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
      }
    }
    
    //Min Value of the BST
    minValue(root){
      if(!root) return null
      
      if(!root.left) return root.value
      
      return this.minValue(root.left)
    }
    
    
    //Max Value of the BST
    maxValue(root){
      if(!root) return null
      
      if(!root.right) return root.value
      
      return this.maxValue(root.right)
    }
    
    //removeNode
    removeNode(value){
      this.root = this.deleteNode(this.root,value)
    }
    
    //deleteNode
    deleteNode(root,value){
      
      if(!root) return null
      
      // if value is less than goto left
      if(value<root.value){
        root.left = this.deleteNode(root.left,value)
      }
      // else if value is greater than goto right
      else if(value>root.value){
        root.right = this.deleteNode(root.right,value)
      }
      //else value is same than check for all cases
      else{
        //1. root with no child node
        if(!root.left && !root.right){
          
          return null
        }
        //2. root with one child node
        else if(!root.left){
          return root.right
        }else if(!root.right){
          return root.left
        }
        
        //3 root with 2 child node
        else{
          //remove the inorder successor which means
          //updtae the root's value to the min Value 
          // node of the right side and remove that node
          root.value = this.minValue(root.right)
          root.right = this.deleteNode(root.right,root.value)
          
        }
        
      }
      return root
      
    }
}





let arr = [15,10,20,21,7,11,1,91,27]

const BT = new Tree()  
arr.forEach(item=>{
    BT.addNode(item)
// console.log(BT)
})

// BT.preOrder(BT.root)
// BT.inOrder(BT.root)
// BT.postOrder(BT.root)
// BT.traverseBFS()
// console.log(BT.minValue(BT.root))
// console.log(BT.maxValue(BT.root))
BT.removeNode(91)
console.log("final tree====>",BT)
// console.log("search in  tree====>",12,BT.searchNode(BT.root,277))
