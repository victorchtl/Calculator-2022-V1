var el = function (element) {
    if (element.charAt[0] === "#") {
        return document.querySelector(element);
    } else {
        return document.querySelectorAll(element);
    }
}

var viewer = el("#viewer"),
    button = el(".btn"),
    firstNumber = "",
    secondNumber = "",
    finalNumber = "",
    operator = "",
    operate = false;

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        switch (this.getAttribute("data-btn")) {
            case '+':
                viewer[0].innerHTML = "";
                operator = this.getAttribute("data-btn");
                operate = true;
                break;
            case '-':
                viewer[0].innerHTML = "";
                operator = this.getAttribute("data-btn");
                operate = true;
                break;
            case '*':
                viewer[0].innerHTML = "";
                operator = this.getAttribute("data-btn");
                operate = true;
                break;
            case '/':
                viewer[0].innerHTML = "";
                operator = this.getAttribute("data-btn");
                operate = true;
                break;
            case '=':
                switch (operator) {
                    case '+':
                        finalNumber = parseFloat(firstNumber) + parseFloat(secondNumber)
                        viewer[0].innerHTML = finalNumber
                        break;
                    case '-':
                        finalNumber = parseFloat(firstNumber) - parseFloat(secondNumber)
                        viewer[0].innerHTML = finalNumber
                        break;
                    case '*':
                        finalNumber = parseFloat(firstNumber) * parseFloat(secondNumber)
                        viewer[0].innerHTML = finalNumber
                        break;
                    case '/':
                        if (parseFloat(secondNumber) === 0) {
                            clearAll();
                            viewer[0].innerHTML = "nice try"
                        } else {
                            finalNumber = parseFloat(firstNumber) / parseFloat(secondNumber)
                            viewer[0].innerHTML = finalNumber
                        }
                        break;
                    default:
                        viewer[0].innerHTML = firstNumber;
                }
                break;
            case 'a':
                clearAll();
                break;
            default:
                if (finalNumber !== "") {
                    clearAll();
                }
                if (operate === false) {
                    viewer[0].innerHTML += this.getAttribute("data-btn");
                    firstNumber += this.getAttribute("data-btn");
                } else {
                    viewer[0].innerHTML += this.getAttribute("data-btn");
                    secondNumber += this.getAttribute("data-btn");
                }
        }
    })
}

function clearAll() {
    firstNumber = "",
        secondNumber = "",
        finalNumber = "",
        operator = "",
        operate = false;
    viewer[0].innerHTML = "";
}