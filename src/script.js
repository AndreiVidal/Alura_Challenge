const outputText = document.getElementById("output-text");
const inputText = document.getElementById("input-text");
const btnCod = document.getElementById("btn-cod");
const btnDecod = document.getElementById("btn-decod");
const btnCopy = document.getElementById("copy");
const btnAll = document.querySelectorAll(".btn");

//caixa de aviso
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    // inserir warningBox depois do inputText
    inputText.parentNode.insertBefore(warningBox, inputText.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}

// Evento de troca
for (let btn of btnAll) {
  btn.addEventListener("click", () => {
    //validando texto digitado
    const regExp = /[A-Z-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/g;
    let changeCard = document.getElementById("switch");
    let textInput = inputText.value;
    if (regExp.test(textInput)) {
      displayWarning("Somente letras minúsculas e sem acentos\n");
    } else if (textInput == "" || changeCard.checked) {
      displayWarning("Campo em branco.\n");
      changeCard.checked = false;
      inputText.onfocus = inputText.value = "";
    } else if (outputText.value == "" || !changeCard.checked) {
      changeCard.checked = true;
    }
  });
}

btnCod.addEventListener("click", () => {
  let input = inputText.value;
  outputText.textContent = encoding(input);
});

btnDecod.addEventListener("click", () => {
  let input = inputText.value;
  outputText.textContent = dencoding(input);
});

btnCopy.addEventListener("click", () => {
  let textOutput = outputText.value
  navigator.clipboard.writeText(textOutput)
  inputText.value = ""
})
/*  Funções     */

//codificar
function encoding(textCode) {
  let code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let index = 0; index < code.length; index++) {
    if (textCode.includes(code[index][0])) {
      textCode = textCode.replaceAll(code[index][0], code[index][1]);
    }
  }
  return textCode;
}

//decodificar
function dencoding(textCode) {
  let code = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let index = 0; index < code.length; index++) {
    if (textCode.includes(code[index][1])) {
      textCode = textCode.replaceAll(code[index][1], code[index][0]);
    }
  }
  return textCode;
}
