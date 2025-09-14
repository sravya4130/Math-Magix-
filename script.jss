function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

// Basic Calculator
function calculate() {
  let input = document.getElementById("calc-input").value;
  try {
    let result = eval(input); // simple eval (can improve with math.js later)
    document.getElementById("calc-result").innerText = "= " + result;
  } catch {
    document.getElementById("calc-result").innerText = "Error";
  }
}
