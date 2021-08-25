window.onload = function () {
    let form = document.getElementsByTagName("form")[0];
    let cancel = document.getElementById("cancel");
    let inputs = document.getElementsByName("input");
    let alert = document.getElementById("alert");

    form.addEventListener("submit", function (e) {
        let hasError = false;

        let regcard = /[0-9]{13,16}/
        let { card } = form;
        if (card.value === "" || !regcard.test(card.value)) {
            e.preventDefault();
            card.classList.add("alert-danger");
            alert.style.display = "block";
            card.classList.remove("is-valid")
            hasError = true;
        } else {
            card.classList.remove('alert-danger');
            card.classList.add('is-valid');
            alert.style.display = "none";
        }

        let regcvc = /\d{4}/
        let { cvc } = form;
        if (cvc.value === "" || !regcvc.test(cvc.value)) {
            e.preventDefault();
            cvc.classList.add("alert-danger");
            alert.style.display = "block";
            cvc.classList.remove("is-valid")
            hasError = true;
        } else {
            cvc.classList.remove('alert-danger');
            cvc.classList.add('is-valid');
            alert.style.display = "none";
        }

        let regamount = /\d/
        let { amount } = form;
        if (amount.value === "" || !regamount.test(amount.value)) {
            e.preventDefault();
            amount.classList.add("alert-danger");
            alert.style.display = "block";
            amount.classList.remove("is-valid")
            hasError = true;
        } else {
            amount.classList.remove('alert-danger');
            amount.classList.add('is-valid');
            alert.style.display = "none";
        }

        let regname = /[a-zA-Z]+/
        let { name } = form;
        if (name.value === "" || !regname.test(name.value)) {
            e.preventDefault();
            name.classList.add("alert-danger");
            alert.style.display = "block";
            name.classList.remove("is-valid")
            hasError = true;
        } else {
            name.classList.remove('alert-danger');
            name.classList.add('is-valid');
            alert.style.display = "none";
        }

        let reglname = /[a-zA-Z]+/
        let { lname } = form;
        if (lname.value === "" || !reglname.test(lname.value)) {
            e.preventDefault();
            lname.classList.add("alert-danger");
            alert.style.display = "block";
            lname.classList.remove("is-valid")
            hasError = true;
        } else {
            lname.classList.remove('alert-danger');
            lname.classList.add('is-valid');
            alert.style.display = "none";
        }

        let regcity = /[a-zA-Z]+/
        let { city } = form;
        if (city.value === "" || !regcity.test(city.value)) {
            e.preventDefault();
            city.classList.add("alert-danger");
            alert.style.display = "block";
            city.classList.remove("is-valid")
            hasError = true;
        } else {
            city.classList.remove('alert-danger');
            city.classList.add('is-valid');
            alert.style.display = "none";
        }

        let { state } = form;
        if (state.value === "") {
            e.preventDefault();
            state.classList.add("alert-danger");
            alert.style.display = "block";
            state.classList.remove("is-valid")
            hasError = true;
        } else {
            state.classList.remove('alert-danger');
            state.classList.add('is-valid');
            alert.style.display = "none";
        }

        let regpostal = /\d/
        let { postal } = form;
        if (postal.value === "" || !regpostal.test(postal.value)) {
            e.preventDefault();
            postal.classList.add("alert-danger");
            alert.style.display = "block";
            postal.classList.remove("is-valid")
            hasError = true;
        } else {
            postal.classList.remove('alert-danger');
            postal.classList.add('is-valid');
            alert.style.display = "none";
        }

        let { texta } = form;
        if (texta.value === "") {
            e.preventDefault();
            texta.classList.add("alert-danger");
            alert.style.display = "block";
            texta.classList.remove("is-valid")
            hasError = true;
        } else {
            texta.classList.remove('alert-danger');
            texta.classList.add('is-valid');
            alert.style.display = "none";
        }



    });
    cancel.addEventListener("click", function () {
        alert.style.display = "none";
        for (let input of inputs) {
            input.classList.remove("alert-danger")
            input.classList.remove("is-valid")
        }
    })

}