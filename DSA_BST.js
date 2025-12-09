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
          console.log("running")
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

}





let arr = [15,10,20,5,7,11,19,27]

const BT = new Tree()  
arr.forEach(item=>{
    BT.addNode(item)
// console.log(BT)
})

// BT.preOrder(BT.root)
// BT.inOrder(BT.root)
BT.postOrder(BT.root)
console.log("final tree====>",BT)
// console.log("search in  tree====>",12,BT.searchNode(BT.root,277))



