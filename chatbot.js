// --- chatbot.js ---

// 1. CONFIGURATION
const API_KEY = "AIzaSyCYo-V0vYy3bNNL-Kh6f5tz11vQLuJ6Mtg"; // Your Gemini Key
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// 2. SITE CONTEXT (The AI's "Brain" Information)
// We feed this to Gemini so it knows facts about your website.
const siteContext = `
You are "Linguamis Support", a helpful AI assistant for the language learning platform Linguamis.
Key Information about Linguamis:
- Cost: 100% Free. No hidden costs.
- Sections available:
  1. Grammar Guide (Rules and examples)
  2. Speaking Coach (AI feedback on pronunciation)
  3. Listening Lab (Accents and dictation)
  4. Reading Club (Stories for all levels)
  5. Daily Quiz
  6. Personas (Chat with AI characters)
  7. Writing Studio (Essays and emails)
- Login: Users can sign up or log in at the /login page.
- Goal: To make language learning accessible to everyone.
`;

// 3. TOGGLE CHAT WINDOW
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    
    const messages = document.getElementById('chat-messages');
    if (!chatWindow.classList.contains('hidden') && messages.children.length === 0) {
        // Determine initial greeting language
        const currentLang = getCurrentLanguage();
        let greeting = "Welcome to Linguamis! 🤖 Ask me anything about the site!";
        
        // Simple mapping for the initial hello (AI will handle the rest)
        const greetings = {
            "tr": "Linguamis'e hoş geldiniz! 🤖 Site hakkında bana her şeyi sorabilirsiniz!",
            "fr": "Bienvenue chez Linguamis! 🤖 Demandez-moi n'importe quoi sur le site!",
            "es": "¡Bienvenido a Linguamis! 🤖 Pregúntame lo que quieras.",
            "de": "Willkommen bei Linguamis! 🤖 Frag mich alles über die Seite!",
            "ar": "مرحبًا بكم في Linguamis! 🤖 اسألني أي شيء عن الموقع!",
            "ru": "Добро пожаловать в Linguamis! 🤖 Спрашивайте меня о чем угодно!"
        };
        
        if (greetings[currentLang]) greeting = greetings[currentLang];
        
        addMessage("bot", greeting);
    }
}

// Close button logic
document.getElementById('close-chat').addEventListener('click', toggleChat);

// 4. SEND MESSAGE LOGIC
async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userText = inputField.value.trim();
    const sendBtn = document.getElementById('send-btn');

    if (userText === "") return;

    // Add User Message
    addMessage("user", userText);
    inputField.value = ""; 
    
    // UI: Disable input while thinking
    inputField.disabled = true;
    sendBtn.disabled = true;
    
    // Add a temporary "Thinking..." bubble
    const loadingId = addMessage("bot", "...");

    try {
        // Call Gemini
        const botResponse = await callGeminiAPI(userText);
        
        // Remove loading bubble and add real response
        const loadingBubble = document.getElementById(loadingId);
        if(loadingBubble) loadingBubble.remove();
        
        addMessage("bot", botResponse);
    } catch (error) {
        console.error(error);
        const loadingBubble = document.getElementById(loadingId);
        if(loadingBubble) loadingBubble.remove();
        addMessage("bot", "Sorry, I'm having trouble connecting right now. Please try again.");
    } finally {
        inputField.disabled = false;
        sendBtn.disabled = false;
        inputField.focus();
    }
}

// 5. GEMINI API INTEGRATION
async function callGeminiAPI(userMessage) {
    const currentLang = getCurrentLanguage();
    
    // We construct a prompt that tells Gemini to act as the support bot
    // and force it to reply in the user's selected language.
    const systemPrompt = `
    ${siteContext}
    
    INSTRUCTIONS:
    1. The user is currently viewing the website in this language code: "${currentLang}".
    2. You MUST reply in the language associated with that code (e.g., if 'tr', reply in Turkish. If 'fr', reply in French).
    3. Keep answers short, friendly, and helpful (under 50 words if possible).
    4. Use HTML tags like <br>, <b>, or <a href='/link'> for formatting. Do NOT use Markdown (**bold**).
    5. If the user asks for a link, use the HTML format <a href='/path'>Link Name</a>.
    
    User Message: "${userMessage}"
    `;

    const payload = {
        contents: [{
            parts: [{
                text: systemPrompt
            }]
        }]
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await response.json();
    
    // Safety check in case of API errors
    if (data.candidates && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
    } else {
        return "I am currently overloaded. Please try again later.";
    }
}

// 6. HELPER: GET CURRENT LANGUAGE
function getCurrentLanguage() {
    // Check the desktop select first, then mobile, fallback to 'en'
    const desktopSelect = document.getElementById('languageSelect');
    const mobileSelect = document.getElementById('mobileLangSelect');
    
    if (desktopSelect && desktopSelect.offsetParent !== null) {
        return desktopSelect.value;
    } else if (mobileSelect) {
        return mobileSelect.value;
    }
    return 'en';
}

// 7. UI HELPER: ADD MESSAGE TO HTML
function addMessage(sender, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    const messageId = "msg-" + Date.now(); // Unique ID for removing loading bubble
    
    messageDiv.id = messageId;
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender); 
    messageDiv.innerHTML = text; 
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    return messageId;
}

// 8. HANDLE ENTER KEY
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
