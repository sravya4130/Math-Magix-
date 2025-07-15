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
  const input = document.getElementById("input").value;
  expression = input; // keep updated for pressing buttons
  try {
    const result = eval(input);
    document.getElementById("output").innerHTML = "<b>Result:</b> " + result;
  } catch {
    document.getElementById("output").innerHTML = "<b>Result:</b> ...";
  }
}

function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}
