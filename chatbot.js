// --- chatbot.js (Expanded & "Undefined" Proof) ---

// 1. THE MULTILINGUAL BRAIN (Expanded Knowledge Base)
const botKnowledge = {
    en: {
        welcome: "<strong>Hi there! I'm the Linguamis Assistant. 🤖</strong><br>Ask me about the Site, Grammar, or how to Contact us!",
        responses: {
            // Educational
            "speak": "Our <strong>Speaking Coach</strong> helps with pronunciation. <a href='/speak/'>Start Speaking</a>.",
            "listen": "The <strong>Listening Lab</strong> trains your ear. <a href='/listen/'>Start Listening</a>.",
            "grammar": "The <strong>Grammar Guide</strong> explains rules clearly. <a href='/grammar/'>Learn Grammar</a>.",
            "write": "The <strong>Writing Studio</strong> improves essays. <a href='/write/'>Start Writing</a>.",
            "verbs": "Conquer tricky verbs here. <a href='/Irregular/'>Practice Verbs</a>.",
            "personas": "Chat with <strong>AI Personas</strong>. <a href='/Personas/'>Meet Personas</a>.",
            "quiz": "Take today's <strong>Daily Quiz</strong>! <a href='/quiz/'>Take Quiz</a>.",
            
            // Site Details (NEW)
            "about": "<strong>Linguamis</strong> is a 100% free platform designed to make language learning accessible to everyone using adaptive technology.",
            "site": "Linguamis is a free learning hub. We offer tools for reading, writing, speaking, and grammar.",
            "free": "Yes! We are <strong>100% Free</strong>. No hidden costs.",
            "price": "There is no price! Education should be free.",
            "contact": "Need help? You can email our support team at <strong>support@linguamis.com</strong>.",
            "how": "It's simple! Choose a skill (like Speaking or Reading) from the menu and start practicing. No sign-up required to start.",
            
            // Greetings
            "hello": "Hello! Ready to learn something new?",
            "hi": "Hi there! How can I help?",
            
            // Fallback
            "default": "I'm not sure I understand. Try asking about <strong>Speaking, Grammar, or the Site</strong>."
        }
    },
    tr: {
        welcome: "<strong>Merhaba! Ben Linguamis Asistanı. 🤖</strong><br>Bana Site, İletişim veya Dilbilgisi hakkında sorabilirsin!",
        responses: {
            // Educational
            "konuş": "<strong>Konuşma Koçu</strong> telaffuzunuzu geliştirir. <a href='/speak/'>Başla</a>.",
            "dinle": "<strong>Dinleme Laboratuvarı</strong> kulağınızı eğitir. <a href='/listen/'>Başla</a>.",
            "dilbilgisi": "<strong>Dilbilgisi Rehberi</strong> kuralları açıklar. <a href='/grammar/'>Öğren</a>.",
            "yaz": "<strong>Yazma Stüdyosu</strong> yazınızı geliştirir. <a href='/write/'>Başla</a>.",
            "fiil": "Düzensiz fiilleri burada çalışın. <a href='/Irregular/'>Fiil Çalış</a>.",
            "test": "<strong>Günlük Test</strong> ile kendini sına! <a href='/quiz/'>Çöz</a>.",
            
            // Site Details (NEW)
            "hakkında": "<strong>Linguamis</strong>, dil öğrenimini herkes için erişilebilir kılan %100 ücretsiz bir platformdur.",
            "site": "Linguamis ücretsiz bir eğitim merkezidir. Okuma, yazma, konuşma ve gramer araçları sunuyoruz.",
            "ücret": "Linguamis <strong>Tamamen Ücretsizdir</strong>! Gizli ücret yok.",
            "fiyat": "Fiyat yok! Eğitim herkes için ücretsiz olmalı.",
            "iletişim": "Yardıma mı ihtiyacınız var? Bize <strong>support@linguamis.com</strong> adresinden ulaşabilirsiniz.",
            "nasıl": "Çok basit! Menüden bir beceri (Konuşma veya Okuma gibi) seçin ve hemen başlayın.",
            
            // Greetings
            "merhaba": "Merhaba! Başlamaya hazır mısın?",
            "selam": "Selam! Sana nasıl yardım edebilirim?",

            // Fallback
            "default": "Anlayamadım. Lütfen <strong>Konuşma, Site veya Dilbilgisi</strong> hakkında sor."
        }
    },
    fr: {
        welcome: "<strong>Bonjour ! Je suis l'assistant Linguamis. 🤖</strong><br>Posez-moi des questions sur le Site ou la Grammaire.",
        responses: {
            "parl": "Notre <strong>Coach Vocal</strong> vous aide à prononcer. <a href='/speak/'>Commencer</a>.",
            "ecout": "Le <strong>Labo d'écoute</strong> entraîne votre oreille. <a href='/listen/'>Écouter</a>.",
            "grammaire": "Le <strong>Guide de grammaire</strong> explique les règles. <a href='/grammar/'>Apprendre</a>.",
            "ecri": "Le <strong>Studio d'écriture</strong> améliore vos textes. <a href='/write/'>Écrire</a>.",
            "verbe": "Pratiquez les verbes irréguliers ici. <a href='/Irregular/'>Pratiquer</a>.",
            
            // Site Details (NEW)
            "propos": "<strong>Linguamis</strong> est une plateforme 100% gratuite pour rendre l'apprentissage des langues accessible.",
            "site": "C'est un centre d'apprentissage gratuit offrant des outils de lecture, d'écriture et d'oral.",
            "gratuit": "Oui ! C'est <strong>100% Gratuit</strong>.",
            "prix": "Aucun prix ! L'éducation doit être gratuite.",
            "contact": "Besoin d'aide ? Écrivez à <strong>support@linguamis.com</strong>.",
            "comment": "C'est simple ! Choisissez une compétence dans le menu et commencez.",

            "bonjour": "Bonjour ! Prêt à apprendre ?",
            "default": "Je ne comprends pas. Demandez sur le <strong>Site ou la Grammaire</strong>."
        }
    },
    es: {
        welcome: "<strong>¡Hola! Soy el asistente. 🤖</strong><br>Pregúntame sobre el Sitio, Gramática o Hablar.",
        responses: {
            "habl": "El <strong>Entrenador de Habla</strong> mejora tu acento. <a href='/speak/'>Empezar</a>.",
            "escuch": "Entrena tu oído en el <strong>Lab</strong>. <a href='/listen/'>Escuchar</a>.",
            "gramatica": "La <strong>Guía Gramatical</strong> explica las reglas. <a href='/grammar/'>Aprender</a>.",
            "escrib": "Mejora tu escritura aquí. <a href='/write/'>Escribir</a>.",
            "verbo": "Practica verbos irregulares. <a href='/Irregular/'>Practicar</a>.",
            
            // Site Details (NEW)
            "acerca": "<strong>Linguamis</strong> es una plataforma 100% gratuita para aprender idiomas.",
            "sitio": "Ofrecemos herramientas gratuitas de lectura, escritura y habla.",
            "gratis": "¡Sí! Es <strong>100% Gratis</strong>.",
            "precio": "¡No cuesta nada!",
            "contact": "¿Necesitas ayuda? Escribe a <strong>support@linguamis.com</strong>.",
            "como": "¡Es fácil! Elige una habilidad del menú y empieza a practicar.",

            "hola": "¡Hola! ¿Listo?",
            "default": "No entiendo. Pregunta sobre <strong>el Sitio o Gramática</strong>."
        }
    },
    de: {
        welcome: "<strong>Hallo! Ich bin der Assistent. 🤖</strong><br>Fragen Sie mich nach der Website oder Grammatik.",
        responses: {
            "sprech": "Der <strong>Sprechtrainer</strong> hilft bei der Aussprache. <a href='/speak/'>Starten</a>.",
            "horen": "Das <strong>Hörlabor</strong> trainiert das Gehör. <a href='/listen/'>Hören</a>.",
            "grammatik": "Der <strong>Grammatikführer</strong> erklärt Regeln. <a href='/grammar/'>Lernen</a>.",
            "schreib": "Verbessern Sie Ihr Schreiben. <a href='/write/'>Starten</a>.",
            "verb": "Üben Sie unregelmäßige Verben. <a href='/Irregular/'>Üben</a>.",
            
            // Site Details (NEW)
            "uber": "<strong>Linguamis</strong> ist eine 100% kostenlose Plattform zum Sprachenlernen.",
            "website": "Wir bieten Tools zum Lesen, Schreiben und Sprechen.",
            "kosten": "Ja! Es ist <strong>100% Kostenlos</strong>.",
            "preis": "Kein Preis! Bildung sollte kostenlos sein.",
            "kontakt": "Hilfe benötigt? Schreiben Sie an <strong>support@linguamis.com</strong>.",
            "wie": "Ganz einfach! Wählen Sie eine Fähigkeit aus dem Menü.",

            "hallo": "Hallo! Bereit?",
            "default": "Ich verstehe nicht. Fragen Sie nach der <strong>Website oder Grammatik</strong>."
        }
    },
    ru: {
        welcome: "<strong>Привет! Я помощник. 🤖</strong><br>Спроси меня о сайте или грамматике.",
        responses: {
            "говор": "<strong>Тренер по речи</strong> улучшит произношение. <a href='/speak/'>Начать</a>.",
            "слуш": "Тренируй слух в <strong>Лаборатории</strong>. <a href='/listen/'>Слушать</a>.",
            "грамм": "<strong>Гид по грамматике</strong> объяснит правила. <a href='/grammar/'>Учить</a>.",
            "пис": "Улучшай навыки письма. <a href='/write/'>Писать</a>.",
            "глагол": "Тренируй неправильные глаголы. <a href='/Irregular/'>Тренировать</a>.",
            
            // Site Details (NEW)
            "о нас": "<strong>Linguamis</strong> — это на 100% бесплатная платформа для изучения языков.",
            "сайт": "Мы предлагаем инструменты для чтения, письма и речи.",
            "бесплатно": "Да! Это <strong>100% Бесплатно</strong>.",
            "цена": "Бесплатно! Образование должно быть доступным.",
            "контакт": "Нужна помощь? Пишите на <strong>support@linguamis.com</strong>.",
            "как": "Просто выберите навык в меню и начните.",

            "привет": "Привет! Готов?",
            "default": "Я не понимаю. Спроси про <strong>сайт или грамматику</strong>."
        }
    },
    ar: {
        welcome: "<strong>مرحباً! أنا المساعد الذكي. 🤖</strong><br>اسألني عن الموقع أو القواعد.",
        responses: {
            "تحدث": "<strong>مدرب المحادثة</strong> يحسن نطقك. <a href='/speak/'>ابدأ</a>.",
            "استماع": "درب أذنك في <strong>مختبر الاستماع</strong>. <a href='/listen/'>استمع</a>.",
            "قواعد": "<strong>دليل القواعد</strong> يشرح القواعد. <a href='/grammar/'>تعلم</a>.",
            "كتابة": "حسن كتابتك هنا. <a href='/write/'>اكتب</a>.",
            "أفعال": "تدرب على الأفعال الشاذة. <a href='/Irregular/'>تدرب</a>.",
            
            // Site Details (NEW)
            "حول": "<strong>Linguamis</strong> هي منصة مجانية 100% لتعلم اللغات.",
            "موقع": "نقدم أدوات للقراءة والكتابة والمحادثة.",
            "مجاني": "نعم! إنه <strong>مجاني 100%</strong>.",
            "سعر": "لا يوجد سعر! التعليم يجب أن يكون مجانياً.",
            "اتصل": "هل تحتاج مساعدة؟ راسلنا على <strong>support@linguamis.com</strong>.",
            "كيف": "ببساطة اختر مهارة من القائمة وابدأ.",

            "مرحبا": "مرحباً! هل أنت مستعد؟",
            "default": "لم أفهم. اسأل عن <strong>الموقع أو القواعد</strong>."
        }
    }
};

// 2. HELPER: GET CURRENT LANGUAGE FROM STORAGE
function getCurrentLang() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

// 3. TOGGLE CHAT WINDOW
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const messages = document.getElementById('chat-messages');
    
    chatWindow.classList.toggle('hidden');
    
    // Because the page reloads on language change, we just check if empty
    if (!chatWindow.classList.contains('hidden') && messages.children.length === 0) {
        const lang = getCurrentLang();
        // Safe check: if lang doesn't exist in DB, use 'en'
        const welcomeMsg = (botKnowledge[lang] || botKnowledge['en']).welcome;
        addMessage("bot", welcomeMsg);
    }
}

// Button Listeners
document.getElementById('close-chat').addEventListener('click', toggleChat);

// 4. SEND MESSAGE LOGIC
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userText = inputField.value.trim();

    if (userText === "") return;

    addMessage("user", userText);
    inputField.value = ""; 

    setTimeout(() => {
        const lang = getCurrentLang();
        const botResponse = getBotResponse(userText.toLowerCase(), lang);
        addMessage("bot", botResponse);
    }, 600);
}

// 5. GET RESPONSE (FIXED: "Undefined" Proof)
function getBotResponse(input, lang) {
    // Fallback to English if the language code is weird
    const langDB = botKnowledge[lang] || botKnowledge['en'];
    
    // Ensure responses object exists
    const responses = langDB.responses || {};

    // Check for keyword matches
    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }
    
    // Safety Net: If 'default' is missing for some reason, return a hardcoded string.
    // This prevents the "undefined" chat bubble.
    return langDB.default || "I am here to help, but I didn't understand that.";
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

// 7. KEYPRESS
function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}
