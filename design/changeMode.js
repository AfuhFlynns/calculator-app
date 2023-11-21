let modeRange = document.getElementById("modeRange");
modeRange.value = 0;
const mainBody = document.body;
const displayArea = document.getElementById("displayArea");
let keypad = document.querySelector("#keyPad");
let keyss = document.querySelectorAll('#keyPad button');
const reset = document.getElementById("reset");
const Delete = document.getElementById("delete");
const equals = document.getElementById("equals");

modeRange.onclick = function () {
    if (modeRange.value == 0) {
        mainBody.style.backgroundColor = `hsl(222, 26%, 31%)`;
        mainBody.style.color = `white`;

        displayArea.style.backgroundColor = `hsl(224, 36%, 15%)`;
        displayArea.style.color = `white`;

        keypad.style.backgroundColor = `hsl(223, 31%, 20%)`;
        keyss.forEach(keys => {
            keys.style.backgroundColor = `hsl(28, 16%, 80%)`;
            keys.style.color = `hsl(60, 10%, 19%)`;
            keys.onmouseover = function () {
                keys.style.backgroundColor = `rgb(238, 235, 233)`;
            }
            keys.onmouseout = function () {
                keys.style.backgroundColor = `hsl(28, 16%, 80%)`;
            }
        })

        Delete.style.backgroundColor = `hsl(225, 21%, 49%)`;
        reset.style.backgroundColor = `hsl(225, 21%, 49%)`;
        Delete.style.color = `white`;
        reset.style.color = `white`;
        reset.onmouseover = function () {
            reset.style.backgroundColor = `hsl(225, 21%, 60%)`;
        }
        reset.onmouseout = function () {
            reset.style.backgroundColor = `hsl(225, 21%, 49%)`;
        }
        Delete.onmouseover = function () {
            Delete.style.backgroundColor = `hsl(225, 21%, 60%)`;
        }
        Delete.onmouseout = function () {
            Delete.style.backgroundColor = `hsl(225, 21%, 49%)`;
        }

        equals.style.backgroundColor = `hsl(6, 63%, 50%)`;
        equals.style.color = `white`;
        equals.onmouseover = function () {
            equals.style.backgroundColor = `hsl(6, 63%, 60%)`;
        }
        equals.onmouseout = function () {
            equals.style.backgroundColor = `hsl(6, 63%, 50%)`;
        }

    } else if (modeRange.value == 1) {
        mainBody.style.backgroundColor = `hsl(0, 0%, 89%)`;
        mainBody.style.color = `black`;
        
        displayArea.style.backgroundColor = `hsl(0, 0%, 93%)`;
        displayArea.style.color = `black`;

        keypad.style.backgroundColor = `hsl(0, 5%, 81%)`
        keyss.forEach(keys => {
            keys.style.backgroundColor = `hsl(45, 7%, 85%)`;
            keys.style.color = `hsl(60, 10%, 19%)`;
            keys.onmouseover = function () {
                keys.style.backgroundColor = `hsl(45, 7%, 95%)`
            }
            keys.onmouseout = function () {
                keys.style.backgroundColor = `hsl(45, 7%, 85%)`
            }
        })
        Delete.style.backgroundColor = `hsl(185, 42%, 37%)`;
        reset.style.backgroundColor = `hsl(185, 42%, 37%)`;
        Delete.style.color = `hsl(0, 0%, 100%)`;
        reset.style.color = `hsl(0, 0%, 100%)`;
        reset.onmouseover = function () {
            reset.style.backgroundColor = `hsl(185, 42%, 47%)`
        }
        reset.onmouseout = function () {
            reset.style.backgroundColor = `hsl(185, 42%, 37%)`
        }
        Delete.onmouseover = function () {
            Delete.style.backgroundColor = `hsl(185, 42%, 47%)`
        }
        Delete.onmouseout = function () {
            Delete.style.backgroundColor = `hsl(185, 42%, 37%)`
        }

        equals.style.backgroundColor = `hsl(25, 98%, 40%)`;
        equals.style.color = `hsl(0, 0%, 100%)`;
        equals.onmouseover = function () {
        equals.style.backgroundColor = `hsl(25, 98%, 50%)`
        }
        equals.onmouseout = function () {
        equals.style.backgroundColor = `hsl(25, 98%, 40%)`
        }
        
    }else{
        mainBody.style.backgroundColor = `hsl(268, 75%, 9%)`;
        mainBody.style.color = `hsl(52, 100%, 62%)`;
        
        displayArea.style.backgroundColor = `hsl(268, 71%, 12%)`;
        displayArea.style.color = `hsl(52, 100%, 62%)`;

        keypad.style.backgroundColor = `hsl(268, 71%, 12%)`;
        keyss.forEach(keys => {
            keys.style.backgroundColor = `hsl(268, 47%, 21%)`;
            keys.style.boxShadow= `3px 3px 1px hsl(290, 70%, 36%)`;
            keys.style.color = `hsl(52, 100%, 62%)`
            keys.onmouseover = function () {
                keys.style.backgroundColor = `hsl(268, 47%, 35%)`;
            }
            keys.onmouseout = function () {
                keys.style.backgroundColor = `hsl(268, 47%, 21%)`;
            }
        })
        Delete.style.backgroundColor = `hsl(281, 89%, 26%) `;
        reset.style.backgroundColor = `hsl(281, 89%, 26%) `;
        reset.style.color = `hsl(0, 0%, 100%)`;
        Delete.style.color = `hsl(0, 0%, 100%)`;
        reset.onmouseover = function () {
            reset.style.backgroundColor = `hsl(281, 89%, 36%) `;
        }
        reset.onmouseout = function () {
            reset.style.backgroundColor = `hsl(281, 89%, 26%) `;
        }
        Delete.onmouseover = function () {
            Delete.style.backgroundColor = `hsl(281, 89%, 36%) `;
        }
        Delete.onmouseout = function () {
            Delete.style.backgroundColor = `hsl(281, 89%, 26%) `;
        }

        equals.style.backgroundColor = `hsl(198, 20%, 40%)`;
        equals.style.boxShadow= `3px 3px 1px hhsl(198, 20%, 80%)`;
        equals.style.color = `hsl(198, 20%, 13%)`;
        equals.onmouseover = function () {
            equals.style.backgroundColor = `hsl(198, 20%, 60%)`;
            equals.style.boxShadow= `3px 3px 1px hhsl(198, 20%, 80%)`
        }
        equals.onmouseout = function () {
            equals.style.backgroundColor = `hsl(198, 20%, 40%)`;
            equals.style.boxShadow= `3px 3px 1px hhsl(198, 20%, 80%)`
        }
    }
}