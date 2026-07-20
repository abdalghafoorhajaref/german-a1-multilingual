// ============================================================
// AI VOICE TUTOR ENGINE - Real-Time German Conversation Partner
// Powered by AIHubMix Unified API (OpenAI gpt-4o-mini & Gemini)
// ============================================================

const DEFAULT_AI_CONFIG = {
  apiKey: "sk-aihubmix-5d9c28e71b4a0f8e3c7a9b1d5f2e8c4a",
  endpoint: "https://aihubmix.com/v1/chat/completions",
  model: "gpt-4o-mini",
  speechRate: 1.0,
  handsFree: false
};

let aiVoiceConfig = { ...DEFAULT_AI_CONFIG };
let aiChatHistory = [];
let isAIVoiceRecognizing = false;
let aiVoiceRecognizer = null;
let currentAITopic = 'free';

// Roleplay Scenarios
const AI_ROLEPLAY_TOPICS = [
  { id: 'free', icon: '💬', titleAr: 'محادثة حرة', titleEn: 'Free Practice', prompt: 'Talk about any topic casually in German.' },
  { id: 'cafe', icon: '☕', titleAr: 'في المقهى', titleEn: 'At the Café', prompt: 'Roleplay: You are a waiter in a German Café, and the user wants to order food and drinks.' },
  { id: 'doctor', icon: '🩺', titleAr: 'عند الطبيب', titleEn: 'At the Doctor', prompt: 'Roleplay: You are a German doctor, and the user comes to explain their symptoms.' },
  { id: 'introduce', icon: '👋', titleAr: 'التعارف والتقديم', titleEn: 'Self Introduction', prompt: 'Roleplay: You meet the user for the first time in Germany and ask about name, country, hobbies, and family.' },
  { id: 'shopping', icon: '🛒', titleAr: 'التسوق بالسوبرماركت', titleEn: 'Supermarket Shopping', prompt: 'Roleplay: You work in a German supermarket and help the user find groceries and pay.' },
  { id: 'hotel', icon: '🏨', titleAr: 'في الفندق والجزئيات', titleEn: 'At the Hotel', prompt: 'Roleplay: You are a hotel receptionist in Berlin helping the user check in and ask about their room.' }
];

// Load saved config
function loadAIVoiceConfig() {
  try {
    const saved = localStorage.getItem('german_ai_voice_config');
    if (saved) {
      aiVoiceConfig = { ...DEFAULT_AI_CONFIG, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Error loading AI Voice config:', e);
  }
}

// Save config
function saveAIVoiceConfig() {
  try {
    localStorage.setItem('german_ai_voice_config', JSON.stringify(aiVoiceConfig));
  } catch (e) {
    console.error('Error saving AI Voice config:', e);
  }
}

// Initialize AI Voice Page
function initAIVoicePage() {
  loadAIVoiceConfig();
  renderAITopicPills();
  updateAISettingsUI();
  
  const chatContainer = document.getElementById('aiChatContainer');
  if (chatContainer && aiChatHistory.length === 0) {
    // Initial welcome message from Anna
    const level = typeof currentLevel !== 'undefined' ? currentLevel : 'A1';
    const initialText = level === 'A2' 
      ? "Hallo! Ich bin Anna, deine Deutschlehrerin. Wie geht es dir heute? Worüber möchtest du sprechen?"
      : "Hallo! Ich bin Anna. Wie heißen Sie und wie geht es Ihnen?";
    
    const nativeTrans = getTranslation('ai_voice_welcome_trans', 'مرحباً! أنا أنّا، معلمتك للغة الألمانية. كيف حالك اليوم وماذا تحب أن نتحدث عن؟');
    
    addAIChatBubble('ai', initialText, nativeTrans);
    aiChatHistory.push({ role: 'assistant', content: initialText });
  }
}

// Render Scenario Pills
function renderAITopicPills() {
  const container = document.getElementById('aiTopicPills');
  if (!container) return;
  
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  
  container.innerHTML = AI_ROLEPLAY_TOPICS.map(topic => {
    const title = lang === 'ar' ? topic.titleAr : topic.titleEn;
    const isActive = topic.id === currentAITopic ? 'active' : '';
    return `<button class="ai-topic-pill ${isActive}" onclick="selectAITopic('${topic.id}')">
      <span>${topic.icon}</span>
      <span>${title}</span>
    </button>`;
  }).join('');
}

// Switch Topic
function selectAITopic(topicId) {
  currentAITopic = topicId;
  renderAITopicPills();
  
  const topic = AI_ROLEPLAY_TOPICS.find(t => t.id === topicId) || AI_ROLEPLAY_TOPICS[0];
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const title = lang === 'ar' ? topic.titleAr : topic.titleEn;
  
  showToast(getTranslation('toast_topic_changed', `تم تغيير الموضوع إلى: ${title}`), 'info');
  
  // Clear previous chat history for new scenario
  aiChatHistory = [];
  const container = document.getElementById('aiChatContainer');
  if (container) container.innerHTML = '';
  
  // Start scenario with prompt
  sendAIMessageToAPI("Hallo!", true);
}

// Build System Prompt
function getAISystemPrompt() {
  const level = typeof currentLevel !== 'undefined' ? currentLevel : 'A1';
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const topic = AI_ROLEPLAY_TOPICS.find(t => t.id === currentAITopic) || AI_ROLEPLAY_TOPICS[0];

  const targetLangNames = {
    ar: 'Arabic', en: 'English', tr: 'Turkish', ro: 'Romanian',
    bs: 'Bosnian', es: 'Spanish', bg: 'Bulgarian', el: 'Greek'
  };
  const userLangName = targetLangNames[lang] || 'Arabic';

  return `You are "Anna", a very friendly, patient, and encouraging German language teacher for a student at level ${level}.
Scenario context: ${topic.prompt}

Guidelines:
1. Speak in natural, simple German appropriate for CEFR level ${level}. Keep sentences relatively short and clear.
2. ALWAYS return your output strictly in valid JSON format with three fields:
   {
     "replyDe": "Your German response string",
     "translation": "Accurate translation of replyDe into ${userLangName}",
     "correction": "If the user made a grammar, vocabulary, or spelling mistake in their previous German input, provide a polite explanation in ${userLangName} with the corrected German form. If there is no mistake, return empty string ''."
   }
3. Be encouraging and ask a question at the end to keep the conversation flowing.
4. Do NOT output markdown code blocks or extra text outside the JSON.`;
}

// Send Message to AIHubMix API
async function sendAIMessageToAPI(userText, isInitialScenario = false) {
  if (!isInitialScenario && userText) {
    addAIChatBubble('user', userText);
    aiChatHistory.push({ role: 'user', content: userText });
  }

  showAITypingIndicator(true);

  const apiKey = aiVoiceConfig.apiKey.trim() || DEFAULT_AI_CONFIG.apiKey;
  const endpoint = aiVoiceConfig.endpoint.trim() || DEFAULT_AI_CONFIG.endpoint;
  const model = aiVoiceConfig.model || DEFAULT_AI_CONFIG.model;

  const messages = [
    { role: 'system', content: getAISystemPrompt() },
    ...aiChatHistory.slice(-10) // Keep last 10 messages for context
  ];

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: 0.7,
        max_tokens: 350
      })
    });

    showAITypingIndicator(false);

    if (!response.ok) {
      const errText = await response.text();
      console.error('AI API Error:', response.status, errText);
      showToast(getTranslation('ai_api_error', 'خطأ في الاتصال بالذكاء الاصطناعي. تحقق من المفتاح والموديل في الإعدادات.'), 'error');
      addAIChatBubble('ai', "Entschuldigung, ich hatte ein kleines Verbindungsproblem. Bitte versuche es noch einmal!", "معذرة، حدث خطأ بسيط في الاتصال. يرجى المحاولة مرة أخرى!");
      return;
    }

    const data = await response.json();
    const rawContent = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : '';

    let parsed = null;
    try {
      // Clean JSON formatting if wrapped in ```json ... ```
      const cleanedJson = rawContent.replace(/```json/g, '').replace(/```/g, '').trim();
      parsed = JSON.parse(cleanedJson);
    } catch (e) {
      console.warn('Could not parse JSON response from AI, using fallback parsing:', e);
      parsed = {
        replyDe: rawContent,
        translation: '',
        correction: ''
      };
    }

    const replyDe = parsed.replyDe || rawContent;
    const translation = parsed.translation || '';
    const correction = parsed.correction || '';

    aiChatHistory.push({ role: 'assistant', content: replyDe });
    addAIChatBubble('ai', replyDe, translation, correction);

    // Speak AI response out loud
    speakAIResponse(replyDe);

  } catch (err) {
    showAITypingIndicator(false);
    console.error('Fetch error:', err);
    showToast(getTranslation('ai_network_error', 'تعذر الاتصال بالشبكة. تحقق من الاتصال بالإنترنت.'), 'error');
  }
}

// Add Chat Bubble to UI
function addAIChatBubble(sender, textDe, nativeTrans = '', correction = '') {
  const container = document.getElementById('aiChatContainer');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `ai-chat-message ${sender}-message`;

  const avatar = sender === 'ai' ? '🤖' : '👤';
  const senderLabel = sender === 'ai' ? 'Anna (AI Tutor)' : 'Du';

  let html = `
    <div class="ai-msg-avatar">${avatar}</div>
    <div class="ai-msg-content">
      <div class="ai-msg-header">
        <span class="ai-msg-sender">${senderLabel}</span>
        ${sender === 'ai' ? `<button class="tts-btn" onclick="speakAIResponse('${textDe.replace(/['"]/g, " ")}')">🔊</button>` : ''}
      </div>
      <div class="ai-msg-text-de">${escapeHTML(textDe)}</div>
  `;

  if (nativeTrans) {
    html += `<div class="ai-msg-translation">${escapeHTML(nativeTrans)}</div>`;
  }

  if (correction) {
    html += `
      <div class="ai-grammar-correction">
        <div class="ai-correction-title">💡 ${getTranslation('ai_voice_correction_title', 'ملاحظة نحوية وتصحيح:')}</div>
        <div class="ai-correction-body">${escapeHTML(correction)}</div>
      </div>
    `;
  }

  html += `</div>`;
  bubble.innerHTML = html;

  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

// Typing Indicator
function showAITypingIndicator(show) {
  let indicator = document.getElementById('aiTypingIndicator');
  const container = document.getElementById('aiChatContainer');

  if (show) {
    if (!indicator && container) {
      indicator = document.createElement('div');
      indicator.id = 'aiTypingIndicator';
      indicator.className = 'ai-typing-indicator';
      indicator.innerHTML = `
        <div class="ai-msg-avatar">🤖</div>
        <div class="ai-typing-dots">
          <span></span><span></span><span></span>
        </div>
        <span style="font-size:12px;color:var(--text-muted);margin-right:8px">${getTranslation('ai_voice_thinking', 'المعلم يحلل كلامك ويعد الإجابة...')}</span>
      `;
      container.appendChild(indicator);
      container.scrollTop = container.scrollHeight;
    }
  } else {
    if (indicator) {
      indicator.remove();
    }
  }
}

// Text-to-Speech (TTS) Execution
function speakAIResponse(text) {
  if (!text) return;
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel(); // Cancel any ongoing speech

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'de-DE';
  utter.rate = aiVoiceConfig.speechRate || 1.0;

  // Try finding a German voice
  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Anna')));
  if (deVoice) {
    utter.voice = deVoice;
  }

  // Update visual speaking state
  const micBtn = document.getElementById('aiMicMainBtn');
  if (micBtn) micBtn.classList.add('ai-speaking');

  utter.onend = () => {
    if (micBtn) micBtn.classList.remove('ai-speaking');
    
    // If Hands-Free auto-chat mode is enabled, auto-start listening
    if (aiVoiceConfig.handsFree) {
      setTimeout(() => {
        toggleAIVoiceRecognition(true);
      }, 800);
    }
  };

  utter.onerror = () => {
    if (micBtn) micBtn.classList.remove('ai-speaking');
  };

  window.speechSynthesis.speak(utter);
}

// Speech Recognition (STT) Toggle
function toggleAIVoiceRecognition(forceStart = false) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    showToast(getTranslation('speech_not_supported', 'خاصية التعرف على الصوت غير مدعومة في هذا المتصفح. استخدم الإدخال النصي.'), 'warning');
    return;
  }

  const micBtn = document.getElementById('aiMicMainBtn');
  const statusEl = document.getElementById('aiMicStatusText');

  if (isAIVoiceRecognizing && !forceStart) {
    // Stop recording
    if (aiVoiceRecognizer) {
      aiVoiceRecognizer.stop();
    }
    isAIVoiceRecognizing = false;
    if (micBtn) micBtn.classList.remove('listening');
    if (statusEl) statusEl.textContent = getTranslation('ai_voice_hold_to_talk', 'انقر للتحدث بالألمانية');
    return;
  }

  // Stop TTS if speaking
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  aiVoiceRecognizer = new SpeechRecognition();
  aiVoiceRecognizer.lang = 'de-DE';
  aiVoiceRecognizer.interimResults = true;
  aiVoiceRecognizer.maxAlternatives = 1;

  let finalTranscript = '';

  aiVoiceRecognizer.onstart = () => {
    isAIVoiceRecognizing = true;
    if (micBtn) micBtn.classList.add('listening');
    if (statusEl) statusEl.textContent = getTranslation('ai_voice_listening', 'جاري الاستماع... تحدث الآن بالألمانية 🇩🇪');
  };

  aiVoiceRecognizer.onresult = (event) => {
    let interim = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interim += event.results[i][0].transcript;
      }
    }
    const inputEl = document.getElementById('aiTextInputField');
    if (inputEl) {
      inputEl.value = finalTranscript || interim;
    }
  };

  aiVoiceRecognizer.onend = () => {
    isAIVoiceRecognizing = false;
    if (micBtn) micBtn.classList.remove('listening');
    if (statusEl) statusEl.textContent = getTranslation('ai_voice_hold_to_talk', 'انقر للتحدث بالألمانية');

    const inputEl = document.getElementById('aiTextInputField');
    const spokenText = inputEl ? inputEl.value.trim() : '';

    if (spokenText) {
      inputEl.value = '';
      sendAIMessageToAPI(spokenText);
    }
  };

  aiVoiceRecognizer.onerror = (err) => {
    console.error('Speech recognition error:', err.error);
    isAIVoiceRecognizing = false;
    if (micBtn) micBtn.classList.remove('listening');
    if (statusEl) statusEl.textContent = getTranslation('ai_voice_hold_to_talk', 'انقر للتحدث بالألمانية');
  };

  aiVoiceRecognizer.start();
}

// Send user text message from input field
function handleAISendClick() {
  const inputEl = document.getElementById('aiTextInputField');
  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (text) {
    inputEl.value = '';
    sendAIMessageToAPI(text);
  }
}

// Clear Chat History
function clearAIChat() {
  aiChatHistory = [];
  const container = document.getElementById('aiChatContainer');
  if (container) container.innerHTML = '';
  initAIVoicePage();
  showToast(getTranslation('toast_chat_cleared', 'تمت إعادة تعيين المحادثة'), 'info');
}

// Toggle Speed
function setAISpeechRate(rate) {
  aiVoiceConfig.speechRate = parseFloat(rate);
  saveAIVoiceConfig();
  showToast(getTranslation('toast_speed_updated', `تم تغيير سرعة الصوت إلى ${rate}x`), 'info');
}

// Toggle Hands-Free
function toggleHandsFreeMode(checkbox) {
  aiVoiceConfig.handsFree = checkbox.checked;
  saveAIVoiceConfig();
  const msg = aiVoiceConfig.handsFree 
    ? getTranslation('toast_handsfree_on', 'تم تفعيل المحادثة الصوتية المستمرة (Hands-Free)')
    : getTranslation('toast_handsfree_off', 'تم إيقاف وضع Hands-Free');
  showToast(msg, 'info');
}

// Update Modal & UI Settings
function updateAISettingsUI() {
  const keyInput = document.getElementById('aiSettingsApiKey');
  const modelSelect = document.getElementById('aiSettingsModel');
  const rateSelect = document.getElementById('aiSpeedSelect');
  const handsFreeCb = document.getElementById('aiHandsFreeCb');
  const statusBadge = document.getElementById('aiStatusBadge');

  if (keyInput) keyInput.value = aiVoiceConfig.apiKey;
  if (modelSelect) modelSelect.value = aiVoiceConfig.model;
  if (rateSelect) rateSelect.value = aiVoiceConfig.speechRate;
  if (handsFreeCb) handsFreeCb.checked = aiVoiceConfig.handsFree;

  if (statusBadge) {
    statusBadge.textContent = `${getTranslation('ai_voice_api_status', 'متصل بـ AIHubMix')} (${aiVoiceConfig.model})`;
  }
}

// Save Settings from Modal
function saveAISettingsFromModal() {
  const keyInput = document.getElementById('aiSettingsApiKey');
  const modelSelect = document.getElementById('aiSettingsModel');

  if (keyInput && keyInput.value.trim()) {
    aiVoiceConfig.apiKey = keyInput.value.trim();
  }
  if (modelSelect) {
    aiVoiceConfig.model = modelSelect.value;
  }

  saveAIVoiceConfig();
  updateAISettingsUI();
  closeAISettingsModal();
  showToast(getTranslation('toast_settings_saved', 'تم حفظ إعدادات الذكاء الاصطناعي بنجاح ✓'), 'success');
}

// Modal Toggle
function openAISettingsModal() {
  const modal = document.getElementById('aiSettingsModal');
  if (modal) modal.style.display = 'flex';
}

function closeAISettingsModal() {
  const modal = document.getElementById('aiSettingsModal');
  if (modal) modal.style.display = 'none';
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
