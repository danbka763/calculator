// Коллекция значений кнопок калькулятора
const collectionButtons = [
  ["1", "2", "3", "+"],
  ["4", "5", "7", "-"],
  ["7", "8", "9", "*"],
  [",", "0", "/", "="],
  ["Clear", "Delete"],
];

// Самовызываемая функция (срабатывает при старте страницы)
(() => {
  const buttonsForm = document.getElementById("buttons");

  // Получаем внутри коллекцию кнопок по каждой линии,
  // а на выходе в lines - коллекцию линий с кнопками
  const lines = collectionButtons.map((line) => {
    const combinedLine = line.map(
      (item) =>
        `<button 
           key="${item}" 
           onClick="clickButton('${item}')">
          ${item}
         </button>`
    );

    // Формируем линию
    return `<div class="line">${combinedLine.join("")}</div>`;
  });

  // Склеиваем все значения массива, получаем html код, 
  // заливаем его в нужный нам блок
  buttonsForm.innerHTML = lines.join("");
})();
