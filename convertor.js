window.doConvert = function () {
  // turn the input number into the textual English language equivalent
  // e.g. 104 becomes one hundred and four
  // e.g. 12345 becomes twelve thousand three hundred and forty five
  var numberInput = document.getElementById("numberInput").value;
  var outputText = "";

// Create a hardcoded map for n < 20 (all the values when turned to string are uniques)
/*

Create a hardcoded map for concatenations for n > 20 && n < 100: 
i.e. 
tw[o] + en + "ty" 
th[ree] + ir + "ty"
fo[ur] + "r" + "ty"
fi[ve] "f" + "ty" 
sixty = six + "ty"
seventy = seven + "ty"
eighty = eight + "ty"
ninety = nine + "ty"


*/
  var mydiv = document.getElementById("result");
  mydiv.innerHTML = outputText;
}