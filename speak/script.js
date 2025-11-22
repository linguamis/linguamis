// --- Data Structure ---
const practiceData = {
    'Minimal Pairs': [
        { id: 1, text: "Ship vs Sheep", phrase: "The sheep is on the ship.", hint: "Short 'i' vs Long 'ee'" },
        { id: 2, text: "Bat vs Bet", phrase: "I bet on the bat.", hint: "Open 'a' vs Short 'e'" },
        { id: 3, text: "Fan vs Van", phrase: "The fan is in the van.", hint: "Soft 'f' vs Vibrating 'v'" },
        { id: 4, text: "Think vs Sink", phrase: "I think I will sink.", hint: "Tongue out 'th' vs Sibilant 's'" },
        { id: 5, text: "Bit vs Beet", phrase: "A little bit of beet.", hint: "Short I vs Long E" },
        { id: 6, text: "Sit vs Seat", phrase: "Sit on the seat.", hint: "Short I vs Long E" },
        { id: 7, text: "Fill vs Feel", phrase: "Feel the cup fill up.", hint: "Short I vs Long E" },
        { id: 8, text: "Pen vs Pan", phrase: "A pen in a pan.", hint: "E vs A" },
        { id: 9, text: "Men vs Man", phrase: "The men saw a man.", hint: "E vs A" },
        { id: 10, text: "Cat vs Cut", phrase: "The cat has a cut.", hint: "A vs U" },
        { id: 11, text: "Hat vs Hut", phrase: "A hat in the hut.", hint: "A vs U" },
        { id: 12, text: "So vs Saw", phrase: "So I saw him.", hint: "O vs AW" },
        { id: 13, text: "Boat vs Bought", phrase: "I bought a boat.", hint: "OA vs OU" },
        { id: 14, text: "Light vs Right", phrase: "The right light.", hint: "L vs R" },
        { id: 15, text: "Fly vs Fry", phrase: "I can fly and fry.", hint: "L vs R" },
        { id: 16, text: "Vote vs Boat", phrase: "Vote for the boat.", hint: "V vs B" },
        { id: 17, text: "Vest vs Best", phrase: "The best vest.", hint: "V vs B" },
        { id: 18, text: "Tree vs Three", phrase: "Three big trees.", hint: "T vs TH" },
        { id: 19, text: "Tank vs Thank", phrase: "Thank the tank driver.", hint: "T vs TH" },
        { id: 20, text: "Dare vs There", phrase: "Dare to go there.", hint: "D vs TH" },
        { id: 21, text: "Day vs They", phrase: "They came one day.", hint: "D vs TH" },
        { id: 22, text: "Sip vs Zip", phrase: "Sip the zip drink.", hint: "S vs Z" },
        { id: 23, text: "Sue vs Zoo", phrase: "Sue went to the zoo.", hint: "S vs Z" },
        { id: 24, text: "Hit vs Heat", phrase: "The heat hit me.", hint: "Short I vs Long E" },
        { id: 25, text: "Slip vs Sleep", phrase: "Don't slip in your sleep.", hint: "Short I vs Long E" },
        { id: 26, text: "Mill vs Meal", phrase: "A meal at the mill.", hint: "Short I vs Long E" },
        { id: 27, text: "Chip vs Cheap", phrase: "This chip is cheap.", hint: "Short I vs Long E" },
        { id: 28, text: "It vs Eat", phrase: "Eat it now.", hint: "Short I vs Long E" },
        { id: 29, text: "Bad vs Bed", phrase: "A bad bed.", hint: "A vs E" },
        { id: 30, text: "Land vs Lend", phrase: "Lend me land.", hint: "A vs E" },
        { id: 31, text: "Ham vs Hem", phrase: "Ham on the hem.", hint: "A vs E" },
        { id: 32, text: "Mat vs Met", phrase: "I met him on the mat.", hint: "A vs E" },
        { id: 33, text: "Sand vs Send", phrase: "Send the sand.", hint: "A vs E" },
        { id: 34, text: "Heart vs Hut", phrase: "My heart is in the hut.", hint: "Long A vs U" },
        { id: 35, text: "Dark vs Duck", phrase: "A dark duck.", hint: "Long A vs U" },
        { id: 36, text: "Barn vs Bun", phrase: "A bun in the barn.", hint: "Long A vs U" },
        { id: 37, text: "March vs Much", phrase: "March much faster.", hint: "Long A vs U" },
        { id: 38, text: "Cart vs Cut", phrase: "Cut the cart.", hint: "Long A vs U" },
        { id: 39, text: "Fool vs Full", phrase: "Full of fools.", hint: "Long vs Short U" },
        { id: 40, text: "Luke vs Look", phrase: "Luke, look at me.", hint: "Long vs Short U" },
        { id: 41, text: "Pool vs Pull", phrase: "Pull me from the pool.", hint: "Long vs Short U" },
        { id: 42, text: "Suit vs Soot", phrase: "Soot on my suit.", hint: "Long vs Short U" },
        { id: 43, text: "Wooed vs Wood", phrase: "He wooed her in the wood.", hint: "Long vs Short U" },
        { id: 44, text: "Shot vs Short", phrase: "A short shot.", hint: "O vs OR" },
        { id: 45, text: "Spot vs Sport", phrase: "A sport spot.", hint: "O vs OR" },
        { id: 46, text: "Cot vs Caught", phrase: "I got caught on the cot.", hint: "O vs AU" },
        { id: 47, text: "Not vs Naught", phrase: "It was all for naught, not good.", hint: "O vs AU" },
        { id: 48, text: "Fox vs Forks", phrase: "Fox with forks.", hint: "O vs OR" },
        { id: 49, text: "Wet vs Vet", phrase: "The wet vet.", hint: "W vs V" },
        { id: 50, text: "Wine vs Vine", phrase: "Wine from the vine.", hint: "W vs V" }
    ],
    'Tongue Twisters': [
        { id: 51, text: "Seashells", phrase: "She sells seashells by the seashore.", hint: "Watch your 'sh' and 's' sounds." },
        { id: 52, text: "Peter Piper", phrase: "Peter Piper picked a peck of pickled peppers.", hint: "Explosive 'p' sounds." },
        { id: 53, text: "Woodchuck", phrase: "How much wood would a woodchuck chuck?", hint: "The 'w' sound." },
        { id: 54, text: "Unique New York", phrase: "Unique New York, you know you need unique New York.", hint: "N and Y combinations." },
        { id: 55, text: "Fuzzy Wuzzy", phrase: "Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair.", hint: "Z sounds" },
        { id: 56, text: "Fresh Fried Fish", phrase: "Fresh fried fish, fish fresh fried.", hint: "F and SH sounds" },
        { id: 57, text: "Red Lorry", phrase: "Red lorry, yellow lorry.", hint: "L and R switching" },
        { id: 58, text: "Toy Boat", phrase: "Toy boat, toy boat, toy boat.", hint: "T and B (harder than it looks)" },
        { id: 59, text: "Proper Copper", phrase: "Proper copper coffee pot.", hint: "P and K sounds" },
        { id: 60, text: "Betty Botter", phrase: "Betty Botter bought some butter.", hint: "B and T sounds" },
        { id: 61, text: "Six Slick Snails", phrase: "Six slick snails slid slowly seaward.", hint: "S and SL blends" },
        { id: 62, text: "Irish Wristwatch", phrase: "I wash my Irish wristwatch.", hint: "SH and W combinations" },
        { id: 63, text: "Eleven Elephants", phrase: "Eleven benevolent elephants.", hint: "V and L sounds" },
        { id: 64, text: "Specific Pacific", phrase: "The specific Pacific Ocean.", hint: "S and P sounds" },
        { id: 65, text: "Pad Kid Pour", phrase: "Pad kid poured curd pulled cod.", hint: "P and K aspiration" },
        { id: 66, text: "Rubber Baby", phrase: "Rubber baby buggy bumpers.", hint: "B sounds" },
        { id: 67, text: "Swiss Wristwatch", phrase: "Which Swiss wristwatch is which?", hint: "W, S, and CH" },
        { id: 68, text: "Lesser Leather", phrase: "Lesser leather never weathered wetter weather better.", hint: "TH and W" },
        { id: 69, text: "Big Black Bear", phrase: "A big black bear sat on a big black rug.", hint: "B and G sounds" },
        { id: 70, text: "I Scream", phrase: "I scream, you scream, we all scream for ice cream.", hint: "S and CR blends" }
    ],
    'Common Mistakes': [
        { id: 71, text: "Comfortable", phrase: "This chair is very comfortable.", hint: "Pronounced 'Comf-ter-bull'" },
        { id: 72, text: "Schedule", phrase: "Check the schedule.", hint: "US: Sked-ule / UK: Shed-ule" },
        { id: 73, text: "Colonel", phrase: "The colonel gave an order.", hint: "Sounds like 'Kernel'." },
        { id: 74, text: "Vegetable", phrase: "Eat your vegetable.", hint: "Veg-ta-bull (drop middle 'e')." },
        { id: 75, text: "Island", phrase: "We swam to the island.", hint: "Silent 's' (Eye-land)" },
        { id: 76, text: "Knife", phrase: "Pass me the knife.", hint: "Silent 'k' (Nife)" },
        { id: 77, text: "Hour", phrase: "I waited an hour.", hint: "Silent 'h' (Our)" },
        { id: 78, text: "Chaos", phrase: "It was total chaos.", hint: "CH sounds like K (Kay-os)" },
        { id: 79, text: "Queue", phrase: "Stand in the queue.", hint: "Sounds like letter 'Q'" },
        { id: 80, text: "Recipe", phrase: "Follow the recipe.", hint: "3 Syllables (Re-ci-pee)" },
        { id: 81, text: "Chocolate", phrase: "I love chocolate.", hint: "2 Syllables (Choc-late)" },
        { id: 82, text: "Wednesday", phrase: "See you Wednesday.", hint: "Silent 'd' (Wenz-day)" },
        { id: 83, text: "Clothes", phrase: "Put on your clothes.", hint: "Sounds like 'Close'" },
        { id: 84, text: "Determined", phrase: "He is determined.", hint: "De-ter-mind (Not mine-d)" },
        { id: 85, text: "Vehicle", phrase: "Drive the vehicle.", hint: "Silent 'h' (Vee-i-cle)" },
        { id: 86, text: "Receipt", phrase: "Keep the receipt.", hint: "Silent 'p' (Re-seet)" },
        { id: 87, text: "Debt", phrase: "Pay your debt.", hint: "Silent 'b' (Det)" },
        { id: 88, text: "Subtle", phrase: "A subtle change.", hint: "Silent 'b' (Suttle)" },
        { id: 89, text: "Salmon", phrase: "Fresh salmon.", hint: "Silent 'l' (Sam-on)" },
        { id: 90, text: "Almond", phrase: "Eat an almond.", hint: "Silent 'l' (Ah-mond)" },
        { id: 91, text: "Muscle", phrase: "Flex your muscle.", hint: "Silent 'c' (Mussel)" },
        { id: 92, text: "Biscuit", phrase: "Tea and a biscuit.", hint: "Silent 'u' (Bis-kit)" },
        { id: 93, text: "Choir", phrase: "Sing in the choir.", hint: "Sounds like 'Quire'" },
        { id: 94, text: "Stomach", phrase: "My stomach hurts.", hint: "CH sounds like K" },
        { id: 95, text: "Architect", phrase: "He is an architect.", hint: "CH sounds like K" },
        { id: 96, text: "Archive", phrase: "Check the archive.", hint: "CH sounds like K" },
        { id: 97, text: "Epitome", phrase: "The epitome of style.", hint: "4 syllables (E-pit-o-me)" },
        { id: 98, text: "Hyperbole", phrase: "That is hyperbole.", hint: "4 syllables (Hy-per-bo-lee)" },
        { id: 99, text: "Catastrophe", phrase: "A total catastrophe.", hint: "4 syllables (Ca-tas-tro-phe)" },
        { id: 100, text: "Sesame", phrase: "Open sesame.", hint: "3 syllables (Se-sa-me)" },
        { id: 101, text: "Women", phrase: "Two women talked.", hint: "Sounds like 'Wi-min'" },
        { id: 102, text: "Bury", phrase: "Bury the treasure.", hint: "Sounds like 'Berry'" },
        { id: 103, text: "Suite", phrase: "A hotel suite.", hint: "Sounds like 'Sweet'" },
        { id: 104, text: "Gauge", phrase: "Check the gauge.", hint: "Sounds like 'Gage'" },
        { id: 105, text: "Iron", phrase: "Iron the shirt.", hint: "Eye-urn (Not eye-ron)" },
        { id: 106, text: "Law", phrase: "Obey the law.", hint: "No R sound (Low/Lor)" },
        { id: 107, text: "Saw", phrase: "I saw a movie.", hint: "No R sound" },
        { id: 108, text: "Idea", phrase: "I have an idea.", hint: "No R at the end" },
        { id: 109, text: "Drawing", phrase: "A nice drawing.", hint: "Draw-ing (Not draw-ring)" },
        { id: 110, text: "Library", phrase: "Go to the library.", hint: "Li-bra-ry (Pronounce both Rs)" },
        { id: 111, text: "February", phrase: "It is February.", hint: "Feb-ru-ary" },
        { id: 112, text: "Probably", phrase: "Probably yes.", hint: "Prob-ab-ly" },
        { id: 113, text: "Specific", phrase: "Be specific.", hint: "S-pecific (Not Pacific)" },
        { id: 114, text: "Ask", phrase: "Ask a question.", hint: "Ask (Not Aks)" },
        { id: 115, text: "Espresso", phrase: "Drink espresso.", hint: "Es-presso (Not Ex-presso)" },
        { id: 116, text: "Et cetera", phrase: "Apples, et cetera.", hint: "Et-cetera (Not Ex-cetra)" },
        { id: 117, text: "Nuclear", phrase: "Nuclear power.", hint: "Nu-cle-ar (Not Nu-cu-lar)" },
        { id: 118, text: "Jewelry", phrase: "Nice jewelry.", hint: "Jew-el-ry" },
        { id: 119, text: "Mischievous", phrase: "Mischievous child.", hint: "Mis-chiv-us (Not Mis-chee-vee-us)" },
        { id: 120, text: "Height", phrase: "What is the height?", hint: "Hite (Ends in T, not TH)" }
    ]
};

// --- State ---
let currentCategory = 'Minimal Pairs';
let currentTargetPhrase = "";
let isRecording = false;
let recognition;
let voices = [];

// --- DOM Elements ---
const viewChallenge = document.getElementById('view-challenge');
const viewFree = document.getElementById('view-freeplay');

// Desktop Nav
const btnChallenge = document.getElementById('btn-challenge-desktop');
const btnFree = document.getElementById('btn-freeplay-desktop');

// Mobile Nav
const navMobileChallenge = document.getElementById('nav-mobile-challenge');
const navMobileFree = document.getElementById('nav-mobile-freeplay');

const categorySelect = document.getElementById('category-select');
const cardsContainer = document.getElementById('cards-container');
const practiceArea = document.getElementById('practice-area');
const targetDisplay = document.getElementById('target-text');
const spokenDisplay = document.getElementById('spoken-text');
const feedbackMsg = document.getElementById('feedback-msg');
const recordBtn = document.getElementById('record-btn');
const practiceTag = document.getElementById('practice-tag');

// --- Initialization ---
window.onload = () => {
    initSpeechRecognition();
    loadVoices();
    initCategories();
    renderCards();
    
    const setAppHeight = () => {
        document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', setAppHeight);
    setAppHeight();
};

// --- Navigation ---
function switchTab(tab) {
    if (tab === 'challenge') {
        viewChallenge.classList.remove('hidden');
        viewFree.classList.add('hidden');
        
        btnChallenge.classList.replace('text-gray-400', 'text-white');
        btnChallenge.classList.replace('hover:bg-white/10', 'bg-brand-orange');
        btnChallenge.classList.add('shadow-lg', 'shadow-orange-500/30');
        
        btnFree.classList.replace('text-white', 'text-gray-400');
        btnFree.classList.remove('bg-brand-orange', 'shadow-lg', 'shadow-orange-500/30');
        btnFree.classList.add('hover:bg-white/10');
        
        navMobileChallenge.classList.add('active');
        navMobileFree.classList.remove('active');

    } else {
        viewChallenge.classList.add('hidden');
        viewFree.classList.remove('hidden');
        
        btnFree.classList.replace('text-gray-400', 'text-white');
        btnFree.classList.remove('hover:bg-white/10');
        btnFree.classList.add('bg-brand-orange', 'shadow-lg', 'shadow-orange-500/30');
        
        btnChallenge.classList.replace('text-white', 'text-gray-400');
        btnChallenge.classList.remove('bg-brand-orange', 'shadow-lg', 'shadow-orange-500/30');
        btnChallenge.classList.add('hover:bg-white/10');
        
        navMobileFree.classList.add('active');
        navMobileChallenge.classList.remove('active');
    }
}

// --- Challenge Mode Logic ---
function initCategories() {
    Object.keys(practiceData).forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        option.className = "bg-white text-gray-800";
        categorySelect.appendChild(option);
    });
    
    categorySelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        renderCards();
        backToGrid();
    });
}

function renderCards() {
    cardsContainer.innerHTML = '';
    practiceData[currentCategory].forEach(item => {
        const card = document.createElement('div');
        // Applying Linguamis "Speaking" Card Style (White with Cyan top border)
        card.className = "linguamis-card p-5 cursor-pointer border-t-4 border-brand-cyan flex flex-col justify-between min-h-[120px]";
        card.onclick = () => openPractice(item);
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                 <div class="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center text-brand-cyan">
                    <i class="fas fa-volume-up text-xs"></i>
                 </div>
                <i class="fas fa-chevron-right text-gray-300"></i>
            </div>
            <div>
                <h3 class="text-lg font-bold text-gray-800 leading-tight group-hover:text-brand-cyan transition-colors">${item.text}</h3>
                <p class="text-gray-500 text-sm line-clamp-1 mt-1">"${item.phrase}"</p>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

function openPractice(item) {
    cardsContainer.classList.add('hidden');
    practiceArea.classList.remove('hidden');
    categorySelect.parentElement.classList.add('hidden'); 
    
    currentTargetPhrase = item.phrase;
    targetDisplay.textContent = item.phrase;
    practiceTag.textContent = item.hint;
    spokenDisplay.textContent = "Tap mic & speak...";
    spokenDisplay.className = "text-lg md:text-xl text-gray-400 italic";
    feedbackMsg.textContent = "";
}

function backToGrid() {
    cardsContainer.classList.remove('hidden');
    practiceArea.classList.add('hidden');
    categorySelect.parentElement.classList.remove('hidden');
    stopRecording();
}

// --- TTS (Synthesis) ---
function loadVoices() {
    const populate = () => {
        voices = window.speechSynthesis.getVoices();
    };
    
    populate();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populate;
    }
}

function updateRateLabel(val) {
    document.getElementById('rate-value').textContent = val + 'x';
}

function updateChallengeRateLabel(val) {
    document.getElementById('challenge-rate-value').textContent = val + 'x';
}

function speak(text, rate = 1) {
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v => v.lang.includes('en-US')) || voices.find(v => v.lang.includes('en'));
    
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = 1;
    
    window.speechSynthesis.speak(utterance);
}

function speakTarget() {
    const rate = document.getElementById('challenge-rate').value;
    speak(currentTargetPhrase, parseFloat(rate));
}

function speakFreeText() {
    const text = document.getElementById('free-text').value;
    const rate = document.getElementById('rate').value;
    if(text.trim() === "") return;
    speak(text, rate);
}

// --- STT (Recognition) ---
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        document.getElementById('browser-warning').classList.remove('hidden');
        document.getElementById('browser-warning-mobile').classList.remove('hidden');
        recordBtn.disabled = true;
        recordBtn.classList.add('opacity-50', 'cursor-not-allowed');
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        isRecording = true;
        updateMicUI(true);
        spokenDisplay.textContent = "Listening...";
        spokenDisplay.className = "text-xl text-brand-orange font-semibold animate-pulse";
    };

    recognition.onend = () => {
        isRecording = false;
        updateMicUI(false);
    };

    recognition.onerror = (event) => {
        isRecording = false;
        updateMicUI(false);
        
        if (event.error === 'not-allowed') {
            feedbackMsg.textContent = "⚠️ Access Denied. Allow mic in settings.";
            feedbackMsg.className = "mt-3 font-bold text-sm text-red-600 bg-red-100 p-2 rounded";
        } else if (event.error === 'no-speech') {
            feedbackMsg.textContent = "Didn't hear anything. Try again.";
            feedbackMsg.className = "mt-3 font-bold text-sm text-gray-500";
        } else {
            feedbackMsg.textContent = "Error: " + event.error;
            feedbackMsg.className = "mt-3 font-bold text-sm text-red-500";
        }
    };

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        spokenDisplay.textContent = `"${result}"`;
        spokenDisplay.className = "text-xl text-gray-800 font-bold";
        checkMatch(result);
    };
}

function toggleRecording() {
    if (!recognition) return;
    if (isRecording) {
        recognition.stop();
    } else {
        recognition.start();
    }
}

function stopRecording() {
    if (isRecording && recognition) recognition.stop();
}

function updateMicUI(recording) {
    const icon = document.getElementById('mic-icon');
    if (recording) {
        recordBtn.classList.add('recording-pulse', 'bg-red-500', 'border-red-200');
        recordBtn.classList.remove('bg-brand-orange', 'border-white');
        icon.className = "fas fa-stop text-3xl";
    } else {
        recordBtn.classList.remove('recording-pulse', 'bg-red-500', 'border-red-200');
        recordBtn.classList.add('bg-brand-orange', 'border-white');
        icon.className = "fas fa-microphone text-3xl";
    }
}

// --- Comparison Logic ---
function checkMatch(spoken) {
    const cleanSpoken = spoken.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
    const cleanTarget = currentTargetPhrase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();

    if (cleanSpoken === cleanTarget) {
        feedbackMsg.textContent = "Perfect Match! 🎉";
        feedbackMsg.className = "mt-3 font-bold text-lg text-green-600"; // Green for success
        triggerConfetti();
        
        // Success Sound
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);

    } else {
        feedbackMsg.textContent = "Close! Try again.";
        feedbackMsg.className = "mt-3 font-bold text-lg text-orange-500";
    }
}

function triggerConfetti() {
    const colors = ['#06b6d4', '#f97316', '#111827']; // Brand colors
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}
