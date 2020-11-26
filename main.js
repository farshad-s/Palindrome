let text = document.getElementById("palindrome-text-holder");
let display = document.getElementById("display-palindrome");
const button = document.getElementById("submit-button");

function palindrome() {
  button.addEventListener("click", function () {
    display.innerHTML = text.value.split("").reverse().join("");
    if (display.innerHTML === text.value) {
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

palindrome();
