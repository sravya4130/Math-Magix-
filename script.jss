function calculate() {
  const input = document.getElementById("input").value.trim();
  const outputDiv = document.getElementById("output");

  try {
    let result = "";
    let steps = "";

    if (input.toLowerCase().startsWith("diff")) {
      const expr = input.replace("diff", "").trim();
      result = math.derivative(expr, 'x').toString();
      steps = `🧠 Differentiating '${expr}' w.r.t x gives:`;
    } else if (input.toLowerCase().startsWith("integrate")) {
      const expr = input.replace("integrate", "").trim();
      result = `∫(${expr}) dx = [Result not symbolic, only numerical approx: ${math.integrate(expr, 'x').evaluate({x: 1})}]`;
      steps = `🧠 Approximating integration for '${expr}' at x=1:`;
    } else {
      result = math.evaluate(input);
      steps = `🧠 Solving '${input}' gives:`;
    }

    outputDiv.innerHTML = `<strong>${steps}</strong><br>${result}`;
  } catch (e) {
    outputDiv.innerHTML = `❌ Error: ${e.message}`;
  }
}
