public class practice{
    public static boolean oneEdit(String a, String b){
        if(a.length() == b.length()){
            return oneEditReplace(a, b);
        }
        else if(a.length()+1 == b.length()){
            return oneEditInsert(a, b);
        }
        else if(a.length() == b.length()+1){
            return oneEditInsert(b, a);
        }
        else
            return false;
    }
    public static boolean oneEditReplace(String a, String b){
        boolean check = false;
        for(int i=0; i<a.length(); i++){
            if(a.charAt(i) != b.charAt(i)){
              if(check){
                  return false;
              }
                check=true;
             }
        }
        return true;
    }
    public static boolean oneEditInsert(String a, String b){
        int index1=0;
        int index2=0;
        boolean check = false;
        int check1 =1;
    
        while(index1<a.length() && index2<b.length()){
            if(a.charAt(index1) == b.charAt(index2)){
                index1++;
                index2++;
            }
            else{
                index2++;
                if(check){
                    return false;
                }
                check = true;
            }
        }
       
        return true;
    }
    public static void main(String[] args){
        String a = "pale";
        String b = "ple";
        
        boolean value = oneEdit(a, b);
        System.out.println(a+","+b+" =>" +value);
    }
}
