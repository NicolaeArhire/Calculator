(function () {

    const oldresult = document.querySelector(".oldresult");
    const result = document.querySelector(".result");
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const multiply = document.querySelector(".multiply");
    const divide = document.querySelector(".divide");
    const number = document.querySelectorAll(".number");
    const factorial = document.querySelector(".factorial");
    const backspace = document.querySelector(".backspace");
    const root = document.querySelector(".root");
    const square = document.querySelector(".square");
    const power = document.querySelector(".power");
    const clear = document.querySelector(".clear");
    const sign = document.querySelector(".sign");
    const equal = document.querySelector(".equal");
    const point = document.querySelector(".point");
    const historyResults = document.querySelector(".history-results");

    number.forEach((item) => {
        item.onclick = function () {
            equal.disabled = false;
            plus.disabled = false;
            minus.disabled = false;
            multiply.disabled = false;
            divide.disabled = false;  

            if (result.innerHTML === "0" && item.dataset.number !== ".") {
                result.innerHTML = item.dataset.number;
                oldresult.innerHTML = item.dataset.number;
            } else if (result.innerHTML !== ".") {
                result.innerHTML += item.dataset.number;
                oldresult.innerHTML += item.dataset.number;
            }

            if (result.innerHTML.includes(".")) {
                point.disabled = true;
            }

            if (oldresult.innerHTML.includes("=")) {
                point.disabled = false;
                result.innerHTML = item.dataset.number;
                oldresult.innerHTML = item.dataset.number;
            }
        }
    });

    function factX(n) {
        function gamma(z) {
            return Math.sqrt(2 * Math.PI / z) * Math.pow((1 / Math.E) * (z + 1 / (12 * z - 1 / (10 * z))), z);
        }
        return gamma(n + 1);
    };
    
    factorial.onclick = function () {

        const anyNumber = parseFloat(result.innerHTML);
        if (anyNumber < 0) {
            oldresult.innerHTML = anyNumber + "!=";
            result.innerHTML = "NaN";
        } else if (anyNumber === 0) {
            oldresult.innerHTML = anyNumber + "!=";
            result.innerHTML = 1;
        } else { 
            if (result.innerHTML.includes(".")) {
                oldresult.innerHTML = anyNumber + "!=";
                result.innerHTML = factX(anyNumber).toFixed(5);
            } else {
                oldresult.innerHTML = anyNumber + "!=";
                result.innerHTML = factX(anyNumber).toFixed(0);
            }
        }

        if (isNaN(result.innerHTML)) {
            historyResults.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "<span style='color:#4728E1'>" + " Please correct." + "</span>";
            historyResults.innerHTML = oldresult.innerHTML + blueHistory;
        } else {
            historyResults.innerHTML = oldresult.innerHTML + result.innerHTML;
            let redHistory = "<span style='color:#4728E1'>" + (historyResults.innerHTML.substring(historyResults.innerHTML.indexOf("=") + "=".length)) + "</span>";
            historyResults.innerHTML = oldresult.innerHTML + redHistory;
        }
    }

    clear.onclick = function () {
        point.disabled = false;
        result.innerHTML = "0";
        oldresult.innerHTML = "0";
    };

    backspace.onclick = function () {
        equal.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
        multiply.disabled = false;
        divide.disabled = false;   
        point.disabled = false;
        oldresult.innerText = oldresult.innerText.slice(0, -1);
        result.innerText = result.innerText.slice(0, -1);

        if (!(oldresult.innerText.includes("+") || oldresult.innerText.includes("-") || oldresult.innerText.includes("×") 
            || oldresult.innerText.includes("÷") || oldresult.innerText.includes("^"))) {
            result.innerText = oldresult.innerText;
        } 
            
        if (oldresult.innerText =="") {
            oldresult.innerText = 0;
            result.innerText = 0;
        }
    };

    root.onclick = function () {
        oldresult.innerHTML = '√(' + result.innerHTML + ')=';
        result.innerHTML = (Math.sqrt(result.innerHTML).toFixed(5).replace(/\.0+$/,''))*1;

        if (isNaN(result.innerHTML)) {
            historyResults.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "<span style='color:#4728E1'>" + " Please correct." + "</span>";
            historyResults.innerHTML = oldresult.innerHTML + blueHistory;
        } else {
            historyResults.innerHTML = oldresult.innerHTML + result.innerHTML;
            let redHistory = "<span style='color:#4728E1'>" + (historyResults.innerHTML.substring(historyResults.innerHTML.indexOf("=") + "=".length)) + "</span>";
            historyResults.innerHTML = oldresult.innerHTML + redHistory;
        }
    };

    square.onclick = function () {
        oldresult.innerHTML = `(${result.innerHTML})²=`;
        result.innerHTML = (Math.pow(result.innerHTML, 2).toFixed(5).replace(/\.0+$/,''))*1;
        historyResults.innerHTML = oldresult.innerHTML + result.innerHTML;
        let redHistory = "<span style='color:#4728E1'>" + (historyResults.innerHTML.substring(historyResults.innerHTML.indexOf("=") + "=".length)) + "</span>";
        historyResults.innerHTML = oldresult.innerHTML + redHistory;
    };

    sign.onclick = function () {
        if ((oldresult.innerHTML.includes("="))) {
            oldresult.innerHTML = result.innerHTML;
        } else {
            oldresult.innerHTML = -(-(oldresult.innerHTML));
            result.innerHTML = -(-(result.innerHTML));
        }

        oldresult.innerHTML = (oldresult.innerHTML)*-1;
        result.innerHTML = (result.innerHTML)*-1;
    };

    power.onclick = function () {
        equal.disabled = false;
        point.disabled = false;
        if ((oldresult.innerHTML.slice(-1)) == "+") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}^`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "^") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}^`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "-") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}^`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "x") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}^`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "÷") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}^`;
            result.innerHTML = "";
        } else {
            oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}^`;
            result.innerHTML = "";
        }
    };

    plus.onclick = function () {
        equal.disabled = false;
        point.disabled = false;
        if ((oldresult.innerHTML.slice(-1)) == "+") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}+`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "^") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}+`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "-") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}+`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "x") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}+`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "÷") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}+`;
            result.innerHTML = "";
        } else {
            oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}+`;
            result.innerHTML = "";
        }
    };

    minus.onclick = function () {
        equal.disabled = false;
        point.disabled = false;
        if ((oldresult.innerHTML.slice(-1)) == "+") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}-`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "^") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}-`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "-") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}-`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "x") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}-`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "÷") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}-`;
            result.innerHTML = "";
        } else {
            oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}-`;
            result.innerHTML = "";
        }
    };

    multiply.onclick = function () {
        equal.disabled = false;
        point.disabled = false;
        if ((oldresult.innerHTML.slice(-1)) == "+") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}x`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "^") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}x`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "-") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}x`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "×") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}x`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "÷") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}x`;
            result.innerHTML = "";
        } else {
            oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}x`;
            result.innerHTML = "";
        }
    };

    divide.onclick = function () {
        equal.disabled = false;
        point.disabled = false;
        if ((oldresult.innerHTML.slice(-1)) == "+") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}÷`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "^") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}÷`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "-") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}÷`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "x") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}÷`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "÷") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}÷`;
            result.innerHTML = "";
        } else {
            oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}÷`;
            result.innerHTML = "";
        }
    };

    equal.onclick = function () {
        plus.disabled = false;
        minus.disabled = false;
        multiply.disabled = false;
        divide.disabled = false;
        point.disabled = false;
        if (oldresult.innerHTML.includes("=") || isNaN(oldresult.innerHTML.slice(-1))) {
            equal.disabled = true;
        } else {
            oldresult.innerHTML = `${oldresult.innerHTML}=`;
            if (oldresult.innerHTML.includes(plus.innerHTML)) {
                result.innerHTML = ((parseFloat(`${oldresult.innerHTML.split(plus.innerHTML)[0]}`) + parseFloat(`${oldresult.innerHTML.split(plus.innerHTML)[1]}`)).toFixed(5).replace(/\.0+$/,''))*1;
            } else if (oldresult.innerHTML.includes(minus.innerHTML)) {
                result.innerHTML = ((parseFloat(`${oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf(minus.innerHTML))}`) - 
                parseFloat(`${oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf(minus.innerHTML)+1)}`)).toFixed(5).replace(/\.0+$/,''))*1;
            } else if (oldresult.innerHTML.includes("x")) {
                result.innerHTML = ((parseFloat(`${oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf(multiply.innerHTML))}`) * 
                parseFloat(`${oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf(multiply.innerHTML)+1)}`)).toFixed(5).replace(/\.0+$/,''))*1;

                console.log(parseFloat(`${oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf("x"))}`));
                console.log(parseFloat(`${oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf("x")+1)}`));

            } else if (oldresult.innerHTML.includes(divide.innerHTML)) {
                result.innerHTML = ((parseFloat(`${oldresult.innerHTML.split(divide.innerHTML)[0]}`) / parseFloat(`${oldresult.innerHTML.split(divide.innerHTML)[1]}`)).toFixed(5).replace(/\.0+$/,''))*1;
            } else if (oldresult.innerHTML.includes("^")) {
                result.innerHTML = ((Math.pow(parseFloat(`${oldresult.innerHTML.split("^")[0]}`), parseFloat(`${oldresult.innerHTML.split("^")[1]}`))).toFixed(5).replace(/\.0+$/,''))*1;
            }
        }

        if ((oldresult.innerHTML.slice(-1) == "+") || (oldresult.innerHTML.slice(-1) == "-") || (oldresult.innerHTML.slice(-1) == "x")
            || (oldresult.innerHTML.slice(-1) == "÷") || (oldresult.innerHTML.slice(-1) == ".")) {
            historyResults.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "=" + "<span style='color:#4728E1'>" + " Please correct." + "</span>";
            historyResults.innerHTML = oldresult.innerHTML + blueHistory;
        } else if (isNaN(result.innerHTML)) {
           historyResults.innerHTML = oldresult.innerHTML + result.innerHTML;
           let blueHistory = "<span style='color:#4728E1'>" + " Please correct." + "</span>";
           historyResults.innerHTML = oldresult.innerHTML + blueHistory;
        } else {
            historyResults.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "<span style='color:#4728E1'>" + " " + (historyResults.innerHTML.substring(historyResults.innerHTML.indexOf("=") + "=".length)) + "</span>";
            historyResults.innerHTML = oldresult.innerHTML + blueHistory;
        }
    };
}());