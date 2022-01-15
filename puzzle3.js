function puzzle(number) {

    //loop through 1 to number in parameter
    for(i=1; i <= number; i++) {

        //checks if divisible by 3 and 5
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('Fizz Buzz')
        }

        //checks if divisible by only 5
        else if(i % 5 == 0) {
            console.log('Buzz ')
        }
        //checks if divisible by only 3
        else if(i % 3 == 0) {
            console.log('Fizz ')
        }

        //all other number
        else {
            console.log(i)
        }
    }
}

puzzle(100)
