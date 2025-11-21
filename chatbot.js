// --- chatbot.js (Bulletproof Version) ---

// 1. THE BRAIN (Knowledge Base)
const botKnowledge = {
    en: {
        welcome: `
            <strong>Hi there! I'm the Linguamis Assistant. 🤖</strong><br><br>
            I can help you navigate. Try asking about:<br>
            🎙️ <strong>Speaking</strong><br>
            📖 <strong>Grammar</strong><br>
            ⚡ <strong>Verbs</strong>`,
        responses: {
            "speak": "Our <strong>Speaking Coach</strong> listens to you and gives real-time AI feedback. <a href='/speak/'>Start Speaking</a>.",
            "listen": "The <strong>Listening Lab</strong> helps you train your ear. <a href='/listen/'>Start Listening</a>.",
            "grammar": "The <strong>Grammar Guide</strong> explains English rules clearly. <a href='/grammar/'>Learn Grammar</a>.",
            "write": "The <strong>Writing Studio</strong> helps you enhance skills. <a href='/write/'>Start Writing</a>.",
            "verbs": "Conquer tricky verbs like 'go-went-gone'. <a href='/Irregular/'>Practice Verbs</a>.",
            "personas": "Chat with <strong>AI Personas</strong> today. <a href='/Personas/'>Meet Personas</a>.",
            "quiz": "Challenge yourself with the <strong>Daily Quiz</strong>! <a href='/quiz/'>Take Quiz</a>.",
            "free": "Yes! Linguamis is 100% free.",
            "hello": "Hello! Ready to improve your English?",
            "default": "I'm not sure I understand. Try asking about <strong>Speaking, Grammar, or Verbs</strong>."
        }
    },
    tr: {
        welcome: `
            <strong>Merhaba! Ben Linguamis Asistanı. 🤖</strong><br><br>
            Size yardımcı olabilirim. Şunları sorun:<br>
            🎙️ <strong>Konuşma</strong><br>
            📖 <strong>Dilbilgisi</strong><br>
            ⚡ <strong>Fiiller</strong>`,
        responses: {
            "konuş": "<strong>Konuşma Koçu</strong> sizi dinler ve geri bildirim verir. <a href='/speak/'>Başla</a>.",
            "dinle": "<strong>Dinleme Laboratuvarı</strong> kulağınızı eğitir. <a href='/listen/'>Başla</a>.",
            "dilbilgisi": "<strong>Dilbilgisi Rehberi</strong> kuralları açıklar. <a href='/grammar/'>Öğren</a>.",
            "yaz": "<strong>Yazma Stüdyosu</strong> yazınızı geliştirir. <a href='/write/'>Başla</a>.",
            "fiil": "Düzensiz fiilleri öğrenin. <a href='/Irregular/'>Çalış</a>.",
            "persona": "<strong>YZ Personaları</strong> ile konuşun. <a href='/Personas/'>Tanış</a>.",
            "test": "<strong>Günlük Test</strong> ile kendinizi sınayın. <a href='/quiz/'>Test Çöz</a>.",
            "ücret": "Linguamis tamamen ücretsizdir.",
            "merhaba": "Merhaba! İngilizcenizi geliştirmeye hazır mısınız?",
            "default": "Tam anlayamadım. Lütfen <strong>Konuşma, Dilbilgisi veya Fiiller</strong> hakkında soru sorun."
        }
    },
    // (I kept the other languages short to save space, English/Turkish are fully active)
    fr: { welcome: "Bonjour! Je suis l'assistant.", responses: { "default": "Je ne comprends pas." } },
    es: { welcome: "¡Hola! Soy el asistente.", responses: { "default": "No entiendo." } },
    de: { welcome: "Hallo! Ich bin der Assistent.", responses: { "default": "Ich verstehe nicht." } },
    ru: { welcome: "Привет! Я помощник.", responses: { "default": "Я не понимаю." } },
    ar: { welcome: "مرحباً! أنا المساعد.", responses: { "default": "لم أفهم." } }
};

// 2. HELPER: DETECT LANGUAGE (Priority: HTML Tag > LocalStorage > Default 'en')
function getCurrentLang() {
    const htmlLang = document.documentElement.getAttribute('lang');
    const storageLang = localStorage.getItem('selectedLanguage');
    return htmlLang || storageLang || 'en';
}

// 3. TOGGLE CHAT WINDOW
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const messages = document.getElementById('chat-messages');
    chatWindow.classList.toggle('hidden');
    
    // If opening for the first time and empty, send welcome
    if (!chatWindow.classList.contains('hidden') && messages.children.length === 0) {
        let lang = getCurrentLang();
        // Safety check: If language doesn't exist in our list, use English
        if (!botKnowledge[lang]) lang = 'en';
        
        addMessage("bot", botKnowledge[lang].welcome);
    }
}

document.getElementById('close-chat').addEventListener('click', toggleChat);

// 4. SEND MESSAGE LOGIC
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userText = inputField.value.trim();
    if (userText === "") return;

    addMessage("user", userText);
    inputField.value = ""; 

    // Simulate Thinking
    setTimeout(() => {
        const lang = getCurrentLang();
        const response = getBotResponse(userText.toLowerCase(), lang);
        addMessage("bot", response);
    }, 600);
}

// 5. DETERMINE RESPONSE (The Fix)
function getBotResponse(input, lang) {
    // Step A: Find the correct Language Dictionary
    let langDB = botKnowledge[lang];
    
    // SAFETY NET 1: If language is missing, switch to English
    if (!langDB) {
        console.warn(`Language '${lang}' not found. Switching to English.`);
        langDB = botKnowledge['en'];
    }

    // Step B: Get the responses list
    const responses = langDB.responses;
    
    // SAFETY NET 2: If responses are missing (code error), return a hardcoded error
    if (!responses) return "System Error: Dictionary missing.";

    // Step C: Check for keywords
    for (let key in responses) {
        // Skip the 'default' key during the search
        if (key !== 'default' && input.includes(key)) {
            return responses[key];
        }
    }

    // Step D: Return Default (Fallback)
    // SAFETY NET 3: If 'default' is missing, return a hardcoded string
    return responses["default"] || "I am not sure I understand. Try asking about 'Speaking' or 'Grammar'.";
}

// 6. UI HELPER
function addMessage(sender, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = text; 
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}
