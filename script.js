const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    appendMessage('Você', userMessage);
    userInput.value = '';
    
    // Responde à mensagem do usuário
    respondToMessage(userMessage);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatArea.appendChild(messageElement);
}

function respondToMessage(message) {
    let response;

    // Lógica de resposta do chatbot
    switch (true) {
        case message.toLowerCase().includes('ola') && message.toLowerCase().includes('sim'):
            response = "Que ótimo!";
            break;
        case message.toLowerCase().includes('ola'):
            response = "Ola, tudo bem?!";
            break;
        case message.toLowerCase().includes('tempo'):
            response = "O tempo está ensolarado.";
            break;
        default:
            response = "Desculpe, não entendi sua pergunta.";
    }


    appendMessage('Chatbot', response);
}
