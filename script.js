const questions = [
  {
    text: "A new AI tool is suddenly everywhere. What are you most likely to do first?",
    answers: [
      { label: "Save a few demos and wait until someone I trust reviews it.", build: 0, amplify: 1 },
      { label: "Try it on a small task I actually do every week.", build: 3, amplify: 1 },
      { label: "Map where it could fit, what data it needs, and how it might fail.", build: 4, amplify: 1 },
      { label: "Share the launch because my network would find it interesting.", build: 1, amplify: 4 }
    ]
  },
  {
    text: "When you ask AI to help with a business report, your usual instruction is closest to:",
    answers: [
      { label: "Make this sharper and easier to read for leadership.", build: 1, amplify: 3 },
      { label: "Summarize the key points and give me a polished draft.", build: 1, amplify: 1 },
      { label: "Extract decisions, risks, numbers, gaps, assumptions, and next steps.", build: 4, amplify: 1 },
      { label: "Create a first draft, then I will edit tone and structure myself.", build: 3, amplify: 2 }
    ]
  },
  {
    text: "When people discuss AI models, which set feels most familiar to you?",
    answers: [
      { label: "ChatGPT, Claude, Gemini, Perplexity.", build: 1, amplify: 2 },
      { label: "DeepSeek, Qwen, Kimi, GLM, Mistral.", build: 4, amplify: 2 },
      { label: "Canva, Notion AI, Grammarly, Copilot.", build: 0, amplify: 2 },
      { label: "OpenAI, Anthropic, Google, Meta, xAI.", build: 3, amplify: 2 }
    ]
  },
  {
    text: "Your team says, 'Let's build an AI agent.' What do you focus on first?",
    answers: [
      { label: "The user journey and how the agent should feel to use.", build: 2, amplify: 3 },
      { label: "The exact goal, tool access, memory, permissions, and handoff points.", build: 4, amplify: 1 },
      { label: "A simple automation that proves the idea before we overbuild it.", build: 3, amplify: 1 },
      { label: "Examples of similar agents people are already sharing online.", build: 1, amplify: 3 }
    ]
  },
  {
    text: "Which group of AI voices are you most likely to recognize or follow?",
    answers: [
      { label: "Andrew Ng, Ethan Mollick, Allie K. Miller, Rowan Cheung.", build: 2, amplify: 4 },
      { label: "Fei-Fei Li, Andrej Karpathy, Demis Hassabis, Yann LeCun.", build: 4, amplify: 2 },
      { label: "Sam Altman, Dario Amodei, Jensen Huang, Ilya Sutskever.", build: 3, amplify: 3 },
      { label: "Mostly creators who translate AI news into simple daily posts.", build: 0, amplify: 4 }
    ]
  },
  {
    text: "A strong open-weight model becomes popular. Your next move is usually:",
    answers: [
      { label: "Read summaries to understand why people are excited.", build: 0, amplify: 2 },
      { label: "Try it on a real task and compare the output with my current setup.", build: 3, amplify: 1 },
      { label: "Check quality, latency, license, privacy, deployment path, and cost.", build: 4, amplify: 1 },
      { label: "Share the development with a short note on why it matters.", build: 1, amplify: 4 }
    ]
  },
  {
    text: "Which terms show up most often when you think about real AI workflows?",
    answers: [
      { label: "Templates, tone, summaries, rewrites.", build: 1, amplify: 2 },
      { label: "Use cases, adoption, training, change management.", build: 2, amplify: 4 },
      { label: "Tools, memory, loops, skills, evals, human approval.", build: 4, amplify: 2 },
      { label: "RAG, function calling, latency, observability, fallback.", build: 4, amplify: 1 }
    ]
  },
  {
    text: "You see a benchmark chart claiming a model is now the best. What catches your eye?",
    answers: [
      { label: "Whether credible people are discussing it seriously.", build: 1, amplify: 3 },
      { label: "What the benchmark measures, what it misses, and whether tools were used.", build: 4, amplify: 1 },
      { label: "Whether it changes the tools I should recommend to others.", build: 2, amplify: 4 },
      { label: "The headline result and the practical takeaway.", build: 1, amplify: 2 }
    ]
  },
  {
    text: "Your AI learning habit is closest to:",
    answers: [
      { label: "I follow explainers, videos, and summaries to stay aware.", build: 0, amplify: 2 },
      { label: "I curate useful updates and share them with people who need context.", build: 1, amplify: 4 },
      { label: "I read release notes, test tools, and keep notes on what worked.", build: 3, amplify: 2 },
      { label: "I track research, product changes, cost, reliability, and adoption patterns.", build: 4, amplify: 2 }
    ]
  },
  {
    text: "An AI-generated answer includes sources. What is your usual habit?",
    answers: [
      { label: "Use the sources as a starting point, then check the important ones.", build: 3, amplify: 2 },
      { label: "If it sounds reasonable, I keep moving and refine later if needed.", build: 1, amplify: 1 },
      { label: "Verify that the source exists, is relevant, and supports the claim.", build: 4, amplify: 1 },
      { label: "Ask for clearer citations before deciding whether to trust it.", build: 2, amplify: 2 }
    ]
  },
  {
    text: "When you hear 'multimodal AI,' what practical use comes to mind first?",
    answers: [
      { label: "Analyzing screenshots, documents, images, audio, or video inside a workflow.", build: 4, amplify: 1 },
      { label: "Creating better visuals and richer presentations.", build: 1, amplify: 2 },
      { label: "Helping explain files, charts, and messy inputs that text alone cannot capture.", build: 3, amplify: 3 },
      { label: "Making AI feel easier for non-technical users to interact with.", build: 1, amplify: 4 }
    ]
  },
  {
    text: "Which statement best describes your current role in the AI ecosystem?",
    answers: [
      { label: "I am learning fast and sharing useful things as I discover them.", build: 0, amplify: 2 },
      { label: "I help others understand what is changing and why it matters.", build: 1, amplify: 4 },
      { label: "I test AI in real workflows and explain what actually happened.", build: 3, amplify: 3 },
      { label: "I design, evaluate, or improve AI systems with clear success measures.", build: 4, amplify: 1 }
    ]
  }
];

const personas = [
  {
    id: "explorer",
    level: "Spectrum Entry",
    title: "Curious AI Explorer",
    summary: "You are early on the spectrum, but very much in the game. You are learning the language, following the movement, and starting to connect AI ideas with real use cases.",
    badges: ["Curious", "Tool-aware", "Building momentum"],
    colors: ["#f3b33d", "#ffe6a3", "#0a66c2"]
  },
  {
    id: "amplifier",
    level: "Amplifier Edge",
    title: "AI Ecosystem Amplifier",
    summary: "You are strong at sensing shifts, translating ideas, and helping others understand what is changing. Your influence grows when you pair that signal with grounded examples.",
    badges: ["Trend-aware", "Context sharer", "Learning out loud"],
    colors: ["#ef6f7b", "#ffd0d6", "#0a66c2"]
  },
  {
    id: "builder",
    level: "Builder Edge",
    title: "Quiet Workflow Builder",
    summary: "You are more likely to test, wire, compare, and improve than broadcast. You turn AI from a topic into a working habit, even if you do not always narrate the journey.",
    badges: ["Hands-on", "Workflow-first", "Proof over posts"],
    colors: ["#32c89a", "#d7fff1", "#084d92"]
  },
  {
    id: "experimenter",
    level: "Balanced Middle",
    title: "Workflow Experimenter",
    summary: "You sit near the middle of the spectrum: curious enough to learn publicly and practical enough to test privately. You are starting to separate impressive moments from useful systems.",
    badges: ["Hands-on", "Use-case minded", "Practical learner"],
    colors: ["#32c89a", "#d7fff1", "#084d92"]
  },
  {
    id: "practitioner",
    level: "Practitioner Zone",
    title: "Model-Savvy Practitioner",
    summary: "You understand model tradeoffs, workflow design, verification, and cost. You are practical enough to know when AI helps and when plain process wins.",
    badges: ["Eval-minded", "Cost-aware", "Workflow fluent"],
    colors: ["#0a66c2", "#cfe7ff", "#32c89a"]
  },
  {
    id: "strategist",
    level: "High Build + High Amplify",
    title: "AI Systems Strategist",
    summary: "You connect research, models, workflows, risk, adoption, and measurement. You can zoom from a prompt to an operating model without losing the plot.",
    badges: ["Systems thinker", "Receipts available", "Hot-take resistant"],
    colors: ["#17212b", "#e6eef7", "#f3b33d"]
  }
];

let current = 0;
const selections = new Array(questions.length).fill(null);

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const questionCard = document.querySelector("#question-card");
const progressLabel = document.querySelector("#progress-label");
const meterFill = document.querySelector("#meter-fill");
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const copyBtn = document.querySelector("#copy-btn");
const shareBtn = document.querySelector("#share-btn");
const downloadBtn = document.querySelector("#download-btn");

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
});

questionCard.addEventListener("change", (event) => {
  if (event.target.name === "answer") {
    selections[current] = Number(event.target.value);
    nextBtn.disabled = false;
  }
});

backBtn.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  const checked = questionCard.querySelector("input:checked");
  if (!checked) return;
  selections[current] = Number(checked.value);
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  current = 0;
  selections.fill(null);
  result.classList.add("hidden");
  intro.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

copyBtn.addEventListener("click", async () => {
  const persona = getPersona();
  const text = makeShareText(persona);
  await navigator.clipboard.writeText(text);
  copyBtn.textContent = "Copied";
  setTimeout(() => (copyBtn.textContent = "Copy share post"), 1400);
});

shareBtn.addEventListener("click", async () => {
  const persona = getPersona();
  const text = makeShareText(persona);
  if (navigator.share) {
    await navigator.share({ title: persona.title, text });
  } else {
    await navigator.clipboard.writeText(text);
    shareBtn.textContent = "Copied share text";
    setTimeout(() => (shareBtn.textContent = "Share result"), 1400);
  }
});

downloadBtn.addEventListener("click", () => {
  const persona = getPersona();
  const svg = makeDownloadCard(persona);
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0);
    canvas.toBlob((pngBlob) => {
      const pngUrl = URL.createObjectURL(pngBlob);
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = `${persona.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`;
      link.click();
      URL.revokeObjectURL(pngUrl);
      URL.revokeObjectURL(url);
    }, "image/png");
  };
  image.src = url;
});

function renderQuestion() {
  const question = questions[current];
  progressLabel.textContent = `Question ${current + 1} of ${questions.length}`;
  meterFill.style.width = `${((current + 1) / questions.length) * 100}%`;
  backBtn.disabled = current === 0;
  nextBtn.disabled = selections[current] === null;
  nextBtn.textContent = current === questions.length - 1 ? "Reveal persona" : "Next";

  questionCard.innerHTML = `
    <legend>${question.text}</legend>
    <div class="answers">
      ${question.answers
        .map(
          (answer, index) => `
            <label class="answer">
              <input type="radio" name="answer" value="${index}" ${selections[current] === index ? "checked" : ""}>
              <span><strong>${String.fromCharCode(65 + index)}.</strong>${answer.label}</span>
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

function getScores() {
  return selections.reduce(
    (totals, answerIndex, questionIndex) => {
      if (answerIndex === null) return totals;
      const answer = questions[questionIndex].answers[answerIndex];
      totals.build += answer.build;
      totals.amplify += answer.amplify;
      return totals;
    },
    { build: 0, amplify: 0 }
  );
}

function getPersona() {
  const { build, amplify } = getScores();
  const total = build + amplify;
  const gap = build - amplify;
  if (build >= 34 && amplify >= 30) return personas.find((persona) => persona.id === "strategist");
  if (build >= 28 && gap >= 10) return personas.find((persona) => persona.id === "builder");
  if (build >= 34 && gap >= 4) return personas.find((persona) => persona.id === "practitioner");
  if (amplify >= 32 && gap <= -8) return personas.find((persona) => persona.id === "amplifier");
  if (total < 36) return personas.find((persona) => persona.id === "explorer");
  if (build >= 30) return personas.find((persona) => persona.id === "practitioner");
  return personas.find((persona) => persona.id === "experimenter");
}

function showResult() {
  const persona = getPersona();
  const scores = getScores();
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  document.querySelector("#result-level").textContent = persona.level;
  document.querySelector("#result-score").textContent = `Build ${scores.build} | Amplify ${scores.amplify}`;
  document.querySelector("#result-title").textContent = persona.title;
  document.querySelector("#result-summary").textContent = persona.summary;
  document.querySelector("#persona-art").innerHTML = makeAvatar(persona);
  document.querySelector("#result-badges").innerHTML = persona.badges
    .map((badge) => `<span class="badge">${badge}</span>`)
    .join("");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function makeShareText(persona) {
  const scores = getScores();
  return `I took The AI Expert Spectrum Assessment and got: ${persona.title} (${persona.level}). Build ${scores.build} | Amplify ${scores.amplify}. A useful mirror for where we sit on the AI awareness spectrum.`;
}

function makeAvatar(persona) {
  const [main, soft, accent] = persona.colors;
  const scores = getScores();
  const score = scores.build + scores.amplify;
  const glasses = score > 30 ? `<path d="M95 132h38M167 132h38M133 132c7-7 27-7 34 0" fill="none" stroke="#17212b" stroke-width="7" stroke-linecap="round"/><circle cx="112" cy="132" r="21" fill="none" stroke="#17212b" stroke-width="7"/><circle cx="188" cy="132" r="21" fill="none" stroke="#17212b" stroke-width="7"/>` : "";
  const crown = score > 41 ? `<path d="M82 69l28-30 32 28 34-31 31 32-8 34H91z" fill="${accent}" stroke="#17212b" stroke-width="6" stroke-linejoin="round"/>` : "";
  return `
    <svg viewBox="0 0 300 300" role="img" aria-label="${persona.title}">
      <rect x="18" y="18" width="264" height="264" rx="34" fill="${soft}" stroke="#17212b" stroke-width="6"/>
      <path d="M59 234c16-44 50-66 91-66s75 22 91 66" fill="${main}" stroke="#17212b" stroke-width="6"/>
      <circle cx="150" cy="122" r="70" fill="#ffd8bd" stroke="#17212b" stroke-width="6"/>
      ${crown}
      <path d="M84 105c16-46 108-56 132 4-22-10-48-14-75-12-23 2-42 5-57 8z" fill="${main}" stroke="#17212b" stroke-width="6" stroke-linejoin="round"/>
      <circle cx="124" cy="128" r="7" fill="#17212b"/>
      <circle cx="176" cy="128" r="7" fill="#17212b"/>
      ${glasses}
      <path d="M124 162c17 14 36 14 53 0" fill="none" stroke="#17212b" stroke-width="7" stroke-linecap="round"/>
      <rect x="203" y="193" width="46" height="32" rx="6" fill="#fff" stroke="#17212b" stroke-width="5"/>
      <path d="M214 205h24M214 215h16" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
    </svg>
  `;
}

function makeDownloadCard(persona) {
  const scores = getScores();
  const cleanTitle = escapeXml(persona.title);
  const badgeText = persona.badges.map(escapeXml).join(" | ");
  const avatar = makeAvatar(persona).replace("<svg", "<svg x=\"250\" y=\"120\" width=\"300\" height=\"300\"");
  const summaryLines = wrapText(persona.summary, 54)
    .map((line, index) => `<tspan x="610" y="${346 + index * 34}">${escapeXml(line)}</tspan>`)
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f7f9fb"/>
    <rect x="70" y="58" width="1060" height="514" rx="28" fill="#fff" stroke="#d8e1e8" stroke-width="3"/>
    <rect x="70" y="58" width="1060" height="18" rx="9" fill="#0a66c2"/>
    ${avatar}
    <text x="610" y="166" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#084d92">THE AI EXPERT SPECTRUM ASSESSMENT</text>
    <text x="610" y="230" font-family="Arial, sans-serif" font-size="54" font-weight="800" fill="#17212b">${cleanTitle}</text>
    <text x="610" y="292" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#5f6f7f">${persona.level} | Build ${scores.build} | Amplify ${scores.amplify}</text>
    <text font-family="Arial, sans-serif" font-size="25" fill="#5f6f7f">${summaryLines}</text>
    <text x="610" y="492" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#084d92">${badgeText}</text>
  </svg>`;
}

function wrapText(text, maxLength) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLength) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, 4);
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
