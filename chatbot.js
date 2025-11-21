// --- chatbot.js (AI + Rule-Based Hybrid) ---

// 1. CONFIGURATION
const API_KEY = 'gen-lang-client-0254648049'; // <--- PASTE KEY HERE
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// 2. THE BACKUP BRAIN (Rule-Based Fallback)
// We keep this in case the AI is slow or the daily limit is reached.
const backupKnowledge = {
    en: {
        welcome: "Hi! I'm the AI Assistant. Ask me anything about learning English!",
        fallback: "I'm having trouble connecting to my AI brain. Try asking about 'Grammar' or 'Speaking'."
    },
    tr: {
        welcome: "Merhaba! Ben YZ Asistanıyım. İngilizce öğrenmekle ilgili her şeyi sor!",
        fallback: "YZ beynime bağlanamıyorum. Lütfen 'Dilbilgisi' veya 'Konuşma' hakkında sorun."
    }
    // You can add other languages here as needed
};

// 3. HELPER: DETECT LANGUAGE
function getCurrentLang() {
    return document.documentElement.getAttribute('lang') || localStorage.getItem('selectedLanguage') || 'en';
}

// 4. TOGGLE CHAT
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const messages = document.getElementById('chat-messages');
    chatWindow.classList.toggle('hidden');
    
    if (!chatWindow.classList.contains('hidden') && messages.children.length === 0) {
        const lang = getCurrentLang();
        // Use backup welcome message to start fast
        const welcomeMsg = backupKnowledge[lang] ? backupKnowledge[lang].welcome : backupKnowledge['en'].welcome;
        addMessage("bot", welcomeMsg);
    }
}
document.getElementById('close-chat').addEventListener('click', toggleChat);

// 5. SEND MESSAGE LOGIC
async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userText = inputField.value.trim();
    if (userText === "") return;

    // 1. Show User Message immediately
    addMessage("user", userText);
    inputField.value = ""; 

    // 2. Show "Typing..." indicator
    const typingId = addMessage("bot", "typing..."); // We will remove this later
    const typingElement = document.getElementById(typingId);
    if(typingElement) typingElement.innerText = "⚪⚪⚪"; // Simple typing animation

    try {
        // 3. CALL GEMINI AI
        const aiResponse = await callGeminiAI(userText);
        
        // 4. Update the "Typing..." message with real text
        if(typingElement) {
            typingElement.innerHTML = aiResponse; // Allow HTML for links
        }

    } catch (error) {
        // 5. FALLBACK (If AI fails)
        console.error("AI Error:", error);
        const lang = getCurrentLang();
        const fallbackMsg = backupKnowledge[lang] ? backupKnowledge[lang].fallback : backupKnowledge['en'].fallback;
        if(typingElement) typingElement.innerHTML = fallbackMsg;
    }
}

// 6. THE AI FUNCTION (Communicates with Google)
async function callGeminiAI(userMessage) {
    const lang = getCurrentLang();
    
    // System Instruction: Tells the AI who it is
    const systemPrompt = `
    You are Linguamis, a helpful and friendly language tutor assistant.
    The user is currently viewing the site in this language: ${lang}.
    
    Your goal is to help them navigate the website 'Linguamis' or teach them English concepts.
    
    Here is the site structure to help you answer questions:
    - Speaking Coach: /speak/ (Improves pronunciation)
    - Listening Lab: /listen/ (Accents and dictation)
    - Grammar Guide: /grammar/ (Rules)
    - Irregular Verbs: /Irregular/ (Practice verbs)
    - Daily Quiz: /quiz/
    - AI Personas: /Personas/
    
    RULES:
    1. Answer in the language: ${lang}.
    2. Keep answers short (max 2-3 sentences).
    3. If they ask for a specific feature, provide the HTML link (e.g. <a href='/speak/'>Click here</a>).
    4. Be encouraging.
    `;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: systemPrompt + "\n\nUser: " + userMessage }]
            }]
        })
    });

    const data = await response.json();
    
    // Extract the text from Gemini's complex response structure
    if (data.candidates && data.candidates[0].content) {
        let text = data.candidates[0].content.parts[0].text;
        // Convert simple markdown links [Text](url) to HTML <a href="url">Text</a>
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        return text;
    } else {
        throw new Error("Invalid API Response");
    }
}

// 7. UI HELPER (Now returns ID to handle updates)
function addMessage(sender, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    const msgId = "msg-" + Date.now(); // Unique ID
    
    messageDiv.id = msgId;
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = text; 
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return msgId;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}
