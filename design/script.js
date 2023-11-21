document.addEventListener('DOMContentLoaded', function() {
    let resultField = document.getElementById('displayArea');
    let buttons = document.querySelectorAll('#keyPad button');
    let Del = document.getElementById("delete");

    buttons.forEach(function(button){
        button.onclick = function () {
            let buttonContent = this.value;
            if (resultField.value.length > 3) {
                let inputValue = resultField.value.replace(/,/g, '');
                resultField.value = Number(inputValue).toLocaleString();
            }
            
            if (buttonContent === '=') {
                try {
                    let result = eval(resultField.value);
                    resultField.value = result;
                }
                catch (error) {
                    resultField.value = "Syntax Error";
                }
            } else if (buttonContent === 'RESET') {
                resultField.value = '';
            } else {
                resultField.value += buttonContent;
            }

Del.onclick = function () {
    resultField.value = resultField.value.slice(0, -1);
}
        }
    })
  });