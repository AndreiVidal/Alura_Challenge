const btn = document.getElementById("btn-cod")
const btn2 = document.getElementById("reset")
const inputText = document.getElementById("input-text")
const outputText = document.getElementById("output-text")
btn.addEventListener("click", teste);
btn2.addEventListener("click", limpar);

function limpar() {
    if (outputText.value !== "") {
        outputText.value = ""
    }else {return}
    
}


function teste() {
    
    if (inputText.value ==="") {
      alert('Campo vazio')
    } else {
      let valor = inputText.value
        outputText.value = valor
    
    }
    
}

  