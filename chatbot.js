function abrirChat(){
document.getElementById("chatbot").style.display="flex";
}

function fecharChat(){
document.getElementById("chatbot").style.display="none";
}

function enviarMensagem(){

let input = document.getElementById("userInput");
let mensagem = input.value;

if(mensagem.trim() === "") return;

let chat = document.getElementById("chat-body");

chat.innerHTML += "<div class='user'>"+mensagem+"</div>";

let resposta="Não entendi.";

if(mensagem.includes("doação"))
resposta="Você pode fazer uma doação pelo formulário.";

if(mensagem.includes("contato"))
resposta="Telefone: (11) 2412-2186";

chat.innerHTML += "<div class='bot'>"+resposta+"</div>";

input.value="";
}
