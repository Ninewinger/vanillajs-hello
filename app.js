window.onload = function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let inputs = document.querySelectorAll("input");
        let alert = document.querySelector("#alert");
        let texta = document.querySelector("#texta");
        let state = document.querySelector("#state");
        let cancel = document.querySelector("#cancel");
        let inp = []
        inp.push(texta, state)
        for (input of inputs) {
            inp.push(input)
        }
        for (data of inp){    
            if (data.value === "") {
                data.className += " alert-danger";
                alert.style.display = "block";
            }else{
                e.target.submit();
            }
        }
    });


}