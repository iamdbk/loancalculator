const form = document.querySelector("form");
const amount = document.querySelector("[amount]");
const interest = document.querySelector("[interest]");
const time = document.querySelector("[time]");
const inputs = document.querySelectorAll("input.parameters");
const resultDiv = document.querySelector("div.results");
const mainDiv = document.querySelector(".main-div");

// ************************ JS WAY OF NOT ALLOWING USER TO ENTER LETTERS INTO <INPUT> *************************

// inputs.forEach(function (current) {
//   current.addEventListener("keyup", isNumber);
//   function isNumber(event) {
//     let code = event.keyCode;
//     if (
//       (code >= 48 && code <= 57) ||
//       (code >= 96 && code <= 105) ||
//       code === 13
//     ) {
//     } else {
//       current.value = current.value.substr(0, current.value.length - 1);
//       //   alert("Only enter integers");
//     }
//   }
// });

let elements = document.querySelectorAll(".parameters");
for (let i = 0; i < elements.length - 1; i++) {
  elements[i].addEventListener("keydown", function (e) {
    if (event.keyCode === 13) {
      elements[i + 1].focus();
    }
  });
}

form.addEventListener("submit", function (e) {
  if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = "Check the entered numbers";
    errorDiv.className = "error-div";
    mainDiv.prepend(errorDiv);
    setTimeout(removeErrorDiv, 1700);
    function removeErrorDiv() {
      errorDiv.style.display = "none";
    }

    // alert("Enter all the data");
  } else {
    resultDiv.style.display = "block";
    let p = amount.value;
    let r = interest.value;
    let t = time.value;
    const monthlyPayment = document.querySelector("[monthly]");
    const totalPayment = document.querySelector("[total]");
    const totalInterest = document.querySelector("[total-interest]");
    e.preventDefault();
    let SI = (p * r * t) / 100;
    monthlyPayment.value = `₹${((SI + Number(p)) / (t * 12)).toFixed(2)}`;
    totalPayment.value = `₹${(SI + Number(p)).toFixed(2)}`;
    totalInterest.value = `₹${SI.toFixed(2)}`;
  }
  e.preventDefault();
});

inputs.forEach(function (current) {
  current.addEventListener("keyup", function (e) {
    if (e.keyCode != 13) {
      resultDiv.style.display = "none";
    }
  });
});
