let io = document.getElementById("IO");
let inputValue = ""
let computeValue = ""

function ProcessButtons(buttonPressed)
{
    let bValue = buttonPressed.innerHTML;
    switch (bValue) {
        case "C":
            computeValue = ""
            inputValue = ""
            break;
        case "=":
            if(computeValue)
            inputValue = String(eval(computeValue))
            else
            inputValue = ""
            break;
        case "+":
            computeValue += bValue
            inputValue = ""
            break;
        case "-":
            computeValue += bValue
            inputValue = ""
            break;
        case "*":
            computeValue += bValue
            inputValue = ""
            break;
        case "/":
            computeValue += bValue
            inputValue = ""
            break;
            
        default:
            computeValue += bValue
            inputValue += bValue
            break;
    }
    io.innerHTML = inputValue;
}
