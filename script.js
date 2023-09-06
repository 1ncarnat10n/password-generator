var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

var characterLength = 0;
var characterLengthPrompt = 0;
var promptChoices = [];
var passwordLength = 0;

var generateBtn = document.querySelector("#generate");

// Function for getting all the passwords options
function getPasswordOptions () {
  promptChoices = [];
  passwordLength = parseInt(window.prompt("Please choose a number from 8 to 128 as the password's length."));

  while (passwordLength !== null) {
    if (isNaN(passwordLength) || passwordLength <= 8 || passwordLength >= 128) {
      passwordLength = parseInt(window.prompt("Invalid number or letter. Please choose a number from 8 to 128 as the password's length."));
      // The 'else' statement is used to specify if the statement above is false then it will go ahead and execute the code below it. The 'break' statement breaks out of the loop and continues executing the code after the loop.
    } 
    else {
      break;
    }
  }

  if (confirm("Do you want to include special characters in your password?")) {
    if (confirm && !promptChoices.includes(specialCharacters)) {
      promptChoices = promptChoices.concat(specialCharacters);
    }
  }

  if (confirm("Do you want to include numbers in your password?")) {
    if (confirm && !promptChoices.includes(numbers)) {
      promptChoices = promptChoices.concat(numbers);
    }
  }

  if (confirm("Do you want to include lowercase letters in your password?")) {
    if (confirm && !promptChoices.includes(lowercaseCharacters)) {
      promptChoices = promptChoices.concat(lowercaseCharacters);
    }
  }

  if (confirm("Do you want to include uppercase letters in your password?")) {
    if (confirm && !promptChoices.includes(uppercaseCharacters)) {
      promptChoices = promptChoices.concat(uppercaseCharacters);
    }
  }

  if (promptChoices.length === 0) {
    window.alert("Ooops, you must choose at least one character type. Please try again.");
  }
  
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
