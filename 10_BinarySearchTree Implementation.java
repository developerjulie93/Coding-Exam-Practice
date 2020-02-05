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
        if(size == 0){
            root = new Node(input);
            size++;
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
    public static void main(String[] args){
        BinarySearchTree tree = new BinarySearchTree();
        tree.insert(7);
    }
}
