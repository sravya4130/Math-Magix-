let expression = "";

function press(val) {
  expression += val;
  document.getElementById("input").value = expression;
  liveCalculate();
}

function clearInput() {
  expression = "";
  document.getElementById("input").value = "";
  document.getElementById("output").innerHTML = "";
}

function liveCalculate() {
  try {
    const input = document.getElementById("input").value;
    const result = eval(input);
    document.getElementById("output").innerHTML = "<b>Result:</b> " + result;
  } catch {
    document.getElementById("output").innerHTML = "<b>Result:</b> ...";
  }
}
