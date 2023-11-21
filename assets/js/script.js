var pswdLength = 8;
var pswdArray = [];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCaseLtrArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLtrArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var spCharArray = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ">", "<", "@", "#", "$", "%"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //true or false
  var passwordText = document.querySelector("#password");

  if(corectPrompts) {
    var randomPassword = generatePassword()
    passwordText.value = randomPassword;
  } else{
  passwordText.value = "";
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
