function buttonClick(input) {
  document.getElementById("screen").value =
    document.getElementById("screen").value + input;
}
function clearScreen() {
  document.getElementById("screen").value = "";
}
function equalClick() {
  if (document.getElementById("screen").value) {
    var text = document.getElementById("screen").value;
    try {
      var result = eval(text);
      document.getElementById("screen").value = result;
    } catch (error) {
      alert("Invalid input");
      document.getElementById("screen").value = "";
    }
  }
}
function backSpace() {
  var n = document.getElementById("screen").value.length;
  var num = "";
  for (var i = 0; i < n - 1; i++) {
    num = num + document.getElementById("screen").value[i];
  }
  document.getElementById("screen").value = num;
}
var sign = false;
function signClick() {
  document.getElementById("screen").value =
    "-" + document.getElementById("screen").value;
}
