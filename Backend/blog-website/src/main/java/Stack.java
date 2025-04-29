import java.util.ArrayList;
import java.util.Stack;

class Stacks{
    ArrayList<Integer> stack= new ArrayList<>();
    public void push(int value){
        stack.add(value);
    }
    public int pop(){
        if(stack.isEmpty()){
            System.out.println("Stack is empty");
            return -1;
        }
        return stack.remove(stack.size()-1);
    }
    public boolean isEmpty(){
        return stack.isEmpty();
    }
    public int peek(){
        if(stack.isEmpty()){
            System.out.println("Stack is empty");
            return -1;
        }
        return stack.get(stack.size()-1);
    }
    public int size(){
        return stack.size();
    }
}
class Stackapp {
    public static void main(String[] args) {
        Stacks stack = new Stacks();
        // Push elements onto the stack
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        System.out.println(stack.size());
    }
}
