const input = document.getElementById("input");

const calculate = () => {
  const result = eval(input.value.replace(/,/, "."));

  input.value = String(result).replace(/\./, ",");
};

const clickButton = (arg) => {
  if (arg !== "=") {
    if (!isNaN(Number(arg))) {
      input.value += arg;
    } else if (
      !isNaN(Number(input.value[input.value.length - 1])) &&
      input.value[input.value.length - 1] !== " "
    ) {
      input.value += arg;
    }
  } else {
    calculate();
  }
};
