// --- chatbot.js (Multilingual Version) ---

// 1. THE MULTILINGUAL BRAIN (Knowledge Base)
const botKnowledge = {
    en: {
        welcome: `
            <strong>Hi there! I'm the Linguamis Assistant. 🤖</strong><br><br>
            I can help you navigate the site. Try asking me about:<br>
            🎙️ <strong>Speaking</strong><br>
            🎧 <strong>Listening</strong><br>
            📖 <strong>Grammar</strong><br>
            ⚡ <strong>Verbs</strong><br>
            <em>How can I help you today?</em>`,
        responses: {
            "speak": "Our <strong>Speaking Coach</strong> listens to you and gives real-time AI feedback. <a href='/speak/'>Start Speaking</a>.",
            "listen": "The <strong>Listening Lab</strong> helps you train your ear with diverse accents. <a href='/listen/'>Start Listening</a>.",
            "grammar": "The <strong>Grammar Guide</strong> explains English rules clearly with interactive examples. <a href='/grammar/'>Learn Grammar</a>.",
            "write": "The <strong>Writing Studio</strong> helps you enhance skills for essays and emails. <a href='/write/'>Start Writing</a>.",
            "verbs": "Conquer tricky verbs like 'go-went-gone' in our Irregular Verbs section. <a href='/Irregular/'>Practice Verbs</a>.",
            "personas": "Chat with <strong>AI Personas</strong> to practice natural conversation. <a href='/Personas/'>Meet Personas</a>.",
            "quiz": "Challenge yourself with today's <strong>Daily Quiz</strong>! <a href='/quiz/'>Take Quiz</a>.",
            "price": "Linguamis is <strong>100% Free</strong>! We believe education should be accessible to everyone.",
            "free": "Yes! All features are completely free.",
            "hello": "Hello! Ready to improve your English? Ask me where to start!",
            "default": "I'm not sure I understand. Try asking about <strong>Speaking, Grammar, or Verbs</strong>."
        }
    },
    tr: {
        welcome: `
            <strong>Merhaba! Ben Linguamis Asistanı. 🤖</strong><br><br>
            Size yardımcı olabilirim. Bana şunları sorabilirsiniz:<br>
            🎙️ <strong>Konuşma</strong><br>
            🎧 <strong>Dinleme</strong><br>
            📖 <strong>Dilbilgisi</strong><br>
            ⚡ <strong>Fiiller</strong><br>
            <em>Bugün ne çalışmak istersiniz?</em>`,
        responses: {
            "konuş": "<strong>Konuşma Koçu</strong> sizi dinler ve anlık telaffuz geri bildirimi verir. <a href='/speak/'>Konuşmaya Başla</a>.",
            "dinle": "<strong>Dinleme Laboratuvarı</strong> farklı aksanlarla kulağınızı eğitir. <a href='/listen/'>Dinlemeye Başla</a>.",
            "dilbilgisi": "<strong>Dilbilgisi Rehberi</strong> İngilizce kurallarını net örneklerle açıklar. <a href='/grammar/'>Öğrenmeye Başla</a>.",
            "yaz": "<strong>Yazma Stüdyosu</strong> kompozisyon ve e-posta becerilerinizi geliştirir. <a href='/write/'>Yazmaya Başla</a>.",
            "fiil": "Düzensiz fiilleri (go-went-gone) hedefli alıştırmalarla öğrenin. <a href='/Irregular/'>Fiil Çalış</a>.",
            "persona": "Gerçekçi sohbetler için <strong>YZ Personaları</strong> ile konuşun. <a href='/Personas/'>Tanışın</a>.",
            "test": "Bilginizi <strong>Günlük Test</strong> ile sınayın! <a href='/quiz/'>Testi Çöz</a>.",
            "ücret": "Linguamis <strong>%100 Ücretsizdir</strong>! Eğitimin herkes için erişilebilir olması gerektiğine inanıyoruz.",
            "fiyat": "Linguamis tamamen ücretsizdir.",
            "merhaba": "Merhaba! İngilizcenizi geliştirmeye hazır mısınız?",
            "default": "Tam anlayamadım. Lütfen <strong>Konuşma, Dilbilgisi veya Fiiller</strong> hakkında soru sorun."
        }
    },
    fr: {
        welcome: `
            <strong>Bonjour ! Je suis l'assistant Linguamis. 🤖</strong><br><br>
            Je peux vous aider. Essayez de demander sur :<br>
            🎙️ <strong>Parler</strong><br>
            🎧 <strong>Écoute</strong><br>
            📖 <strong>Grammaire</strong><br>
            ⚡ <strong>Verbes</strong>`,
        responses: {
            "parl": "Notre <strong>Coach Vocal</strong> écoute votre prononciation et vous corrige. <a href='/speak/'>Commencer</a>.",
            "ecout": "Le <strong>Labo d'écoute</strong> entraîne votre oreille aux accents variés. <a href='/listen/'>Écouter</a>.",
            "grammaire": "Le <strong>Guide de grammaire</strong> explique les règles clairement. <a href='/grammar/'>Apprendre</a>.",
            "ecri": "Le <strong>Studio d'écriture</strong> améliore vos rédactions. <a href='/write/'>Écrire</a>.",
            "verbe": "Maîtrisez les verbes irréguliers avec nos exercices. <a href='/Irregular/'>Pratiquer</a>.",
            "prix": "Linguamis est <strong>100% Gratuit</strong> !",
            "bonjour": "Bonjour ! Prêt à améliorer votre anglais ?",
            "default": "Je ne comprends pas. Essayez de demander sur la <strong>Grammaire ou le Parler</strong>."
        }
    },
    es: {
        welcome: `
            <strong>¡Hola! Soy el asistente de Linguamis. 🤖</strong><br><br>
            Puedo ayudarte. Pregúntame sobre:<br>
            🎙️ <strong>Hablar</strong><br>
            🎧 <strong>Escuchar</strong><br>
            📖 <strong>Gramática</strong><br>
            ⚡ <strong>Verbos</strong>`,
        responses: {
            "habl": "Nuestro <strong>Entrenador de Habla</strong> mejora tu pronunciación. <a href='/speak/'>Empezar</a>.",
            "escuch": "El <strong>Lab de Escucha</strong> entrena tu oído con varios acentos. <a href='/listen/'>Escuchar</a>.",
            "gramatica": "La <strong>Guía Gramatical</strong> explica las reglas claramente. <a href='/grammar/'>Aprender</a>.",
            "escrib": "Mejora tus ensayos en el <strong>Estudio de Escritura</strong>. <a href='/write/'>Escribir</a>.",
            "verbo": "Domina los verbos irregulares aquí. <a href='/Irregular/'>Practicar</a>.",
            "precio": "¡Linguamis es <strong>100% Gratis</strong>!",
            "hola": "¡Hola! ¿Listo para aprender inglés?",
            "default": "No entiendo. Pregunta sobre <strong>Gramática o Hablar</strong>."
        }
    },
    de: {
        welcome: `
            <strong>Hallo! Ich bin der Linguamis-Assistent. 🤖</strong><br><br>
            Ich kann helfen. Fragen Sie mich nach:<br>
            🎙️ <strong>Sprechen</strong><br>
            🎧 <strong>Hören</strong><br>
            📖 <strong>Grammatik</strong><br>
            ⚡ <strong>Verben</strong>`,
        responses: {
            "sprech": "Unser <strong>Sprechtrainer</strong> verbessert Ihre Aussprache. <a href='/speak/'>Starten</a>.",
            "horen": "Das <strong>Hörlabor</strong> trainiert Ihr Gehör. <a href='/listen/'>Starten</a>.",
            "grammatik": "Der <strong>Grammatikführer</strong> erklärt Regeln einfach. <a href='/grammar/'>Lernen</a>.",
            "schreib": "Verbessern Sie Texte im <strong>Schreibstudio</strong>. <a href='/write/'>Schreiben</a>.",
            "verb": "Meistern Sie unregelmäßige Verben hier. <a href='/Irregular/'>Üben</a>.",
            "kosten": "Linguamis ist <strong>100% Kostenlos</strong>!",
            "hallo": "Hallo! Bereit, Englisch zu lernen?",
            "default": "Ich verstehe nicht. Fragen Sie nach <strong>Grammatik oder Sprechen</strong>."
        }
    },
    ru: {
        welcome: `
            <strong>Привет! Я помощник Linguamis. 🤖</strong><br><br>
            Я могу помочь. Спросите меня о:<br>
            🎙️ <strong>Разговор</strong><br>
            🎧 <strong>Слух</strong><br>
            📖 <strong>Грамматика</strong><br>
            ⚡ <strong>Глаголы</strong>`,
        responses: {
            "говор": "Наш <strong>Тренер по речи</strong> улучшает произношение. <a href='/speak/'>Начать</a>.",
            "слуш": "<strong>Лаборатория слуха</strong> тренирует восприятие акцентов. <a href='/listen/'>Слушать</a>.",
            "грамм": "<strong>Гид по грамматике</strong> объясняет правила. <a href='/grammar/'>Учить</a>.",
            "пис": "Улучшайте навыки в <strong>Студии письма</strong>. <a href='/write/'>Писать</a>.",
            "глагол": "Освойте неправильные глаголы здесь. <a href='/Irregular/'>Тренировать</a>.",
            "цена": "Linguamis <strong>на 100% бесплатен</strong>!",
            "привет": "Привет! Готовы учить английский?",
            "default": "Я не понимаю. Спросите про <strong>Грамматику или Разговор</strong>."
        }
    },
    ar: {
        welcome: `
            <strong>مرحباً! أنا مساعد Linguamis الذكي. 🤖</strong><br><br>
            يمكنني مساعدتك. اسألني عن:<br>
            🎙️ <strong>المحادثة</strong><br>
            🎧 <strong>الاستماع</strong><br>
            📖 <strong>القواعد</strong><br>
            ⚡ <strong>الأفعال</strong>`,
        responses: {
            "تحدث": "<strong>مدرب المحادثة</strong> يساعدك على تحسين النطق. <a href='/speak/'>ابدأ الآن</a>.",
            "استماع": "<strong>مختبر الاستماع</strong> يدرب أذنك على اللهجات. <a href='/listen/'>ابدأ الاستماع</a>.",
            "قواعد": "<strong>دليل القواعد</strong> يشرح القواعد بوضوح. <a href='/grammar/'>تعلم القواعد</a>.",
            "كتابة": "حسن مهاراتك في <strong>استوديو الكتابة</strong>. <a href='/write/'>ابدأ الكتابة</a>.",
            "أفعال": "تغلب على الأفعال الشاذة هنا. <a href='/Irregular/'>تدرب الآن</a>.",
            "سعر": "Linguamis <strong>مجاني بنسبة 100%</strong>!",
            "مرحبا": "مرحباً! هل أنت مستعد لتعلم الإنجليزية؟",
            "default": "لم أفهم جيداً. حاول السؤال عن <strong>القواعد أو المحادثة</strong>."
        }
    }
};

// 2. HELPER: DETECT LANGUAGE
function getCurrentLang() {
    // Check localStorage first, default to 'en' if missing
    return localStorage.getItem('selectedLanguage') || 'en';
}

// 3. TOGGLE CHAT WINDOW
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    
    const messages = document.getElementById('chat-messages');
    
    // Get current language
    const lang = getCurrentLang();
    
    // If chat is opening and empty, send welcome message in correct language
    if (!chatWindow.classList.contains('hidden') && messages.children.length === 0) {
        // Fallback to English if language key is missing
        const welcomeMsg = botKnowledge[lang] ? botKnowledge[lang].welcome : botKnowledge['en'].welcome;
        addMessage("bot", welcomeMsg);
    }
}

// Close button
document.getElementById('close-chat').addEventListener('click', toggleChat);

// 4. SEND MESSAGE LOGIC
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userText = inputField.value.trim();

    if (userText === "") return;

    // Add User Message
    addMessage("user", userText);
    inputField.value = ""; 

    // Simulate Thinking
    setTimeout(() => {
        const lang = getCurrentLang(); // Get language again in case user switched mid-chat
        const botResponse = getBotResponse(userText.toLowerCase(), lang);
        addMessage("bot", botResponse);
    }, 600);
}

// 5. DETERMINE RESPONSE
function getBotResponse(input, lang) {
    // 1. Get the knowledge object for the current language
    // If lang doesn't exist in our DB, default to English
    const langDB = botKnowledge[lang] || botKnowledge['en'];
    
    // 2. Get the specific responses dictionary
    const responses = langDB.responses;

    // 3. Check for keywords
    for (let key in responses) {
        // We use simple 'includes' logic. 
        // Example: input "fiyat nedir" includes "fiyat" -> returns answer
        if (input.includes(key)) {
            return responses[key];
        }
    }

    // 4. Return default fallback if no keyword matches
    return langDB.default;
}

// 6. UI HELPER: ADD MESSAGE
function addMessage(sender, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender); 
    messageDiv.innerHTML = text; 
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// 7. ENTER KEY SUPPORT
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
