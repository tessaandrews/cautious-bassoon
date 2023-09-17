// Assignment Code
// Write password to the #password input
function generatePassword() {

  var specialCharacters = ["!","&","@","$","*","#","(",")"];
  var numericCharacters = ["1","2","3","4","5","6","7","8","9"];
  var lowerCasedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCasedLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


  var lengthChar = "";
  var passwordCharacters= "";
  var passwordLength="";

  var passwordLength = window.prompt("How many characters would you like? (8-128 Characters)");
    passwordLength= parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must have more than 8, and less than 128 characters");
      return;
    }

  var hasSpecialCharacters = window.confirm("Would you like Special Characters?");
    if(hasNumericCharacters) {
    passwordCharacters += specialCharacters;
  }

  var hasLowerCasedLetters = window.confirm("Would you like Lowercased Letters?");
  if (hasLowerCasedLetters) {
    passwordCharacters += lowerCasedLetters;
  }

  var hasNumericCharacters = window.confirm("Would you like Numeric Characters?");
    if(hasNumericCharacters) {
    passwordCharacters += numericCharacters;
    }

  var hasUpperCasedLetters = window.confirm("Would you like Uppercased numbers?");
    if (hasUpperCasedLetters) {
    passwordCharacters += upperCasedLetters;
}

var passwordString = "";
for (var i = 0; i < passwordLength; i ++) {
  passwordString += passwordCharacters[Math.floor(Math.random() * (passwordCharacters.length))];
}

return passwordString;

}


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
