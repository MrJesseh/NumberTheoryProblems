struct Piecewise;
impl Piecewise {
    fn piecewise1(&self, mut num: i32) -> i32 {
        if num % 2 == 0{
            num = num / 2;
        }else{
            num = (3 * num) + 1;
        }
        return num;
    }
}

fn main() {
    let piecewise = Piecewise;

    println!("============================");
    let mut nums: [bool; 60] = [false; 60];
    for i in 0..nums.len(){
        let mut num = i as i32 + 1;
        let mut iter = 0;
        while num > 1 {
            num = piecewise.piecewise1(num);
            iter += 1;
        }
        println!("---------------");
        println!("Original Num: {}", (i as i32 + 1));
        println!("Current Num: {}", num);
        println!("Iterations: {}", iter);
        println!("---------------");

        if num == 1{
            nums[i] = true;
        }
    }
    for t in 0..nums.len() {
        println!("Num {} made to one?: {}", (t + 1), nums[t]);
    }
}