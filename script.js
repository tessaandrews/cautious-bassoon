// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var SpecialCharacters = ["!","&","@","$","*","#","(",")"];
  var NumericCharacters = ["1","2","3","4","5","6","7","8","9"];
  var LowerCasedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var UpperCasedLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  passwordText.value = password;


  var length = "";
  var hasLowerCasedLetters;
  var hasUpperCasedLetters;
  var hasSpecialCharacters;
  var hasNumericCharacters;

  var passwordOptions = {


  };

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var length = 0
  while (length < 8 || length > 128) {
  length = window.prompt("How many characters would you like? (8-128 Characters)");
    console.log(number);


  var hasSpecialCharacters = window.confirm("Would you like Special Characters?");
  var hasLowerCasedLetters = window.confirm("Would you like Lowercased Letters?");
  var hasNumericCharacters = window.confirm("Would you like Numeric Characters?");
  var hasUpperCasedLetters = window.confirm("Would you like Uppercased numbers?");
}
};



if(hasNumericCharacters) {
  passwordCharacters = 
  passwordCharacters.concat(NumericCharacters)
}
if (hasUpperCasedLetters) {
  passwordCharacters =
  passwordCharacters.concat(UpperCasedLetters)
}
if (hasLowerCasedLetters) {
  passwordCharacters =
  passwordCharacters.concat(LowerCasedLetters)
}

console.log(passwordCharacters)

var randomPassword = ""

for(var i = 0; i < length; i++) {
  randomPassword = randomPassword +
  passwordCharacters[Math.floor(Math.random() *
  passwordCharacters.length)];
  }



function generatePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value=password;

}
}