/* eslint-disable no-use-before-define */
(() => {
  const content = {
    explorer: {
      steps: [
        {
          title: "Comprendre le problème",
          kicker: "Étape 01",
          desc:
            "Identifier la situation et définir clairement le problème. Poser les bonnes questions pour éviter la confusion et ne pas se précipiter vers une solution inadaptée.",
        },
        {
          title: "Analyser",
          kicker: "Étape 02",
          desc:
            "Collecter et examiner les informations disponibles. Comprendre les causes du problème en utilisant la logique et en évaluant les données de manière objective.",
        },
        {
          title: "Relier les informations",
          kicker: "Étape 03",
          desc:
            "Établir des liens entre les informations. Visualiser les relations causes ↔ conséquences afin d’avoir une vision globale de la situation.",
        },
        {
          title: "Décider",
          kicker: "Étape 04",
          desc:
            "Choisir la solution la plus adaptée. La décision doit être réfléchie et basée sur les éléments étudiés pour obtenir le meilleur résultat possible.",
        },
      ],
      process: [
        {
          title: "Identifier le problème",
          kicker: "Processus 01",
          desc:
            "Définir clairement le problème à résoudre. Plus le problème est précis, plus l’analyse sera pertinente.",
        },
        {
          title: "Collecter les informations",
          kicker: "Processus 02",
          desc:
            "Rassembler les données nécessaires (chiffres, observations, témoignages). Elles doivent être fiables et pertinentes pour éviter les erreurs.",
        },
        {
          title: "Analyser les données",
          kicker: "Processus 03",
          desc:
            "Examiner les informations collectées pour comprendre les relations et identifier les facteurs qui influencent le problème. Utiliser des outils d’analyse si besoin.",
        },
        {
          title: "Tirer une conclusion",
          kicker: "Processus 04",
          desc:
            "Choisir la solution la plus adaptée, basée sur des faits et un raisonnement logique, puis vérifier qu’elle est applicable pour passer à l’action.",
        },
      ],
      definitionCards: [
        {
          title: "Analyse logique d’une situation",
          desc: "Examiner une situation avec un raisonnement logique structuré.",
          badge: "Logique",
        },
        {
          title: "Décomposition du problème",
          desc: "Diviser un problème complexe en parties simples et compréhensibles.",
          badge: "Décomposer",
        },
        {
          title: "Basée sur des faits & des données",
          desc: "S’appuyer sur des données réelles et des faits objectifs.",
          badge: "Data",
        },
      ],
    },
    importance: [
      {
        title: "Décisions basées sur les faits",
        desc: "Moins d’intuition “au hasard”, plus de décisions argumentées.",
        example:
          "Exemple : avant de choisir une techno, compare des critères (temps, coût, maintenabilité) + quelques benchmarks simples au lieu de suivre juste une tendance.",
        badge: "Faits",
      },
      {
        title: "Résolution de problèmes complexes",
        desc: "Structurer le problème pour avancer étape par étape.",
        example:
          "Exemple : pour un bug difficile, tu le décomposes (UI, API, DB), tu reproduis, tu isoles la cause, puis tu valides la correction avec un test.",
        badge: "Complexe",
      },
      {
        title: "Réduction des erreurs & biais",
        desc: "Prendre du recul, vérifier, confronter les hypothèses.",
        example:
          "Exemple : tu écris tes hypothèses (cause A / cause B), tu collectes des logs/mesures et tu élimines les hypothèses une à une au lieu de “deviner”.",
        badge: "Biais",
      },
      {
        title: "Indispensable en IA & Data Science",
        desc: "Analyser des données et valider des modèles de manière rigoureuse.",
        example:
          "Exemple : tu vérifies la qualité des données, tu choisis des métriques adaptées, tu fais une validation (train/test) et tu interprètes les résultats avant de déployer.",
        badge: "IA/Data",
      },
      {
        title: "Performance pro & perso",
        desc: "Mieux prioriser, planifier et décider au quotidien.",
        example:
          "Exemple : tu compares 2 options (stages, projets, achats) avec une matrice simple : impact, effort, risque, délai — puis tu tranches.",
        badge: "Impact",
      },
    ],
    applications: [
      {
        id: "ai",
        label: "IA",
        title: "En Intelligence Artificielle",
        meta: "Analyse de données, modèles prédictifs.",
        bullets: ["Nettoyage & exploration des données", "Choix des variables (features)", "Évaluation et interprétation"],
        example:
          "Cas concret : prédire l’attrition (churn) d’utilisateurs. Tu vérifies les données, tu testes plusieurs modèles, tu compares les métriques (F1/AUC) et tu expliques les facteurs clés.",
      },
      {
        id: "business",
        label: "Business",
        title: "En entreprise",
        meta: "Prise de décision stratégique.",
        bullets: ["Analyser le marché & la concurrence", "Estimer coûts/ROI et risques", "Choisir une stratégie mesurable"],
        example:
          "Cas concret : choisir une fonctionnalité à lancer. Tu analyses la demande, l’effort, l’impact, tu priorises et tu définis des KPIs pour vérifier la décision.",
      },
      {
        id: "it",
        label: "Informatique",
        title: "En informatique",
        meta: "Résolution de problèmes complexes.",
        bullets: ["Débogage et isolation de la cause", "Lecture de logs / traces", "Refactoring ciblé et tests"],
        example:
          "Cas concret : une API est lente. Tu mesures (profiling), tu identifies le bottleneck (DB/cache/réseau) et tu testes une amélioration (index, cache, pagination).",
      },
      {
        id: "life",
        label: "Vie",
        title: "Dans la vie quotidienne",
        meta: "Analyse des situations et choix rationnels.",
        bullets: ["Budget : comparer options et priorités", "Organisation : plan d’action simple", "Décisions : critères + preuves"],
        example:
          "Cas concret : planifier un mois d’études/projets. Tu listes objectifs, tu estimes le temps, tu bloques des créneaux, puis tu ajustes selon les résultats.",
      },
    ],
    quiz: {
      title: "Are you analytical?",
      questions: [
        {
          title: "Quand tu reçois un problème flou, tu fais quoi en premier ?",
          choices: [
            { label: "Je propose une solution directe pour avancer vite.", points: 0 },
            { label: "Je clarifie le besoin et je reformule le problème.", points: 2 },
            { label: "Je cherche un exemple/une reproduction minimale.", points: 1 },
          ],
        },
        {
          title: "Tu dois choisir entre 2 options. Ta méthode ?",
          choices: [
            { label: "Je choisis celle qui “me semble” la meilleure.", points: 0 },
            { label: "Je compare des critères (coût, impact, risque, délai).", points: 2 },
            { label: "Je demande l’avis de quelqu’un et je suis.", points: 1 },
          ],
        },
        {
          title: "Devant des données, tu préfères…",
          choices: [
            { label: "Aller directement au graphe final.", points: 0 },
            { label: "Nettoyer, vérifier et explorer avant de conclure.", points: 2 },
            { label: "Tester rapidement une hypothèse puis itérer.", points: 1 },
          ],
        },
        {
          title: "Quand une solution ne marche pas…",
          choices: [
            { label: "Je change complètement d’approche.", points: 0 },
            { label: "J’isole la cause, je teste et je valide étape par étape.", points: 2 },
            { label: "Je fais plusieurs essais jusqu’à ce que ça passe.", points: 1 },
          ],
        },
        {
          title: "Ton point fort en analyse ?",
          choices: [
            { label: "Je vois vite une direction générale.", points: 1 },
            { label: "Je structure, je prouve, je minimise les biais.", points: 2 },
            { label: "Je me fie à mon intuition.", points: 0 },
          ],
        },
      ],
    },
    conclusion: [
      {
        title: "Think",
        icon: "🧠",
        desc: "Clarifie le problème et pose les bonnes questions.",
      },
      {
        title: "Analyze",
        icon: "📊",
        desc: "Collecte des infos, relie les données, identifie les causes.",
      },
      {
        title: "Decide",
        icon: "✅",
        desc: "Choisis une solution argumentée et passe à l’action.",
      },
    ],
  };

  const state = {
    explorerTab: "steps",
    explorerIndex: 0,
    appsTab: content.applications[0]?.id ?? "ai",
    quiz: { index: 0, answers: [], score: 0 },
  };

  let lastModalFocus = null;

  boot();

  function boot() {
    initTheme();
    initModal();
    renderExplorer();
    renderImportance();
    renderApps();
    renderQuiz();
    renderConclusion();
    initReveal();
  }

  function initTheme() {
    const key = "pa_theme";
    const root = document.documentElement;
    const btn = byId("themeToggle");
    const stored = localStorage.getItem(key);
    if (stored === "light" || stored === "dark") {
      root.dataset.theme = stored;
    }
    btn?.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      localStorage.setItem(key, next);
    });
  }

  function initModal() {
    const modal = byId("modal");
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.dataset.close === "true") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      if (modal.hidden) return;
      const focusables = getFocusable(modal);
      if (!focusables.length) return;
      const active = document.activeElement;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (active === first || active === modal) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  function openModal(title, bodyHtml) {
    const modal = byId("modal");
    const modalTitle = byId("modalTitle");
    const modalBody = byId("modalBody");
    if (!modal || !modalTitle || !modalBody) return;
    lastModalFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modalTitle.textContent = title;
    modalBody.innerHTML = bodyHtml;
    modal.hidden = false;
    document.body.classList.add("no-scroll");

    const focusables = getFocusable(modal);
    const next = focusables[0] ?? modal.querySelector(".modal__close");
    if (next instanceof HTMLElement) next.focus();
  }

  function closeModal() {
    const modal = byId("modal");
    if (!modal) return;
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastModalFocus instanceof HTMLElement) lastModalFocus.focus();
  }

  function renderExplorer() {
    const container = byId("explorerContent");
    const tabButtons = Array.from(document.querySelectorAll(".segmented__btn"));
    if (!container) return;

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        if (!tab) return;
        state.explorerTab = tab;
        state.explorerIndex = 0;
        tabButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
        tabButtons.forEach((b) => b.setAttribute("aria-selected", b === btn ? "true" : "false"));
        paintExplorer(container);
      });
    });

    paintExplorer(container);
  }

  function paintExplorer(container) {
    const mode = state.explorerTab;
    if (mode === "definition") {
      container.innerHTML = `
        <div class="grid2">
          <div>
            <h3 class="apps__title">Définition (résumé)</h3>
            <p class="apps__meta">
              La pensée analytique consiste à <strong>décomposer</strong> un problème, analyser avec une logique
              structurée, et s’appuyer sur des <strong>faits</strong> et des <strong>données</strong>.
            </p>
            <div class="cards" id="defCards"></div>
          </div>
          <div class="callout">
            <p class="callout__title">Problématique</p>
            <p class="callout__body">
              Comment mobiliser la pensée analytique pour éviter la désorientation face à des problèmes complexes ?
            </p>
            <p class="callout__title" style="margin-top: 12px;">Objectifs</p>
            <ul class="list">
              <li>Comprendre la notion de pensée analytique</li>
              <li>Identifier son importance dans la vie quotidienne et professionnelle</li>
              <li>Découvrir ses principales applications</li>
            </ul>
          </div>
        </div>
      `;

      const defCards = byId("defCards");
      if (defCards) {
        defCards.innerHTML = content.explorer.definitionCards
          .map((c) => cardHtml({ ...c, onClick: false }))
          .join("");
      }
      return;
    }

    const items = mode === "process" ? content.explorer.process : content.explorer.steps;
    const title = mode === "process" ? "Processus" : "Étapes";
    const subtitle =
      mode === "process"
        ? "Un enchaînement complet : du problème à la conclusion."
        : "Une démarche pour comprendre et décider efficacement.";

    container.innerHTML = `
      <div class="grid2">
        <div class="steps" id="stepList" aria-label="${title}"></div>
        <div class="callout" aria-live="polite">
          <p class="callout__title">${title} — focus</p>
          <p class="callout__body" id="stepFocus"></p>
          <p class="callout__title" style="margin-top: 12px;">Pourquoi c’est utile ?</p>
          <p class="callout__body">${subtitle}</p>
          <div style="margin-top: 14px;">
            <button class="btn btn--primary" type="button" id="stepNext">Suivant</button>
            <button class="btn btn--ghost" type="button" id="stepMore">Exemple</button>
          </div>
        </div>
      </div>
    `;

    const listEl = byId("stepList");
    const focusEl = byId("stepFocus");
    if (!listEl || !focusEl) return;

    listEl.innerHTML = items
      .map((it, idx) => stepHtml({ ...it, index: idx, active: idx === state.explorerIndex }))
      .join("");

    const updateFocus = () => {
      const it = items[state.explorerIndex];
      focusEl.textContent = it?.desc ?? "";
      listEl.querySelectorAll(".step").forEach((el, idx) => el.classList.toggle("is-active", idx === state.explorerIndex));
    };

    listEl.querySelectorAll(".step").forEach((el) => {
      el.addEventListener("click", () => {
        const idx = Number(el.getAttribute("data-index"));
        if (!Number.isFinite(idx)) return;
        state.explorerIndex = idx;
        updateFocus();
      });
    });

    byId("stepNext")?.addEventListener("click", () => {
      state.explorerIndex = (state.explorerIndex + 1) % items.length;
      updateFocus();
    });

    byId("stepMore")?.addEventListener("click", () => {
      const it = items[state.explorerIndex];
      if (!it) return;
      openModal(it.title, `<p>${escapeHtml(it.desc)}</p>`);
    });

    updateFocus();
  }

  function renderImportance() {
    const root = byId("importanceCards");
    if (!root) return;
    root.innerHTML = content.importance.map((c, idx) => cardHtml({ ...c, index: idx, onClick: true })).join("");
    root.querySelectorAll("[data-importance]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-importance"));
        const item = content.importance[idx];
        if (!item) return;
        openModal(
          item.title,
          `<p>${escapeHtml(item.desc)}</p><div class="callout" style="margin-top:12px;"><p class="callout__title">Exemple concret</p><p class="callout__body">${escapeHtml(
            item.example,
          )}</p></div>`,
        );
      });
    });
  }

  function renderApps() {
    const tabs = byId("appsTabs");
    const contentEl = byId("appsContent");
    if (!tabs || !contentEl) return;

    tabs.innerHTML = content.applications
      .map(
        (app) => `
          <button class="tab ${app.id === state.appsTab ? "is-active" : ""}" type="button" role="tab" data-tab="${
            app.id
          }" aria-selected="${app.id === state.appsTab ? "true" : "false"}">
            ${escapeHtml(app.label)}
          </button>
        `,
      )
      .join("");

    const paint = () => {
      const app = content.applications.find((a) => a.id === state.appsTab) ?? content.applications[0];
      if (!app) return;
      contentEl.innerHTML = `
        <h3 class="apps__title">${escapeHtml(app.title)}</h3>
        <p class="apps__meta">${escapeHtml(app.meta)}</p>
        <ul class="list">
          ${app.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
        <div class="callout">
          <p class="callout__title">Exemple réel</p>
          <p class="callout__body">${escapeHtml(app.example)}</p>
        </div>
      `;
    };

    tabs.querySelectorAll(".tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        if (!tab) return;
        state.appsTab = tab;
        tabs.querySelectorAll(".tab").forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        paint();
      });
    });

    paint();
  }

  function renderQuiz() {
    const root = byId("quizRoot");
    if (!root) return;
    const key = "pa_quiz";
    const stored = safeJsonParse(localStorage.getItem(key));
    if (stored && Array.isArray(stored.answers)) {
      state.quiz.answers = stored.answers;
      state.quiz.index = Math.min(stored.answers.length, content.quiz.questions.length);
    }

    const paint = () => {
      const total = content.quiz.questions.length;
      const answered = state.quiz.answers.length;
      const pct = Math.round((answered / total) * 100);
      const done = answered >= total;

      root.innerHTML = `
        <div class="quiz__row">
          <div class="quiz__kicker">
            <span><strong>${escapeHtml(content.quiz.title)}</strong></span>
            <span>${answered}/${total}</span>
          </div>
          <div class="progress" aria-label="Progression du quiz"><span style="width:${pct}%"></span></div>
          <div id="quizBody"></div>
        </div>
      `;

      const body = byId("quizBody");
      if (!body) return;

      if (done) {
        const score = computeQuizScore();
        const max = total * 2;
        const { label, tip } = scoreLabel(score, max);
        body.innerHTML = `
          <div class="result" role="status">
            <h3 class="result__title">${escapeHtml(label)} — ${score}/${max}</h3>
            <p class="result__body">${escapeHtml(tip)}</p>
            <div class="result__actions">
              <button class="btn btn--primary" type="button" id="quizReset">Rejouer</button>
              <button class="btn btn--ghost" type="button" id="quizReview">Voir mes réponses</button>
            </div>
          </div>
        `;

        byId("quizReset")?.addEventListener("click", () => {
          state.quiz.answers = [];
          state.quiz.index = 0;
          localStorage.removeItem(key);
          paint();
        });

        byId("quizReview")?.addEventListener("click", () => {
          openModal("Mes réponses", renderQuizReviewHtml());
        });
        return;
      }

      const q = content.quiz.questions[answered];
      if (!q) return;
      body.innerHTML = `
        <div class="q">
          <h3 class="q__title">${escapeHtml(q.title)}</h3>
          <div class="choices" id="choices"></div>
        </div>
      `;

      const choices = byId("choices");
      if (!choices) return;

      choices.innerHTML = q.choices
        .map(
          (c, idx) => `
            <button class="choice" type="button" data-choice="${idx}">
              ${escapeHtml(c.label)}
            </button>
          `,
        )
        .join("");

      choices.querySelectorAll(".choice").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-choice"));
          const picked = q.choices[idx];
          if (!picked) return;
          state.quiz.answers.push({ q: answered, choice: idx, points: picked.points });
          localStorage.setItem(key, JSON.stringify({ answers: state.quiz.answers }));
          paint();
        });
      });
    };

    paint();
  }

  function renderConclusion() {
    const root = byId("conclusionTrack");
    if (!root) return;
    root.innerHTML = content.conclusion
      .map(
        (m, idx) => `
          <div class="milestone" data-milestone="${idx}">
            <div class="milestone__icon" aria-hidden="true">${escapeHtml(m.icon)}</div>
            <div>
              <h3 class="milestone__title">${escapeHtml(m.title)}</h3>
              <p class="milestone__desc">${escapeHtml(m.desc)}</p>
            </div>
          </div>
        `,
      )
      .join("");

    if (typeof IntersectionObserver === "undefined") {
      root.querySelectorAll(".milestone").forEach((el) => el.classList.add("is-active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          animateMilestones(root);
          observer.disconnect();
          break;
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(root);
  }

  function animateMilestones(root) {
    const items = Array.from(root.querySelectorAll(".milestone"));
    items.forEach((el) => el.classList.remove("is-active"));
    let i = 0;
    const tick = () => {
      items.forEach((el, idx) => el.classList.toggle("is-active", idx === i));
      i += 1;
      if (i >= items.length) {
        items.forEach((el) => el.classList.add("is-active"));
        return;
      }
      window.setTimeout(tick, 420);
    };
    tick();
  }

  function initReveal() {
    const els = Array.from(document.querySelectorAll(".section, .hero"));
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (!(e.target instanceof HTMLElement)) return;
          e.target.style.transform = "none";
          e.target.style.opacity = "1";
          io.unobserve(e.target);
        });
      },
      { threshold: 0.06 },
    );

    els.forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
      el.style.transition = "opacity 420ms ease, transform 420ms ease";
      io.observe(el);
    });
  }

  function cardHtml({ title, desc, badge, index, onClick }) {
    const tag = badge ? `<span class="badge">${escapeHtml(badge)}</span>` : "";
    const attrs = onClick ? ` data-importance="${index}"` : "";
    return `
      <button class="card"${attrs} type="button">
        <div class="card__top">
          <h3 class="card__title">${escapeHtml(title)}</h3>
          ${tag}
        </div>
        <p class="card__desc">${escapeHtml(desc)}</p>
      </button>
    `;
  }

  function stepHtml({ kicker, title, desc, index, active }) {
    return `
      <button class="step ${active ? "is-active" : ""}" type="button" data-index="${index}">
        <div class="step__kicker">${escapeHtml(kicker)}</div>
        <h3 class="step__title">${escapeHtml(title)}</h3>
        <p class="step__desc">${escapeHtml(desc)}</p>
      </button>
    `;
  }

  function computeQuizScore() {
    return state.quiz.answers.reduce((sum, a) => sum + (a?.points ?? 0), 0);
  }

  function scoreLabel(score, max) {
    const ratio = max ? score / max : 0;
    if (ratio >= 0.8) {
      return {
        label: "Très analytique",
        tip: "Tu structures, tu vérifies et tu décides avec des preuves. Prochaine étape : systématiser avec des petits checklists (hypothèses, métriques, tests).",
      };
    }
    if (ratio >= 0.5) {
      return {
        label: "Plutôt analytique",
        tip: "Bonne base : tu analyses souvent avant de conclure. Pour gagner en précision, prends l’habitude d’écrire 2–3 hypothèses et de les valider avec des données.",
      };
    }
    return {
      label: "Plutôt intuitif",
      tip: "Ton intuition t’aide à avancer, mais tu peux réduire les erreurs avec une méthode : clarifier le problème, collecter des faits, puis comparer des critères avant de décider.",
    };
  }

  function renderQuizReviewHtml() {
    const lines = content.quiz.questions.map((q, qi) => {
      const ans = state.quiz.answers.find((a) => a.q === qi);
      const picked = ans ? q.choices[ans.choice] : null;
      return `<div class="callout" style="margin-top:12px;">
        <p class="callout__title">${escapeHtml(q.title)}</p>
        <p class="callout__body">${picked ? escapeHtml(picked.label) : "—"}</p>
      </div>`;
    });
    return `<p>Voici tes réponses enregistrées localement.</p>${lines.join("")}`;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function safeJsonParse(v) {
    if (!v) return null;
    try {
      return JSON.parse(v);
    } catch {
      return null;
    }
  }

  function escapeHtml(str) {
    const s = String(str ?? "");
    return s
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getFocusable(root) {
    if (!(root instanceof HTMLElement)) return [];
    const selector =
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
    const els = Array.from(root.querySelectorAll(selector)).filter(
      (el) =>
        el instanceof HTMLElement &&
        !el.hasAttribute("disabled") &&
        el.getAttribute("aria-hidden") !== "true",
    );
    return els;
  }
})();
