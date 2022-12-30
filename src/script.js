const outputText = document.getElementById("output-text");
const inputText = document.getElementById("input-text");
const btnCod = document.getElementById("btn-cod");
const btnDecod = document.getElementById("btn-decod");
const btnCopy = document.getElementById("copy");
const btnAll = document.querySelectorAll(".btn");

// Evento de troca
for (let btn of btnAll) {
  btn.addEventListener("click", () => {
    let changeCard = document.getElementById("switch");

    if (inputText.value == "" || changeCard.checked) {
      changeCard.checked = false;
    } else if (outputText.value == "" || !changeCard.checked) {
      changeCard.checked = true;
      
    } 
  });
}

btnCod.addEventListener("click", () => {
  let input = inputText.value;
  outputText.textContent = input;
});
