public class MyStack{
    private static class StackNode{
        private int data;
        private StackNode next;
        public StackNode(int data){
            this.data = data;
        }
    }
    private StackNode top;
    public int pop(){
        if(top == null)
            return -1;
        int item = top.data;
        top = top.next;
        return item;
    }
    public void push(int item){
        StackNode t = new StackNode(item);
        t.next = top;
        top = t;
    }
    public int peek(){
        if(top == null)
            return -1;
        return top.data;
    }
    public boolean isEmpty(){
        return top == null;
    }
    public static void main(String[] args){
        MyStack number = new MyStack();
        number.push(1);
        number.push(2);
        number.push(3);
        number.pop();
        
    }
}
