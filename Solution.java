import java.util.*;

import javax.naming.spi.DirStateFactory.Result;
class Oils{
    private int rackNumbers;
    private String oilName;
    private int availableStoke;
    private double price;

    Oils(int rackNumbers, String oilName, int availableStoke, double price)
    {
        this.rackNumbers = rackNumbers;
        this.oilName = oilName;
        this.availableStoke = availableStoke;
        this.price = price;
    }

    int getRackNumbers(){
        return rackNumbers;
    }
    String getOilName(){
        return oilName;
    }
    int getAvailableStock(){
        return availableStoke;
    }
    double getPrice(){
        return price;
    }


    void setRackNumbers(int a){
        rackNumbers = a;
    }

    void setOilName(String a){
        oilName=a;
    }

    void setAvailableStock(int a){
        availableStoke=a;
    }

    void setPrice(double a){
        price=a;
    }
}
class Solution{
    
    static int findStockByName(Oils arr[], String s){
        int result = 0;
        for(Oils o:arr){
            if(o.getOilName().equals(s))
                result+=o.getAvailableStock();
        }
        return result;
    }

    static Oils[] sortOilByName(Oils arr[], double d){
        ArrayList<Oils> al = new ArrayList<Oils>();
        for(Oils o:arr)
        {
            if(o.getPrice()<d)
                al.add(o);
        }

        Object obj[] = al.toArray();
        Oils result[] =  new Oils[obj.length];
        
        int k = 0;
        for (Object o : obj) {
        result[k++] = (Oils) o;
        }

        int n = result.length;  
        Oils temp;  
         for(int i=0; i < n; i++){  
            for(int j=1; j < (n-i); j++){  
                if(result[j-1].getPrice() > result[j].getPrice()){  
                        //swap elements  
                        temp = arr[j-1];  
                        arr[j-1] = arr[j];  
                        arr[j] = temp;  
                }  
            } 
        }         
        return result;
    }
    public static void main(String ar[]){

        Scanner sc =new Scanner(System.in);
        
        Oils oil[] = new Oils[4];
        
        for(int i=0;i<4;i++){
            int a = sc.nextInt();
            String b = sc.next();
            int c = sc.nextInt();
            double d= sc.nextDouble();

            oil[i] = new Oils(a,b,c,d);
            // System.out.println(a+b+c+d);
        }
        String findStock = sc.next();
        double limPrice = sc.nextDouble();

        System.out.println(findStockByName(oil, findStock));
 
        Oils sorted[] = sortOilByName(oil, limPrice);

        for(Oils o:sorted){
            System.out.println(o.getOilName());
        }

    }
}