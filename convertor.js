window.doConvert = function () {
  // turn the input number into the textual English language equivalent
  // e.g. 104 becomes one hundred and four
  // e.g. 12345 becomes twelve thousand three hundred and forty five
  var numberInput = document.getElementById("numberInput").value;
  var outputText = "";



  var mydiv = document.getElementById("result");
  mydiv.innerHTML = outputText;
}