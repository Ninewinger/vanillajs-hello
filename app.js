window.onload = function () {
    let form = document.querySelector("form");
    let cancel = document.querySelector("#cancel");
    let inputs = document.querySelectorAll("input");
    let alert = document.querySelector("#alert");
    let texta = document.querySelector("#texta");
    let state = document.querySelector("#state");
    
    let inp = []

    for (input of inputs) {
        inp.push(input)
    }
    inp.push(texta)
    inp.push(state)

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        for (data of inp) {
            if (data.value === "") {
                data.className += " alert-danger";
                alert.style.display = "block";
            } else {
                e.target.submit();
            }
        }
    });
    cancel.addEventListener("click", function () {
        let inputs = document.querySelectorAll("input");
        let alert = document.querySelector("#alert");
        for (input of inp) {
            input.value = ""
            input.className = input.className.replace("alert-danger", "")
            alert.style.display = "none";
        }
    })

}