(function () {

    const oldresult = document.querySelector(".oldresult");
    const result = document.querySelector(".result");
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const multiply = document.querySelector(".multiply");
    const divide = document.querySelector(".divide");
    const number = document.querySelectorAll(".number");
    const factorial = document.querySelector(".factorial");
    const pi = document.querySelector(".pi");
    const backspace = document.querySelector(".backspace");
    const root = document.querySelector(".root");
    const square = document.querySelector(".square");
    const power = document.querySelector(".power");
    const clear = document.querySelector(".clear");
    const sign = document.querySelector(".sign");
    const equal = document.querySelector(".equal");

    number.forEach((item) => {
        item.addEventListener("click", function () {
            
            if (result.innerHTML === "0" && item.dataset.number !== ".") {
                result.innerHTML = item.dataset.number;
                oldresult.innerHTML = item.dataset.number;
            } else if (result.innerHTML !== ".") {
                result.innerHTML += item.dataset.number;
                oldresult.innerHTML += item.dataset.number;
            }
        })

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
        console.log(result.innerHTML);
    }

    pi.addEventListener("click",function () {
        if (result.innerHTML === "0" && pi.dataset.number !== ".") {
            result.innerHTML = pi.dataset.number;
            oldresult.innerHTML = pi.dataset.number;
        } else if (result.innerHTML !== ".") {
            result.innerHTML += pi.dataset.number;
            oldresult.innerHTML += pi.dataset.number;
        }
    });

    root.addEventListener("click",function () {
        oldresult.innerHTML = '√(' + result.innerHTML + ')=';
        result.innerHTML = Math.sqrt(result.innerHTML.replace(/,/g, '')).toFixed(5).replace(/\.0+$/,'');
    });

    square.addEventListener("click",function () {
        oldresult.innerHTML = `sqr(${result.innerHTML})=`;
        result.innerHTML = Math.pow(result.innerHTML.replace(/,/g, ''), 2).toFixed(5).replace(/\.0+$/,'');
    });

    power.addEventListener("click",function () {
        let result1 = result.innerHTML;
        oldresult.innerHTML = `${result1.replace(/,/g, '')}^`;
        result.innerHTML = "";
    });

    sign.addEventListener("click",function () {
        oldresult.innerHTML = -(oldresult.innerHTML);
        result.innerHTML = -(result.innerHTML);
    });

    plus.addEventListener("click",function () {
        oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}+`;
        result.innerHTML = "";
    });

    minus.addEventListener("click",function () {
        oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}-`;
        result.innerHTML = "";
    });

    divide.addEventListener("click",function () {
        oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}÷`;
        result.innerHTML = "";
    });

    multiply.addEventListener("click",function () {
        oldresult.innerHTML = `${result.innerHTML.replace(/,/g, '')}×`;
        result.innerHTML = "";
    });

    clear.addEventListener("click",function () {
        clear.onclick = history.go(0);
        result.innerHTML = "0";
        oldresult.innerHTML = "<span style='color:rgb(224, 200, 170)'>0</span>";
    });

    backspace.addEventListener("click",function () {
        oldresult.innerText = oldresult.innerText.slice(0, -1);
        if (oldresult.innerText =="") {
            oldresult.innerText = 0;
        }
        result.innerText = result.innerText.slice(0, -1);
        if (result.innerText =="") {
            result.innerText = 0;
        }
    });

    equal.addEventListener("click",function () {
        if (oldresult.innerHTML.includes("=") || isNaN(oldresult.innerHTML.slice(-1))) {
            equal.disabled = true;
        } else {
            oldresult.innerHTML = `${oldresult.innerHTML}=`;
            if (oldresult.innerHTML.includes("+")) {
                result.innerHTML = parseFloat(`${oldresult.innerHTML.split("+")[0]}`) + parseFloat(`${oldresult.innerHTML.split("+")[1]}`);
                // let commas = result.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // result.innerHTML = commas;
            } else if (oldresult.innerHTML.includes(minus.innerHTML)) {
                result.innerHTML = parseFloat(`${oldresult.innerHTML.split(minus.innerHTML)[0]}`) - parseFloat(`${oldresult.innerHTML.split(minus.innerHTML)[1]}`);
                // let commas = result.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // result.innerHTML = commas;
            } else if (oldresult.innerHTML.includes("×")) {
                result.innerHTML = parseFloat(`${oldresult.innerHTML.split("×")[0]}`) * parseFloat(`${oldresult.innerHTML.split("×")[1]}`);
                let commas = result.innerHTML.toLocaleString("en-US");
                // result.innerHTML = commas;
            } else if (oldresult.innerHTML.includes("÷")) {
                result.innerHTML = parseFloat(`${oldresult.innerHTML.split("÷")[0]}`) / parseFloat(`${oldresult.innerHTML.split("÷")[1]}`);
                // let commas = result.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // result.innerHTML = commas;
            } else if (oldresult.innerHTML.includes("^")) {
                result.innerHTML = Math.pow(parseFloat(`${oldresult.innerHTML.split("^")[0]}`), parseFloat(`${oldresult.innerHTML.split("^")[1]}`));
                // let commas = result.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // result.innerHTML = commas;
            }
        }
    });
}());