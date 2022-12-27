// Salary Converter Calculator

const input_salary = document.querySelector(".input-salary");
const output_salary = document.querySelector(".output-salary");
const input_salary_amount = document.querySelector("#ron1");
const output_salary_amount = document.querySelector("#eur1");
const switchSalary = document.querySelector("#switch");

input_salary.addEventListener("change", convertSalary);
output_salary.addEventListener("change", convertSalary);
input_salary_amount.addEventListener("input", convertSalary);
output_salary_amount.addEventListener("input", convertSalary);

switchSalary.addEventListener("click", () => {
  const dummy = input_salary.value;
  input_salary.value = output_salary.value;
  output_salary.value = dummy;
  convertSalary();
});

function convertSalary() {
  const input_salary1 = input_salary.value;
  const output_salary1 = output_salary.value;
  let ron2 = document.querySelector("#ron2");
  let ron3 = document.querySelector("#ron3");
  let ron4 = document.querySelector("#ron4");
  let ron5 = document.querySelector("#ron5");
  let eur2 = document.querySelector("#eur2");
  let eur3 = document.querySelector("#eur3");
  let eur4 = document.querySelector("#eur4");
  let eur5 = document.querySelector("#eur5");

  fetch(`https://api.exchangerate-api.com/v4/latest/${input_salary1}`)
    .then((response) => response.json())
    .then((response) => {
      const new_salary_rate = response.rates[output_salary1];
      if (
        input_salary_amount.value[0] == 0 &&
        input_salary_amount.value[1] !== "."
      ) {
        output_salary_amount.value = 0;
        ron2.value = 0;
        ron3.value = 0;
        ron4.value = 0;
        ron5.value = 0;
        eur1.value = 0;
        eur2.value = 0;
        eur3.value = 0;
        eur4.value = 0;
        eur5.value = 0;
      } else {
        output_salary_amount.value =
          Math.round(input_salary_amount.value * new_salary_rate * 100) / 100;
        ron2.value = Math.round(0.25 * input_salary_amount.value * 100) / 100;
        ron3.value = Math.round(0.1 * input_salary_amount.value * 100) / 100;
        ron4.value = Math.round(0.1 * input_salary_amount.value * 100) / 100;
        ron5.value = Math.round(0.585 * input_salary_amount.value);
        eur2.value = Math.round(0.25 * output_salary_amount.value * 100) / 100;
        eur3.value = Math.round(0.1 * output_salary_amount.value * 100) / 100;
        eur4.value = Math.round(0.1 * output_salary_amount.value * 100) / 100;
        eur5.value = Math.round(0.585 * output_salary_amount.value);
      }
    });
}
convertSalary();

// Currency Converter Calculator

const input_currency = document.querySelector("#input_currency");
const output_currency = document.querySelector("#output_currency");
const input_amount = document.querySelector(".curr-from");
const output_amount = document.querySelector(".curr-to");
const switchCurrency = document.querySelector("#converter_switch");

input_currency.addEventListener("change", convertCurrency);
output_currency.addEventListener("change", convertCurrency);
input_amount.addEventListener("input", convertCurrency);
output_amount.addEventListener("input", convertCurrency);

switchCurrency.addEventListener("click", () => {
  const dummy1 = input_currency.value;
  input_currency.value = output_currency.value;
  output_currency.value = dummy1;
  convertCurrency();
});

function convertCurrency() {
  const input1 = input_currency.value;
  const output1 = output_currency.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${input1}`)
    .then((response) => response.json())
    .then((response) => {
      const new_rate = response.rates[output1];
      if (input_amount.value[0] == 0 && input_amount.value[1] !== ".") {
        output_amount.value = 0;
      } else {
        output_amount.value =
          Math.round(input_amount.value * new_rate * 100) / 100;
      }
    });
}
convertCurrency();

// Numeral Converter Calculator

const arabicNumeral = document.querySelector(".numeral-from");
const romanNumeral = document.querySelector(".numeral-to");

function convertNumeral() {
  const [num] = arguments;
  let numeralCodes = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    [
      "",
      "M",
      "MM",
      "MMM",
      "MMMM",
      "MMMMM",
      "MMMMMM",
      "MMMMMMM",
      "MMMMMMMM",
      "MMMMMMMMM",
    ],
  ];
  let numeral = "";
  let digits = num.toString().split("").reverse();
  for (let i = 0; i < digits.length; i++) {
    numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
  }
  return numeral;
}

arabicNumeral.addEventListener("input", () => {
  let convertedNumeral = convertNumeral(arabicNumeral.value);
  if (arabicNumeral.value.match(/^[0-9]+$/)) {
    romanNumeral.value = convertedNumeral;
    romanNumeral.style.fontSize = "14px";
    romanNumeral.style.color = "black";
    console.log(arabicNumeral.value);
  } else if (arabicNumeral.innerHTML.length > 4) {
    romanNumeral.value = "Max. 4 digits.";
    console.log(arabicNumeral.value);
  } else {
    romanNumeral.value = "Please correct.";
    romanNumeral.style.fontSize = "10.5px";
    romanNumeral.style.color = "red";
    console.log(arabicNumeral.value);
  }
});

arabicNumeral.addEventListener("input", () => {
  if (arabicNumeral.value.length > 4) {
    romanNumeral.value = "Max. 4 digits.";
    romanNumeral.style.fontSize = "11px";
    romanNumeral.style.color = "red";
    console.log(arabicNumeral.value);
  }
});
