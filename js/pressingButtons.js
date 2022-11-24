const input = document.getElementById("input");

const calculate = () => {
  // Проверяем входящие значения на наличие недопустимых данных
  if (input.value.replace(/[+-/*\d]/g, "")) {
    input.value = "";
    confirm("Замечены недействительные числа!");
    return;
  }
  const result = eval(input.value.replace(/,/, "."));

  // Сравниваем ответ с возможными ошибками
  if (["Infinity", "undefined", "null", "NaN"].indexOf(String(result)) === -1) {
    input.value = String(result).replace(/\./, ",");
  } else {
    input.value = "";
    confirm("Замечена ошибка во время вычисления!");
  }
};

const clickButton = (arg) => {
  // Если очистка всего поля
  if (arg === "Clear") {
    input.value = "";
    return;
  }

  // Если удаление последнего эл-та
  if (arg === "Delete") {
    if (input.value.length > 0) {
      input.value = input.value.slice(0, -1);
    }
    return;
  }

  // Если значений больше 30 - выходим из ф-ии
  if (input.value.length > 30) {
    return;
  }

  if (arg !== "=") {
    if (!isNaN(Number(arg))) {
      input.value += arg;
    } else if (
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

// Получение последнего значения
const getLastNumber = (str) => {
  const args = ["+", "-", "*", "/"];

  str = str.trim();

  for (arg of args) {
    str = str.split(arg).join(" ");
  }

  return str.split(" ").filter(Boolean).slice(-1)[0];
};
