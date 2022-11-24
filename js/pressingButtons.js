const input = document.getElementById("input");

const calculate = () => {
  if (input.value.replace(/[+-/*\d]/g, "")) {
    input.value = "";
    confirm("Замечены недействительные числа!");
    return;
  }
  const result = eval(input.value.replace(/,/, "."));

  if (["Infinity", "undefined", "null", "NaN"].indexOf(String(result)) === -1) {
    input.value = String(result).replace(/\./, ",");
  } else {
    input.value = "";
    confirm("Замечена ошибка во время вычисления!");
  }
};

const clickButton = (arg) => {
  if (arg === "Clear") {
    input.value = "";
    return;
  }

  if (arg === "Delete") {
    if (input.value.length > 0) {
      input.value = input.value.slice(0, -1);
    }
    return;
  }

  if (input.value.length > 30) {
    return;
  }

  console.log(getLastNumber(input.value));

  if (arg !== "=") {
    if (!isNaN(Number(arg))) {
      input.value += arg;
    } else if (
      // !isNaN(Number(input.value[input.value.length - 1])) &&
      input.value[input.value.length - 1] !== " "
    ) {
      if (arg === "," && getLastNumber(input.value).indexOf(",") !== -1) {
        return;
      }

      if (["+", "-", "*", "/"].indexOf(input.value.slice(-1)) !== -1) {
        input.value = input.value.slice(0, -1) + arg;
      } else {
        input.value += arg;
      }
    }
  } else if (
    input.value.trim().length !== 0 &&
    ["+", "-", "*", "/"].indexOf(input.value.slice(-1)) === -1
  ) {
    calculate();
  }
};

const getLastNumber = (str) => {
  const args = ["+", "-", "*", "/"];

  str = str.trim();

  for (arg of args) {
    str = str.split(arg).join(" ");
  }

  return str.split(" ").filter(Boolean).slice(-1)[0];
};
