const scenes = [
  {
    id: "clinic",
    title: "Community Health Clinic",
    category: "service",
    visualPosition: "0% 0%",
    mode: ["wheelchair", "mobility", "lowvision"],
    score: 92,
    summary: "A healthcare visit with step-free entry, reception guidance, quiet waiting, and clear room numbers.",
    tags: ["Step-free entry", "Priority seating", "Clear signage"],
    risks: ["Busy check-in desk", "Long corridors", "Appointment delays"],
    checklist: ["Confirm entrance ramp location", "Save clinic phone number", "Ask for seated check-in support"],
    route: "Best arrival: use the east entrance, pause at the seating zone, then follow the blue floor line to reception."
  },
  {
    id: "transit",
    title: "Accessible Transit Hub",
    category: "transit",
    visualPosition: "33.333% 0%",
    mode: ["wheelchair", "lowvision", "mobility"],
    score: 84,
    summary: "A bus and rail connection with elevators, tactile paths, audio announcements, and transfer seating.",
    tags: ["Elevator", "Audio alerts", "Tactile paving"],
    risks: ["Elevator crowding", "Platform noise", "Fast passenger flow"],
    checklist: ["Check elevator status", "Choose off-peak travel time", "Identify staff help point"],
    route: "Best arrival: enter through the elevator lobby, wait near the marked seating bay, and board from the front zone."
  },
  {
    id: "library",
    title: "Neighborhood Library",
    category: "indoor",
    visualPosition: "66.666% 0%",
    mode: ["sensory", "mobility", "lowvision"],
    score: 95,
    summary: "A calm indoor route with reading seats, bright orientation signs, quiet areas, and staff assistance.",
    tags: ["Quiet zone", "Large print", "Staff desk"],
    risks: ["Low shelves", "Study-room glass doors", "Uneven lighting near stacks"],
    checklist: ["Reserve a ground-floor seat", "Ask for large-print materials", "Use the main aisle to avoid narrow rows"],
    route: "Best arrival: enter from the main door, turn right at the service desk, and use the wide central aisle."
  },
  {
    id: "market",
    title: "Fresh Food Market",
    category: "indoor",
    visualPosition: "100% 0%",
    mode: ["wheelchair", "mobility", "sensory"],
    score: 78,
    summary: "A shopping scene with wider aisles, rest points, checkout support, and low-sensory shopping hours.",
    tags: ["Wide aisles", "Rest bench", "Low-sensory hours"],
    risks: ["Peak-hour crowding", "Wet floor near produce", "High shelf items"],
    checklist: ["Visit during quiet hours", "Use a basket cart", "Ask staff for high-shelf items"],
    route: "Best arrival: start at produce, rest near the bakery bench, then use the priority checkout lane."
  },
  {
    id: "park",
    title: "Park Rest Loop",
    category: "outdoor",
    visualPosition: "0% 100%",
    mode: ["wheelchair", "mobility", "sensory", "lowvision"],
    score: 90,
    summary: "A gentle outdoor loop with frequent benches, shade, open sightlines, and low-gradient paths.",
    tags: ["Benches", "Shade", "Gentle slope"],
    risks: ["Seasonal mud", "Cyclists crossing", "Limited lighting after sunset"],
    checklist: ["Choose daylight hours", "Use the paved loop", "Plan one rest stop every ten minutes"],
    route: "Best arrival: begin at the south gate, follow the paved loop clockwise, and rest at the garden seating area."
  },
  {
    id: "museum",
    title: "Small City Museum",
    category: "indoor",
    visualPosition: "33.333% 100%",
    mode: ["lowvision", "mobility", "sensory"],
    score: 82,
    summary: "A culture visit with elevators, slower viewing areas, large captions, and quieter gallery timing.",
    tags: ["Elevator", "Large captions", "Quiet gallery"],
    risks: ["Dim exhibit rooms", "Reflective glass", "Crowded special exhibits"],
    checklist: ["Request an accessible map", "Start with brighter galleries", "Avoid special exhibit peak time"],
    route: "Best arrival: use the lobby elevator, visit Gallery B first, then pause at the seating alcove."
  },
  {
    id: "cafe",
    title: "Cafe and Book Lounge",
    category: "indoor",
    visualPosition: "66.666% 100%",
    mode: ["sensory", "mobility", "wheelchair"],
    score: 88,
    summary: "A social indoor stop with warm lighting, soft seating, accessible tables, and quiet corner choices.",
    tags: ["Accessible tables", "Soft seating", "Quiet corner"],
    risks: ["Background music", "Narrow counter line", "Warm low lighting"],
    checklist: ["Choose a table near the wall", "Ask staff to bring the order", "Avoid the counter queue if crowded"],
    route: "Best arrival: enter from the side door, move to the right-side seating area, and choose the wide table row."
  },
  {
    id: "city-hall",
    title: "City Hall Service Counter",
    category: "service",
    visualPosition: "100% 100%",
    mode: ["wheelchair", "mobility", "lowvision"],
    score: 86,
    summary: "A civic service visit with ticketing support, accessible counters, seating, and visible staff points.",
    tags: ["Accessible counter", "Queue support", "High contrast signs"],
    risks: ["Ticket machine confusion", "Long wait times", "Multiple service windows"],
    checklist: ["Prepare documents before arrival", "Use the seated waiting area", "Ask for queue assistance"],
    route: "Best arrival: use the main accessible entrance, collect a ticket with staff help, then wait in the front seating area."
  }
];

const originalLocations = [
  {
    id: "cologne-cathedral",
    title: "Cologne Cathedral",
    category: "Landmark",
    mode: ["wheelchair", "lowvision", "mobility", "sensory"],
    coordinates: [50.9413, 6.9583],
    score: 88,
    summary: "A major Gothic landmark and public square where accessibility is connected to orientation, seating, safe walking routes, and night visibility.",
    tags: ["Visual orientation", "Public seating", "Safe route", "Night visibility"],
    hotspots: ["Gothic landmark orientation", "Public seating area", "Safe walking route", "Night visibility point"],
    notes: "Main entrance has step-free access via the south side ramp.",
    iframeUrl: "http://43.135.167.74//tour/16be8e194d36dc33",
    route: "Best arrival: use the south-side ramp, pause near the public seating area, then use the cathedral facade as a visual orientation anchor."
  },
  {
    id: "vintage-cafe-book-lounge",
    title: "Vintage Cafe and Book Lounge",
    category: "Indoor Lounge / Cafe",
    mode: ["wheelchair", "sensory", "mobility"],
    coordinates: [43.518533, -79.612641],
    score: 91,
    summary: "An indoor cafe and book lounge with elevator access, reading areas, projection, warm lighting, wide circulation, and comfortable seating.",
    tags: ["Elevator", "Step-free movement", "Wide turning space", "Quiet area"],
    hotspots: ["Elevator access point", "Quiet cafe lounge", "Vintage projection corner", "Quiet reading shelf", "Wide indoor pathway"],
    notes: "Quiet hours are 2-4 PM daily for sensory-sensitive visitors.",
    iframeUrl: "http://43.135.167.74//tour/2cd8ff34b0de5a8f",
    route: "Best arrival: use the elevator access point, choose the wide indoor pathway, then sit near the quiet reading shelf."
  },
  {
    id: "tulip-park-rest-area",
    title: "Tulip Park Rest Area",
    category: "Park / Outdoor Public Space",
    mode: ["wheelchair", "sensory", "lowvision", "mobility"],
    coordinates: [43.52, -79.61],
    score: 90,
    summary: "A natural outdoor space with rest benches, tulip views, quiet sensory zones, open visibility, and gentle walking paths.",
    tags: ["Public seating", "Quiet area", "Wheelchair friendly path", "Open visibility"],
    hotspots: ["Tulip view rest bench", "Sensory calm zone", "Open visibility area", "Gentle walking path"],
    notes: "All paths have maximum 5% gradient for wheelchair accessibility.",
    iframeUrl: "http://43.135.167.74//tour/894354a8c0d0e98e",
    route: "Best arrival: begin on the gentle walking path, stop at the tulip view rest bench, then continue through the open visibility area."
  }
];

const state = {
  mode: "all",
  category: "all",
  query: "",
  selectedId: null,
  selectedOriginalId: "cologne-cathedral",
  plan: []
};

const sceneGrid = document.querySelector("#sceneGrid");
const sceneDetail = document.querySelector("#sceneDetail");
const planList = document.querySelector("#visitPlanList");
const plannerSummary = document.querySelector("#plannerSummary");
const priorityFeedback = document.querySelector("#priorityFeedback");
const originalLocationList = document.querySelector("#originalLocationList");
const previewPanel = document.querySelector("#previewPanel");
const planCount = document.querySelector("#planCount");
const planTotal = document.querySelector("#planTotal");
const speechStatus = document.querySelector("#speechStatus");
const toast = document.querySelector("#toast");
let accessMap;
let accessMarkers = [];
let speechChunks = [];
let speechIndex = 0;
let speechStopped = true;
let activeUtterance = null;

const modeCopy = {
  all: {
    label: "all access needs",
    guidance: "Showing all places. Choose a specific priority to narrow the recommendations."
  },
  wheelchair: {
    label: "wheelchair access",
    guidance: "Showing places with step-free movement, wider circulation, elevators, or smooth paths."
  },
  lowvision: {
    label: "low vision support",
    guidance: "Showing places with stronger orientation cues, clear signage, lighting, or audio support."
  },
  sensory: {
    label: "sensory comfort",
    guidance: "Showing calmer places with quiet zones, lower crowding, or predictable routes."
  },
  mobility: {
    label: "rest and mobility support",
    guidance: "Showing places with seating, shorter walking distances, gentle paths, and clear service points."
  }
};

function accessMatchLabel(score) {
  if (score >= 90) return "Accessibility Match: Strong";
  if (score >= 82) return "Accessibility Match: Good";
  return "Accessibility Match: Basic";
}

function iconSvg(category) {
  const paths = {
    outdoor: '<path d="M18 70h46M28 70V42m26 28V34M22 42h42l-21-22z" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
    indoor: '<path d="M20 70h44V30L42 18 20 30v40zM34 70V48h16v22" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
    service: '<path d="M22 66h40M26 30h32M30 30v36m24-36v36M22 30l20-12 20 12M34 46h16" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
    transit: '<path d="M24 20h36c5 0 8 4 8 9v26c0 5-4 9-9 9H25c-5 0-9-4-9-9V29c0-5 4-9 8-9zM16 40h52M28 70l6-6m22 6-6-6" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  return `<svg viewBox="0 0 84 84" aria-hidden="true">${paths[category] || paths.indoor}</svg>`;
}

function filteredScenes() {
  return scenes.filter((scene) => {
    const modeMatch = state.mode === "all" || scene.mode.includes(state.mode);
    const categoryMatch = state.category === "all" || scene.category === state.category;
    const queryText = [scene.title, scene.summary, scene.category, ...scene.tags, ...scene.risks].join(" ").toLowerCase();
    const queryMatch = !state.query || queryText.includes(state.query.toLowerCase());
    return modeMatch && categoryMatch && queryMatch;
  });
}

function renderScenes() {
  const items = filteredScenes();
  sceneGrid.innerHTML = items.map((scene) => `
    <article class="scene-card ${state.selectedId === scene.id ? "is-selected" : ""} ${state.mode !== "all" ? "is-recommended" : ""}" data-scene="${scene.id}" tabindex="0" role="button" aria-label="Open ${scene.title} details">
      <div class="scene-visual scene-photo" style="background-position: ${scene.visualPosition};"></div>
      ${state.mode !== "all" ? `<span class="recommendation-label">Matches ${modeCopy[state.mode].label}</span>` : ""}
      <h3>${scene.title}</h3>
      <p>${scene.summary}</p>
      <div class="tag-list">${scene.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="card-actions">
        <button class="text-button" data-open="${scene.id}" type="button">Open</button>
        <button class="text-button" data-speak-scene="${scene.id}" type="button">Listen</button>
        <button class="text-button" data-add="${scene.id}" type="button">Add to Plan</button>
      </div>
    </article>
  `).join("") || "<p>No scenes match the current filters.</p>";
}

function renderOriginalLocations() {
  originalLocationList.innerHTML = originalLocations.map((location) => `
    <button class="original-location-card ${state.selectedOriginalId === location.id ? "is-active" : ""}" data-original="${location.id}" type="button">
      <strong>${location.title}</strong>
      <span>${location.category}</span>
      <span>${accessMatchLabel(location.score)}</span>
      ${state.mode !== "all" && location.mode.includes(state.mode) ? `<span class="match-pill">Matches ${modeCopy[state.mode].label}</span>` : ""}
    </button>
  `).join("");
}

function streetMapUrl(location) {
  const [lat, lng] = location.coordinates;
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`;
}

function directionsUrl(location) {
  const [lat, lng] = location.coordinates;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
}

function renderTourFrame(location) {
  const isMixedContent = window.location.protocol === "https:" && location.iframeUrl.startsWith("http://");

  if (isMixedContent) {
    return `
      <div class="tour-frame-wrap tour-frame-fallback">
        <div>
          <strong>Open the 360 view</strong>
          <p>The immersive tour is available as a separate full-screen view.</p>
          <a class="control-button" href="${location.iframeUrl}" target="_blank" rel="noreferrer">Open 360 View</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="tour-frame-wrap">
      <iframe
        src="${location.iframeUrl}"
        title="360 degree preview of ${location.title}"
        allowfullscreen
        aria-label="360 degree preview of ${location.title}"
      ></iframe>
    </div>
  `;
}

function renderPreview(location) {
  state.selectedOriginalId = location.id;
  previewPanel.innerHTML = `
    <div class="preview-shell">
      <div>
        <p class="eyebrow">360 immersive preview</p>
        <h3>${location.title}</h3>
        <p>${location.summary}</p>
        ${renderTourFrame(location)}
      </div>
      <div class="preview-meta">
        <div class="match-score" aria-label="${accessMatchLabel(location.score)}">
          <span>${accessMatchLabel(location.score)}</span>
        </div>
        <h4>Accessibility Hotspots</h4>
        <ul class="hotspot-list">${location.hotspots.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h4>Visit Guidance</h4>
        <p>${location.route}</p>
        <h4>Street Map & Navigation</h4>
        <p>Open the location on a street map or start walking directions.</p>
        <div class="map-link-row">
          <a class="control-button secondary" href="${streetMapUrl(location)}" target="_blank" rel="noreferrer">Street Map</a>
          <a class="control-button secondary" href="${directionsUrl(location)}" target="_blank" rel="noreferrer">Directions</a>
        </div>
        <h4>Notes</h4>
        <p>${location.notes}</p>
        <div class="tag-list">${location.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="detail-actions">
          <button class="control-button" data-speak-original="${location.id}" type="button">Read 360 Scene</button>
          <button class="control-button secondary" data-add="${location.id}" type="button">Add to Plan</button>
          <a class="text-button" href="${location.iframeUrl}" target="_blank" rel="noreferrer">Open 360</a>
        </div>
      </div>
    </div>
  `;
  renderOriginalLocations();
}

function selectOriginalLocation(id, shouldZoom = true) {
  const location = originalLocations.find((item) => item.id === id);
  if (!location) return;
  renderPreview(location);

  if (accessMap && shouldZoom) {
    accessMap.setView(location.coordinates, location.id === "cologne-cathedral" ? 15 : 16);
  }
}

function initAccessMap() {
  if (!window.L || accessMap) return;

  accessMap = L.map("accessMap", {
    scrollWheelZoom: false
  }).setView([43.519, -79.611], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(accessMap);

  const icon = L.divIcon({
    className: "access-marker",
    html: '<span aria-hidden="true"></span>',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  accessMarkers = originalLocations.map((location) => {
    const marker = L.marker(location.coordinates, { icon }).addTo(accessMap);
    marker.bindPopup(`
      <strong>${location.title}</strong><br>
      ${location.category}<br>
      <a href="${streetMapUrl(location)}" target="_blank" rel="noreferrer">Street Map</a>
      &nbsp;|&nbsp;
      <a href="${directionsUrl(location)}" target="_blank" rel="noreferrer">Directions</a>
    `);
    marker.on("click", () => selectOriginalLocation(location.id, false));
    return marker;
  });

  const bounds = L.latLngBounds(originalLocations.map((location) => location.coordinates));
  accessMap.fitBounds(bounds, { padding: [32, 32] });
}

function renderDetail(scene) {
  state.selectedId = scene.id;
  sceneDetail.innerHTML = `
    <p class="eyebrow">Selected place</p>
    <div class="detail-layout">
      <div>
        <div class="selected-place-photo scene-photo" style="background-position: ${scene.visualPosition};"></div>
        <h2>${scene.title}</h2>
        <p>${scene.summary}</p>
        <div class="match-score" aria-label="${accessMatchLabel(scene.score)}">
          <span>${accessMatchLabel(scene.score)}</span>
        </div>
        <h3>Access features</h3>
        <div class="tag-list">${scene.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <h3>Recommended route</h3>
        <p>${scene.route}</p>
        <h3>Risk points to check</h3>
        <ul class="detail-list">${scene.risks.map((risk) => `<li>${risk}</li>`).join("")}</ul>
        <div class="detail-actions">
          <button class="control-button" data-speak-target="#sceneDetail" type="button">Read Scene</button>
          <button class="control-button secondary" data-add="${scene.id}" type="button">Add to Plan</button>
          <a class="text-button" href="#scenes">Back to Places</a>
        </div>
      </div>
      <div>
        <h3>Before-you-go checklist</h3>
        <div class="checklist">
          ${scene.checklist.map((item, index) => `
            <label>
              <input type="checkbox" data-check="${scene.id}-${index}" />
              <span>${item}</span>
            </label>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  renderScenes();
}

function renderPlan() {
  if (state.plan.length === 0) {
    planList.innerHTML = "<li>No places added yet.</li>";
    planCount.textContent = "Plan: 0 stops";
    planTotal.textContent = "0";
    return;
  }
  planList.innerHTML = state.plan.map((id) => {
    const scene = [...scenes, ...originalLocations].find((item) => item.id === id);
    return `<li><strong>${scene.title}:</strong> ${scene.route}</li>`;
  }).join("");
  planCount.textContent = `Plan: ${state.plan.length} stop${state.plan.length === 1 ? "" : "s"}`;
  planTotal.textContent = String(state.plan.length);
}

function addToPlan(id) {
  const scene = [...scenes, ...originalLocations].find((item) => item.id === id);
  if (!state.plan.includes(id)) {
    state.plan.push(id);
    showToast(`${scene.title} has been added. View it in My Plan.`);
  } else {
    showToast(`${scene.title} is already in My Plan.`);
  }
  renderPlan();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3600);
}

function updatePlannerSummary() {
  const walking = Number(document.querySelector("#walkingRange").value);
  const noise = Number(document.querySelector("#noiseRange").value);
  const walkingText = walking <= 2 ? "short walking distance" : walking >= 4 ? "longer walking is acceptable" : "moderate walking";
  const noiseText = noise <= 2 ? "quiet spaces preferred" : noise >= 4 ? "busy sound levels are acceptable" : "moderate noise";
  plannerSummary.textContent = `Recommended profile: ${modeCopy[state.mode].label}, ${walkingText}, ${noiseText}.`;
}

function updatePriorityFeedback() {
  const suggestedCount = filteredScenes().length;
  const confirmedCount = state.mode === "all"
    ? originalLocations.length
    : originalLocations.filter((location) => location.mode.includes(state.mode)).length;
  priorityFeedback.textContent = `${modeCopy[state.mode].guidance} ${confirmedCount} confirmed 360° place${confirmedCount === 1 ? "" : "s"} and ${suggestedCount} future place template${suggestedCount === 1 ? "" : "s"} match this choice.`;
}

function collectText(target) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  return element ? element.innerText.replace(/\s+/g, " ").trim() : "";
}

function stopSpeech() {
  speechStopped = true;
  speechChunks = [];
  speechIndex = 0;
  activeUtterance = null;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    window.speechSynthesis.pause();
    window.setTimeout(() => window.speechSynthesis.cancel(), 60);
    window.setTimeout(() => window.speechSynthesis.cancel(), 180);
  }
  speechStatus.textContent = "Speech stopped.";
}

function getPreferredVoice() {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => /Samantha|Ava|Jenny|Natural|Google US English|Microsoft Aria/i.test(voice.name))
    || voices.find((voice) => voice.lang.startsWith("en"))
    || null;
}

function splitSpeech(text) {
  const sentences = text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean);
  const chunks = [];
  let current = "";

  sentences.forEach((sentence) => {
    if ((current + " " + sentence).trim().length > 230) {
      if (current) chunks.push(current);
      current = sentence;
    } else {
      current = `${current} ${sentence}`.trim();
    }
  });

  if (current) chunks.push(current);
  return chunks.length ? chunks : [text];
}

function speakNextChunk() {
  if (speechStopped || speechIndex >= speechChunks.length) {
    activeUtterance = null;
    return;
  }

  const utterance = new SpeechSynthesisUtterance(speechChunks[speechIndex]);
  const preferredVoice = getPreferredVoice();
  if (preferredVoice) utterance.voice = preferredVoice;
  utterance.rate = 0.78;
  utterance.pitch = 0.96;
  utterance.volume = 1;
  utterance.lang = preferredVoice?.lang || "en-US";
  activeUtterance = utterance;
  utterance.onend = () => {
    speechIndex += 1;
    window.setTimeout(speakNextChunk, 90);
  };
  utterance.onerror = () => {
    speechStopped = true;
    activeUtterance = null;
  };
  window.speechSynthesis.speak(utterance);
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    speechStatus.textContent = "Speech is not available in this browser. Please open the site in Chrome, Safari, or Edge to use read-aloud.";
    showToast("Speech is not available in this browser.");
    return;
  }
  stopSpeech();
  if (!text) return;
  speechStopped = false;
  speechChunks = splitSpeech(text);
  speechIndex = 0;
  window.speechSynthesis.resume();
  speechStatus.textContent = "Reading aloud. Use Stop Reading to stop.";
  speakNextChunk();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  const sceneCard = event.target.closest(".scene-card");
  if (!target && !sceneCard) return;

  const openId = target?.dataset.open || (!target && sceneCard?.dataset.scene);
  const addId = target?.dataset.add;
  const speakSceneId = target?.dataset.speakScene;
  const originalId = target?.dataset.original;
  const speakOriginalId = target?.dataset.speakOriginal;
  const speakTarget = target?.dataset.speakTarget;
  const category = target?.dataset.category;
  const font = target?.dataset.font;

  if (openId) {
    renderDetail(scenes.find((scene) => scene.id === openId));
    document.querySelector("#sceneDetail").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (addId) {
    addToPlan(addId);
  }

  if (originalId) {
    selectOriginalLocation(originalId);
    document.querySelector("#previewPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (speakSceneId) {
    const scene = scenes.find((item) => item.id === speakSceneId);
    speakText(`${scene.title}. ${scene.summary} Recommended route. ${scene.route} Risk points. ${scene.risks.join(". ")}`);
  }

  if (speakOriginalId) {
    const location = originalLocations.find((item) => item.id === speakOriginalId);
    speakText(`${location.title}. ${location.summary} Visit guidance. ${location.route} Accessibility hotspots. ${location.hotspots.join(". ")} Notes. ${location.notes}`);
  }

  if (speakTarget) {
    speakText(collectText(speakTarget));
  }

  if (target.id === "readPageButton") {
    speakText(collectText("main"));
  }

  if (target.id === "stopSpeechButton") {
    stopSpeech();
  }

  if (target.id === "contrastButton") {
    document.body.classList.toggle("high-contrast");
    target.setAttribute("aria-pressed", String(document.body.classList.contains("high-contrast")));
  }

  if (category) {
    state.category = category;
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.category === category);
    });
    renderScenes();
    updatePriorityFeedback();
  }

  if (font) {
    const sizes = { base: "1", large: "1.18", xlarge: "1.35" };
    document.documentElement.style.setProperty("--font-scale", sizes[font]);
    document.querySelectorAll("[data-font]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.font === font));
    });
  }
});

document.addEventListener("keydown", (event) => {
  const sceneCard = event.target.closest?.(".scene-card");
  if (!sceneCard) return;
  if (event.key !== "Enter" && event.key !== " ") return;

  event.preventDefault();
  renderDetail(scenes.find((scene) => scene.id === sceneCard.dataset.scene));
  document.querySelector("#sceneDetail").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll('input[name="mode"]').forEach((input) => {
  input.addEventListener("change", (event) => {
    state.mode = event.target.value;
    renderScenes();
    renderOriginalLocations();
    updatePlannerSummary();
    updatePriorityFeedback();
  });
});

document.querySelector("#sceneSearch").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderScenes();
  updatePriorityFeedback();
});

document.querySelectorAll('input[type="range"]').forEach((input) => {
  input.addEventListener("input", updatePlannerSummary);
});

renderScenes();
renderDetail(scenes[0]);
renderOriginalLocations();
renderPreview(originalLocations[0]);
initAccessMap();
updatePlannerSummary();
updatePriorityFeedback();
document.querySelector('[data-category="all"]').classList.add("is-active");
document.querySelector('[data-font="base"]').setAttribute("aria-pressed", "true");
