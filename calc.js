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
    const pi = document.querySelector(".pi");
    const historyContent = document.querySelector(".history-content");
    const historyResults = document.querySelector(".history-results");
    const historyClear = document.querySelector("#h-clear");
    const historyExport = document.querySelector("#h-export");


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

            if (result.innerHTML.includes(pi.dataset.number)) {
                pi.dataset.number = "";
            }
    }});

    function factX(n) {
        function gamma(z) {
            return Math.sqrt(2 * Math.PI / z) * Math.pow((1 / Math.E) * (z + 1 / (12 * z - 1 / (10 * z))), z);
        }
        return gamma(n + 1);
    };
    
    factorial.onclick = function () {
        pi.dataset.number = 3.1415926;

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
            historyContent.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "<span style='color:#4728E1'>" + " Please correct." + "</span>";
            historyContent.insertAdjacentHTML("beforeend", oldresult.innerHTML + blueHistory + "<br>");
            historyContent.innerHTML = "";
        } else {
            historyContent.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "<span style='color:#4728E1'>" + " " + (historyContent.innerHTML.substring(historyContent.innerHTML.indexOf("=") + "=".length)) + "</span>";
            historyContent.insertAdjacentHTML("afterend", oldresult.innerHTML + blueHistory + "<br>");
            historyContent.innerHTML = "";
        }
    }

    clear.onclick = function () {
        point.disabled = false;
        result.innerHTML = "0";
        oldresult.innerHTML = "0";
        pi.dataset.number = 3.1415926;

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
        pi.dataset.number = 3.1415926;

        oldresult.innerHTML = '√(' + result.innerHTML + ')=';
        result.innerHTML = (Math.sqrt(result.innerHTML).toFixed(5).replace(/\.0+$/,''))*1;

        if (isNaN(result.innerHTML)) {
            historyContent.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "<span style='color:#4728E1'>" + " Please correct." + "</span>";
            historyContent.insertAdjacentHTML("beforeend", oldresult.innerHTML + blueHistory + "<br>");
            historyContent.innerHTML = "";
        } else {
            historyContent.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "<span style='color:#4728E1'>" + " " + (historyContent.innerHTML.substring(historyContent.innerHTML.indexOf("=") + "=".length)) + "</span>";
            historyContent.insertAdjacentHTML("afterend", oldresult.innerHTML + blueHistory + "<br>");
            historyContent.innerHTML = "";
     }
    };

    square.onclick = function () {
        pi.dataset.number = 3.1415926;

        oldresult.innerHTML = `(${result.innerHTML})²=`;
        result.innerHTML = (Math.pow(result.innerHTML, 2).toFixed(5).replace(/\.0+$/,''))*1;
        historyContent.innerHTML = oldresult.innerHTML + result.innerHTML;
        let blueHistory = "<span style='color:#4728E1'>" + " " + (historyContent.innerHTML.substring(historyContent.innerHTML.indexOf("=") + "=".length)) + "</span>";
        historyContent.insertAdjacentHTML("afterend", oldresult.innerHTML + blueHistory + "<br>");
        historyContent.innerHTML = "";
    };

    sign.onclick = function () {
        equal.disabled = false;
        point.disabled = false;

        if ((oldresult.innerHTML.includes("="))) {
            oldresult.innerHTML = result.innerHTML;
        } 

        if ((oldresult.innerHTML.includes(plus.innerHTML))) {
            oldresult.innerHTML = (oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf(plus.innerHTML))) + plus.innerHTML + 
            (oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf(plus.innerHTML)+1))*-1;
            result.innerHTML = (result.innerHTML)*-1;
        } else if ((oldresult.innerHTML.includes(multiply.innerHTML))) {
            oldresult.innerHTML = (oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf(multiply.innerHTML))) + multiply.innerHTML + 
            (oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf(multiply.innerHTML)+1))*-1;
            result.innerHTML = (result.innerHTML)*-1;
        } else if ((oldresult.innerHTML.includes(divide.innerHTML))) {
            oldresult.innerHTML = (oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf(divide.innerHTML))) + divide.innerHTML + 
            (oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf(divide.innerHTML)+1))*-1;
            result.innerHTML = (result.innerHTML)*-1;
        } else if ((oldresult.innerHTML.includes("^"))) {
            oldresult.innerHTML = (oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf("^"))) + "^" + 
            (oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf("^")+1))*-1;
            result.innerHTML = (result.innerHTML)*-1;
        } else {
            oldresult.innerHTML = (oldresult.innerHTML)*-1;
            result.innerHTML = (result.innerHTML)*-1;
        }
        

    };

    power.onclick = function () {
        equal.disabled = false;
        point.disabled = false;
        pi.dataset.number = 3.1415926;

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
        pi.dataset.number = 3.1415926;

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
        pi.dataset.number = 3.1415926;

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
        pi.dataset.number = 3.1415926;

        if ((oldresult.innerHTML.slice(-1)) == "+") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}x`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "^") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}x`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "-") {
            oldresult.innerHTML = `${oldresult.innerHTML.slice(0,-1)}x`;
            result.innerHTML = "";
        } else if ((oldresult.innerHTML.slice(-1)) == "x") {
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
        pi.dataset.number = 3.1415926;

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
        pi.dataset.number = 3.1415926;

        if (oldresult.innerHTML.includes("=") || isNaN(oldresult.innerHTML.slice(-1))) {
            equal.disabled = true;
        } else {
            oldresult.innerHTML = `${oldresult.innerHTML}=`;
            if (oldresult.innerHTML.includes(plus.innerHTML)) {
                result.innerHTML = ((parseFloat(`${oldresult.innerHTML.split(plus.innerHTML)[0]}`) + parseFloat(`${oldresult.innerHTML.split(plus.innerHTML)[1]}`)).toFixed(5).replace(/\.0+$/,''))*1;
            } else if (oldresult.innerHTML.includes(minus.innerHTML) && !(oldresult.innerHTML.includes(multiply.innerHTML)) && !(oldresult.innerHTML.includes(divide.innerHTML))
                        && !(oldresult.innerHTML.includes("^"))) {
                result.innerHTML = ((parseFloat(`${oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf(minus.innerHTML))}`) - 
                parseFloat(`${oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf(minus.innerHTML)+1)}`)).toFixed(5).replace(/\.0+$/,''))*1;
            } else if (oldresult.innerHTML.includes(multiply.innerHTML)) {
                result.innerHTML = ((parseFloat(`${oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf(multiply.innerHTML))}`) * 
                parseFloat(`${oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf(multiply.innerHTML)+1)}`)).toFixed(5).replace(/\.0+$/,''))*1;
            } else if (oldresult.innerHTML.includes(divide.innerHTML)) {
                result.innerHTML = ((parseFloat(`${oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf(divide.innerHTML))}`) / 
                parseFloat(`${oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf(divide.innerHTML)+1)}`)).toFixed(5).replace(/\.0+$/,''))*1;
            } else if (oldresult.innerHTML.includes("^")) {
                result.innerHTML = ((Math.pow(parseFloat(`${oldresult.innerHTML.substring(0, oldresult.innerHTML.lastIndexOf("^"))}`), 
                parseFloat(`${oldresult.innerHTML.substring(oldresult.innerHTML.lastIndexOf("^")+1)}`))).toFixed(5).replace(/\.0+$/,''))*1;
            }
        }

        if ((oldresult.innerHTML.slice(-1) == "+") || (oldresult.innerHTML.slice(-1) == "-") || (oldresult.innerHTML.slice(-1) == "x")
            || (oldresult.innerHTML.slice(-1) == "÷") || (oldresult.innerHTML.slice(-1) == ".")) {
            historyContent.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "=" + "<span style='color:#4728E1'>" + " Please correct." + "</span>";
            historyContent.insertAdjacentHTML("beforeend", oldresult.innerHTML + blueHistory + "<br>");
        } else if (isNaN(result.innerHTML)) {
           historyContent.innerHTML = oldresult.innerHTML + result.innerHTML;
           let blueHistory = "<span style='color:#4728E1'>" + " Please correct." + "</span>";
           historyContent.insertAdjacentHTML("beforeend", oldresult.innerHTML + blueHistory + "<br>");
        } else {
            historyContent.innerHTML = oldresult.innerHTML + result.innerHTML;
            let blueHistory = "<span style='color:#4728E1'>" + " " + (historyContent.innerHTML.substring(historyContent.innerHTML.indexOf("=") + "=".length)) + "</span>";
            historyContent.insertAdjacentHTML("afterend", oldresult.innerHTML + blueHistory + "<br>");
            historyContent.innerHTML = "";
        }
    };

    historyClear.onclick = function () {
        window.history.go(0);
    }

    historyExport.onclick = function () {
            let header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                 "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                 "xmlns='http://www.w3.org/TR/REC-html40'>" +
                 "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
            let footer = "</body></html>";
            let sourceHTML = header + "<span style='font-weight:bold; text-decoration:underline'>" + "Calculator History_" + "(" + new Date().toLocaleString() + "):" + "</span>" + "<br>" + "<br>" + historyResults.innerHTML + footer;
            let source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            let fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = "Calculator History_" + new Date().toLocaleString() + ".doc";
            fileDownload.click();
            document.body.removeChild(fileDownload);
    }
}());