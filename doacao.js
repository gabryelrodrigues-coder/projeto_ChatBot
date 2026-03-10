document.getElementById("formDoacao").addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value

alert("Obrigado pela sua doação, " + nome + "! ❤️")

})