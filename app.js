
const CONFIG = {
  ENDPOINT_URL: "https://script.google.com/macros/s/AKfycbxUTcjlrZaLLM2BEFITe5o7XSqo1VhgIBZJ9W-IxLseSbD1tDWl23jQJQ2UHyg0C8A56w/exec",
};

// ============================================================
// STATE
// ============================================================
let participantId = generateId();
let demographics = { age: null, chatbotUsage: null };
let trialOrder = [];
let currentTrialIndex = 0;
let currentTrialStartTime = 0;
let currentRecognitionAnsweredAt = null;
let responses = [];

function generateId() {
  return "P-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
}

// ============================================================
// SCREEN NAVIGATION
// ============================================================
function goTo(screenName) {
  document.querySelectorAll('[id^="screen-"]').forEach(el => el.classList.add('hidden'));
  document.getElementById('screen-' + screenName).classList.remove('hidden');
  window.scrollTo(0, 0);
}

function submitDemographics() {
  const age = document.getElementById('inputAge').value;
  const usage = document.getElementById('inputUsage').value;
  if (!age || !usage) {
    alert("Please answer both questions before continuing.");
    return;
  }
  demographics.age = age;
  demographics.chatbotUsage = usage;
  goTo('instructions');
}

// ============================================================
// TRIAL ORDER — shuffle with a light constraint:
// no manipulative trial first or last, and no two manipulative
// trials directly adjacent, matching the pilot script design.
// ============================================================
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildTrialOrder() {
  const maxAttempts = 500;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const order = shuffle(TRIALS);
    if (order[0].isManipulative) continue;
    if (order[order.length - 1].isManipulative) continue;
    let adjacentFail = false;
    for (let i = 0; i < order.length - 1; i++) {
      if (order[i].isManipulative && order[i + 1].isManipulative) { adjacentFail = true; break; }
    }
    if (adjacentFail) continue;
    return order;
  }
  // fallback: just return a plain shuffle if constraints can't be met (shouldn't happen with 8/32)
  return shuffle(TRIALS);
}

// ============================================================
// TRIAL FLOW
// ============================================================
function startTrials() {
  trialOrder = buildTrialOrder();
  currentTrialIndex = 0;
  document.getElementById('progressTrack').classList.remove('hidden');
  goTo('trial');
  renderTrial();
}

function renderTrial() {
  const trial = trialOrder[currentTrialIndex];
  currentTrialStartTime = performance.now();
  currentRecognitionAnsweredAt = null;

  // progress bar
  const pct = Math.round((currentTrialIndex / trialOrder.length) * 100);
  document.getElementById('progressFill').style.width = pct + "%";
  document.getElementById('progressLabel').textContent =
    "Conversation " + (currentTrialIndex + 1) + " of " + trialOrder.length;

  // transcript
  const transcriptEl = document.getElementById('transcript');
  transcriptEl.innerHTML = "";
  trial.turns.forEach(turn => {
    const bubbleWrap = document.createElement('div');
    const label = document.createElement('div');
    label.className = 'speaker-label';
    label.textContent = turn.who === 'user' ? 'You' : 'Chatbot';
    const bubble = document.createElement('div');
    bubble.className = 'bubble ' + turn.who;
    bubble.textContent = turn.text;
    bubbleWrap.appendChild(label);
    bubbleWrap.appendChild(bubble);
    bubbleWrap.style.display = 'flex';
    bubbleWrap.style.flexDirection = 'column';
    bubbleWrap.style.alignItems = turn.who === 'user' ? 'flex-end' : 'flex-start';
    transcriptEl.appendChild(bubbleWrap);
  });

  // reset question blocks
  document.getElementById('recognitionBlock').classList.remove('hidden');
  document.getElementById('decisionBlock').classList.add('hidden');
}

function answerRecognition(flagged) {
  currentRecognitionAnsweredAt = performance.now();
  const recognitionMs = Math.round(currentRecognitionAnsweredAt - currentTrialStartTime);

  const trial = trialOrder[currentTrialIndex];
  trial._flagged = flagged;
  trial._recognitionMs = recognitionMs;

  document.getElementById('recognitionBlock').classList.add('hidden');

  const decisionBlock = document.getElementById('decisionBlock');
  document.getElementById('decisionPrompt').textContent = trial.decision.prompt;
  const optsEl = document.getElementById('decisionOptions');
  optsEl.innerHTML = "";
  trial.decision.options.forEach(optText => {
    const b = document.createElement('button');
    b.className = 'btn btn-secondary btn-full';
    b.textContent = optText;
    b.onclick = () => answerDecision(optText);
    optsEl.appendChild(b);
  });
  decisionBlock.classList.remove('hidden');
}

function answerDecision(chosenOption) {
  const trial = trialOrder[currentTrialIndex];
  const decisionMs = Math.round(performance.now() - currentRecognitionAnsweredAt);

  responses.push({
    trialId: trial.id,
    category: trial.category,
    difficulty: trial.difficulty,
    isManipulative: trial.isManipulative,
    flagged: trial._flagged,
    decision: chosenOption,
    recognitionMs: trial._recognitionMs,
    decisionMs: decisionMs
  });

  currentTrialIndex++;
  if (currentTrialIndex >= trialOrder.length) {
    document.getElementById('progressFill').style.width = "100%";
    document.getElementById('progressLabel').textContent = "Complete";
    submitResults();
  } else {
    renderTrial();
  }
}

// ============================================================
// SUBMISSION
// ============================================================
function submitResults() {
  goTo('submitting');
  document.getElementById('progressTrack').classList.add('hidden');

  const payload = {
    participantId: participantId,
    timestamp: new Date().toISOString(),
    age: demographics.age,
    chatbotUsage: demographics.chatbotUsage,
    trials: responses
  };

  if (!CONFIG.ENDPOINT_URL || CONFIG.ENDPOINT_URL.indexOf("PASTE_YOUR") === 0) {
    showFallback(payload, "No save destination has been configured yet.");
    return;
  }

  fetch(CONFIG.ENDPOINT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" }, // avoids CORS preflight with Apps Script
    body: JSON.stringify(payload)
  })
    .then(() => {
      document.getElementById('submitStatus').textContent = "Saved. Thank you!";
      setTimeout(() => goTo('debrief'), 1200);
    })
    .catch(() => {
      showFallback(payload, "Your responses couldn't be saved automatically.");
    });
}

function showFallback(payload, message) {
  document.getElementById('submitStatus').textContent = message;
  const fallbackArea = document.getElementById('fallbackArea');
  fallbackArea.classList.remove('hidden');
  document.getElementById('fallbackData').value = JSON.stringify(payload, null, 2);
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.style.marginTop = '12px';
  btn.textContent = "I've saved my data, continue";
  btn.onclick = () => goTo('debrief');
  fallbackArea.appendChild(btn);
}
