window.onload = function() {

let inputs = document.querySelector("input")
let alert = document.querySelector("#alert");
let submit = document.querySelector("form")

}
submit.addEventListener("click", function(event){
    event.preventDefault();
    
})
for (input of inputs) {
    input.className = "alert-danger"
}


var div = alert.parentElement;
div.style.display = "block";