// --- chatbot.js ---

// 1. CONFIGURATION
// Note: In a real website, never expose your API key in frontend code. 
// Restrict this key in Google Cloud Console to your specific domain.
const API_KEY = "AIzaSyCYo-V0vYy3bNNL-Kh6f5tz11vQLuJ6Mtg"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// 2. SITE KNOWLEDGE (The "Brain")
// This tells the AI who it is and what the website does.
const SITE_CONTEXT = `
You are the friendly AI support assistant for "Linguamis", a language learning website.
Here is the critical information about the site:
- COST: 100% Free. There are no premium plans.
- FEATURES:
  * Grammar Guide: Learn rules and examples.
  * Speaking Coach: Practice pronunciation.
  * Listening Lab: Dictation and accent training.
  * Reading Club: Stories for all levels.
  * Daily Quiz: Test your skills.
  * Personas: Chat with AI characters.
  * Writing Studio: Practice essays.
- ACCOUNT: Users must sign up/login at /login to save progress.
- TONE: Enthusiastic, encouraging, and helpful.
`;

// 3. TOGGLE CHAT UI
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const messages = document.getElementById('chat-messages');
    
    chatWindow.classList.toggle('hidden');
    
    // If opening for the first time and empty, send a greeting
    if (!chatWindow.classList.contains('hidden') && messages.children.length === 0) {
        const currentLang = getCurrentLanguageName();
        // We cheat slightly here for speed: A generic hello, or we could ask AI to generate it.
        // Let's use a simple multilingual hello based on detection.
        addMessage('bot', getInitialGreeting());
    }
}

document.getElementById('close-chat').addEventListener('click', toggleChat);

// 4. CORE MESSAGE LOGIC
async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const userText = inputField.value.trim();

    if (!userText) return;

    // A. Display User Message
    addMessage("user", userText);
    inputField.value = ""; // Clear input
    
    // B. Lock UI while processing
    inputField.disabled = true;
    sendBtn.disabled = true;
    inputField.placeholder = "Linguamis is thinking...";

    // C. Add a temporary "..." loading bubble
    const loadingId = addMessage("bot", '<span class="typing-dots">...</span>');

    try {
        // D. Prepare the prompt for Gemini
        // We combine context + current language + user question
        const targetLanguage = getCurrentLanguageName(); // e.g., "Turkish", "French"
        
        const prompt = `
        ${SITE_CONTEXT}
        
        IMPORTANT INSTRUCTION:
        The user is currently viewing the website in ${targetLanguage}.
        You MUST reply in ${targetLanguage}.
        Keep the response concise (under 3 sentences if possible).
        Use HTML tags like <b> for bold or <a href='/page'>link</a> for links.
        
        User Question: "${userText}"
        `;

        // E. Call the API
        const responseText = await callGemini(prompt);
        
        // F. Remove loading bubble and show real response
        removeMessage(loadingId);
        addMessage("bot", responseText);

    } catch (error) {
        console.error("Chatbot Error:", error);
        removeMessage(loadingId);
        addMessage("bot", "⚠️ I'm having trouble connecting. Please check your internet or try again later.");
    } finally {
        // G. Unlock UI
        inputField.disabled = false;
        sendBtn.disabled = false;
        inputField.placeholder = "Type a question...";
        inputField.focus();
    }
}

// 5. API CALL FUNCTION
async function callGemini(promptText) {
    const payload = {
        contents: [{
            parts: [{ text: promptText }]
        }]
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Extract text safely
    const botText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    return botText || "I didn't understand that.";
}

// 6. UTILITIES
function addMessage(sender, htmlContent) {
    const messagesContainer = document.getElementById('chat-messages');
    const div = document.createElement('div');
    const id = "msg-" + Date.now();
    
    div.id = id;
    div.className = `message ${sender}`;
    div.innerHTML = htmlContent;
    
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
    return id;
}

function removeMessage(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}

// Helper to get the readable name of the language for the AI
function getCurrentLanguageName() {
    const desktop = document.getElementById('languageSelect');
    const mobile = document.getElementById('mobileLangSelect');
    
    // Get the value (e.g., 'tr', 'fr')
    let code = 'en';
    if (desktop && desktop.offsetParent !== null) code = desktop.value;
    else if (mobile) code = mobile.value;

    // Map code to full name for the AI Prompt
    const langMap = {
        'en': 'English',
        'fr': 'French',
        'es': 'Spanish',
        'de': 'German',
        'tr': 'Turkish',
        'ar': 'Arabic',
        'ru': 'Russian'
    };
    
    return langMap[code] || 'English';
}

// Simple initial greetings based on code
function getInitialGreeting() {
    const lang = getCurrentLanguageName();
    if (lang === 'Turkish') return "Merhaba! Ben Linguamis asistanıyım. Size nasıl yardım edebilirim?";
    if (lang === 'French') return "Bonjour! Je suis l'assistant Linguamis. Comment puis-je vous aider?";
    if (lang === 'Arabic') return "مرحباً! أنا مساعد Linguamis. كيف يمكنني مساعدتك؟";
    if (lang === 'Spanish') return "¡Hola! Soy el asistente de Linguamis. ¿Cómo puedo ayudarte?";
    if (lang === 'German') return "Hallo! Ich bin der Linguamis-Assistent. Wie kann ich helfen?";
    return "Hello! I am the Linguamis assistant. How can I help you?";
}
