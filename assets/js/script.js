// regex to confirm the presence of lowercase characters in our password if desired
let lowercaseRegex =  /.*[a-z]+.*/;

// regex to confirm the presence of uppercase characters in our password if desired
let uppercaseRegex =  /.*[A-Z]+.*/;

// regex to confirm the presence of numeric characters in our password if desired
let numericRegex =  /.*[0-9]+.*/;

// regex to confirm the presence of special characters in our password if desired
let specialRegex =  /.*[ !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]+.*/;

// constant string for lowercase letters
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

// constant string for uppercase letters
const uppercaseLetters = lowercaseLetters.toUpperCase(); //function to convert string to uppercase

// constant string for numbers
const numbers = "0123456789";

// constant string for special characters
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
}

// prompt use with question and confirm user entry as yes or no
var confirmEntry = function (userPrompt) {
  var userResponse = "";
  while ((userResponse === "" || userResponse === null) || (userResponse != "Y" && userResponse != "N")) {
    userResponse = prompt(userPrompt).toUpperCase();
  }
  return userResponse;
}

//function to build password
var buildPassword = function(referenceString, passwordLength) {
  var generatedPassword = "";

  while (generatedPassword.length < passwordLength) {
    generatedPassword += referenceString.charAt(randomNumber(0, referenceString.length));
  }

  return generatedPassword;
}

// begin password component picker
var generatePassword = function () {
  var passwordLength = "";

  while (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Please enter a number 8 through 128");
  }

  var passwordLowercase = confirmEntry("Would you like this password to include lowercase letters? Y/N");

  var passwordUppercase = confirmEntry("Would you like this password to include UPPERCASE letters? Y/N");

  var passwordNumeric = confirmEntry("Would you like this password to include numbers? Y/N");

  var passwordSpecial = confirmEntry("Would you like this password to include special characters? Y/N");

  //If user chooses a valid password length but does not include any characters, display message in password textbox
  if (passwordLowercase === "N" && passwordUppercase === "N" && passwordNumeric === "N" && passwordSpecial === "N") {
    return "You have to pick at least *one* of the character types";
  }

  var generatedPassword = "";

  var referenceString = "";

  if (passwordLowercase === "Y") referenceString += lowercaseLetters;
  if (passwordUppercase === "Y") referenceString += uppercaseLetters;
  if (passwordNumeric === "Y") referenceString += numbers;
  if (passwordSpecial === "Y") referenceString += specialCharacters;

  while (!passwordValidate(passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial, generatedPassword)) {
    generatedPassword = "";
    generatedPassword = buildPassword(referenceString, passwordLength);
  }

  return generatedPassword;
}

//function to validate the presence of desired characters
var passwordValidate = function(passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial, generatedPassword) {
  var isValid = true;

  if (passwordLowercase === "Y" && !lowercaseRegex.test(generatedPassword)) isValid = false;
  if (passwordUppercase === "Y" && !uppercaseRegex.test(generatedPassword)) isValid = false;
  if (passwordNumeric === "Y" && !numericRegex.test(generatedPassword)) isValid = false;
  if (passwordSpecial === "Y" && !specialRegex.test(generatedPassword)) isValid = false;

  return isValid;
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
