// --- chatbot.js ---

// 1. THE KNOWLEDGE BASE (The Brain)
// This checks if the user's message contains specific words.
const botKnowledge = {
    // --- GENERAL INFO ---
    "what is": "Linguamis is a free platform for students and teachers to master languages through personalized reading, speaking, and grammar exercises.",
    "free": "Yes! Linguamis is 100% free. We believe language learning should be accessible to everyone.",
    "cost": "There is no cost. All features, including the AI Speaking Coach and Grammar Guide, are free.",
    "pricing": "Linguamis is completely free for all students and teachers.",
    "who": "Linguamis was created by Musab İkbal Subaşı to help students learn languages easier than ever.",

    // --- SPEAKING & LISTENING ---
    "speak": "Our <strong>Speaking Coach</strong> listens to you and gives real-time AI feedback on your pronunciation. <a href='/speak/'>Start Speaking</a>.",
    "pronunciation": "You can practice your pronunciation with our AI Coach. It tells you exactly which words need improvement. <a href='/speak/'>Try it now</a>.",
    "listen": "The <strong>Listening Lab</strong> helps you train your ear with diverse accents and dictation tasks. <a href='/listen/'>Go to Listening</a>.",
    "audio": "We have audio tests and dictation exercises in the Listening Lab to improve your comprehension. <a href='/listen/'>Start Listening</a>.",

    // --- GRAMMAR & WRITING ---
    "grammar": "The <strong>Grammar Guide</strong> explains English rules clearly with interactive examples. <a href='/grammar/'>Learn Grammar</a>.",
    "rules": "Struggling with rules? Our Grammar Guide breaks them down simply. <a href='/grammar/'>Check it out</a>.",
    "write": "The <strong>Writing Studio</strong> helps you enhance skills for essays, emails, and creative projects. <a href='/write/'>Start Writing</a>.",
    "essay": "You can practice writing essays and get better in our Writing Studio. <a href='/write/'>Go to Writing</a>.",

    // --- KEY FEATURES (Verbs, Personas, Quiz, Reading) ---
    "verbs": "The <strong>Irregular Verbs</strong> section helps you conquer tricky verbs like 'go-went-gone' with targeted practice. <a href='/Irregular/'>Practice Verbs</a>.",
    "irregular": "Irregular verbs are hard! Practice them specifically in our Verbs section. <a href='/Irregular/'>Click here</a>.",
    "persona": "<strong>AI Personas</strong> let you have realistic conversations with diverse AI characters. It's like talking to a real person! <a href='/Personas/'>Meet Personas</a>.",
    "chat": "You can chat with our AI Personas to practice natural conversation. <a href='/Personas/'>Start Chatting</a>.",
    "quiz": "Challenge yourself with the <strong>Daily Quiz</strong>! It changes every day to test your knowledge. <a href='/quiz/'>Take the Quiz</a>.",
    "read": "The <strong>Reading Club</strong> has interesting articles and stories tailored for all proficiency levels. <a href='/read/'>Start Reading</a>.",
    "story": "We have many stories and articles in the Reading Club. <a href='/read/'>Read a Story</a>.",

    // --- ACCOUNT & HELP ---
    "login": "You can log in to save your progress here: <a href='/login/'>Log In</a>.",
    "sign up": "Create a free account to track your learning: <a href='/signup/'>Sign Up</a>.",
    "register": "Join us for free! <a href='/signup/'>Register here</a>.",
    "contact": "You can contact us for support or feedback via the link in the footer.",
    
    // --- GREETINGS & FALLBACK ---
    "hello": "Hello! I am the Linguamis bot. Ask me about 'Grammar', 'Speaking', or 'Verbs'!",
    "hi": "Hi there! Ready to learn? Ask me where to start.",
    "help": "I can direct you to the right place. Try typing <strong>'speaking'</strong>, <strong>'grammar'</strong>, or <strong>'quiz'</strong>.",
    "default": "I'm not sure I understand. Try asking about <strong>Speaking, Grammar, Listening, or Verbs</strong>."
};

// 2. TOGGLE CHAT WINDOW
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    
    // If opening for the first time, send the detailed welcome script
    const messages = document.getElementById('chat-messages');
    if (!chatWindow.classList.contains('hidden') && messages.children.length === 0) {
        addMessage("bot", `
            <strong>Hi there! I'm the Linguamis Assistant. 🤖</strong><br><br>
            I can help you navigate the site. Try asking me about:<br>
            🎙️ <strong>Speaking</strong> (Pronunciation & Feedback)<br>
            🎧 <strong>Listening</strong> (Accents & Dictation)<br>
            📖 <strong>Grammar</strong> (Rules & Examples)<br>
            ✍️ <strong>Writing</strong> (Essays & Emails)<br>
            🤖 <strong>Personas</strong> (Chat with AI characters)<br>
            ⚡ <strong>Verbs</strong> (Irregular verb practice)<br><br>
            <em>What would you like to improve today?</em>
        `);
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