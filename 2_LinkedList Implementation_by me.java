public class LinkList{
    private Node head;
    private Node tail;
    private int size;
    
    private class Node{
        private int data;
        private Node next;
        
        public Node(int input){
            this.data = input;
            this.next = null;
        }
        public String toString(){
            return String.valueOf(this.data);
        }
    }
   public void addFirst(int data){
       Node current = new Node(data);
       current.next = head;
       head = current;
       if(head.next == null){
           tail = head;
       }
   }
    Node node(int index){
        Node x = head;
        for(int i=0; i<index; i++){
            x = x.next;
        }
        return x;        
    }
    public void add(int index, int data){
        if(index==0){
            addFirst(data);
        }
        else{
            Node current = new Node(data);
            Node temp1 = head;
            
            for(int i=0; i<index-1; i++){
                temp1 = temp1.next;
            }
            
            if(temp1.next == null){
                temp1.next = current;
                tail = current;
            }
            Node temp2 = temp1.next;
            current.next = temp2;
            temp1.next = current;
        }
        
    }
    public int removeFirst(){
        Node temp1 = head;
        head = temp1.next;
        int returnData = temp1.data;
        temp1 = null;
        
        return returnData;
    }
    public int remove(int index){
        if(index == 0){
            removeFirst();
        }

            Node temp1 = head;
            for(int i=0; i<index-1; i++){
                temp1 = temp1.next;
            }
            Node temp2 = temp1.next;
            if(temp2 == tail){
                tail = temp1;
            }
            temp1.next = temp2.next;
            int returnData = temp2.data;
            temp2 = null;
    
        return returnData;
    }
    public String toString(){
        Node temp = head;
        String str = "[";
        
        while(temp.next !=null){
            str += temp.data + ", ";
            temp = temp.next;
        }
        str += temp.data;
        return str + "]";
    }
  
    
    public static void main(String[] args){
        LinkList numbers = new LinkList();
        numbers.addFirst(1);
        numbers.addFirst(2);
        System.out.println(numbers);
        numbers.add(0,3);
        System.out.println(numbers);
        numbers.add(1,4);
        System.out.println(numbers);
        numbers.remove(3);
        System.out.println(numbers);
       
    }
}
