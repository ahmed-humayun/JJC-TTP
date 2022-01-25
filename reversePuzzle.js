//a function takes a string as an input
// it will reverse every each word in the string
// but the place of the word itself will remain the same

function reverse(str) {
    
    
    // this is a empty string
    // it will contain the final output later
    reverseStr = '';
    
    //this is a list 
    //it contains all the word in the string
    //split function is used to split the string, it uses " " (space) as a separator
    splitStrList = str.split(" ");

    //this loop Iterates over each item (word) in the reverseStr list
    for (let i = 0; i < splitStrList.length; i++) {
        
        //an empty string
        //it will contain each reversed word
        let temp = ''
        
        //word is a list which will contain each letter in the word
        let word = splitStrList[i].split('') 
         
        // this loop will Iterate over each letter in the word list
        // the loop will strat from the last index and end at index 0
        for (let j = word.length -1; j >= 0; j--){
            
            //this will contain the reversed word
            temp += word[j]
        }
        //each reversed word will be added in this string
        reverseStr += temp + ' ';
    }
    console.log(reverseStr)
    
}

reverse('this string will be reversed word by word')