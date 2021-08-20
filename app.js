window.onload = function () { }
let inputs = document.querySelectorAll("#inp");
let alert = document.querySelector("#alert");
let submit = document.querySelector("#submit");
let form = document.querySelectorAll("form")

submit.addEventListener("click", function (e) {
    e.preventDefault();
});

let inpval = []
alert.style.display = "block";
for (let input of inputs) {
    inpval.push(input.nodeValue);
    input.onsubmit = function () {
        input.className += " alert-danger";
        
    }
}
console.log(inpval)
