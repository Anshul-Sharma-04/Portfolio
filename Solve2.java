import java.util.*;

class InvalidPriceException extends Exception{
    InvalidPriceException(String s){
        super(s);
    }
}

class Solve2{
    public static void main(String ar[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter product name");
        String name = sc.next();
        System.out.println("Enter product name");
        try{
            int price = sc.nextInt();

            if(price<100)
                throw new InvalidPriceException("Product Price Invalid");

                System.out.println("Name:"+name);
            System.out.println("Price:"+price);
        }catch(InvalidPriceException e){
            System.out.println(e);
        }
    }
}