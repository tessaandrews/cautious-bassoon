// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var length = math.floor(math.random() * 129) + 8;
  var hasSpecialCharacters = "!","%","^","&","*","(",")","_","+","~","\","|","}","[","]",",";","?","">","<","/","
  var hasNumericCharacters = 123456789;
  var hasLowerCasedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var hasUpperCasedLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
=
  passwordText.value = password;

  var passwordOptions = {


  };




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {

  window.prompt("How many characters would you like? (8-128 Characters)");
  if (confirm);
  console.log(length);
  

  var hasSpecialCharacters
  window.confirm("Would you like Special Characters?");
  if (hasSpecialCharacters= true);
  console.log(hasSpecialCharacters);
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

}