let text = document.getElementById("palindrome-text-holder");
let display = document.getElementById("display-palindrome");
const button = document.getElementById("submit-button");

function palindromeChecker() {
  button.addEventListener("click", function () {
    display.innerHTML = text.value.split("").reverse().join("").toLowerCase();
    if (display.innerHTML == text.value.toLowerCase()) {
      display.style.color = "green";
    } else {
      display.style.color = "red";
    }
  });

  text.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      button.click();
    }
  });
}

palindromeChecker();
