// ==========================================================================
// QUIZ MASTER - ADVANCED GAME & INTERACTION ENGINE
// Features: Web Audio Synthesis, Confetti, Streak Multipliers, 
// Countdown Timers, Multi-Category Banks, Review System, Leaderboard
// ==========================================================================

// --- QUESTION BANKS WITH EDUCATIONAL EXPLANATIONS ---
const QUESTION_DATABASE = {
    frontend: [
        {
            question: "Which CSS display value creates a flexible box layout system?",
            options: ["display: flex", "display: grid", "display: inline-block", "display: table"],
            answer: "display: flex",
            explanation: "The Flexbox layout (display: flex) offers an efficient way to distribute space and align items within a container dynamically."
        },
        {
            question: "Which HTML5 element represents self-contained content that could be distributed independently?",
            options: ["<section>", "<article>", "<aside>", "<div>"],
            answer: "<article>",
            explanation: "The <article> tag is intended for independently distributable or reusable syndicate content like blog posts, news articles, or comments."
        },
        {
            question: "What CSS property defines the stacking order of positioned elements?",
            options: ["float", "display", "z-index", "position-index"],
            answer: "z-index",
            explanation: "The z-index property specifies the stack order of positioned elements along the virtual z-axis (perpendicular to the screen)."
        },
        {
            question: "Which DOM API method is most efficient for inserting multiple elements at once without multiple repaints?",
            options: ["appendChild()", "DocumentFragment", "innerHTML +=", "replaceChildren()"],
            answer: "DocumentFragment",
            explanation: "DocumentFragment is a minimal document object that acts as a virtual container, causing only a single reflow/repaint when appended."
        },
        {
            question: "In CSS Grid, which property is a shorthand for grid-row-gap and grid-column-gap?",
            options: ["margin", "space", "gap", "grid-spacing"],
            answer: "gap",
            explanation: "The 'gap' property (previously grid-gap) controls spacing between grid cells and flex items easily without affecting external edges."
        },
        {
            question: "Which attribute in an <img> tag improves accessibility for screen readers?",
            options: ["title", "alt", "aria-hidden", "src"],
            answer: "alt",
            explanation: "The 'alt' attribute provides alternative text for screen readers and displays fallback text if image loading fails."
        },
        {
            question: "What does the 'rem' CSS unit calculate its size relative to?",
            options: ["Immediate parent element", "Root <html> element font-size", "Viewport width", "Nearest container"],
            answer: "Root <html> element font-size",
            explanation: "1rem equals the computed font-size of the root element (html), which defaults to 16px in most modern browsers."
        },
        {
            question: "Which meta tag is crucial for mobile responsive design?",
            options: [
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
                '<meta name="mobile-web-app-capable" content="yes">',
                '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
                '<meta charset="UTF-8">'
            ],
            answer: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            explanation: "The viewport meta tag instructs mobile browsers to render the page to the actual screen width rather than a desktop viewport."
        },
        {
            question: "Which CSS property produces a frosted-glass blur over background content?",
            options: ["filter: blur()", "backdrop-filter: blur()", "background-blur: 10px", "opacity: 0.5"],
            answer: "backdrop-filter: blur()",
            explanation: "backdrop-filter applies visual filters (like blur or brightness) to the area behind an element, enabling glassmorphism."
        },
        {
            question: "What is the primary benefit of CSS Variables (Custom Properties)?",
            options: [
                "Faster initial page download",
                "Dynamic runtime updates and theme consistency",
                "Replaces JavaScript entirely",
                "Makes HTML tags optional"
            ],
            answer: "Dynamic runtime updates and theme consistency",
            explanation: "CSS variables (--custom-prop) cascade, can be updated dynamically via JavaScript, and maintain consistent tokens across stylesheets."
        }
    ],

    javascript: [
        {
            question: "Which operator checks both value and type equality without type coercion?",
            options: ["==", "===", "=", "!="],
            answer: "===",
            explanation: "The strict equality operator (===) verifies that both the operand values and types match without performing implicit conversion."
        },
        {
            question: "What will `typeof NaN` evaluate to in JavaScript?",
            options: ["'number'", "'nan'", "'undefined'", "'object'"],
            answer: "'number'",
            explanation: "In JavaScript, NaN stands for 'Not a Number', but mathematically and according to the IEEE-754 specification, its type is number."
        },
        {
            question: "Which statement correctly describes a JavaScript Closure?",
            options: [
                "A function that runs immediately upon declaration",
                "A function bundled together with references to its surrounding lexical state",
                "A method to terminate an infinite loop",
                "An object that cannot be mutated"
            ],
            answer: "A function bundled together with references to its surrounding lexical state",
            explanation: "A closure gives an inner function access to an outer function's scope even after the outer function has finished executing."
        },
        {
            question: "Which array method creates a new array with all elements that pass a test condition?",
            options: ["map()", "filter()", "forEach()", "reduce()"],
            answer: "filter()",
            explanation: "The filter() method shallow copies a portion of an array containing only elements that return truthy for the callback."
        },
        {
            question: "What does Promise.all() do when one of the passed promises rejects?",
            options: [
                "Waits for all others before rejecting",
                "Immediately rejects with the reason of the first rejected promise",
                "Silently ignores the rejection",
                "Converts the rejection to null"
            ],
            answer: "Immediately rejects with the reason of the first rejected promise",
            explanation: "Promise.all() implements 'fail-fast' behavior: as soon as any promise in the iterable rejects, the whole promise immediately rejects."
        },
        {
            question: "Which keyword creates a block-scoped variable that cannot be reassigned?",
            options: ["var", "let", "const", "static"],
            answer: "const",
            explanation: "Variables declared with 'const' are block-scoped and cannot be reassigned, though object properties within them can still be mutated."
        },
        {
            question: "What is the event loop's microtask queue primarily used for?",
            options: [
                "setTimeout and setInterval callbacks",
                "Promises (.then/catch) and queueMicrotask",
                "DOM click listeners",
                "Network fetch requests"
            ],
            answer: "Promises (.then/catch) and queueMicrotask",
            explanation: "Microtasks (resolved Promise callbacks) are executed right after the current macrotask finishes and before rendering or the next timer."
        },
        {
            question: "What is the output of `[1, 2, 3] + [4, 5, 6]` in JavaScript?",
            options: [
                "[1, 2, 3, 4, 5, 6]",
                "'1,2,34,5,6'",
                "Error: TypeError",
                "NaN"
            ],
            answer: "'1,2,34,5,6'",
            explanation: "The binary '+' operator coerces both arrays to strings ('1,2,3' and '4,5,6') and concatenates them together into '1,2,34,5,6'."
        },
        {
            question: "Which ES6 feature extracts properties from objects into distinct variables?",
            options: ["Spread operator", "Destructuring assignment", "Object.assign()", "Prototype binding"],
            answer: "Destructuring assignment",
            explanation: "Destructuring syntax (e.g., const { name, age } = user;) cleanly unpacks values from arrays or properties from objects."
        },
        {
            question: "What does `Array.prototype.reduce()` return if no initial value is provided for an empty array?",
            options: ["undefined", "null", "TypeError", "0"],
            answer: "TypeError",
            explanation: "Calling reduce() on an empty array with no initial value throws a TypeError because no initial accumulator can be determined."
        }
    ],

    trivia: [
        {
            question: "What was the original codename for the JavaScript language in 1995?",
            options: ["Mocha", "LiveScript", "ActionScript", "TypeScript"],
            answer: "Mocha",
            explanation: "Brendan Eich developed JavaScript in 10 days at Netscape in May 1995, originally codenamed 'Mocha', later 'LiveScript', and finally 'JavaScript'."
        },
        {
            question: "Which HTTP status code signifies that a requested resource was Not Modified (caching)?",
            options: ["200", "301", "304", "404"],
            answer: "304",
            explanation: "HTTP 304 Not Modified indicates to the client that the cached copy is still fresh and there is no need to retransmit the resource."
        },
        {
            question: "Who is widely recognized as the inventor of the World Wide Web?",
            options: ["Bill Gates", "Tim Berners-Lee", "Alan Turing", "Vint Cerf"],
            answer: "Tim Berners-Lee",
            explanation: "Sir Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN, designing HTML, HTTP, and the first web browser."
        },
        {
            question: "What does DNS stand for in computer networking?",
            options: ["Domain Name System", "Dynamic Network Service", "Digital Network Server", "Distributed Naming System"],
            answer: "Domain Name System",
            explanation: "DNS translates human-readable domain names (like example.com) into numerical machine IP addresses (like 93.184.216.34)."
        },
        {
            question: "Which company originally developed the TypeScript programming language?",
            options: ["Google", "Facebook", "Microsoft", "Sun Microsystems"],
            answer: "Microsoft",
            explanation: "TypeScript was created by Anders Hejlsberg and Microsoft in 2012 to bring optional static typing and tooling to JavaScript."
        },
        {
            question: "In algorithm complexity, which notation represents logarithmic time?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            answer: "O(log n)",
            explanation: "O(log n) time complexity (like binary search) means the execution steps grow logarithmically with the input size."
        },
        {
            question: "Which character encoding standard covers virtually all world languages and emojis?",
            options: ["ASCII", "UTF-8", "ISO-8859-1", "Windows-1252"],
            answer: "UTF-8",
            explanation: "UTF-8 is a variable-width character encoding capable of encoding all 1,112,064 valid character code points in Unicode."
        },
        {
            question: "What does API stand for in software engineering?",
            options: [
                "Application Programming Interface",
                "Automated Protocol Integration",
                "Advanced Program Interaction",
                "Applied Process Interface"
            ],
            answer: "Application Programming Interface",
            explanation: "An API is a defined set of rules and protocols enabling different software applications to communicate with each other."
        },
        {
            question: "What port number is standard for encrypted HTTPS traffic?",
            options: ["80", "443", "8080", "22"],
            answer: "443",
            explanation: "Port 443 is the standard port for TLS/SSL-secured HTTPS communications, while port 80 is used for unencrypted HTTP."
        },
        {
            question: "Which data structure operates on a First-In, First-Out (FIFO) principle?",
            options: ["Stack", "Queue", "Binary Tree", "Heap"],
            answer: "Queue",
            explanation: "A Queue operates on FIFO (First-In, First-Out), just like a real-world checkout queue, where the earliest arrival is processed first."
        }
    ]
};

// ==========================================================================
// SYNTHESIZED WEB AUDIO ENGINE (ZERO EXTERNAL ASSETS)
// ==========================================================================
class SoundSynth {
    constructor() {
        this.ctx = null;
        this.enabled = localStorage.getItem("quiz_sound_enabled") !== "false";
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume();
        }
    }

    play(type) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;

        try {
            switch (type) {
                case "click": {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(900, now);
                    osc.frequency.exponentialRampToValueAtTime(450, now + 0.05);
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.05);
                    break;
                }

                case "correct": {
                    // Upbeat cheerful chord chime: C5 -> E5 -> G5
                    const notes = [523.25, 659.25, 783.99];
                    notes.forEach((freq, idx) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.type = "triangle";
                        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
                        gain.gain.setValueAtTime(0.15, now + idx * 0.07);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);
                        osc.start(now + idx * 0.07);
                        osc.stop(now + idx * 0.07 + 0.25);
                    });
                    break;
                }

                case "wrong": {
                    // Low buzz
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = "sawtooth";
                    osc.frequency.setValueAtTime(180, now);
                    osc.frequency.exponentialRampToValueAtTime(120, now + 0.22);
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.22);
                    break;
                }

                case "tick": {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(550, now);
                    gain.gain.setValueAtTime(0.08, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.04);
                    break;
                }

                case "fanfare": {
                    // Celebration ascending sequence
                    const melody = [523.25, 659.25, 783.99, 1046.5];
                    melody.forEach((freq, i) => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();
                        osc.type = "triangle";
                        osc.frequency.setValueAtTime(freq, now + i * 0.1);
                        gain.gain.setValueAtTime(0.18, now + i * 0.1);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.35);
                        osc.connect(gain);
                        gain.connect(this.ctx.destination);
                        osc.start(now + i * 0.1);
                        osc.stop(now + i * 0.1 + 0.35);
                    });
                    break;
                }
            }
        } catch (err) {
            console.warn("Audio synth issue:", err);
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem("quiz_sound_enabled", this.enabled.toString());
        return this.enabled;
    }
}

const audio = new SoundSynth();

// ==========================================================================
// LIGHTWEIGHT CANVAS CONFETTI ENGINE
// ==========================================================================
class ConfettiManager {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
        this.particles = [];
        this.animId = null;
        this.colors = ["#00f2fe", "#4facfe", "#a855f7", "#ec4899", "#f59e0b", "#10b981", "#ffffff"];

        this.resize();
        window.addEventListener("resize", () => this.resize());
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fire(durationMs = 2800) {
        if (!this.canvas || !this.ctx) return;
        this.resize();
        this.particles = [];

        const count = 120;
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: this.canvas.width / 2 + (Math.random() * 200 - 100),
                y: this.canvas.height * 0.45,
                w: Math.random() * 10 + 6,
                h: Math.random() * 6 + 4,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                vx: (Math.random() - 0.5) * 16,
                vy: Math.random() * -14 - 4,
                rot: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 12,
                opacity: 1,
                decay: Math.random() * 0.008 + 0.006
            });
        }

        const startTime = performance.now();

        const loop = (now) => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.4; // gravity
                p.vx *= 0.98; // air resistance
                p.rot += p.rotSpeed;
                p.opacity -= p.decay;

                if (p.opacity > 0) {
                    this.ctx.save();
                    this.ctx.translate(p.x, p.y);
                    this.ctx.rotate((p.rot * Math.PI) / 180);
                    this.ctx.globalAlpha = Math.max(0, p.opacity);
                    this.ctx.fillStyle = p.color;
                    this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                    this.ctx.restore();
                }
            });

            this.particles = this.particles.filter((p) => p.opacity > 0);

            if (now - startTime < durationMs && this.particles.length > 0) {
                this.animId = requestAnimationFrame(loop);
            } else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        };

        if (this.animId) cancelAnimationFrame(this.animId);
        this.animId = requestAnimationFrame(loop);
    }
}

const confetti = new ConfettiManager("confetti-canvas");

// ==========================================================================
// GAME CONTROLLER & STATE
// ==========================================================================
class QuizMasterGame {
    constructor() {
        // State
        this.category = "frontend";
        this.mode = "blitz"; // 'blitz' (15s) or 'casual'
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.selectedOption = null;
        this.userAnswers = []; // History for review screen
        
        // Timer state
        this.timer = null;
        this.timeRemaining = 15;
        this.baseQuestionTime = 15;

        // Cache DOM elements
        this.cacheDOM();
        this.initSoundUI();
        this.bindEvents();
        this.loadOverallStats();
    }

    cacheDOM() {
        // Screens
        this.startScreen = document.getElementById("start-screen");
        this.quizScreen = document.getElementById("quiz-screen");
        this.resultScreen = document.getElementById("result-screen");

        // Start Screen Elements
        this.startBtn = document.getElementById("start-btn");
        this.categoryCards = document.querySelectorAll(".category-card");
        this.modeBtns = document.querySelectorAll(".mode-btn");

        // Topbar
        this.soundBtn = document.getElementById("sound-toggle-btn");
        this.soundIcon = document.getElementById("sound-icon");
        this.soundText = document.getElementById("sound-text");
        this.leaderboardBtn = document.getElementById("leaderboard-btn");

        // HUD Elements
        this.hudCategoryTag = document.getElementById("hud-category-tag");
        this.questionNumber = document.getElementById("question-number");
        this.totalQuestions = document.getElementById("total-questions");
        this.streakPill = document.getElementById("streak-pill");
        this.streakCount = document.getElementById("streak-count");
        this.scoreDisplay = document.getElementById("score-display");
        this.progressBar = document.getElementById("progress-bar");
        this.timerWrapper = document.getElementById("timer-wrapper");
        this.timerBar = document.getElementById("timer-bar");
        this.timerText = document.getElementById("timer-text");

        // Question Area
        this.questionElement = document.getElementById("question");
        this.optionsElement = document.getElementById("options");
        this.explanationBox = document.getElementById("explanation-box");
        this.explanationText = document.getElementById("explanation-text");
        this.nextBtn = document.getElementById("next-btn");

        // Result Screen Elements
        this.resultBadgeIcon = document.getElementById("result-badge-icon");
        this.resultRank = document.getElementById("result-rank");
        this.resultMessage = document.getElementById("result-message");
        this.finalScore = document.getElementById("final-score");
        this.correctCount = document.getElementById("correct-count");
        this.resultTotalQ = document.getElementById("result-total-q");
        this.metricCorrect = document.getElementById("metric-correct-val");
        this.metricWrong = document.getElementById("metric-wrong-val");
        this.metricStreak = document.getElementById("metric-streak-val");
        this.metricAccuracy = document.getElementById("metric-accuracy-val");
        this.restartBtn = document.getElementById("restart-btn");
        this.shareBtn = document.getElementById("share-btn");

        // Review Accordion
        this.reviewToggleBtn = document.getElementById("review-toggle-btn");
        this.reviewList = document.getElementById("review-list");
        this.reviewChevron = document.getElementById("review-chevron");

        // Stats Overview
        this.statTotalGames = document.getElementById("stat-total-games");
        this.statBestScore = document.getElementById("stat-best-score");
        this.statMaxStreak = document.getElementById("stat-max-streak");

        // Modal Elements
        this.modal = document.getElementById("leaderboard-modal");
        this.closeModalBtn = document.getElementById("close-modal-btn");
        this.modalDoneBtn = document.getElementById("modal-done-btn");
        this.clearScoresBtn = document.getElementById("clear-scores-btn");
        this.leaderboardList = document.getElementById("leaderboard-list");

        // Toast
        this.toastMsg = document.getElementById("toast-msg");
        this.toastText = document.getElementById("toast-text");
    }

    initSoundUI() {
        const active = audio.enabled;
        this.soundBtn.classList.toggle("active", active);
        this.soundIcon.textContent = active ? "🔊" : "🔇";
        this.soundText.textContent = active ? "Sound" : "Muted";
    }

    bindEvents() {
        // Category selection
        this.categoryCards.forEach((card) => {
            card.addEventListener("click", () => {
                audio.play("click");
                this.categoryCards.forEach((c) => c.classList.remove("selected"));
                card.classList.add("selected");
                this.category = card.getAttribute("data-category");
            });
        });

        // Mode selection
        this.modeBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                audio.play("click");
                this.modeBtns.forEach((b) => b.classList.remove("selected"));
                btn.classList.add("selected");
                this.mode = btn.getAttribute("data-mode");
            });
        });

        // Sound toggle
        this.soundBtn.addEventListener("click", () => {
            const active = audio.toggle();
            this.initSoundUI();
            if (active) audio.play("click");
        });

        // Leaderboard modal
        this.leaderboardBtn.addEventListener("click", () => {
            audio.play("click");
            this.openLeaderboard();
        });
        this.closeModalBtn.addEventListener("click", () => this.closeLeaderboard());
        this.modalDoneBtn.addEventListener("click", () => this.closeLeaderboard());
        this.clearScoresBtn.addEventListener("click", () => this.clearLeaderboard());
        this.modal.addEventListener("click", (e) => {
            if (e.target === this.modal) this.closeLeaderboard();
        });

        // Start & Navigation buttons
        this.startBtn.addEventListener("click", () => this.startQuiz());
        this.nextBtn.addEventListener("click", () => this.nextQuestion());
        this.restartBtn.addEventListener("click", () => this.restartQuiz());
        this.shareBtn.addEventListener("click", () => this.shareScorecard());

        // Review toggle
        this.reviewToggleBtn.addEventListener("click", () => this.toggleReview());

        // Global Keyboard Navigation
        window.addEventListener("keydown", (e) => this.handleKeyboard(e));
    }

    handleKeyboard(e) {
        // Modal open handler
        if (this.modal.classList.contains("active")) {
            if (e.key === "Escape") this.closeLeaderboard();
            return;
        }

        // If on Start screen
        if (this.startScreen.classList.contains("active")) {
            if (e.key === "Enter") {
                this.startQuiz();
            }
            return;
        }

        // If on Quiz screen
        if (this.quizScreen.classList.contains("active")) {
            // Options 1-4 or A-D
            const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, "a": 0, "b": 1, "c": 2, "d": 3, "A": 0, "B": 1, "C": 2, "D": 3 };
            if (keyMap[e.key] !== undefined && this.selectedOption === null) {
                const optBtns = this.optionsElement.querySelectorAll(".option-btn");
                const targetBtn = optBtns[keyMap[e.key]];
                if (targetBtn) {
                    targetBtn.click();
                }
            } else if (e.key === "Enter" && !this.nextBtn.disabled) {
                this.nextQuestion();
            }
            return;
        }

        // If on Result screen
        if (this.resultScreen.classList.contains("active")) {
            if (e.key === "Enter") {
                this.restartQuiz();
            }
        }
    }

    startQuiz() {
        audio.play("click");

        // Clone questions from selected bank and shuffle
        const rawList = QUESTION_DATABASE[this.category] || QUESTION_DATABASE.frontend;
        this.questions = [...rawList].sort(() => Math.random() - 0.5);

        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.userAnswers = [];

        // Category Tag Name
        const categoryLabels = {
            frontend: "Frontend & Web",
            javascript: "JavaScript Core",
            trivia: "Tech & CS Trivia"
        };
        this.hudCategoryTag.textContent = categoryLabels[this.category] || "Quiz";

        // Setup timer visibility
        if (this.mode === "blitz") {
            this.timerWrapper.style.display = "flex";
        } else {
            this.timerWrapper.style.display = "none";
        }

        this.startScreen.classList.remove("active");
        this.resultScreen.classList.remove("active");
        this.quizScreen.classList.add("active");

        this.loadQuestion();
    }

    loadQuestion() {
        this.selectedOption = null;
        this.nextBtn.disabled = true;
        this.explanationBox.classList.remove("active");

        const qData = this.questions[this.currentIndex];

        // Update HUD
        this.questionNumber.textContent = this.currentIndex + 1;
        this.totalQuestions.textContent = this.questions.length;
        this.scoreDisplay.textContent = this.score;
        this.updateStreakBadge();

        // Update progress bar
        const progressPercent = (this.currentIndex / this.questions.length) * 100;
        this.progressBar.style.width = `${progressPercent}%`;

        // Render question text
        this.questionElement.textContent = qData.question;

        // Render options
        this.optionsElement.innerHTML = "";
        const letterKeys = ["A", "B", "C", "D"];

        qData.options.forEach((optText, idx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.setAttribute("type", "button");

            btn.innerHTML = `
                <span class="option-key-badge">${letterKeys[idx]}</span>
                <span class="option-text">${optText}</span>
                <span class="option-status-icon"></span>
            `;

            btn.addEventListener("click", () => {
                this.selectOption(btn, optText);
            });

            this.optionsElement.appendChild(btn);
        });

        // Start countdown timer if blitz mode
        if (this.mode === "blitz") {
            this.startTimer();
        }
    }

    startTimer() {
        this.stopTimer();
        this.timeRemaining = this.baseQuestionTime;
        this.renderTimer();

        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.renderTimer();

            if (this.timeRemaining <= 3 && this.timeRemaining > 0) {
                audio.play("tick");
            }

            if (this.timeRemaining <= 0) {
                this.stopTimer();
                this.handleTimeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    renderTimer() {
        const pct = (this.timeRemaining / this.baseQuestionTime) * 100;
        this.timerBar.style.width = `${Math.max(0, pct)}%`;
        this.timerText.textContent = `${this.timeRemaining}s`;

        // Color shifts
        if (this.timeRemaining <= 4) {
            this.timerBar.className = "timer-bar-fill danger";
            this.timerText.className = "timer-text danger";
        } else if (this.timeRemaining <= 8) {
            this.timerBar.className = "timer-bar-fill warning";
            this.timerText.className = "timer-text";
        } else {
            this.timerBar.className = "timer-bar-fill";
            this.timerText.className = "timer-text";
        }
    }

    handleTimeUp() {
        if (this.selectedOption !== null) return;
        audio.play("wrong");
        this.selectedOption = "__TIMEOUT__";

        const qData = this.questions[this.currentIndex];
        const allBtns = this.optionsElement.querySelectorAll(".option-btn");

        allBtns.forEach((btn) => {
            btn.classList.add("disabled");
            const txt = btn.querySelector(".option-text").textContent;
            if (txt === qData.answer) {
                btn.classList.add("correct");
                btn.querySelector(".option-status-icon").textContent = "✓";
            }
        });

        this.streak = 0;
        this.updateStreakBadge();

        this.userAnswers.push({
            question: qData.question,
            options: qData.options,
            selected: "Time Expired",
            answer: qData.answer,
            isCorrect: false,
            explanation: qData.explanation
        });

        this.showExplanation(qData.explanation);
        this.nextBtn.disabled = false;
    }

    selectOption(btnElement, selectedAnswer) {
        if (this.selectedOption !== null) return;
        this.stopTimer();

        this.selectedOption = selectedAnswer;
        const qData = this.questions[this.currentIndex];
        const isCorrect = selectedAnswer === qData.answer;

        const allBtns = this.optionsElement.querySelectorAll(".option-btn");
        allBtns.forEach((b) => {
            b.classList.add("disabled");
            const txt = b.querySelector(".option-text").textContent;
            if (txt === qData.answer) {
                b.classList.add("correct");
                b.querySelector(".option-status-icon").textContent = "✓";
            }
        });

        if (isCorrect) {
            audio.play("correct");
            btnElement.classList.add("correct");
            this.streak++;
            if (this.streak > this.maxStreak) {
                this.maxStreak = this.streak;
            }

            // Gamified scoring: Base 100 points + 25 points * streak combo + time bonus
            const timeBonus = this.mode === "blitz" ? this.timeRemaining * 10 : 0;
            const streakBonus = (this.streak - 1) * 25;
            const pointsAwarded = 100 + streakBonus + timeBonus;
            this.score += pointsAwarded;
        } else {
            audio.play("wrong");
            btnElement.classList.add("wrong");
            btnElement.querySelector(".option-status-icon").textContent = "✕";
            this.streak = 0;
        }

        this.scoreDisplay.textContent = this.score;
        this.updateStreakBadge();

        this.userAnswers.push({
            question: qData.question,
            options: qData.options,
            selected: selectedAnswer,
            answer: qData.answer,
            isCorrect: isCorrect,
            explanation: qData.explanation
        });

        this.showExplanation(qData.explanation);
        this.nextBtn.disabled = false;
    }

    updateStreakBadge() {
        this.streakCount.textContent = this.streak;
        if (this.streak >= 2) {
            this.streakPill.classList.add("streak-active");
            this.streakPill.innerHTML = `<span>🔥</span> <span>${this.streak}x Combo</span>`;
        } else {
            this.streakPill.classList.remove("streak-active");
            this.streakPill.innerHTML = `<span>🔥</span> <span>${this.streak}</span>`;
        }
    }

    showExplanation(text) {
        this.explanationText.textContent = text;
        this.explanationBox.classList.add("active");
    }

    nextQuestion() {
        audio.play("click");
        this.currentIndex++;

        if (this.currentIndex < this.questions.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.stopTimer();
        this.quizScreen.classList.remove("active");
        this.resultScreen.classList.add("active");
        this.progressBar.style.width = "100%";

        const totalQ = this.questions.length;
        const correctAnswers = this.userAnswers.filter((a) => a.isCorrect).length;
        const wrongAnswers = totalQ - correctAnswers;
        const accuracyPct = Math.round((correctAnswers / totalQ) * 100);

        // Animate score count-up
        this.animateNumber(this.finalScore, 0, this.score, 1200);

        this.correctCount.textContent = correctAnswers;
        this.resultTotalQ.textContent = totalQ;
        this.metricCorrect.textContent = correctAnswers;
        this.metricWrong.textContent = wrongAnswers;
        this.metricStreak.textContent = `${this.maxStreak}🔥`;
        this.metricAccuracy.textContent = `${accuracyPct}%`;

        // Rank determination & celebratory confetti
        if (accuracyPct >= 90) {
            this.resultBadgeIcon.textContent = "👑";
            this.resultRank.textContent = "Grandmaster Developer!";
            this.resultMessage.textContent = "Flawless technical mastery! You sailed through these concepts effortlessly.";
            audio.play("fanfare");
            confetti.fire(3500);
        } else if (accuracyPct >= 70) {
            this.resultBadgeIcon.textContent = "🏆";
            this.resultRank.textContent = "Senior Specialist!";
            this.resultMessage.textContent = "Superb job! You demonstrated deep comprehension of core engineering principles.";
            audio.play("fanfare");
            confetti.fire(2500);
        } else if (accuracyPct >= 50) {
            this.resultBadgeIcon.textContent = "⚡";
            this.resultRank.textContent = "Skilled Practitioner";
            this.resultMessage.textContent = "Great effort! Review the detailed explanations below to cement your understanding.";
            audio.play("correct");
        } else {
            this.resultBadgeIcon.textContent = "🌱";
            this.resultRank.textContent = "Aspiring Apprentice";
            this.resultMessage.textContent = "Keep practicing! Every attempt sharpens your skills. Read through the answers review below.";
        }

        // Render Detailed Review list
        this.renderReviewList();

        // Save Run to Local Storage & Update Leaderboard
        this.saveScoreRecord({
            category: this.category,
            score: this.score,
            accuracy: accuracyPct,
            correct: correctAnswers,
            total: totalQ,
            maxStreak: this.maxStreak,
            date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
        });

        this.loadOverallStats();
    }

    animateNumber(element, start, end, duration) {
        if (start === end) {
            element.textContent = end;
            return;
        }
        const range = end - start;
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + range * easeOut);
            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = end;
            }
        };

        requestAnimationFrame(step);
    }

    renderReviewList() {
        this.reviewList.innerHTML = "";

        this.userAnswers.forEach((ans, idx) => {
            const item = document.createElement("div");
            item.className = `review-item ${ans.isCorrect ? "item-correct" : "item-wrong"}`;

            item.innerHTML = `
                <div class="review-q-title">
                    <span>${idx + 1}. ${ans.question}</span>
                    <span class="review-badge ${ans.isCorrect ? "badge-correct" : "badge-wrong"}">
                        ${ans.isCorrect ? "Correct" : "Incorrect"}
                    </span>
                </div>
                <div class="review-answers-grid">
                    <div class="review-ans-box">
                        <small>Your Answer</small>
                        <span style="color: ${ans.isCorrect ? '#34d399' : '#f87171'}; font-weight: 600;">
                            ${ans.selected}
                        </span>
                    </div>
                    <div class="review-ans-box">
                        <small>Correct Answer</small>
                        <span style="color: #34d399; font-weight: 600;">
                            ${ans.answer}
                        </span>
                    </div>
                </div>
                <div class="review-explanation">
                    💡 <strong>Explanation:</strong> ${ans.explanation}
                </div>
            `;

            this.reviewList.appendChild(item);
        });
    }

    toggleReview() {
        audio.play("click");
        const isOpen = this.reviewList.style.display === "flex";
        if (isOpen) {
            this.reviewList.style.display = "none";
            this.reviewChevron.textContent = "▼";
        } else {
            this.reviewList.style.display = "flex";
            this.reviewChevron.textContent = "▲";
        }
    }

    restartQuiz() {
        audio.play("click");
        this.resultScreen.classList.remove("active");
        this.startScreen.classList.add("active");
        this.reviewList.style.display = "none";
        this.reviewChevron.textContent = "▼";
    }

    // Share result via clipboard
    shareScorecard() {
        audio.play("click");
        const correctAnswers = this.userAnswers.filter((a) => a.isCorrect).length;
        const totalQ = this.questions.length;
        const accuracyPct = Math.round((correctAnswers / totalQ) * 100);

        const categoryNames = {
            frontend: "Frontend & Web",
            javascript: "JavaScript Core",
            trivia: "Tech & CS Trivia"
        };

        const text = `🧠 Quiz Master Scorecard!\n` +
            `📂 Category: ${categoryNames[this.category] || "Tech"}\n` +
            `⚡ Score: ${this.score} pts (${correctAnswers}/${totalQ} Correct - ${accuracyPct}%)\n` +
            `🔥 Best Streak: ${this.maxStreak}x\n` +
            `🏅 Rank: ${this.resultRank.textContent}\n` +
            `Crafted with SkillCraft Technology — Task 03`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast("Scorecard copied to clipboard! 📋");
            }).catch(() => {
                this.showToast("Result ready to share!");
            });
        } else {
            this.showToast("Scorecard generated!");
        }
    }

    showToast(message) {
        this.toastText.textContent = message;
        this.toastMsg.classList.add("show");
        setTimeout(() => {
            this.toastMsg.classList.remove("show");
        }, 2600);
    }

    // High Scores & Storage
    saveScoreRecord(record) {
        let history = this.getScoresHistory();
        history.unshift(record);
        // Keep top 20
        if (history.length > 20) history = history.slice(0, 20);
        localStorage.setItem("quiz_scores_history", JSON.stringify(history));
    }

    getScoresHistory() {
        try {
            return JSON.parse(localStorage.getItem("quiz_scores_history")) || [];
        } catch {
            return [];
        }
    }

    loadOverallStats() {
        const history = this.getScoresHistory();
        if (history.length === 0) {
            this.statTotalGames.textContent = "0";
            this.statBestScore.textContent = "0%";
            this.statMaxStreak.textContent = "0🔥";
            return;
        }

        this.statTotalGames.textContent = history.length;

        const bestAcc = Math.max(...history.map((h) => h.accuracy || 0));
        this.statBestScore.textContent = `${bestAcc}%`;

        const topStreak = Math.max(...history.map((h) => h.maxStreak || 0));
        this.statMaxStreak.textContent = `${topStreak}🔥`;
    }

    openLeaderboard() {
        const history = this.getScoresHistory();
        this.leaderboardList.innerHTML = "";

        if (history.length === 0) {
            this.leaderboardList.innerHTML = `
                <div class="leaderboard-empty">
                    <p>No games recorded yet!</p>
                    <small>Complete a quiz challenge to save your score.</small>
                </div>
            `;
        } else {
            // Sort by score descending
            const sorted = [...history].sort((a, b) => b.score - a.score);
            sorted.slice(0, 8).forEach((item, idx) => {
                const row = document.createElement("div");
                row.className = "leaderboard-item";

                const categoryLabel = {
                    frontend: "Frontend",
                    javascript: "JavaScript",
                    trivia: "Tech Trivia"
                }[item.category] || "Tech";

                row.innerHTML = `
                    <div class="lb-rank">#${idx + 1}</div>
                    <div class="lb-info">
                        <div class="lb-category">${categoryLabel} • ${item.correct}/${item.total} (${item.accuracy}%)</div>
                        <div class="lb-date">${item.date} • ${item.maxStreak || 0}🔥 Streak</div>
                    </div>
                    <div class="lb-score-data">
                        <div class="lb-score-val">${item.score}</div>
                        <div class="lb-acc-val">pts</div>
                    </div>
                `;
                this.leaderboardList.appendChild(row);
            });
        }

        this.modal.classList.add("active");
    }

    closeLeaderboard() {
        audio.play("click");
        this.modal.classList.remove("active");
    }

    clearLeaderboard() {
        audio.play("click");
        localStorage.removeItem("quiz_scores_history");
        this.loadOverallStats();
        this.openLeaderboard();
    }
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    window.gameApp = new QuizMasterGame();
});