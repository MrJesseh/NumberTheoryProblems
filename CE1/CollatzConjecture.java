public class CollatzConjecture {
    public static void main(String[] args){
        Piecewise piecewise = new Piecewise();

        // A. Can you prove this is true for all starting integers m <= 60?
        System.out.println("A) =========================");
        boolean[] nums = new boolean[60];
        for(int i = 0; i < nums.length; i++){
            int num = i + 1;
            int iter = 0;
            while(num > 1){
                num = piecewise.Piecewise1(num);
                iter++;
            }
            System.out.println("-------------------");
            System.out.println("Original Num: " + (i + 1));
            System.out.println("Current Num: " + num);
            System.out.println("Iterations: " + iter);
            System.out.println("-------------------");
            if(num == 1){
                nums[i] = true;
            }
        }
        for(int t = 0; t < nums.length; t++){
            System.out.println("Num " + (t + 1) + " made to one?: " + nums[t]);
        }

        // B. Suppose you change the 3x + 1 to x + 1 in the definition of k(x). What happens? Can you prove it?
        System.out.println("B) =========================");
        boolean[] nums2 = new boolean[60];
        for(int i = 0; i < nums.length; i++){
            int num = i + 1;
            int iter = 0;
            while(num > 1){
                num = piecewise.Piecewise2(num);
                iter++;
            }
            System.out.println("-------------------");
            System.out.println("Original Num: " + (i + 1));
            System.out.println("Current Num: " + num);
            System.out.println("Iterations: " + iter);
            System.out.println("-------------------");
            if(num == 1){
                nums2[i] = true;
            }
        }
        for(int t = 0; t < nums2.length; t++){
            System.out.println("Num " + (t + 1) + " made to one?: " + nums2[t]);
        }

        // C. Suppose you change the 3x + 1 to 5x + 1 in the defition of k(x). Try a few examples and see
        // what happens.  Do you see a different behavior for starting values m = 5, m = 6, and m = 7?
        System.out.println("C) =========================");
        boolean[] nums3 = new boolean[60];
        for(int i = 0; i < nums3.length; i++){
            int num = i + 1;
            int iter = 0;
            while(num > 1) {
                num = piecewise.Piecewise3(num);
                iter++;
            }
            System.out.println("-------------------");
            System.out.println("Original Num: " + (i + 1));
            System.out.println("Current Num: " + num);
            System.out.println("Iterations: " + iter);
            System.out.println("-------------------");
            if(num == 1){
                nums3[i] = true;
            }
        }
        for(int t = 0; t < nums3.length; t++){
            System.out.println("Num " + (t + 1) + " made to one?: " + nums3[t]);
        }

    }
}

class Piecewise {
    public int Piecewise1(int num){
        int newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = (3 * num) + 1;
        }
        return newNum;
    }

    public int Piecewise2(int num){
        int newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = num + 1;
        }
        return newNum;
    }

    public int Piecewise3(int num){
        int newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = (5 * num) + 1;
        }
        return newNum;
    }
}

