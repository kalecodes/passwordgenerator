// Assignment code here
var generatePassword = function() {
  // prompt user for password length
  var passwordLength = window.prompt("How many characters long should the password be? (Please choose an option between 8 and 128 characters)");
  // convert response string to integer
  passwordLength = parseInt(passwordLength);
  // validate response
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You must enter a number between 8 and 128. Please try again.");
    generatePassword();
  }

  // prompt user for various character types
  var lowercaseConfirm = window.confirm("Should the password include lowercase letters?");
  var uppercaseConfirm = window.confirm("Should the password contain uppercase letters?");
  var numericConfirm = window.confirm("Should the password contain numbers?");
  var specialConfirm = window.confirm("Should the password contain special characters? (!@#$%^&*)");
  // validate at least one response is true
  if (!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialConfirm) {
    window.alert("You must select at least one character type. Please try again.");
    generatePassword();
  }

  console.log(passwordLength, lowercaseConfirm, uppercaseConfirm, numericConfirm, specialConfirm);
}

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
