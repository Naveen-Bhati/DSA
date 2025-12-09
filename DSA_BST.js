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
}
let arr = [15,10,20,5,7,11,19,27]

const BT = new Tree()  
arr.forEach(item=>{
    BT.addNode(item)
// console.log(BT)
})

console.log("final tree====>",BT)
console.log("search in  tree====>",12,BT.searchNode(BT.root,277))



