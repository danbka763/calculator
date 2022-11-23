const collectionButtons = [
  ["1", "2", "3", "+"],
  ["4", "5", "7", "-"],
  ["7", "8", "9", "*"],
  [",", "0", "/", "="],
];

(() => {
  const buttonsForm = document.getElementById("buttons");

  const lines = collectionButtons.map((line) => {
    const combinedLine = line.map(
      (item) =>
        `<button 
           key="${item}" 
           onClick="clickButton(${item})">
          ${item}
         </button>`
    );

    return `<div class="line">${combinedLine.join("")}</div>`;
  });

  buttonsForm.innerHTML = lines.join("");
})();
