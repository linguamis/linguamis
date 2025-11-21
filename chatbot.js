// --- chatbot.js ---

// 1. THE KNOWLEDGE BASE (The Brain)
// This checks if the user's message contains specific words.
const botKnowledge = {
    "pricing": "Linguamis is 100% free! We believe language learning should be accessible to everyone.",
    "cost": "Linguamis is 100% free! We believe language learning should be accessible to everyone.",
    "free": "Yes! All our exercises, including Speaking and Grammar, are completely free.",
    
    "grammar": "You can master English rules in our <a href='/grammar'>Grammar Guide</a>.",
    "speak": "Want to improve your pronunciation? Try our <a href='/speak'>Speaking Coach</a>.",
    "listen": "Train your ear with accents in our <a href='/listen'>Listening Lab</a>.",
    "read": "Check out the <a href='/read'>Reading Club</a> for interesting stories.",
    "quiz": "Test your knowledge with today's <a href='/quiz'>Daily Quiz</a>.",
    "personas": "You can chat with AI characters in our <a href='/Personas'>Personas section</a>.",
    
    "login": "You can log in or sign up <a href='/login'>here</a>.",
    "signup": "You can log in or sign up <a href='/login'>here</a>.",
    
    "hello": "Hello! How can I help you improve your English today?",
    "hi": "Hi there! Looking for grammar, speaking, or reading practice?",
    "help": "I can help you find exercises. Try asking about 'Grammar', 'Speaking', or 'Pricing'.",
    
    "default": "I'm not sure I understand. Try asking about 'Grammar', 'Speaking', or 'Pricing'."
};

// 2. TOGGLE CHAT WINDOW
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    
    // If opening for the first time, check if empty and say hello
    const messages = document.getElementById('chat-messages');
    if (!chatWindow.classList.contains('hidden') && messages.children.length === 0) {
        addMessage("bot", "Welcome to Linguamis! 🤖 I am here to help. Ask me anything about the site!");
    }
}

// Close button specific logic
document.getElementById('close-chat').addEventListener('click', toggleChat);

// 3. SEND MESSAGE LOGIC
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userText = inputField.value.trim();

    if (userText === "") return;

    // Add User Message
    addMessage("user", userText);
    inputField.value = ""; // Clear input

    // Simulate "Thinking" delay
    setTimeout(() => {
        const botResponse = getBotResponse(userText.toLowerCase());
        addMessage("bot", botResponse);
    }, 600);
}

// 4. DETERMINE RESPONSE
function getBotResponse(input) {
    // Loop through our knowledge base keys
    for (let key in botKnowledge) {
        if (input.includes(key)) {
            return botKnowledge[key];
        }
    }
    return botKnowledge["default"];
}

// 5. UI HELPER: ADD MESSAGE TO HTML
function addMessage(sender, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender); // adds class 'bot' or 'user'
    messageDiv.innerHTML = text; // innerHTML allows clickable links
    
    messagesContainer.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// 6. HANDLE ENTER KEY
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
