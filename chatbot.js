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
    },
    /* --- Add these to botKnowledge in chatbot.js --- */

    it: { // Italian
        welcome: "<strong>Ciao! Sono l'assistente Linguamis. 🤖</strong><br>Chiedimi del Sito, della Grammatica o Contatti!",
        responses: {
            "parl": "Il <strong>Coach Vocale</strong> aiuta con la pronuncia. <a href='/speak/'>Inizia</a>.",
            "ascolt": "Il <strong>Lab Ascolto</strong> allena il tuo orecchio. <a href='/listen/'>Ascolta</a>.",
            "gramm": "La <strong>Guida Grammaticale</strong> spiega le regole. <a href='/grammar/'>Impara</a>.",
            "scri": "Migliora la tua scrittura qui. <a href='/write/'>Scrivi</a>.",
            "verbi": "Pratica i verbi irregolari. <a href='/Irregular/'>Pratica</a>.",
            "sito": "Linguamis è una piattaforma gratuita al 100%.",
            "ciao": "Ciao! Pronto a imparare?",
            "default": "Non capisco. Chiedimi del <strong>Sito o Grammatica</strong>."
        }
    },
    zh: { // Chinese
        welcome: "<strong>你好！我是 Linguamis 助手。 🤖</strong><br>问我关于网站、语法或联系方式！",
        responses: {
            "说": "<strong>口语教练</strong> 帮助发音。<a href='/speak/'>开始</a>。",
            "听": "<strong>听力实验室</strong> 训练你的耳朵。<a href='/listen/'>开始</a>。",
            "语法": "<strong>语法指南</strong> 解释规则。<a href='/grammar/'>学习</a>。",
            "写": "在这里提高写作。<a href='/write/'>写作</a>。",
            "动词": "练习不规则动词。<a href='/Irregular/'>练习</a>。",
            "网站": "Linguamis 是一个 100% 免费的平台。",
            "你好": "你好！准备好学习了吗？",
            "default": "我不明白。请问关于<strong>网站或语法</strong>。"
        }
    },
    ja: { // Japanese
        welcome: "<strong>こんにちは！Linguamis アシスタントです。 🤖</strong><br>サイトや文法について聞いてください！",
        responses: {
            "話": "<strong>スピーキングコーチ</strong>が発音を助けます。<a href='/speak/'>開始</a>。",
            "聞": "<strong>リスニングラボ</strong>で耳を鍛えます。<a href='/listen/'>開始</a>。",
            "文法": "<strong>文法ガイド</strong>がルールを説明します。<a href='/grammar/'>学ぶ</a>。",
            "書": "ライティングを改善します。<a href='/write/'>書く</a>。",
            "動詞": "不規則動詞を練習。<a href='/Irregular/'>練習</a>。",
            "サイト": "Linguamisは100%無料のプラットフォームです。",
            "こんにちは": "こんにちは！準備はいいですか？",
            "default": "わかりません。<strong>サイトか文法</strong>について聞いてください。"
        }
    },
    ko: { // Korean
        welcome: "<strong>안녕하세요! Linguamis 도우미입니다. 🤖</strong><br>사이트나 문법에 대해 물어보세요!",
        responses: {
            "말하": "<strong>말하기 코치</strong>가 발음을 도와줍니다. <a href='/speak/'>시작</a>.",
            "듣": "<strong>듣기 연구소</strong>에서 귀를 훈련하세요. <a href='/listen/'>시작</a>.",
            "문법": "<strong>문법 가이드</strong>가 규칙을 설명합니다. <a href='/grammar/'>배우기</a>.",
            "쓰": "여기서 작문을 향상하세요. <a href='/write/'>쓰기</a>.",
            "동사": "불규칙 동사를 연습하세요. <a href='/Irregular/'>연습</a>.",
            "사이트": "Linguamis는 100% 무료 플랫폼입니다.",
            "안녕": "안녕하세요! 학습할 준비 되셨나요?",
            "default": "이해하지 못했습니다. <strong>사이트나 문법</strong>에 대해 물어보세요."
        }
    },
    hi: { // Hindi
        welcome: "<strong>नमस्ते! मैं Linguamis सहायक हूँ। 🤖</strong><br>मुझसे साइट या व्याकरण के बारे में पूछें!",
        responses: {
            "बोल": "<strong>स्पीकिंग कोच</strong> उच्चारण में मदद करता है। <a href='/speak/'>शुरू करें</a>.",
            "सुन": "<strong>लिस्निंग लैब</strong> आपके कानों को प्रशिक्षित करता है। <a href='/listen/'>शुरू करें</a>.",
            "व्याकरण": "<strong>व्याकरण गाइड</strong> नियमों की व्याख्या करता है। <a href='/grammar/'>सीखें</a>.",
            "लिख": "अपना लेखन सुधारें। <a href='/write/'>लिखें</a>.",
            "क्रिया": "अनियमित क्रियाओं का अभ्यास करें। <a href='/Irregular/'>अभ्यास करें</a>.",
            "साइट": "Linguamis 100% मुफ़्त है।",
            "नमस्ते": "नमस्ते! क्या आप तैयार हैं?",
            "default": "मुझे समझ नहीं आया। <strong>साइट या व्याकरण</strong> के बारे में पूछें।"
        }
    },
    pl: { // Polish
        welcome: "<strong>Cześć! Jestem asystentem Linguamis. 🤖</strong><br>Zapytaj mnie o Stronę lub Gramatykę!",
        responses: {
            "mów": "<strong>Trener Mowy</strong> pomaga w wymowie. <a href='/speak/'>Start</a>.",
            "słuch": "<strong>Lab Słuchania</strong> trenuje słuch. <a href='/listen/'>Start</a>.",
            "gramatyka": "<strong>Przewodnik</strong> wyjaśnia zasady. <a href='/grammar/'>Ucz się</a>.",
            "pisa": "Popraw pisanie tutaj. <a href='/write/'>Pisz</a>.",
            "czasownik": "Ćwicz czasowniki nieregularne. <a href='/Irregular/'>Ćwicz</a>.",
            "strona": "Linguamis to w 100% darmowa platforma.",
            "cześć": "Cześć! Gotowy do nauki?",
            "default": "Nie rozumiem. Zapytaj o <strong>Stronę lub Gramatykę</strong>."
        }
    },
    pt: { // Portuguese
        welcome: "<strong>Olá! Sou o assistente. 🤖</strong><br>Pergunte sobre o Site ou Gramática.",
        responses: {
            "fala": "O <strong>Treinador de Fala</strong> ajuda na pronúncia. <a href='/speak/'>Começar</a>.",
            "ouvir": "O <strong>Lab de Escuta</strong> treina seu ouvido. <a href='/listen/'>Ouvir</a>.",
            "gramatica": "O <strong>Guia</strong> explica as regras. <a href='/grammar/'>Aprender</a>.",
            "escrev": "Melhore sua escrita. <a href='/write/'>Escrever</a>.",
            "verbo": "Pratique verbos irregulares. <a href='/Irregular/'>Praticar</a>.",
            "site": "Linguamis é 100% Grátis.",
            "ola": "Olá! Pronto para aprender?",
            "default": "Não entendi. Pergunte sobre <strong>o Site ou Gramática</strong>."
        }
    },
    nl: { // Dutch
        welcome: "<strong>Hallo! Ik ben de assistent. 🤖</strong><br>Vraag me over de Site of Grammatica.",
        responses: {
            "sprek": "De <strong>Spreekcoach</strong> helpt met uitspraak. <a href='/speak/'>Start</a>.",
            "luist": "Het <strong>Luisterlab</strong> traint je gehoor. <a href='/listen/'>Start</a>.",
            "grammatica": "De <strong>Gids</strong> legt regels uit. <a href='/grammar/'>Leren</a>.",
            "schrijf": "Verbeter je schrijven. <a href='/write/'>Schrijven</a>.",
            "werkwoord": "Oefen onregelmatige werkwoorden. <a href='/Irregular/'>Oefenen</a>.",
            "site": "Linguamis is 100% Gratis.",
            "hallo": "Hallo! Klaar om te leren?",
            "default": "Ik begrijp het niet. Vraag over <strong>de Site of Grammatica</strong>."
        }
    },
    id: { // Indonesian
        welcome: "<strong>Halo! Saya asisten Linguamis. 🤖</strong><br>Tanya saya tentang Situs atau Tata Bahasa!",
        responses: {
            "bicara": "<strong>Pelatih Bicara</strong> membantu pengucapan. <a href='/speak/'>Mulai</a>.",
            "dengar": "<strong>Lab Mendengar</strong> melatih telinga Anda. <a href='/listen/'>Mulai</a>.",
            "tata": "<strong>Panduan Tata Bahasa</strong> menjelaskan aturan. <a href='/grammar/'>Belajar</a>.",
            "tulis": "Tingkatkan tulisan Anda. <a href='/write/'>Menulis</a>.",
            "kerja": "Latihan kata kerja tak beraturan. <a href='/Irregular/'>Latihan</a>.",
            "situs": "Linguamis adalah platform 100% Gratis.",
            "halo": "Halo! Siap belajar?",
            "default": "Saya tidak mengerti. Tanya tentang <strong>Situs atau Tata Bahasa</strong>."
        }
    },
    th: { // Thai
        welcome: "<strong>สวัสดี! ฉันคือผู้ช่วย Linguamis 🤖</strong><br>ถามฉันเกี่ยวกับเว็บไซต์หรือไวยากรณ์!",
        responses: {
            "พูด": "<strong>โค้ชการพูด</strong> ช่วยเรื่องการออกเสียง <a href='/speak/'>เริ่ม</a>",
            "ฟัง": "<strong>ห้องแล็บการฟัง</strong> ฝึกหูของคุณ <a href='/listen/'>เริ่ม</a>",
            "ไวยากรณ์": "<strong>คู่มือไวยากรณ์</strong> อธิบายกฎต่างๆ <a href='/grammar/'>เรียนรู้</a>",
            "เขียน": "ปรับปรุงการเขียนของคุณ <a href='/write/'>เขียน</a>",
            "กริยา": "ฝึกคำกริยาผิดปกติ <a href='/Irregular/'>ฝึกฝน</a>",
            "เว็บ": "Linguamis ฟรี 100%",
            "สวัสดี": "สวัสดี! พร้อมเรียนรู้หรือยัง?",
            "default": "ฉันไม่เข้าใจ ถามเกี่ยวกับ <strong>เว็บไซต์หรือไวยากรณ์</strong>"
        }
    },
    vi: { // Vietnamese
        welcome: "<strong>Xin chào! Tôi là trợ lý. 🤖</strong><br>Hỏi tôi về Trang web hoặc Ngữ pháp!",
        responses: {
            "nói": "<strong>Huấn luyện viên Nói</strong> giúp phát âm. <a href='/speak/'>Bắt đầu</a>.",
            "nghe": "<strong>Phòng nghe</strong> rèn luyện tai. <a href='/listen/'>Nghe</a>.",
            "ngữ": "<strong>Hướng dẫn Ngữ pháp</strong> giải thích quy tắc. <a href='/grammar/'>Học</a>.",
            "viết": "Cải thiện kỹ năng viết. <a href='/write/'>Viết</a>.",
            "động": "Luyện động từ bất quy tắc. <a href='/Irregular/'>Luyện</a>.",
            "trang": "Linguamis miễn phí 100%.",
            "chào": "Xin chào! Sẵn sàng học chưa?",
            "default": "Tôi không hiểu. Hãy hỏi về <strong>Trang web hoặc Ngữ pháp</strong>."
        }
    },
    el: { // Greek
        welcome: "<strong>Γεια σας! Είμαι ο βοηθός. 🤖</strong><br>Ρωτήστε με για τον Ιστότοπο ή τη Γραμματική!",
        responses: {
            "ομιλ": "Ο <strong>Προπονητής</strong> βοηθά στην προφορά. <a href='/speak/'>Έναρξη</a>.",
            "ακου": "Το <strong>Εργαστήριο</strong> εκπαιδεύει το αυτί. <a href='/listen/'>Έναρξη</a>.",
            "γραμμ": "Ο <strong>Οδηγός</strong> εξηγεί τους κανόνες. <a href='/grammar/'>Μάθηση</a>.",
            "γραφ": "Βελτιώστε τη γραφή σας. <a href='/write/'>Γραφή</a>.",
            "ρημα": "Εξασκηθείτε στα ρήματα. <a href='/Irregular/'>Άσκηση</a>.",
            "ιστο": "Το Linguamis είναι 100% Δωρεάν.",
            "γεια": "Γεια σας! Έτοιμοι;",
            "default": "Δεν καταλαβαίνω. Ρωτήστε για <strong>Ιστότοπο ή Γραμματική</strong>."
        }
    },
    cs: { // Czech
        welcome: "<strong>Ahoj! Jsem asistent Linguamis. 🤖</strong><br>Zeptej se mě na Web nebo Gramatiku!",
        responses: {
            "mluv": "<strong>Trenér Mluvení</strong> pomáhá s výslovností. <a href='/speak/'>Start</a>.",
            "posl": "<strong>Laboratoř</strong> trénuje uši. <a href='/listen/'>Start</a>.",
            "gramat": "<strong>Průvodce</strong> vysvětluje pravidla. <a href='/grammar/'>Učit se</a>.",
            "psát": "Zlepši své psaní. <a href='/write/'>Psát</a>.",
            "sloves": "Procvič nepravidelná slovesa. <a href='/Irregular/'>Cvičit</a>.",
            "web": "Linguamis je 100% zdarma.",
            "ahoj": "Ahoj! Jsi připraven?",
            "default": "Nerozumím. Zeptej se na <strong>Web nebo Gramatiku</strong>."
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

