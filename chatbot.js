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

responder(mensagem.toLowerCase());

input.value="";
}

function responder(msg){

let resposta="";

if(msg.includes("doação")){
resposta="Você pode fazer uma doação preenchendo o formulário da página.";
}

else if(msg.includes("projeto")){
resposta="A ONG possui diversos projetos sociais para crianças e famílias.";
}

else if(msg.includes("contato")){
resposta="Você pode entrar em contato pelo telefone (11) 2412-2186.";
}

else if(msg.includes("volunt")){
resposta="Para ser voluntário entre em contato pelo telefone ou pelo site oficial.";
}

else{
resposta="Desculpe, não entendi. Você pode perguntar sobre doações, projetos ou contato.";
}

document.getElementById("chat-body").innerHTML += "<div class='bot'>"+resposta+"</div>";

document.getElementById("chat-body").scrollTop =
document.getElementById("chat-body").scrollHeight;

}