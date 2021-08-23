window.onload = function () {
    let form = document.querySelector("form");
    let cancel = document.getElementById("cancel");
    let inputs = document.getElementsByName("input");
    let alert = document.getElementById("alert");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        for (let input of inputs) {
            if (input.value === "") {
                input.classList.add("alert-danger")
                alert.style.display = "block";
            } else {
                e.target.submit();
            }
        }
    });
    cancel.addEventListener("click", function () {
        alert.style.display = "none";

        for (let input of inputs) {
            input.value = ""
            input.classList.remove("alert-danger")

        }
    })

}