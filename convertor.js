const doConvert = favoriteNumber => {
  // Want to first get the length of the number (# of digits)
  let numberOfDigits = favoriteNumber.toString().length
  console.log(numberOfDigits)
  
  // define some rules for the function for UX
  if (numberOfDigits === 0) return "This is not a valid number"
  if (numberOfDigits > 4) return "A maximum of 4 digits is supported. If you want more digits added get the \"premium version\" :)"
  
  // create collections of data
  // I use "zero" as the first string so that the number indexing is more intuitive (for a human!!)
  const singleDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nince"]
  const doubleDigits = ["", "ten", "eleven", "twelve", "thirteen", "fourteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  const multipleOfTens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  const tenRaised = ["hundred", "thousand"]
}

console.log(doConvert())
