
"use strict";

/* ==========================================
   HEIST TRACKER - GTA ONLINE
   Primera versión: estructura y datos locales
   ========================================== */

const STORAGE_KEY = "heistTrackerGTA_v1";

const heists = [
  {
    id: "fleeca",
    name: "Golpe al Fleeca",
    category: "golpe",
    group: "Golpes originales",
    description: "El primer golpe cooperativo, dividido en preparación y final.",
    missions: [
      { id: "scout", name: "Reconocimiento", detail: "Preparativo del golpe." },
      { id: "kuruma", name: "Kuruma", detail: "Preparativo del vehículo." },
      { id: "final", name: "Golpe final", detail: "Registrar por separado el tiempo del final." }
    ]
  },
  {
    id: "prison",
    name: "Fuga de prisión",
    category: "golpe",
    group: "Golpes originales",
    description: "Preparativos, equipos y fuga final.",
    missions: [
      { id: "plane", name: "Avión", detail: "Preparativo." },
      { id: "bus", name: "Autobús de la prisión", detail: "Preparativo." },
      { id: "station", name: "Estación", detail: "Preparativo." },
      { id: "wetwork", name: "Trabajo sucio", detail: "Preparativo." },
      { id: "final", name: "Golpe final", detail: "Fuga de prisión." }
    ]
  },
  {
    id: "humane",
    name: "Laboratorios Humane",
    category: "golpe",
    group: "Golpes originales",
    description: "Operaciones preparatorias y asalto a los laboratorios.",
    missions: [
      { id: "key-codes", name: "Códigos", detail: "Preparativo." },
      { id: "insurgents", name: "Insurgentes", detail: "Preparativo." },
      { id: "emp", name: "EMP", detail: "Preparativo." },
      { id: "valkyrie", name: "Valkyrie", detail: "Preparativo." },
      { id: "deliver-emp", name: "Entrega del EMP", detail: "Preparativo." },
      { id: "final", name: "Golpe final", detail: "Asalto a Humane Labs." }
    ]
  },
  {
    id: "series-a",
    name: "Financiación Serie A",
    category: "golpe",
    group: "Golpes originales",
    description: "Preparativos para el golpe de financiación.",
    missions: [
      { id: "coke", name: "Cocaína", detail: "Preparativo." },
      { id: "trash-truck", name: "Camión de basura", detail: "Preparativo." },
      { id: "bikers", name: "Motociclistas", detail: "Preparativo." },
      { id: "weed", name: "Marihuana", detail: "Preparativo." },
      { id: "meth", name: "Metanfetamina", detail: "Preparativo." },
      { id: "final", name: "Golpe final", detail: "Financiación Serie A." }
    ]
  },
  {
    id: "pacific",
    name: "Pacific Standard",
    category: "golpe",
    group: "Golpes originales",
    description: "Preparativos y asalto final al banco.",
    missions: [
      { id: "vans", name: "Furgonetas", detail: "Preparativo." },
      { id: "signal", name: "Señal", detail: "Preparativo." },
      { id: "hack", name: "Hackeo", detail: "Preparativo." },
      { id: "convoy", name: "Convoy", detail: "Preparativo." },
      { id: "bikes", name: "Motocicletas", detail: "Preparativo." },
      { id: "final", name: "Golpe final", detail: "Pacific Standard." }
    ]
  },
  {
    id: "doomsday",
    name: "Golpe del Juicio Final",
    category: "golpe",
    group: "Golpes avanzados",
    description: "Tres actos, cada uno con sus preparativos y su final.",
    missions: [
      { id: "act1", name: "Acto I: Filtración de datos", detail: "Añadiremos el desglose completo de misiones." },
      { id: "act2", name: "Acto II: El problema Bogdan", detail: "Añadiremos el desglose completo de misiones." },
      { id: "act3", name: "Acto III: El escenario del Juicio Final", detail: "Añadiremos el desglose completo de misiones." }
    ]
  },
  {
    id: "casino",
    name: "Casino Diamond",
    category: "golpe",
    group: "Golpes avanzados",
    description: "Tres enfoques: Sigilo, Engaño y Agresivo.",
    variants: [
      { id: "silent", name: "Sigilo" },
      { id: "bigcon", name: "Engaño" },
      { id: "aggressive", name: "Agresivo" }
    ],
    missions: [
      { id: "scope", name: "Reconocimiento del casino", detail: "Registra el progreso de reconocimiento." },
      { id: "approach", name: "Elegir enfoque", detail: "Selecciona el enfoque del intento." },
      { id: "mandatory", name: "Preparativos obligatorios", detail: "Completa los preparativos que correspondan al enfoque." },
      { id: "optional", name: "Preparativos opcionales", detail: "Marca solo los que realices." },
      { id: "final", name: "Golpe final", detail: "El cronómetro del golpe final es independiente." }
    ]
  },
  {
    id: "cayo",
    name: "Cayo Perico",
    category: "golpe",
    group: "Golpes avanzados",
    description: "Reconocimiento, equipo, infiltración y objetivo principal.",
    missions: [
      { id: "intel", name: "Recopilar información", detail: "Reconocimiento de la isla." },
      { id: "approach", name: "Vehículo de aproximación", detail: "Registra el medio elegido." },
      { id: "equipment", name: "Equipamiento", detail: "Marca los preparativos realizados." },
      { id: "weapons", name: "Armamento", detail: "Registra el preparativo de armas." },
      { id: "disruption", name: "Preparativos opcionales", detail: "Marca los que realices." },
      { id: "final", name: "Golpe final", detail: "Registra el tiempo del asalto." }
    ]
  },
  {
    id: "cluckin",
    name: "Asalto a la granja Cluckin' Bell",
    category: "otro",
    group: "Otros atracos",
    description: "Operación de Vincent con misiones preparatorias y final.",
    missions: [
      { id: "investigate", name: "Investigación", detail: "Primera parte de la operación." },
      { id: "prep", name: "Preparativos", detail: "Registra las misiones realizadas." },
      { id: "final", name: "Final de la operación", detail: "Cronómetro del asalto final." }
    ]
  },
  {
    id: "salvage",
    name: "Robos del desguace",
    category: "otro",
    group: "Otros atracos",
    description: "Organiza cada robo y conserva sus tiempos.",
    missions: [
      { id: "planning", name: "Planificación", detail: "Preparativos del robo elegido." },
      { id: "prep", name: "Misiones preparatorias", detail: "Registra las que correspondan." },
      { id: "final", name: "Robo final", detail: "Cronómetro del final." }
    ]
  },
  {
    id: "autoshop",
    name: "Contratos del taller",
    category: "otro",
    group: "Otros atracos",
    description: "Contratos de varias misiones y su operación final.",
    missions: [
      { id: "setup", name: "Preparativos", detail: "Registra las misiones realizadas." },
      { id: "final", name: "Final del contrato", detail: "Cronómetro del final." }
    ]
  },
  {
    id: "fib",
    name: "Archivos FIB",
    category: "otro",
    group: "Otros atracos",
    description: "Operaciones de archivos y misiones de infiltración.",
    missions: [
      { id: "investigation", name: "Investigación", detail: "Registra el progreso." },
      { id: "prep", name: "Preparativos", detail: "Marca las misiones aplicables." },
      { id: "final", name: "Operación final", detail: "Cronómetro de la operación." }
    ]
  }
];

const defaultState = {
  profiles: {
    me: "Mi perfil",
    partner: "Perfil de mi novia"
  },
  activeProfile: "me",
  checks: {},
  variants: {},
  attempts: []
};

let state = loadState();
let currentScreen = "inicio";
let selectedHeistId = null;

let timer = {
  running: false,
  elapsedBeforeStart: 0,
  startedAt: null,
  interval: null
};

const $ = (selector) => document.querySelector(selector);

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(defaultState);

    const parsed = JSON.parse(saved);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      profiles: {
        ...defaultState.profiles,
        ...(parsed.profiles || {})
      },
      checks: parsed.checks || {},
      variants: parsed.variants || {},
      attempts: Array.isArray(parsed.attempts) ? parsed.attempts : []
    };
  } catch (error) {
    console.error("No se pudieron cargar los datos locales:", error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("No se pudieron guardar los datos:", error);
    showToast("No se pudieron guardar los datos en este navegador.");
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function formatTime(milliseconds, tenths = false) {
  const total = Math.max(0, milliseconds);
  const totalSeconds = Math.floor(total / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const tenth = Math.floor((total % 1000) / 100);

  const clock = [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0")
  ];

  if (hours > 0) return `${clock[0]}:${clock[1]}:${clock[2]}`;
  if (tenths) return `${clock[1]}:${clock[2]}.${tenth}`;
  return `${clock[1]}:${clock[2]}`;
}

function getElapsed() {
  return timer.elapsedBeforeStart +
    (timer.running ? Date.now() - timer.startedAt : 0);
}

function getHeist(id) {
  return heists.find((heist) => heist.id === id);
}

function getChecks(heistId) {
  return state.checks[heistId] || {};
}

function getProgress(heist) {
  const checks = getChecks(heist.id);
  const total = heist.missions.length;
  const completed = heist.missions.filter((mission) => checks[mission.id]).length;
  return {
    total,
    completed,
    percent: total ? Math.round(completed / total * 100) : 0
  };
}

function getHeistCard(heist) {
  const progress = getProgress(heist);
  return `
    <article class="heist-card">
      <div class="heist-art">
        <span class="art-symbol">✦</span>
        <span class="art-label">${escapeHTML(heist.group.toUpperCase())}</span>
      </div>
      <div class="heist-body">
        <h3>${escapeHTML(heist.name)}</h3>
        <p>${escapeHTML(heist.description)}</p>
        <div class="heist-meta">
          <span>${progress.completed} de ${progress.total} tareas</span>
          <span>${progress.percent}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${progress.percent}%"></div>
        </div>
        <button class="primary-button" data-open-heist="${heist.id}">
          Abrir checklist →
        </button>
      </div>
    </article>
  `;
}

function renderHome() {
  $("#completedHeists").textContent = heists.filter(
    (heist) => getProgress(heist).percent === 100
  ).length;

  $("#completedMissions").textContent = heists.reduce(
    (sum, heist) => sum + getProgress(heist).completed, 0
  );

  $("#attemptCount").textContent = state.attempts.length;

  $("#featuredHeists").innerHTML = heists
    .filter((heist) => ["casino", "cayo"].includes(heist.id))
    .map(getHeistCard)
    .join("");
}

function renderHeists() {
  const search = ($("#heistSearch").value || "").trim().toLowerCase();
  const category = $("#categoryFilter").value;

  const filtered = heists.filter((heist) => {
    const matchesSearch =
      heist.name.toLowerCase().includes(search) ||
      heist.group.toLowerCase().includes(search);

    const matchesCategory =
      category === "todos" || heist.category === category;

    return matchesSearch && matchesCategory;
  });

  $("#allHeists").innerHTML = filtered.length
    ? filtered.map(getHeistCard).join("")
    : '<div class="empty-state">No encontramos golpes con esa búsqueda.</div>';
}

function renderDetail() {
  const heist = getHeist(selectedHeistId);
  if (!heist) {
    navigate("golpes");
    return;
  }

  const checks = getChecks(heist.id);
  const progress = getProgress(heist);
  const currentVariant = state.variants[heist.id] || "";

  const variantSelector = heist.variants
    ? `
      <div class="panel">
        <h2>Enfoque del golpe</h2>
        <label for="variantSelect">Selecciona la variante para este progreso</label>
        <select id="variantSelect">
          <option value="">Seleccionar enfoque...</option>
          ${heist.variants.map((variant) => `
            <option value="${variant.id}" ${currentVariant === variant.id ? "selected" : ""}>
              ${escapeHTML(variant.name)}
            </option>
          `).join("")}
        </select>
      </div>
    ` : "";

  $("#heistDetail").innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">${escapeHTML(heist.group.toUpperCase())}</p>
      <h1>${escapeHTML(heist.name)}<span class="accent">.</span></h1>
      <p>${escapeHTML(heist.description)}</p>
      <div class="heist-meta">
        <span>${progress.completed} de ${progress.total} tareas completadas</span>
        <span>${progress.percent}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${progress.percent}%"></div>
      </div>
    </div>
    ${variantSelector}
    <div class="panel">
      <h2>Checklist de misiones</h2>
      <p class="muted">Marca cada tarea cuando la hayas terminado. El progreso se guarda en este navegador.</p>
      ${heist.missions.map((mission) => {
        const checked = Boolean(checks[mission.id]);
        return `
          <div class="mission-row ${checked ? "mission-done" : ""}">
            <input type="checkbox"
              id="check-${heist.id}-${mission.id}"
              data-check-heist="${heist.id}"
              data-check-mission="${mission.id}"
              ${checked ? "checked" : ""}>
            <div class="mission-info">
              <strong>${escapeHTML(mission.name)}</strong>
              <small>${escapeHTML(mission.detail)}</small>
            </div>
            <button class="mission-time"
              data-time-mission="${heist.id}"
              data-time-name="${escapeHTML(mission.name)}">
              ⏱ Cronometrar
            </button>
          </div>
        `;
      }).join("")}
    </div>
    <div class="panel">
      <h2>Registrar un intento</h2>
      <p class="muted">Puedes cronometrar una misión individual o el golpe final desde aquí.</p>
      <button class="primary-button" data-start-heist-final="${heist.id}">
        ▶ Cronometrar golpe final
      </button>
    </div>
  `;
}

function navigate(screen) {
  currentScreen = screen;

  document.querySelectorAll(".screen").forEach((section) => {
    section.classList.toggle("active", section.id === `screen-${screen}`);
  });

  document.querySelectorAll(".nav-item, .mobile-nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === screen);
  });

  if (screen === "inicio") renderHome();
  if (screen === "golpes") renderHeists();
  if (screen === "detalle") renderDetail();
  if (screen === "records") renderRecords();
  if (screen === "historial") renderHistory();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openHeist(id) {
  selectedHeistId = id;
  navigate("detalle");
}

function renderTimer() {
  $("#timerDisplay").textContent = formatTime(getElapsed(), true);
  $("#startTimer").disabled = timer.running;
  $("#pauseTimer").disabled = !timer.running;
  $("#finishTimer").disabled = getElapsed() <= 0;
}

function startTimer() {
  if (timer.running) return;

  if (getElapsed() === 0) {
    const label = $("#timerLabel").value.trim();
    if (!label) {
      showToast("Escribe el nombre de la misión o golpe antes de iniciar.");
      $("#timerLabel").focus();
      return;
    }
  }

  timer.startedAt = Date.now();
  timer.running = true;

  clearInterval(timer.interval);
  timer.interval = setInterval(renderTimer, 100);
  $("#timerStatus").textContent = "Cronómetro en marcha.";
  renderTimer();
}

function pauseTimer() {
  if (!timer.running) return;

  timer.elapsedBeforeStart = getElapsed();
  timer.startedAt = null;
  timer.running = false;
  clearInterval(timer.interval);
  timer.interval = null;

  $("#timerStatus").textContent = "Cronómetro pausado.";
  renderTimer();
}

function resetTimer() {
  timer.running = false;
  timer.elapsedBeforeStart = 0;
  timer.startedAt = null;
  clearInterval(timer.interval);
  timer.interval = null;

  $("#timerStatus").textContent = "Cronómetro reiniciado.";
  renderTimer();
}

function finishTimer() {
  if (timer.running) pauseTimer();

  const elapsed = getElapsed();
  if (elapsed <= 0) {
    showToast("Inicia el cronómetro antes de guardar.");
    return;
  }

  const label = $("#timerLabel").value.trim();
  if (!label) {
    showToast("Escribe un nombre para este intento.");
    $("#timerLabel").focus();
    return;
  }

  const player = $("#timerPlayer").value;
  const type = $("#timerType").value;

  const attempt = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    label,
    type,
    player,
    duration: Math.round(elapsed),
    createdAt: new Date().toISOString(),
    heistId: selectedHeistId || null,
    variant: selectedHeistId ? (state.variants[selectedHeistId] || "") : ""
  };

  state.attempts.unshift(attempt);
  saveState();

  resetTimer();
  $("#timerLabel").value = "";
  $("#timerStatus").textContent = "Tiempo guardado correctamente.";
  renderAll();
  showToast("Intento guardado en este dispositivo.");
}

function startNamedTimer(label, type, player = "me") {
  if (timer.running || getElapsed() > 0) {
    showToast("Guarda o reinicia el cronómetro actual antes de cambiar de misión.");
    return;
  }

  $("#timerLabel").value = label;
  $("#timerType").value = type;
  $("#timerPlayer").value = player;
  $("#timerTask").textContent = label;
  navigate("cronometros");
  startTimer();
}

function renderRecords() {
  const individual = state.attempts.filter((attempt) =>
    attempt.player === "me" || attempt.player === "partner"
  );

  const joint = state.attempts.filter((attempt) => attempt.player === "joint");

  const bestIndividual = individual.length
    ? Math.min(...individual.map((attempt) => attempt.duration))
    : null;

  const bestJoint = joint.length
    ? Math.min(...joint.map((attempt) => attempt.duration))
    : null;

  $("#personalRecord").textContent =
    bestIndividual === null ? "--:--" : formatTime(bestIndividual);

  $("#jointRecord").textContent =
    bestJoint === null ? "--:--" : formatTime(bestJoint);

  $("#recordsList").innerHTML = state.attempts.length
    ? state.attempts.slice().sort((a, b) => a.duration - b.duration).map(
      (attempt) => recordHTML(attempt)
    ).join("")
    : '<div class="empty-state">Todavía no hay récords. Registra un tiempo para empezar.</div>';
}

function recordHTML(attempt) {
  const playerNames = {
    me: state.profiles.me,
    partner: state.profiles.partner,
    joint: "Partida conjunta"
  };

  const date = new Date(attempt.createdAt);
  const dateText = Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleString("es-EC");

  return `
    <article class="record-item">
      <div>
        <strong>${escapeHTML(attempt.label)}</strong>
        <small>${escapeHTML(playerNames[attempt.player] || "Sin perfil")} · ${attempt.type === "final" ? "Golpe final" : "Misión individual"}</small>
        <small>${escapeHTML(dateText)}</small>
      </div>
      <span class="record-time">${formatTime(attempt.duration)}</span>
    </article>
  `;
}

function renderHistory() {
  $("#historyList").innerHTML = state.attempts.length
    ? state.attempts.map(recordHTML).join("")
    : '<div class="empty-state">Tu historial está vacío.<br>Los tiempos guardados aparecerán aquí.</div>';
}

function renderProfiles() {
  $("#profileName").textContent = state.profiles[state.activeProfile];
  $(".avatar").textContent = state.activeProfile === "me" ? "P" : "N";
  $("#myName").value = state.profiles.me;
  $("#partnerName").value = state.profiles.partner;
}

function renderAll() {
  renderHome();
  renderHeists();
  renderProfiles();

  if (selectedHeistId) renderDetail();
  if (currentScreen === "records") renderRecords();
  if (currentScreen === "historial") renderHistory();
}

/* Navegación */

document.querySelectorAll("[data-screen]").forEach((button) => {
  button.addEventListener("click", () => navigate(button.dataset.screen));
});

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => navigate(button.dataset.go));
});

$("#profileButton").addEventListener("click", () => {
  state.activeProfile = state.activeProfile === "me" ? "partner" : "me";
  saveState();
  renderProfiles();
  showToast(`Perfil activo: ${state.profiles[state.activeProfile]}`);
});

$("#heistSearch").addEventListener("input", renderHeists);
$("#categoryFilter").addEventListener("change", renderHeists);

/* Acciones de golpes y misiones */

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-heist]");
  if (openButton) {
    openHeist(openButton.dataset.openHeist);
    return;
  }

  const missionButton = event.target.closest("[data-time-mission]");
  if (missionButton) {
    const heist = getHeist(missionButton.dataset.timeMission);
    const missionName = missionButton.dataset.timeName;
    if (!heist) return;

    selectedHeistId = heist.id;
    startNamedTimer(`${heist.name} — ${missionName}`, "mission", state.activeProfile);
    return;
  }

  const finalButton = event.target.closest("[data-start-heist-final]");
  if (finalButton) {
    const heist = getHeist(finalButton.dataset.startHeistFinal);
    if (!heist) return;

    selectedHeistId = heist.id;
    startNamedTimer(`${heist.name} — Golpe final`, "final", "joint");
  }
});

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-check-heist]");
  if (checkbox) {
    const heistId = checkbox.dataset.checkHeist;
    const missionId = checkbox.dataset.checkMission;

    if (!state.checks[heistId]) state.checks[heistId] = {};
    state.checks[heistId][missionId] = checkbox.checked;

    saveState();
    renderAll();
    showToast(checkbox.checked ? "Misión marcada como completada." : "Misión desmarcada.");
    return;
  }

  if (event.target.id === "variantSelect") {
    state.variants[selectedHeistId] = event.target.value;
    saveState();
    showToast("Enfoque guardado.");
  }
});

/* Cronómetro */

$("#startTimer").addEventListener("click", startTimer);
$("#pauseTimer").addEventListener("click", pauseTimer);
$("#finishTimer").addEventListener("click", finishTimer);
$("#resetTimer").addEventListener("click", resetTimer);

$("#timerLabel").addEventListener("input", () => {
  $("#timerTask").textContent = $("#timerLabel").value.trim() || "Sin misión seleccionada";
});

$("#timerPlayer").addEventListener("change", () => {
  if (timer.running || getElapsed() > 0) {
    showToast("El perfil se cambiará para el próximo intento.");
  }
});

/* Perfiles y ajustes */

$("#saveProfiles").addEventListener("click", () => {
  const myName = $("#myName").value.trim();
  const partnerName = $("#partnerName").value.trim();

  state.profiles.me = myName || "Mi perfil";
  state.profiles.partner = partnerName || "Perfil de mi novia";

  saveState();
  renderProfiles();
  renderRecords();
  renderHistory();
  showToast("Perfiles guardados en este dispositivo.");
});

$("#resetData").addEventListener("click", () => {
  const confirmed = window.confirm(
    "¿Seguro que quieres borrar todo el progreso, los perfiles y los tiempos guardados en este navegador? Esta acción no se puede deshacer."
  );

  if (!confirmed) return;

  if (timer.running) pauseTimer();
  resetTimer();

  state = structuredClone(defaultState);
  selectedHeistId = null;
  saveState();
  renderAll();
  navigate("inicio");
  showToast("Datos locales borrados.");
});

/* Inicio */

renderAll();
renderTimer();
navigate("inicio");
