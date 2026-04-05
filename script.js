  <script>
    const steps = [
      {
        label: "Seção 1",
        title: "Perfil do Respondente",
        desc: "Informe seus dados básicos. Essas informações permitem cruzar os resultados estatísticos por perfil de respondente.",
        questions: [
          {
            id: "q1", text: "Qual é o seu vínculo com a instituição de ensino?",
            type: "radio",
            options: ["Estudante do Ensino Médio","Estudante do Ensino Superior","Professor(a)","Funcionário(a) técnico-administrativo","Gestor(a) / Direção"]
          },
          {
            id: "q2", text: "Qual é a sua faixa etária?",
            type: "radio",
            options: ["Até 17 anos","18 a 24 anos","25 a 34 anos","35 a 44 anos","45 anos ou mais"]
          },
          {
            id: "q3", text: "Como você se identifica?",
            type: "radio",
            options: ["Feminino","Masculino","Não-binário","Prefiro não informar"]
          },
          {
            id: "q4", text: "Em qual turno você frequenta a instituição?",
            type: "radio",
            options: ["Manhã","Tarde","Noite","Integral"]
          }
        ]
      },
      {
        label: "Seção 2",
        title: "Consciência sobre Lixo Eletrônico",
        desc: "Perguntas sobre o conhecimento do respondente a respeito do e-waste. Relacionadas à ODS 4 (Educação de Qualidade).",
        questions: [
          {
            id: "q5", text: "Você sabe o que é lixo eletrônico (e-waste)?",
            ods: "ODS 4 — Educação de Qualidade",
            type: "radio",
            options: ["Sim, conheço bem o tema","Ouvi falar, mas sei pouco","Não, nunca ouvi falar"]
          },
          {
            id: "q6", text: "Quais dos itens abaixo você considera lixo eletrônico?",
            ods: "ODS 4 — Educação de Qualidade",
            hint: "Pode marcar mais de uma opção.",
            type: "checkbox",
            options: ["Celular antigo ou quebrado","Pilhas e baterias usadas","Cabos e carregadores velhos","Teclados, mouses e periféricos","Eletrodomésticos pequenos (ferro, liquidificador)","Lâmpadas LED ou fluorescentes"]
          },
          {
            id: "q7", text: "Você sabia que o descarte incorreto de eletrônicos pode contaminar o solo e a água e prejudicar a saúde humana?",
            ods: "ODS 13 — Ação Climática",
            type: "radio",
            options: ["Sim, sabia","Tinha uma ideia, mas não sabia os detalhes","Não, não sabia"]
          },
          {
            id: "q8", text: "Quantos aparelhos eletrônicos em desuso (parados, quebrados ou obsoletos) você acredita ter em casa?",
            ods: "ODS 12 — Consumo Responsável",
            type: "radio",
            options: ["Nenhum","1 a 2 aparelhos","3 a 5 aparelhos","Mais de 5 aparelhos"]
          },
          {
            id: "q9", text: "Você conhece algum ponto de coleta de lixo eletrônico próximo à sua escola ou residência?",
            ods: "ODS 12 — Consumo Responsável",
            type: "radio",
            options: ["Sim, conheço e já utilizei","Sim, conheço mas nunca utilizei","Não conheço nenhum"]
          }
        ]
      },
      {
        label: "Seção 3",
        title: "Comportamento de Descarte",
        desc: "Questões sobre o que o respondente faz na prática com seus eletrônicos. Relacionadas à ODS 12 (Consumo e Produção Responsáveis).",
        questions: [
          {
            id: "q10", text: "O que você costuma fazer com eletrônicos quebrados ou sem uso?",
            ods: "ODS 12 — Consumo Responsável",
            type: "radio",
            options: ["Jogo no lixo comum","Guardo em casa sem destino","Doo ou vendo","Levo a um ponto de coleta específico","Entrego a uma loja ou fabricante"]
          },
          {
            id: "q11", text: "Sua escola possui algum programa, campanha ou ponto de coleta de lixo eletrônico?",
            ods: "ODS 4 / ODS 12",
            type: "radio",
            options: ["Sim, e funciona bem","Sim, mas não funciona direito","Não possui","Não sei informar"]
          },
          {
            id: "q12", text: "Você já participou de alguma ação coletiva de descarte correto de eletrônicos (mutirão, campanha, drive de coleta)?",
            ods: "ODS 4 — Educação de Qualidade",
            type: "radio",
            options: ["Sim, já participei","Nunca, mas gostaria de participar","Nunca, e não tenho interesse"]
          },
          {
            id: "q13", text: "O que mais te impede de descartar corretamente o lixo eletrônico?",
            ods: "ODS 12 — Consumo Responsável",
            hint: "Pode marcar mais de uma opção.",
            type: "checkbox",
            options: ["Não sei onde levar","É longe ou inconveniente","Não sei que precisa de descarte especial","Falta de tempo","Não me parece importante","Não tenho eletrônicos para descartar"]
          },
          {
            id: "q14", text: "Com que frequência você ou sua família adquire um novo aparelho eletrônico (celular, notebook, etc.)?",
            ods: "ODS 12 — Consumo Responsável",
            type: "radio",
            options: ["Mais de uma vez por ano","Uma vez por ano","A cada 2 a 3 anos","Raramente (4 anos ou mais)"]
          }
        ]
      },
      {
        label: "Seção 4",
        title: "Escola, ODS e Ação Coletiva",
        desc: "Percepções sobre o papel da escola na educação ambiental e engajamento com os Objetivos de Desenvolvimento Sustentável da ONU.",
        questions: [
          {
            id: "q15", text: "A sua escola aborda temas de sustentabilidade ambiental nas aulas ou em atividades extracurriculares?",
            ods: "ODS 4 — Educação de Qualidade",
            type: "radio",
            options: ["Sim, frequentemente","Sim, mas raramente","Não aborda","Não sei dizer"]
          },
          {
            id: "q16", text: "Você já ouviu falar nos ODS — Objetivos de Desenvolvimento Sustentável da ONU?",
            ods: "ODS 4 — Educação de Qualidade",
            type: "radio",
            options: ["Sim, conheço bem","Sim, já ouvi falar mas sei pouco","Não, nunca ouvi falar"]
          },
          {
            id: "q17", text: "O quanto você concorda com a afirmação: \"A escola tem responsabilidade ativa de educar sobre o descarte correto de lixo eletrônico\"?",
            ods: "ODS 4 — Educação de Qualidade",
            type: "likert",
            labels: ["Discordo totalmente", "Concordo totalmente"]
          },
          {
            id: "q18", text: "Você acredita que um programa de pontos de coleta de e-waste dentro da escola incentivaria a participação dos estudantes?",
            ods: "ODS 12 — Consumo Responsável",
            type: "radio",
            options: ["Sim, definitivamente","Sim, provavelmente","Talvez","Não acredito","Não tenho opinião"]
          },
          {
            id: "q19", text: "Quais ações você gostaria que a escola adotasse em relação ao lixo eletrônico?",
            ods: "ODS 4 / ODS 12",
            hint: "Pode marcar mais de uma opção.",
            type: "checkbox",
            options: ["Ponto de coleta permanente na escola","Campanhas de conscientização nas aulas","Parcerias com empresas de reciclagem","Atividades práticas de desmontagem e reaproveitamento","Integração com o conteúdo programático das disciplinas","Nenhuma — não acho necessário"]
          },
          {
            id: "q20", text: "De forma geral, como você avalia o nível de atenção da sua escola com questões ambientais?",
            ods: "ODS 13 — Ação Climática",
            type: "likert",
            labels: ["Muito ruim", "Excelente"]
          }
        ]
      }
    ];

    let current = 0;
    const answers = {};

    function totalQuestionsUpTo(stepIdx) {
      let count = 0;
      for (let s = 0; s < stepIdx; s++) count += steps[s].questions.length;
      return count;
    }

    function updateProgress() {
      const pct = Math.round((current / steps.length) * 100);
      document.getElementById('prog').style.width = pct + '%';
      document.getElementById('pct-label').textContent = pct + '%';
      document.getElementById('step-label').textContent = `Seção ${current + 1} de ${steps.length}`;
    }

    function renderQuestion(q, idx) {
      const num = totalQuestionsUpTo(current) + idx + 1;
      let html = `<div class="q-block">
        <div class="q-num">Pergunta ${num} de 20</div>
        <div class="q-label">${q.text}</div>`;
      if (q.ods) html += `<div class="q-ods">${q.ods}</div>`;
      if (q.hint) html += `<div class="q-hint">${q.hint}</div>`;

      if (q.type === 'radio') {
        html += `<div class="options">`;
        q.options.forEach(opt => {
          const sel = answers[q.id] === opt ? 'selected' : '';
          html += `<label class="opt-row ${sel}">
            <input type="radio" name="${q.id}" value="${opt}" ${answers[q.id] === opt ? 'checked' : ''} onchange="selectOpt('${q.id}', this)">
            <span class="opt-text">${opt}</span>
          </label>`;
        });
        html += `</div>`;
      } else if (q.type === 'checkbox') {
        if (!answers[q.id]) answers[q.id] = [];
        html += `<div class="options">`;
        q.options.forEach(opt => {
          const checked = answers[q.id].includes(opt);
          html += `<label class="opt-row ${checked ? 'selected' : ''}">
            <input type="checkbox" name="${q.id}" value="${opt}" ${checked ? 'checked' : ''} onchange="toggleCheck('${q.id}', this)">
            <span class="opt-text">${opt}</span>
          </label>`;
        });
        html += `</div>`;
      } else if (q.type === 'likert') {
        const val = answers[q.id] || null;
        html += `<div class="likert-wrap">`;
        for (let i = 1; i <= 5; i++) {
          html += `<div class="likert-btn ${val == i ? 'selected' : ''}" onclick="selectLikert('${q.id}', ${i}, this)">${i}</div>`;
        }
        html += `</div><div class="likert-labels"><span>${q.labels[0]}</span><span>${q.labels[1]}</span></div>`;
      }

      html += `</div>`;
      return html;
    }

    function selectOpt(qid, input) {
      answers[qid] = input.value;
      const rows = input.closest('.options').querySelectorAll('.opt-row');
      rows.forEach(r => r.classList.remove('selected'));
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

    function render() {
      const s = steps[current];
      let html = `<div class="section-card">
        <div class="section-label">${s.label}</div>
        <div class="section-title">${s.title}</div>
        <div class="section-desc">${s.desc}</div>`;
      s.questions.forEach((q, i) => { html += renderQuestion(q, i); });
      html += `</div>
        <div class="nav-row">`;
      if (current > 0) html += `<button class="btn-nav" onclick="goBack()">← Voltar</button>`;
      if (current < steps.length - 1) {
        html += `<button class="btn-nav btn-next" onclick="goNext()">Próxima seção →</button>`;
      } else {
        html += `<button class="btn-nav btn-next" onclick="submit()">Enviar respostas</button>`;
      }
      html += `<span class="step-counter">${current + 1} / ${steps.length}</span></div>`;
      document.getElementById('form-body').innerHTML = html;
      updateProgress();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function goNext() {
      if (current < steps.length - 1) { current++; render(); }
    }

    function goBack() {
      if (current > 0) { current--; render(); }
    }

    function submit() {
      document.getElementById('form-body').innerHTML = `
        <div class="section-card">
          <div class="success-screen">
            <div class="success-icon">✓</div>
            <div class="success-title">Respostas enviadas com sucesso!</div>
            <div class="success-sub">
              Obrigado por participar desta pesquisa. Suas respostas contribuem para a análise estatística
              sobre e-waste e sustentabilidade em ambientes escolares, em alinhamento com as
              ODS 4, 12 e 13 da Agenda 2030 da ONU.
            </div>
          </div>
        </div>`;
      document.getElementById('prog').style.width = '100%';
      document.getElementById('pct-label').textContent = '100%';
      document.getElementById('step-label').textContent = 'Concluído';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render();
  </script>
