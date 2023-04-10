// Assignment code here
var generatePassword = function() {
  // prompt user for password length
  var passwordLength = window.prompt("How many characters long should the password be? (Please choose an option between 8 and 128 characters)");
  // convert response string to integer
  passwordLength = parseInt(passwordLength);
  // validate response
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    generatePassword();
  }

  
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
