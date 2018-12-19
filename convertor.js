const doConvert = favoriteNumber => {
  // Want to first get the length of the number (# of digits)
  let numberOfDigits = favoriteNumber.toString().length
  console.log(numberOfDigits)
  
  // define some rules for the function for UX
  if (numberOfDigits === 0) return "This is not a valid number"
  if (numberOfDigits > 4) return "A maximum of 4 digits is supported. If you want more digits added get the \"premium version\" :)"
  
  
}

console.log(doConvert())
