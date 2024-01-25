
function main(){
    let piecewise = new Piecewise();

    // A. Can you prove this is true for all starting integers m <= 60?
    console.log("A) =========================");
    let nums = [];
    for(let i = 0; i < 60; i++){
        nums.push(false);
    }
    for(let i = 0; i < nums.length; i++){
        let num = i + 1;
        let iter = 0;
        while(num > 1){
            num = piecewise.Piecewise1(num);
            iter++;
        }
        console.log("-------------------");
        console.log("Original Num: " + (i + 1));
        console.log("Current Num: " + num);
        console.log("Iterations: " + iter);
        console.log("-------------------");
        if(num == 1){
            nums[i] = true;
        }
    }
    for(let t = 0; t < nums.length; t++){
        console.log("Num " + (t + 1) + " made to one?: " + nums[t]);
    }

    // B. Suppose you change the 3x + 1 to x + 1 in the definition of k(x). What happens? Can you prove it?
    console.log("B) =========================");
    let nums2 = [];
    for(let i = 0; i < 60; i++){
        nums2.push(false);
    }
    for(let i = 0; i < nums.length; i++){
        let num = i + 1;
        let iter = 0;
        while(num > 1){
            num = piecewise.Piecewise2(num);
            iter++;
        }
        console.log("-------------------");
        console.log("Original Num: " + (i + 1));
        console.log("Current Num: " + num);
        console.log("Iterations: " + iter);
        console.log("-------------------");
        if(num == 1){
            nums2[i] = true;
        }
    }
    for(let t = 0; t < nums2.length; t++){
        console.log("Num " + (t + 1) + " made to one?: " + nums2[t]);
    }

    // C. Suppose you change the 3x + 1 to 5x + 1 in the defition of k(x). Try a few examples and see
    // what happens.  Do you see a different behavior for starting values m = 5, m = 6, and m = 7?
    console.log("C) =========================");
    let nums3 = [];
    for(let i = 0; i < 60; i++){
        nums3.push(false);
    }
    for(let i = 0; i < nums3.length; i++){
        let num = i + 1;
        let iter = 0;
        while(num > 1) {
            num = piecewise.Piecewise3(num);
            iter++;
        }
        console.log("-------------------");
        console.log("Original Num: " + (i + 1));
        console.log("Current Num: " + num);
        console.log("Iterations: " + iter);
        console.log("-------------------");
        if(num == 1){
            nums3[i] = true;
        }
    }
    for(let t = 0; t < nums3.length; t++){
        console.log("Num " + (t + 1) + " made to one?: " + nums3[t]);
    }

}


class Piecewise {
    Piecewise1(num){
        let newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = (3 * num) + 1;
        }
        return newNum;
    }

    Piecewise2(num){
        let newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = num + 1;
        }
        return newNum;
    }

    Piecewise3(num){
        let newNum;
        if(num % 2 == 0){
            newNum = num / 2;
        }else{
            newNum = (5 * num) + 1;
        }
        return newNum;
    }
}

main();