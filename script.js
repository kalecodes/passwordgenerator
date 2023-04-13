// Assignment code here

  lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  numbers = ["0","1","2","3","4","5","6","7","8","9"];
  special = ["!","@","#","$","%","&","*","?","^"];

  usableCharacters = [];

// var generatePassword = function() {
//   // character arrays
//   lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//   numbers = ["0","1","2","3","4","5","6","7","8","9"];
//   special = ["!","@","#","$","%","&","*","?","^"];

//   usableCharacters = [];

//   // prompt user for password length
//   var passwordLength = window.prompt("How many characters long should the password be? (Please choose an option between 8 and 128 characters)");
//   // convert response string to integer
//   passwordLength = parseInt(passwordLength);
//   // validate response
//   if (passwordLength < 8 || passwordLength > 128) {
//     window.alert("You must enter a number between 8 and 128. Please try again.");
//     return "Unable to generate password. Please try again by clicking the button below.";
//   }

//   // prompt user for various character types
//   var lowercaseConfirm = window.confirm("Should the password include lowercase letters?");
//   var uppercaseConfirm = window.confirm("Should the password contain uppercase letters?");
//   var numericConfirm = window.confirm("Should the password contain numbers?");
//   var specialConfirm = window.confirm("Should the password contain special characters? (!@#$%^&*)");
//   // validate at least one response is true
//   if (!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialConfirm) {
//     window.alert("You must select at least one character type. Please try again.");
//     return "Unable to generate password. Please try again by clicking the button below.";
//   }

//   // console.log(passwordLength, lowercaseConfirm, uppercaseConfirm, numericConfirm, specialConfirm);

//   // push usable characters to new array based on user confirm responses
//   if (lowercaseConfirm) {
//     usableCharacters.push(...lowercase);
//   }
//   if (uppercaseConfirm) {
//     usableCharacters.push(...uppercase);
//   }
//   if (numericConfirm) {
//     usableCharacters.push(...numbers);
//   }
//   if (specialConfirm) {
//     usableCharacters.push(...special);
//   }

//   // console.log(usableCharacters);

//   // randomly select characters and push to new array
//   var selectedCharacters = [];
//   for (i = 0; i < passwordLength; i++) {
//     selectedCharacters.push(usableCharacters[Math.floor(Math.random() * usableCharacters.length)])
//   }

//   // convert array to string
//   // console.log(selectedCharacters);
//   var password = selectedCharacters.join("");
//   // return password string to writePassword() function to be displayed
//   // console.log(password);
//   return password;
// }
// ---------------------------------------------------
var chooseCharacters = function() {
  // prompt user for various character types
  var lowercaseConfirm = window.confirm("Should the password include lowercase letters?");
  var uppercaseConfirm = window.confirm("Should the password contain uppercase letters?");
  var numericConfirm = window.confirm("Should the password contain numbers?");
  var specialConfirm = window.confirm("Should the password contain special characters? (!@#$%^&*)");
  // validate at least one response is true
  if (!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialConfirm) {
    window.alert("You must select at least one character type. Please try again.");
    return "Unable to generate password. Please try again by clicking the button below.";
  }

  // push usable characters to new array based on user confirm responses
  if (lowercaseConfirm) {
    usableCharacters.push(...lowercase);
  }
  if (uppercaseConfirm) {
    usableCharacters.push(...uppercase);
  }
  if (numericConfirm) {
    usableCharacters.push(...numbers);
  }
  if (specialConfirm) {
    usableCharacters.push(...special);
  }

  return usableCharacters;
}

var chooseLength = function() {
  // prompt user for password length
  var passwordLength = window.prompt("How many characters long should the password be? (Please choose an option between 8 and 128 characters)");
  // convert response string to integer
  passwordLength = parseInt(passwordLength);
  // validate response
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You must enter a number between 8 and 128. Please try again.");
    return "Unable to generate password. Please try again by clicking the button below.";
  }

  return passwordLength;
}

var generatePassword = function() {
  var length = chooseLength();
  console.log(length);
  var characters = chooseCharacters();
  console.log(characters);
  // randomly select characters and push to new array
  var selectedCharacters = [];
  for (i = 0; i < length; i++) {
    selectedCharacters.push(characters[Math.floor(Math.random() * characters.length)])
  }

  var password = selectedCharacters.join("");
  console.log(password);
  return password;
}

// ---------------------------------------------------

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
