let text = document.getElementById("palindrome-text-holder");
let display = document.getElementById("display-palindrome");
const button = document.getElementById("submit-button");

function palindrome() {
  button.addEventListener("click", function () {
    display.innerHTML = text.value.split("").reverse().join("");
  });
}

palindrome();
