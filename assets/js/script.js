// constant string for lowercase letters
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"; 

// constant string for uppercase letters
const uppercaseLetters = lowercaseLetters.toUpperCase();

// constant string for numbers
const numbers = "0123456789";

// constant string for special characters
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// prompt use with question and confirm user entry as yes or no
var confirmEntry = function (userPrompt) {
  var userResponse = "";
  while ((userResponse === "" || userResponse === null) || (userResponse != "Y" && userResponse != "N")) {
    userResponse = prompt(userPrompt).toUpperCase(); //function to convert string to uppercase
  }
  return userResponse;
}

// begin password component picker
var passwordStart = function () {
  var passwordLength = "";

  while ((passwordLength === "" || passwordLength === null) || (passwordLength < 8 || passwordLength > 128)) {
    passwordLength = prompt("Please enter a number 8 through 128");
  }

  var passwordLowercase = confirmEntry("Would you like this password to include lowercase letters? Y/N");

  var passwordUppercase = confirmEntry("Would you like this password to include UPPERCASE letters? Y/N");

  var passwordNumeric = confirmEntry("Would you like this password to include numbers? Y/N");

  var passwordSpecial = confirmEntry("Would you like this password to include special characters? Y/N");
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
