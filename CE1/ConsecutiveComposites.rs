fn is_prime(mut num: i32) -> bool {
    let root = (num as f32).sqrt().ceil();
    for i in 2..root as i32 {
        if num % i == 0 {
            return false;
        }
    }
    return true;
}

fn is_composite(mut num: i32) -> bool {
    if !is_prime(num) && num > 1 {
        return true;
    }
    return false;
}

fn main() {
    use std::time::Instant;
    let now = Instant::now();
    {
        let mut count = 0;
        let mut i = 2;

        while count < 50 {
            if is_composite(i) {
                count += 1;
            } else {
                count = 0;
            }
            i += 1;
        }
        println!("Range of first 50 consecutive integers that are composite is: {} to {}", i - 49, i);
    }
    let elapsed = now.elapsed();
    println!("Execution Time: {:.2?}", elapsed);
}