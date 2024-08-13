function calculator(n1, n2, oprator) {
  let result;
  switch (oprator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
    default:
      throw new Error("Invalid oprator");
  }
  return result;
}

// Anethor method
function calculator2(n1, n2, oprator) {
  let result;
  if (oprator === "+") {
    result = n1 + n2;
  } else if (oprator === "-") {
    result = n1 - n2;
  } else if (oprator === "*") {
    result = n1 * n2;
  } else if (oprator === "/") {
    result = n1n2;
  } else {
    throw new Error("invalid Oparoter");
  }
  return result
}

const calci = calculator2(2, 4, "+");
console.log(calci);
