document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var inputValue = document.getElementById('nameInput').value;
    if (inputValue === "") {
        ErrorMessage("Vui lòng điền vào tên người chơi.");
        return;
    }
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(inputValue)) {
        ErrorMessage("Không được nhập chứa ký tự đặc biệt.");
        return;
    }
    if (inputValue.length === 1) {
        ErrorMessage("Không được nhập chỉ chứa 1 ký tự.");
        return;
    }
    this.submit();
});
function ErrorMessage(message) {
    var errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = '<p style="color: red;">' + message + '</p>';
}
document.addEventListener("DOMContentLoaded", function () {
    var box = document.querySelector(".box");
    box.addEventListener("click", function () {
        var currentColor = box.style.backgroundColor;
        if (currentColor === "blue") {
            box.style.backgroundColor = "red";
        }
        else {
            box.style.backgroundColor = "blue";
        }
    });
});
var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.toggle('clicked');
    });
});
