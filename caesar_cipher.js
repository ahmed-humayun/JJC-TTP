// a function to encrypt message
function encryption(str, key) {

  //a string of all letters in alphabet
  alpha = 'abcdefghijklmnopqrstuvwxyz'

  //empty string to contain encrypted message
  var encrypted = ""
  
  //loops through each letter in str
  for (let i = 0; i < str.length; i++) {
      
     //loops through each letter in alpha
    for (let j = 0; j < alpha.length; j++) { 
    //if letter in string matches with letter in alpha
      if (str[i] == alpha[j]) { 
          
          //shifts the letter 'key'(for example 3) places
          //mod 26 is needed so that shifted letters can circle back to the beginning of alpha
          //for example if 'z' is shifted 3 places it will become 'c'
        encrypted += alpha[(j + key) % 26];
      }
    }
  }

  print(encrypted) // Print encrypted message
}


//a function to decrypt message
function decryption(str, key) {

  alpha = 'abcdefghijklmnopqrstuvwxyz'

  var decrypted = ""
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alpha.length; j++) { 
      if (str[i] == alpha[j]) { 
        decrypted += alpha[(j + 26 - key) % 26];
        //shifts letters backwards
      }
    }
  }

  print(decrypted) // Print encrypted stirng
}


encryption('abcxyz',3)
decryption('defabc', 3)