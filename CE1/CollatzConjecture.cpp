#include <iostream>
#include <stdio.h>

using namespace std;

#define STARTING_NUM    9

class Piecewise{
public:
    int Piecewise1(int num){
        int newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = (3 * num) + 1;
        }
        return newNum;
    }
    int Piecewise2(int num){
        int newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = num + 1;
        }
        return newNum;
    }
    int Piecewise3(int num){
        int newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = (5 * num) + 1;
        }
        return newNum;
    }
};

int main() {
    Piecewise piecewise;


    // A. Can you prove this is true for all starting integers m <= 60?
    printf("A) =========================\n");
    int num = STARTING_NUM;
    int iter = 0;
    while(num > 1){
        num = piecewise.Piecewise3(num);
        iter++;
    }
    printf("-------------------\n");
    printf("Original Num: %d\n", STARTING_NUM);
    printf("Current Num: %d\n", num);
    printf("Iterations: %d\n", iter);
    printf("-------------------\n");

    return 0;
}
