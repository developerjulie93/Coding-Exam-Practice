public class BinarySearchTree{
    private Node root;
    private int size = 0;
    
    private class Node{
        private int data;
        private Node left, right;
        
        public Node(int input){
            this.data = input;
            this.left = null;
            this.right = null;
        }
    }
    
    void insert(int input){
        root = insertProps(root, input);
    }
    Node insertProps(Node root, int input){
        if(root == null){
            root = new Node(input);
            return root;
        }
        if(input < root.data){
            root.left = insertProps(root.left, input);
        }
        else{
            root.right = insertProps(root.right, input);
        }
        return root;
    }
    void inorder(){
        inorderProps(root);
    }
    void inorderProps(Node root){
        if(root !=null){
            inorderProps(root.left);
            System.out.println(root.data);
            inorderProps(root.right);
        }
    }
    public static void main(String[] args){
        BinarySearchTree tree = new BinarySearchTree();
        tree.insert(7);
        tree.insert(4);
        tree.insert(1);
        tree.insert(8);
        tree.insert(2);
        tree.insert(6);
        tree.insert(3);
        tree.insert(5);
        tree.inorder();
    }
}
