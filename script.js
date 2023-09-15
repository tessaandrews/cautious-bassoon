// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var length = 8;
  var hasSpecialCharacters = "!@#$%^&*()_+~\`|}{[]:;?><,./-=";
  var hasNumericCharacters = 123456789;
  var hasLowerCasedLetters = "abcdefghijklmnopqrstuvwxyz"
  var hasUpperCasedLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var min = 8;
  var max= 128;

  passwordText.value = password;

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowerCasedLetters: hasLowerCasedLetters,
    hasUpperCasedLetters: hasUpperCasedLetters,
    hasNumericCharacters: hasNumericCharacters,
  };


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var length 
  window.prompt("How many characters would you like? (8-128 Characters)");
  if (confirm);
  console.log(Math.floor());
} else {
  return ;
  

  var hasSpecialCharacters
  window.confirm("Would you like Special Characters?");
  if (hasSpecialCharacters= true);
  console.log(Math.random(Symbol));
  if (hasSpecialCharacters= false);
  return; 

  var hasLowerCasedLetters
  window.confirm("Would you like Lowercased Letters?");
  if (hasLowerCasedLetters= true);
  console.log();
  if (hasLowerCasedLetters= false);
  return;

  var hasNumericCharacters
  window.confirm("Would you like Numeric Characters?");
  if (hasNumericCharacters= true);
  console.log(Math.random(Math.floor()));
  if (hasNumericCharacters= false);
  return;

  var hasUpperCasedLetters
  window.confirm("Would you like Uppercased numbers?");
  if (hasUpperCasedLetters = true);
  console.log(hasUpperCasedLetters);
  if (hasUpperCasedLetters = false);
  return;

window.prompt("Here is your password!")
}