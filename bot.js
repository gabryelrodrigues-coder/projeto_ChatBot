const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox','--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    console.log("Escaneie o QR Code abaixo:");
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot conectado ao WhatsApp!');
});

client.on('message', msg => {

if(msg.body === "menu"){

msg.reply(`Olá! Seja bem-vindo à ONG Núcleo Batuira ❤️

1 - Conhecer a ONG
2 - Fazer uma doação
3 - Falar com um atendente
4 - Projetos sociais
5 - Histórico de doações

Digite o número da opção desejada.`)

}

if(msg.body === "1"){
msg.reply(`A ONG Núcleo Batuira ajuda famílias em situação de vulnerabilidade social.

Saiba mais:
www.nucleobatuira.org`)
}

if(msg.body === "2"){
msg.reply(`Que bom que deseja ajudar ❤️

Faça sua doação aqui:
www.doacoes-nucleobatuira.com`)
}

if(msg.body === "3"){
msg.reply(`Um atendente será acionado.
Aguarde alguns minutos.`)
}

if(msg.body === "4"){
msg.reply(`Projetos sociais:

• Distribuição de cestas básicas
• Apoio educacional
• Projetos comunitários`)
}

if(msg.body === "5"){
msg.reply(`Histórico de Doações

Nome: João Silva

10/02/2026 - R$50
05/03/2026 - R$30`)
}

});

client.initialize();