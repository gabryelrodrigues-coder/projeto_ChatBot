document.getElementById("formDoacao").addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let telefone = document.getElementById("telefone").value
let valor = document.getElementById("valor").value
let mensagem = document.getElementById("mensagem").value

alert("Obrigado pela sua doação, " + nome + "! ❤️")

console.log("Nome:", nome)
console.log("Email:", email)
console.log("Telefone:", telefone)
console.log("Valor:", valor)
console.log("Mensagem:", mensagem)

})