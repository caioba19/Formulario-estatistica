// ──────────────────────────────────────────────────────────────
// COLE AQUI A URL DO SEU APPS SCRIPT APÓS O DEPLOY
// Exemplo: https://script.google.com/macros/s/XXXXXXX/exec
// ──────────────────────────────────────────────────────────────
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwH5baqQaECgLUowr3LN5sCSxZkR1IYprVw06tUhCtaLbFSALtSo_MiCVCKRhEe7XFy/exec";

// ──────────────────────────────────────────────────────────────
// PERGUNTAS DO FORMULÁRIO
// ──────────────────────────────────────────────────────────────
const steps = [
  {
    label: "Seção 1",
    title: "Perguntas Qualitativas",
    desc: "Questões sobre perfil e comportamento. Relacionadas às ODS 4 e 12.",
    questions: [
      {
        id: "q1",
        tipo: "qualitativa",
        ods: "ODS 4 — Educação de Qualidade",
        text: "1. Qual é o seu vínculo com a instituição de ensino?",
        type: "radio",
        options: [
          "Estudante do Ensino Médio",
          "Estudante do Ensino Superior",
          "Professor(a)",
          "Funcionário(a) técnico-administrativo",
          "Gestor(a) / Direção"
        ]
      },
      {
        id: "q2",
        tipo: "qualitativa",
        ods: "ODS 4 — Educação de Qualidade",
        text: "2. Qual é a sua faixa etária?",
        type: "radio",
        options: [
          "Até 17 anos",
          "18 a 24 anos",
          "25 a 34 anos",
          "35 a 44 anos",
          "45 anos ou mais"
        ]
      },
      {
        id: "q3",
        tipo: "qualitativa",
        ods: "ODS 12 — Consumo Responsável",
        text: "3. Você conhece algum ponto de coleta de lixo eletrônico próximo à sua escola ou residência?",
        type: "radio",
        options: [
          "Sim, conheço e já utilizei",
          "Sim, conheço mas nunca utilizei",
          "Não conheço nenhum"
        ]
      },
      {
        id: "q4",
        tipo: "qualitativa",
        ods: "ODS 12 — Consumo Responsável",
        text: "4. O que você costuma fazer com eletrônicos quebrados ou sem uso?",
        type: "radio",
        options: [
          "Jogo no lixo comum",
          "Guardo em casa sem destino",
          "Doo ou vendo",
          "Levo a um ponto de coleta específico",
          "Entrego a uma loja ou fabricante"
        ]
      },
      {
        id: "q5",
        tipo: "qualitativa",
        ods: "ODS 4 — Educação de Qualidade",
        text: "5. Sua escola ou faculdade aborda temas de sustentabilidade ambiental nas aulas ou atividades extracurriculares?",
        type: "radio",
        options: [
          "Sim, frequentemente",
          "Sim, mas raramente",
          "Não aborda",
          "Não sei dizer"
        ]
      }
    ]
  },
  {
    label: "Seção 2",
    title: "Perguntas Quantitativas",
    desc: "Questões com valores numéricos e escalas de avaliação. Relacionadas às ODS 12 e 13.",
    questions: [
      {
        id: "q6",
        tipo: "quantitativa",
        ods: "ODS 12 — Consumo Responsável",
        text: "6. Quantos aparelhos eletrônicos em desuso (parados, quebrados ou obsoletos) você acredita ter em casa?",
        type: "radio",
        options: [
          "Nenhum",
          "1 a 2 aparelhos",
          "3 a 5 aparelhos",
          "Mais de 5 aparelhos"
        ]
      },
      {
        id: "q7",
        tipo: "quantitativa",
        ods: "ODS 12 — Consumo Responsável",
        text: "7. Com que frequência você ou sua família adquire um novo aparelho eletrônico (celular, notebook, etc.)?",
        type: "radio",
        options: [
          "Mais de uma vez por ano",
          "Uma vez por ano",
          "A cada 2 a 3 anos",
          "Raramente (4 anos ou mais)"
        ]
      },
      {
        id: "q8",
        tipo: "quantitativa",
        ods: "ODS 4 — Educação de Qualidade",
        text: "8. Quais dos itens abaixo você reconhece como lixo eletrônico?",
        hint: "Marque todos que souber — o total de marcações será usado como dado quantitativo.",
        type: "checkbox",
        options: [
          "Celular antigo ou quebrado",
          "Pilhas e baterias usadas",
          "Cabos e carregadores velhos",
          "Teclados, mouses e periféricos",
          "Eletrodomésticos pequenos (ferro, liquidificador)",
          "Lâmpadas LED ou fluorescentes"
        ]
      },
      {
        id: "q9",
        tipo: "quantitativa",
        ods: "ODS 4 — Educação de Qualidade",
        text: '9. O quanto você concorda: "A escola ou faculdade tem responsabilidade ativa de educar sobre o descarte correto de lixo eletrônico"?',
        type: "likert",
        labels: ["Discordo totalmente", "Concordo totalmente"]
      },
      {
        id: "q10",
        tipo: "quantitativa",
        ods: "ODS 13 — Ação Climática",
        text: "10. De forma geral, como você avalia o nível de atenção da sua escola ou faculdade com questões ambientais?",
        type: "likert",
        labels: ["Muito ruim", "Excelente"]
      }
    ]
  }
];

// ──────────────────────────────────────────────────────────────
// ESTADO
// ──────────────────────────────────────────────────────────────
let current = 0;
const answers = {};

// ──────────────────────────────────────────────────────────────
// FUNÇÕES AUXILIARES
// ──────────────────────────────────────────────────────────────
function totalUpTo(s) {
  let c = 0;
  for (let i = 0; i < s; i++) c += steps[i].questions.length;
  return c;
}

function updateProgress() {
  const pct = Math.round((current / steps.length) * 100);
  document.getElementById('prog').style.width = pct + '%';
  document.getElementById('pct-label').textContent = pct + '%';
  document.getElementById('step-label').textContent = `Seção ${current + 1} de ${steps.length}`;
}

// ──────────────────────────────────────────────────────────────
// RENDERIZAÇÃO
// ──────────────────────────────────────────────────────────────
function renderQuestion(q, idx) {
  const num = totalUpTo(current) + idx + 1;
  let h = `<div class="q-block">
    <div class="q-label">${q.text}</div>
    <div class="q-meta">
      <span class="q-badge ${q.tipo}">${q.tipo.charAt(0).toUpperCase() + q.tipo.slice(1)}</span>
      <span class="q-ods">${q.ods}</span>
    </div>`;

  if (q.hint) h += `<div class="q-hint">${q.hint}</div>`;

  if (q.type === 'radio') {
    h += `<div class="options">`;
    q.options.forEach(opt => {
      const sel = answers[q.id] === opt ? 'selected' : '';
      h += `<label class="opt-row ${sel}">
        <input type="radio" name="${q.id}" value="${opt}" ${answers[q.id] === opt ? 'checked' : ''} onchange="selectOpt('${q.id}', this)">
        <span class="opt-text">${opt}</span>
      </label>`;
    });
    h += `</div>`;

  } else if (q.type === 'checkbox') {
    if (!answers[q.id]) answers[q.id] = [];
    h += `<div class="options">`;
    q.options.forEach(opt => {
      const chk = answers[q.id].includes(opt);
      h += `<label class="opt-row ${chk ? 'selected' : ''}">
        <input type="checkbox" name="${q.id}" value="${opt}" ${chk ? 'checked' : ''} onchange="toggleCheck('${q.id}', this)">
        <span class="opt-text">${opt}</span>
      </label>`;
    });
    h += `</div>`;

  } else if (q.type === 'likert') {
    const val = answers[q.id] || null;
    h += `<div class="likert-wrap">`;
    for (let i = 1; i <= 5; i++) {
      h += `<div class="likert-btn ${val == i ? 'selected' : ''}" onclick="selectLikert('${q.id}', ${i}, this)">${i}</div>`;
    }
    h += `</div><div class="likert-labels"><span>${q.labels[0]}</span><span>${q.labels[1]}</span></div>`;
  }

  return h + `</div>`;
}

function render() {
  const s = steps[current];
  let h = `<div class="section-card">
    <div class="section-label">${s.label}</div>
    <div class="section-title">${s.title}</div>
    <div class="section-desc">${s.desc}</div>`;
  s.questions.forEach((q, i) => { h += renderQuestion(q, i); });
  h += `</div><div id="alert-box"></div><div class="nav-row">`;
  if (current > 0) h += `<button class="btn-nav" onclick="goBack()">← Voltar</button>`;
  if (current < steps.length - 1) {
    h += `<button class="btn-nav btn-next" id="btn-main" onclick="goNext()">Próxima seção →</button>`;
  } else {
    h += `<button class="btn-nav btn-next" id="btn-main" onclick="submitForm()">Enviar respostas</button>`;
  }
  h += `<span class="step-counter">${current + 1} / ${steps.length}</span></div>`;
  document.getElementById('form-body').innerHTML = h;
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ──────────────────────────────────────────────────────────────
// INTERAÇÕES
// ──────────────────────────────────────────────────────────────
function selectOpt(qid, input) {
  answers[qid] = input.value;
  input.closest('.options').querySelectorAll('.opt-row').forEach(r => r.classList.remove('selected'));
  input.closest('.opt-row').classList.add('selected');
}

function toggleCheck(qid, input) {
  if (!answers[qid]) answers[qid] = [];
  const val = input.value;
  if (input.checked) {
    if (!answers[qid].includes(val)) answers[qid].push(val);
    input.closest('.opt-row').classList.add('selected');
  } else {
    answers[qid] = answers[qid].filter(v => v !== val);
    input.closest('.opt-row').classList.remove('selected');
  }
}

function selectLikert(qid, val, el) {
  answers[qid] = val;
  el.closest('.likert-wrap').querySelectorAll('.likert-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
}

function goNext() { if (current < steps.length - 1) { current++; render(); } }
function goBack() { if (current > 0) { current--; render(); } }

// ──────────────────────────────────────────────────────────────
// ENVIO PARA O GOOGLE SHEETS
// ──────────────────────────────────────────────────────────────
async function submitForm() {
  const btn = document.getElementById('btn-main');
  const box = document.getElementById('alert-box');
  btn.disabled = true;
  btn.textContent = 'Enviando...';
  box.innerHTML = `<div class="alert alert-sending">Enviando suas respostas para a planilha...</div>`;

  // Para q8 (checkbox), calcula a contagem como dado quantitativo
  const payload = Object.assign({}, answers);
  if (Array.isArray(payload.q8)) {
    payload.q8_contagem = payload.q8.length;
    payload.q8 = payload.q8.join(' | ');
  }

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    document.getElementById('form-body').innerHTML = `
      <div class="section-card">
        <div class="success-screen">
          <div class="success-icon">✓</div>
          <div class="success-title">Respostas enviadas com sucesso!</div>
          <div class="success-sub">
            Obrigado por participar desta pesquisa. Suas respostas foram registradas na planilha
            e contribuem para a análise estatística sobre e-waste e sustentabilidade em ambientes
            escolares e acadêmicos, em alinhamento com as ODS 4, 12 e 13 da Agenda 2030 da ONU.
          </div>
        </div>
      </div>`;
    document.getElementById('prog').style.width = '100%';
    document.getElementById('pct-label').textContent = '100%';
    document.getElementById('step-label').textContent = 'Concluído';
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (err) {
    box.innerHTML = `<div class="alert alert-error">Erro ao enviar. Verifique a URL do Apps Script e tente novamente.</div>`;
    btn.disabled = false;
    btn.textContent = 'Enviar respostas';
  }
}

// ──────────────────────────────────────────────────────────────
// INICIALIZAÇÃO
// ──────────────────────────────────────────────────────────────
render();