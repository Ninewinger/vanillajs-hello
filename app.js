window.onload = function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let inputs = document.querySelectorAll("input");
        let alert = document.querySelector("#alert");
        let cancel = document.querySelector("#cancel");
        for (input of inputs) {
            if (input.value === "") {
                input.className += " alert-danger";
                alert.style.display = "block";
            }
        }
    });


}