const locations = [
  {
    id: "jack-darling",
    name: "Jack Darling Memorial Park",
    type: "Waterfront park",
    address: "1180 Lakeshore Rd W, Mississauga",
    coords: [43.5257765, -79.6045342],
    level: "Strong",
    score: 88,
    comfort: "High",
    source: "https://www.mississauga.ca/events-and-attractions/parks/jack-darling-memorial-park/",
    tour: "http://43.135.167.74//tour/21673327b1cc0f62",
    description: "Waterfront trail, parking, washrooms, picnic areas, and outdoor rest points.",
    path: "Start from accessible parking, follow the paved Waterfront Trail, and use benches as planned rest points.",
    steps: ["Parking", "Waterfront Trail", "Benches", "Washroom"],
    spots: [
      spot("Waterfront trail", "Pathway", "Main outdoor route by Lake Ontario.", ["Pathway", "Seating"], ["Paved trail section", "Open view for orientation", "Surface may change with weather"]),
      spot("Accessible parking", "Parking", "Shorter arrival route from parking to park access.", ["Parking", "Entrance"], ["Parking is listed as a park facility", "Best starting point for low walking tolerance"]),
      spot("Public washroom", "Washroom", "Useful facility to confirm before a longer visit.", ["Washroom"], ["Washrooms are listed as a park facility", "Check seasonal availability before leaving"])
    ],
    features: {
      Entrance: feature("Strong", "Open park entry", "Outdoor access points are broad and easy to identify."),
      Pathway: feature("Moderate", "Waterfront Trail", "A paved section of the Waterfront Trail crosses the park."),
      Seating: feature("Strong", "Benches and rest areas", "Use seating as rest points along the route."),
      Washroom: feature("Check first", "Public washroom", "Washrooms are listed, but users should confirm opening conditions."),
      Parking: feature("Strong", "Parking facility", "Parking is listed as a park facility.")
    }
  },
  {
    id: "clarkson-pump",
    name: "The Clarkson Pump & Patio",
    type: "Restaurant and patio",
    address: "1744 Lakeshore Rd W, Mississauga",
    coords: [43.5169623, -79.6231494],
    level: "Moderate",
    score: 80,
    comfort: "Medium",
    source: "https://www.clarksonpump.com/",
    tour: "http://43.135.167.74//tour/f1475bee78903eb6",
    description: "Restaurant with patio seating, indoor seating, washroom route, and nearby parking.",
    path: "Arrive from Lakeshore Road West, enter through the main entrance, then choose indoor or patio seating based on noise and space.",
    steps: ["Entrance", "Host area", "Seating", "Washroom"],
    spots: [
      spot("Step-free entrance", "Entrance", "Primary entry point to review first.", ["Entrance", "Pathway"], ["Check threshold comfort", "Use staff help if the entrance is busy"]),
      spot("Patio seating", "Seating", "Outdoor seating option with more open air.", ["Seating", "Lighting / Quietness"], ["Good option in mild weather", "Noise depends on time of day"]),
      spot("Washroom access", "Washroom", "Route should be checked before relying on it.", ["Washroom", "Pathway"], ["Ask staff for the easiest route", "Confirm turning space"])
    ],
    features: {
      Entrance: feature("Check first", "Restaurant entry", "Restaurant entrances should be checked for threshold, door width, and crowding."),
      Pathway: feature("Moderate", "Dining circulation", "Table placement can affect movement inside."),
      Seating: feature("Strong", "Indoor and patio seating", "Multiple seating choices help users choose a calmer area."),
      Washroom: feature("Check first", "Washroom route", "Confirm the route and space before visiting."),
      Parking: feature("Moderate", "Nearby parking", "Parking exists nearby but availability may vary.")
    }
  },
  {
    id: "port-credit",
    name: "Port Credit",
    type: "Waterfront district",
    address: "Port Credit, Mississauga",
    coords: [43.5560546, -79.5870828],
    level: "Strong",
    score: 86,
    comfort: "High",
    source: "https://www.portcredit.com/maps-parking/",
    tour: "http://43.135.167.74//tour/b918ca8e7f21f65c",
    description: "Walkable waterfront district with sidewalks, trails, seating, transit access, and parking options.",
    path: "Use Port Credit GO or nearby parking, then follow sidewalks and waterfront trails toward the public seating areas.",
    steps: ["Transit/Parking", "Sidewalk", "Waterfront", "Seating"],
    spots: [
      spot("Waterfront walkway", "Pathway", "Main route for orientation and movement.", ["Pathway", "Seating"], ["Sidewalks and walking trails support walking routes", "Can be busy during events"]),
      spot("Transit access", "Entrance", "GO Station is close to the waterfront.", ["Entrance", "Pathway"], ["Good non-driving option", "Plan crossings and final walking distance"]),
      spot("Parking area", "Parking", "Parking option near Port Credit destinations.", ["Parking"], ["Accessible parking is available at some Port Credit lots", "Availability may vary"])
    ],
    features: {
      Entrance: feature("Strong", "Multiple arrival choices", "Arrive by train, walking route, or parking."),
      Pathway: feature("Strong", "Sidewalks and trails", "Port Credit describes businesses and events as accessible along sidewalks and walking trails."),
      Seating: feature("Moderate", "Public seating", "Public seating supports rest during waterfront visits."),
      Parking: feature("Moderate", "Parking options", "Parking is available, with accessible parking listed for some lots."),
      "Lighting / Quietness": feature("Moderate", "Busy district", "Visit outside event times for lower crowding.")
    }
  },
  {
    id: "bradley-museum",
    name: "Bradley Museum",
    type: "Historic site",
    address: "1620 Orr Rd, Mississauga",
    coords: [43.5118731, -79.6110489],
    level: "Limited",
    score: 66,
    comfort: "Mixed",
    source: "https://www.mississauga.ca/arts-and-culture/locations/bradley-museum/",
    tour: "http://43.135.167.74//tour/d873aacb64c1e434",
    description: "Historic site with free parking, accessible washroom, outdoor property access, and possible building barriers.",
    path: "Start from parking, confirm the accessible washroom and ramp/pathway options, then review which historic buildings are suitable.",
    steps: ["Parking", "Pathway", "Accessible washroom", "Historic buildings"],
    spots: [
      spot("Historic site access", "Entrance", "Review the site entry and building access limits.", ["Entrance", "Pathway"], ["Historic properties may include barriers", "Some buildings may not be step-free"]),
      spot("Ramp and pathway", "Pathway", "Outdoor route and ramp information should be checked.", ["Pathway"], ["Plan slower movement", "Surface and level changes matter"]),
      spot("Parking", "Parking", "Useful arrival support close to the site.", ["Parking", "Entrance"], ["Free parking is listed", "Confirm route from parking"])
    ],
    features: {
      Entrance: feature("Check first", "Historic entrances", "Some historic buildings can include steps or limited entry routes."),
      Pathway: feature("Moderate", "Outdoor paths", "Outdoor property access is useful but should be reviewed before arrival."),
      Washroom: feature("Strong", "Accessible washroom", "The City lists an accessible washroom for Bradley Museum."),
      Parking: feature("Strong", "Free parking", "The City lists free parking."),
      "Lighting / Quietness": feature("Strong", "Calmer cultural site", "A museum setting can support a slower visit.")
    }
  },
  {
    id: "sheridan-study",
    name: "Sheridan Quiet Study Room",
    type: "Campus study room",
    address: "4180 Duke of York Blvd, Mississauga",
    coords: [43.5911998, -79.6480973],
    level: "Strong",
    score: 92,
    comfort: "High",
    source: "https://www.sheridancollege.ca/about/campus-locations/hmc/group-study-rooms",
    tour: "http://43.135.167.74//tour/13a67d36f9337915",
    description: "Quiet study room environment with computer station, moveable furniture, curtains, reduced glare, and desk access.",
    path: "Arrive at Hazel McCallion Campus, confirm room booking or availability, then choose the desk setup with the least glare.",
    steps: ["Campus entry", "Study room", "Desk", "Light control"],
    spots: [
      spot("Quiet study environment", "Quiet", "Low-distraction area for study.", ["Lighting / Quietness", "Seating"], ["Reduced noise", "Good for focus", "Confirm room availability"]),
      spot("Computer station", "Desk", "Desk-based work area.", ["Seating", "Pathway"], ["Accessible study desk", "Moveable small table nearby"]),
      spot("Light-control curtains", "Lighting", "Supports reduced glare.", ["Lighting / Quietness"], ["Curtains reduce glare", "Better visual comfort"])
    ],
    features: {
      Entrance: feature("Strong", "Campus study rooms", "Sheridan lists study rooms at Hazel McCallion Campus."),
      Pathway: feature("Strong", "Indoor route", "Indoor campus routes support predictable navigation."),
      Seating: feature("Strong", "Accessible desk setup", "Moveable furniture supports desk-based access."),
      Washroom: feature("Check first", "Building facilities", "Confirm nearest accessible washroom in the building."),
      "Lighting / Quietness": feature("Strong", "Quiet and reduced glare", "Curtains and quiet room conditions support sensory and visual comfort.")
    }
  }
];

function spot(name, label, summary, categories, notes) {
  return { name, label, summary, categories, notes };
}

function feature(status, title, detail) {
  return { status, title, detail };
}

let activeLocation = locations[0];
let activeSpot = activeLocation.spots[0];
let activePanel = "mapPanel";
let accessMap;
let markers = [];
let externalMarker;
let searchTimer;
let speaking = false;
let searchResultCache = [];
let pendingPhoto = "";
let pendingSuggestedPhoto = "";
const reviewStorageKey = "accessMapCommunityReviewsV3";
const suggestedPlaceStorageKey = "accessMapSuggestedPlacesV2";
const tourProxyBase = "https://accessmap-tour-proxy.onrender.com";
let communityReviews = loadCommunityReviews();
let suggestedPlaces = loadSuggestedPlaces();

const starterReviews = {
  "jack-darling": [
    review("Maya", 5, "Accessible parking was easy to locate.", false, "2026-06-18"),
    review("Community visitor", 4, "Pathway became slippery after rain.", true, "2026-06-12")
  ],
  "clarkson-pump": [
    review("Alex", 4, "Automatic door was working during my visit.", false, "2026-06-17"),
    review("Sam", 3, "Patio seating felt easier than the indoor route during a busy hour.", false, "2026-06-10")
  ],
  "port-credit": [
    review("Nina", 5, "Waterfront seating helped with rest breaks.", false, "2026-06-14"),
    review("Jordan", 4, "Some crossings were busy, but the walkway was clear.", false, "2026-06-09")
  ],
  "bradley-museum": [
    review("Lee", 3, "Historic building access should be checked before visiting.", false, "2026-06-16"),
    review("Visitor", 4, "Parking was close and easy to understand.", false, "2026-06-08")
  ],
  "sheridan-study": [
    review("Siwei", 5, "Quiet room was comfortable for studying.", false, "2026-06-19"),
    review("Student visitor", 5, "Curtains helped reduce glare on the desk.", false, "2026-06-11")
  ]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function review(name, rating, comment, barrier, date, photo) {
  return { name, rating, comment, barrier, date, photo: photo || "" };
}

function init() {
  renderLocationOptions();
  renderMap();
  bindEvents();
  renderAll();
}

function renderLocationOptions() {
  $("#locationSelect").innerHTML = locations
    .map((location, index) => `<option value="${index}">${location.name}</option>`)
    .join("");
  renderSearchResults("");
}

function renderMap() {
  if (!window.L) {
    showFallbackMap("Interactive street map is unavailable. Use this prepared place overview instead.");
    return;
  }

  $("#mapFallback").classList.remove("visible");
  accessMap = L.map("streetMap", {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView(activeLocation.coords, 13);

  const baseLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abc",
    maxZoom: 19
  });

  let loadedTiles = 0;
  let failedTiles = 0;
  baseLayer.on("tileload", () => {
    loadedTiles += 1;
    $("#mapFallback").classList.remove("visible");
  });
  baseLayer.on("tileerror", () => {
    failedTiles += 1;
  });
  baseLayer.addTo(accessMap);

  markers = locations.map((location, index) => {
    const icon = L.divIcon({
      className: "",
      html: `<button class="access-marker" aria-label="${location.name}">${mapIcon(location.type)}</button>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });
    const marker = L.marker(location.coords, { icon }).addTo(accessMap);
    marker.bindPopup(`<strong>${location.name}</strong><br>${location.address}`);
    marker.bindTooltip(location.name, {
      permanent: true,
      direction: "top",
      offset: [0, -18],
      className: "map-label"
    });
    marker.openTooltip();
    marker.on("click", () => selectLocation(index, false));
    return marker;
  });

  const bounds = L.latLngBounds(locations.map((location) => location.coords));
  accessMap.fitBounds(bounds, { padding: [44, 44] });

  setTimeout(() => {
    if (loadedTiles === 0 || failedTiles >= 6) {
      showFallbackMap("Street map tiles did not load here. Prepared example places are still marked below.");
    }
  }, 3200);
}

function showFallbackMap(message) {
  const fallback = $("#mapFallback");
  const latitudes = locations.map((location) => location.coords[0]);
  const longitudes = locations.map((location) => location.coords[1]);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);
  const latRange = maxLat - minLat || 1;
  const lngRange = maxLng - minLng || 1;

  fallback.innerHTML = `
    <div class="fallback-map-card">
      <div>
        <p class="eyebrow">Location overview</p>
        <h2>Prepared examples are marked here.</h2>
        <p>${message}</p>
      </div>
      <div class="fallback-map-canvas" aria-label="Simplified map of prepared example locations">
        <span class="map-water" aria-hidden="true"></span>
        <span class="map-road road-one" aria-hidden="true"></span>
        <span class="map-road road-two" aria-hidden="true"></span>
        ${locations.map((location, index) => {
          const left = 10 + ((location.coords[1] - minLng) / lngRange) * 78;
          const top = 12 + ((maxLat - location.coords[0]) / latRange) * 76;
          return `
            <button class="fallback-pin ${location.id === activeLocation.id ? "active" : ""}" type="button" data-fallback-location="${index}" style="left:${left}%; top:${top}%">
              <span>${mapIcon(location.type)}</span>
              <strong>${location.name}</strong>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
  fallback.classList.add("visible");
  $$("[data-fallback-location]").forEach((button) => {
    button.addEventListener("click", () => selectLocation(Number(button.dataset.fallbackLocation), false));
  });
}

function bindEvents() {
  $("#locationSelect").addEventListener("change", (event) => {
    selectLocation(Number(event.target.value), true);
  });

  $("#locationSearch").addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });

  $$("[data-quick-search]").forEach((button) => {
    button.addEventListener("click", () => {
      const query = button.dataset.quickSearch;
      $("#locationSearch").value = query;
      renderSearchResults(query);
    });
  });

  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".nav-item").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const view = button.dataset.view;
      if (view === "map") {
        showPanel("mapPanel");
        $(".viewer-card").scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (view === "tour") {
        showPanel("tourPanel");
        $(".viewer-card").scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (view === "access") {
        $("#accessOverview").scrollIntoView({ behavior: "smooth", block: "center" });
        $(".right-panel").classList.add("focus-pulse");
        setTimeout(() => $(".right-panel").classList.remove("focus-pulse"), 900);
      }
      if (view === "overview") {
        $(".stage-header").scrollIntoView({ behavior: "smooth", block: "start" });
        showPanel("mapPanel");
      }
    });
  });

  $$(".tab-button").forEach((button) => {
    button.addEventListener("click", () => showPanel(button.dataset.panel));
  });

  $("#directionsButton").addEventListener("click", () => {
    const [lat, lng] = activeLocation.coords;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`, "_blank", "noreferrer");
  });

  $("#shareButton").addEventListener("click", async () => {
    const text = `${activeLocation.name} - AccessMap Journey`;
    if (navigator.share) {
      await navigator.share({ title: text, url: window.location.href }).catch(() => {});
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      $("#speechStatus").textContent = "Link copied.";
    }
  });

  $("#saveButton").addEventListener("click", () => {
    $("#speechStatus").textContent = `${activeLocation.name} saved for review.`;
  });

  $("#contrastButton").addEventListener("click", () => {
    document.documentElement.classList.toggle("high-contrast");
  });

  $$("[data-font]").forEach((button) => {
    button.addEventListener("click", () => {
      document.documentElement.classList.remove("font-large", "font-xlarge");
      if (button.dataset.font === "large") document.documentElement.classList.add("font-large");
      if (button.dataset.font === "xlarge") document.documentElement.classList.add("font-xlarge");
    });
  });

  $("#readButton").addEventListener("click", readCurrentView);
  $("#stopButton").addEventListener("click", stopSpeech);

  $("#reviewPhoto").addEventListener("change", handlePhotoUpload);
  $("#feedbackForm").addEventListener("submit", submitReview);
  $("#suggestPhoto").addEventListener("change", handleSuggestedPhotoUpload);
  $("#suggestPlaceForm").addEventListener("submit", submitSuggestedPlace);
}

function getSearchText(location) {
  return [
    location.name,
    location.type,
    location.address,
    location.description,
    location.level,
    location.comfort,
    location.steps.join(" "),
    location.spots.map((spotItem) => `${spotItem.name} ${spotItem.label} ${spotItem.summary} ${spotItem.notes.join(" ")}`).join(" ")
  ].join(" ").toLowerCase();
}

function getSearchScore(location, query) {
  const fields = [
    [location.name, 8],
    [location.type, 5],
    [location.address, 4],
    [location.description, 4],
    [location.comfort, 3],
    [location.level, 3],
    [location.steps.join(" "), 5],
    [location.spots.map((spotItem) => `${spotItem.name} ${spotItem.label}`).join(" "), 6],
    [location.spots.map((spotItem) => `${spotItem.summary} ${spotItem.notes.join(" ")}`).join(" "), 4]
  ];

  return fields.reduce((score, [value, weight]) => {
    return String(value).toLowerCase().includes(query) ? score + weight : score;
  }, 0);
}

function renderSearchResults(query) {
  const cleanQuery = query.trim().toLowerCase();
  clearTimeout(searchTimer);

  if (!cleanQuery) {
    $("#searchResults").innerHTML = "";
    searchResultCache = [];
    return;
  }

  const matches = locations
    .map((location) => ({ location, score: getSearchScore(location, cleanQuery) }))
    .filter((item) => item.score > 0 || getSearchText(item.location).includes(cleanQuery))
    .sort((a, b) => b.score - a.score)
    .map((item) => item.location);

  renderSearchList(matches, [], cleanQuery, true);

  searchTimer = setTimeout(() => {
    searchOpenPlaces(cleanQuery, matches);
  }, 420);
}

function renderSearchList(matches, externalResults, query, loading) {
  searchResultCache = externalResults;
  const caseMarkup = matches.slice(0, 4).map((location) => {
    const index = locations.findIndex((item) => item.id === location.id);
    return `<button class="search-chip case-result" type="button" data-search-location="${index}"><span>Ready</span>${location.name}</button>`;
  }).join("");

  const externalMarkup = externalResults.slice(0, 4).map((result, index) => {
    return `<button class="search-chip open-result" type="button" data-open-result="${index}"><span>Map</span>${result.name}</button>`;
  }).join("");

  const loadingMarkup = loading ? `<span class="status">Searching public map places...</span>` : "";
  $("#searchResults").innerHTML = caseMarkup + externalMarkup + loadingMarkup;

  if (!matches.length && !externalResults.length && !loading) {
    $("#searchResults").innerHTML = `<span class="status">No places found. Try a place name or address.</span>`;
  }

  $$("[data-search-location]").forEach((button) => {
    button.addEventListener("click", () => {
      selectLocation(Number(button.dataset.searchLocation), true);
      $("#locationSearch").value = "";
      renderSearchResults("");
    });
  });

  $$("[data-open-result]").forEach((button) => {
    button.addEventListener("click", () => {
      previewOpenSearchResult(searchResultCache[Number(button.dataset.openResult)]);
      $("#locationSearch").value = "";
      renderSearchResults("");
    });
  });
}

async function searchOpenPlaces(query, localMatches) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=5&addressdetails=1&q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Map search failed");
    const results = await response.json();
    const mapped = results
      .filter((item) => item.lat && item.lon)
      .map((item) => ({
        name: item.name || item.display_name.split(",")[0],
        address: item.display_name,
        coords: [Number(item.lat), Number(item.lon)],
        type: item.type || item.class || "place"
      }));
    if ($("#locationSearch").value.trim().toLowerCase() === query) {
      renderSearchList(localMatches, mapped, query, false);
    }
  } catch (error) {
    if ($("#locationSearch").value.trim().toLowerCase() === query) {
      renderSearchList(localMatches, [], query, false);
    }
  }
}

function previewOpenSearchResult(result) {
  if (!result || !accessMap) return;
  if (externalMarker) {
    accessMap.removeLayer(externalMarker);
  }
  const icon = L.divIcon({
    className: "",
    html: `<button class="access-marker external" aria-label="${result.name}">⌕</button>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19]
  });
  externalMarker = L.marker(result.coords, { icon }).addTo(accessMap);
  externalMarker.bindPopup(`<strong>${result.name}</strong><br>${result.address}`).openPopup();
  externalMarker.bindTooltip(result.name, {
    permanent: true,
    direction: "top",
    offset: [0, -20],
    className: "map-label external-label"
  });
  externalMarker.openTooltip();
  accessMap.setView(result.coords, 16);
  showPanel("mapPanel");

  $("#locationType").textContent = result.type;
  $("#locationName").textContent = result.name;
  $("#locationDescription").textContent = result.address;
  $("#levelPill").textContent = "Map search result";
  $("#spotName").textContent = "Accessibility details not confirmed";
  $("#spotSummary").textContent = "This place was found through public map search. Use it for orientation, then confirm entrance, washroom, seating, parking, and quietness before visiting.";
  $("#spotNote").textContent = "AccessMap Journey shows confirmed details for prepared locations. Public map results should be checked before visiting.";
  $("#sourceLink").href = `https://www.openstreetmap.org/search?query=${encodeURIComponent(result.address)}`;
  $("#sourceLink").textContent = "Open in OpenStreetMap";
  $("#featureList").innerHTML = "";
  $("#placeDetails").innerHTML = renderPlaceDetails({
    Accessibility: ["Entrance needs confirmation", "Pathway needs confirmation", "Washroom needs confirmation", "Parking needs confirmation"]
  });
  $("#communityFeedback").classList.add("disabled");
  $("#reviewList").innerHTML = `<article class="review-card"><p>Community feedback is available for prepared locations. Search results can still be used for orientation.</p></article>`;
  $("#reviewCount").textContent = "Map result";
  $("#accessOverview").innerHTML = `
    <h3>Check before visiting</h3>
    <div class="access-chip-grid">
      ${["Entrance", "Pathway", "Seating", "Washroom", "Parking"].map((item) => `
        <div class="access-chip">
          <span>${accessIcon(item)}</span>
          <div><strong>${item}</strong><small>Needs confirmation for this public map result.</small></div>
          <em>Check</em>
        </div>
      `).join("")}
    </div>
  `;
  $("#mapCaption").textContent = `${result.address}. Public map search result from OpenStreetMap.`;
}

function showPanel(panelId) {
  activePanel = panelId;
  document.body.classList.toggle("tour-mode", panelId === "tourPanel");
  $$(".tab-button").forEach((button) => button.classList.toggle("active", button.dataset.panel === panelId));
  $$(".viewer-panel").forEach((panel) => panel.classList.toggle("active", panel.id === panelId));
  if (panelId === "mapPanel" && accessMap) {
    setTimeout(() => {
      accessMap.invalidateSize();
      accessMap.setView(activeLocation.coords, 15);
    }, 120);
  }
}

function selectLocation(index, openMap) {
  activeLocation = locations[index];
  activeSpot = activeLocation.spots[0];
  $("#locationSelect").value = String(index);
  renderAll();
  if (accessMap) {
    accessMap.setView(activeLocation.coords, 15);
    markers[index].openPopup();
  }
  if (openMap) showPanel("mapPanel");
}

function selectSpot(index) {
  activeSpot = activeLocation.spots[index];
  renderRightPanel();
  renderSpots();
}

function renderAll() {
  $("#locationType").textContent = activeLocation.type;
  $("#locationName").textContent = activeLocation.name;
  $("#locationDescription").textContent = activeLocation.description;
  $("#levelPill").textContent = `${activeLocation.level} access · ${activeLocation.score}/100`;
  $("#railComfort").textContent = activeLocation.comfort;
  $("#pathSummary").textContent = activeLocation.path;
  $("#sourceLink").href = activeLocation.source;
  $("#sourceLink").textContent = `Source for ${activeLocation.name}`;
  $("#mapCaption").textContent = `${activeLocation.address}. Map uses OpenStreetMap coordinates for orientation and planning.`;
  $("#tourWrap").innerHTML = renderTour(activeLocation);
  $("#pathSteps").innerHTML = activeLocation.steps.map((step, index) => `<li><span>${index + 1}</span>${step}</li>`).join("");
  if ($("#mapFallback").classList.contains("visible")) {
    showFallbackMap("Street map tiles did not load here. Prepared example places are still marked below.");
  }
  renderSpots();
  renderRightPanel();
  renderReviews();
  renderSuggestedPlaces();
}

function renderTour(location) {
  const embedUrl = getTourEmbedUrl(location.tour);
  if (!embedUrl) {
    return `
      <div class="tour-fallback">
        <div>
          <p class="eyebrow">360 preview</p>
          <h2>Open the immersive view</h2>
          <p>This tour opens as a full-screen preview from the original tour host.</p>
          <a href="${location.tour}" target="_blank" rel="noreferrer">Open 360 Preview</a>
        </div>
      </div>
    `;
  }
  return `<iframe src="${embedUrl}" title="360 preview of ${location.name}" allowfullscreen></iframe>`;
}

function getTourEmbedUrl(tourUrl) {
  const securePage = window.location.protocol === "https:";
  const httpTour = tourUrl.startsWith("http://");
  if (!securePage || !httpTour) return tourUrl;

  const proxyBase = (window.ACCESSMAP_TOUR_PROXY_BASE || tourProxyBase).trim().replace(/\/$/, "");
  if (!proxyBase) return "";

  const parsed = new URL(tourUrl);
  const normalizedPath = `/${parsed.pathname.replace(/^\/+/, "")}`;
  return `${proxyBase}${normalizedPath}${parsed.search}`;
}

function renderSpots() {
  $("#spotStrip").innerHTML = locations.map((location, index) => `
    <button class="spot-card ${location.id === activeLocation.id ? "active" : ""}" type="button" data-location-card="${index}">
      <span class="spot-thumb" aria-hidden="true">${mapIcon(location.type)}</span>
      <strong>${location.name}</strong>
      <small>${location.type} · ${location.comfort}</small>
    </button>
  `).join("");

  $$("#spotStrip [data-location-card]").forEach((button) => {
    button.addEventListener("click", () => selectLocation(Number(button.dataset.locationCard), true));
  });
}

function renderRightPanel() {
  $("#spotName").textContent = activeSpot.name;
  $("#spotSummary").textContent = activeSpot.summary;
  $("#spotNote").textContent = activeSpot.notes[0] || "Review this area before visiting.";
  $("#infoIcon").textContent = accessIcon(activeSpot.label);

  $("#accessOverview").innerHTML = `
    <h3>Access summary</h3>
    <div class="access-chip-grid">
      ${Object.entries(activeLocation.features).map(([category, item]) => `
        <div class="access-chip">
          <span>${accessIcon(category)}</span>
          <div><strong>${category}</strong><small>${item.title}</small></div>
          <em>${item.status}</em>
        </div>
      `).join("")}
    </div>
  `;

  $("#placeDetails").innerHTML = renderPlaceDetails(getPlaceDetails(activeLocation));

  $("#featureList").innerHTML = activeSpot.categories.map((category) => {
    const item = activeLocation.features[category];
    if (!item) return "";
    return `
      <article class="feature">
        <div class="feature-head">
          <h3>${category}</h3>
          <span>${item.status}</span>
        </div>
        <p><strong>${item.title}</strong></p>
        <p>${item.detail}</p>
      </article>
    `;
  }).join("");

  $("#communityFeedback").classList.remove("disabled");
}

function getReviews(locationId) {
  return [...(communityReviews[locationId] || []), ...(starterReviews[locationId] || [])];
}

function renderReviews() {
  const reviews = getReviews(activeLocation.id);
  $("#reviewCount").textContent = `${reviews.length}`;
  const summary = reviews.length
    ? ""
    : `<article class="review-card"><p>Share your experience to help others understand current accessibility conditions before they visit.</p></article>`;
  $("#reviewList").innerHTML = reviews.slice(0, 5).map((item) => `
    <article class="review-card ${item.barrier ? "barrier" : ""}">
      <div class="review-meta">
        <strong>👤 ${item.name}</strong>
        <span>${starText(item.rating)}</span>
      </div>
      <time>${item.date}</time>
      <p>${item.comment}</p>
      <div class="review-tags">
        ${item.barrier ? `<em>Temporary barrier</em>` : ""}
        ${item.photo ? `<em>Photo</em>` : ""}
      </div>
      ${item.photo ? `<img src="${item.photo}" alt="Uploaded accessibility review photo" />` : ""}
    </article>
  `).join("") || summary;
}

function starText(rating) {
  const filled = "★★★★★".slice(0, rating);
  const empty = "☆☆☆☆☆".slice(0, 5 - rating);
  return `${filled}${empty}`;
}

function loadCommunityReviews() {
  try {
    return JSON.parse(localStorage.getItem(reviewStorageKey) || "{}");
  } catch (error) {
    return {};
  }
}

function saveCommunityReviews() {
  localStorage.setItem(reviewStorageKey, JSON.stringify(communityReviews));
}

function loadSuggestedPlaces() {
  try {
    return JSON.parse(localStorage.getItem(suggestedPlaceStorageKey) || "[]");
  } catch (error) {
    return [];
  }
}

function saveSuggestedPlaces() {
  localStorage.setItem(suggestedPlaceStorageKey, JSON.stringify(suggestedPlaces));
}

function handlePhotoUpload(event) {
  const file = event.target.files?.[0];
  pendingPhoto = "";
  $("#photoPreview").innerHTML = "";
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    pendingPhoto = String(reader.result || "");
    $("#photoPreview").innerHTML = `<img src="${pendingPhoto}" alt="Selected accessibility feedback photo preview" />`;
  };
  reader.readAsDataURL(file);
}

function submitReview(event) {
  event.preventDefault();
  const comment = $("#reviewComment").value.trim();
  const rating = Number($("#reviewRating").value);
  if (!comment) {
    $("#speechStatus").textContent = "Add note.";
    return;
  }
  if (!rating) {
    $("#speechStatus").textContent = "Add rating.";
    return;
  }

  const item = review(
    $("#reviewName").value.trim() || "Community member",
    rating,
    comment,
    $("#reviewBarrier").checked,
    $("#reviewDate").value || new Date().toISOString().slice(0, 10),
    pendingPhoto
  );

  communityReviews[activeLocation.id] = [item, ...(communityReviews[activeLocation.id] || [])];
  saveCommunityReviews();
  $("#feedbackForm").reset();
  pendingPhoto = "";
  $("#photoPreview").innerHTML = "";
  $("#speechStatus").textContent = "Posted.";
  renderReviews();
}

function handleSuggestedPhotoUpload(event) {
  const file = event.target.files?.[0];
  pendingSuggestedPhoto = "";
  $("#suggestPhotoPreview").innerHTML = "";
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    pendingSuggestedPhoto = String(reader.result || "");
    $("#suggestPhotoPreview").innerHTML = `<img src="${pendingSuggestedPhoto}" alt="Selected suggested place photo preview" />`;
  };
  reader.readAsDataURL(file);
}

function submitSuggestedPlace(event) {
  event.preventDefault();
  const name = $("#suggestName").value.trim();
  if (!name) {
    $("#suggestStatus").textContent = "Place name is required.";
    return;
  }

  const place = {
    id: `suggested-${Date.now()}`,
    name,
    address: $("#suggestAddress").value.trim(),
    category: $("#suggestCategory").value,
    features: $("#suggestFeatures").value.trim(),
    concerns: $("#suggestConcerns").value.trim(),
    tour: $("#suggestTour").value.trim(),
    photo: pendingSuggestedPhoto,
    date: new Date().toISOString().slice(0, 10),
    status: "Pending Review"
  };

  suggestedPlaces = [place, ...suggestedPlaces];
  saveSuggestedPlaces();
  $("#suggestPlaceForm").reset();
  pendingSuggestedPhoto = "";
  $("#suggestPhotoPreview").innerHTML = "";
  $("#suggestStatus").textContent = "Submitted for review.";
  renderSuggestedPlaces();
}

function renderSuggestedPlaces() {
  $("#suggestionCount").textContent = `${suggestedPlaces.length}`;
  if (!suggestedPlaces.length) {
    $("#suggestionList").innerHTML = `<article class="suggestion-card"><p>No community suggestions yet.</p></article>`;
    return;
  }

  $("#suggestionList").innerHTML = suggestedPlaces.slice(0, 5).map((place) => `
    <article class="suggestion-card">
      <div class="review-meta">
        <strong>${place.name}</strong>
        <em>${place.status}</em>
      </div>
      <time>${place.date}</time>
      <p>${place.address || place.category}</p>
      ${place.features ? `<p><strong>Features:</strong> ${place.features}</p>` : ""}
      ${place.concerns ? `<p><strong>Concerns:</strong> ${place.concerns}</p>` : ""}
      ${place.photo ? `<img src="${place.photo}" alt="Suggested place accessibility photo" />` : ""}
    </article>
  `).join("");
}

function renderPlaceDetails(groups) {
  return `
    <h3>Place details</h3>
    <div class="detail-groups">
      ${Object.entries(groups).map(([groupName, items], index) => `
        <details class="detail-group" ${index === 0 ? "open" : ""}>
          <summary>${groupName}<span>${items.length}</span></summary>
          <div class="detail-items">
            ${items.map((item) => `<p><span aria-hidden="true">✓</span>${item}</p>`).join("")}
          </div>
        </details>
      `).join("")}
    </div>
  `;
}

function getPlaceDetails(location) {
  const baseAccessibility = [
    ...Object.entries(location.features).map(([category, item]) => `${category}: ${item.title}`)
  ];
  const key = `${location.type} ${location.name}`.toLowerCase();

  if (key.includes("restaurant") || key.includes("patio")) {
    return {
      Accessibility: baseAccessibility,
      "Service options": ["Outdoor seating", "Dine-in", "Takeout availability should be checked"],
      "Dining options": ["Lunch", "Dinner", "Seating"],
      Amenities: ["Washroom access should be confirmed", "Nearby parking"],
      Atmosphere: ["Casual", "Social", "Noise level varies by time"]
    };
  }

  if (key.includes("park") || key.includes("waterfront")) {
    return {
      Accessibility: baseAccessibility,
      "Outdoor features": ["Waterfront route", "Rest areas", "Open public space"],
      Amenities: ["Public washroom", "Benches", "Parking"],
      "Good for": ["Short walks", "Rest breaks", "Caregiver-supported visits"],
      Planning: ["Check weather", "Confirm washroom availability"]
    };
  }

  if (key.includes("district") || key.includes("port credit")) {
    return {
      Accessibility: baseAccessibility,
      "Getting there": ["Transit access", "Parking options", "Sidewalk routes"],
      Amenities: ["Public seating", "Waterfront walkway", "Nearby services"],
      Atmosphere: ["Busy at event times", "Outdoor public area"],
      Planning: ["Choose quieter visiting hours"]
    };
  }

  if (key.includes("museum") || key.includes("historic")) {
    return {
      Accessibility: baseAccessibility,
      Amenities: ["Accessible washroom", "Free parking", "Outdoor property access"],
      Planning: ["Some historic buildings may have stair access only", "Confirm ramp and route before arrival"],
      Atmosphere: ["Calmer cultural site", "Slower visit pace"]
    };
  }

  if (key.includes("study") || key.includes("campus")) {
    return {
      Accessibility: baseAccessibility,
      Amenities: ["Computer station", "Movable small table", "Accessible study desk"],
      "Lighting / Quietness": ["Quiet study environment", "Light-control curtains", "Reduced glare"],
      Planning: ["Confirm room availability", "Check nearest accessible washroom"]
    };
  }

  return { Accessibility: baseAccessibility };
}

function accessIcon(category) {
  const key = category.toLowerCase();
  if (key.includes("entrance")) return "↳";
  if (key.includes("path")) return "→";
  if (key.includes("seat")) return "▣";
  if (key.includes("wash")) return "WC";
  if (key.includes("park")) return "P";
  if (key.includes("light") || key.includes("quiet")) return "◐";
  if (key.includes("desk")) return "□";
  return "i";
}

function mapIcon(type) {
  const key = type.toLowerCase();
  if (key.includes("park") || key.includes("waterfront")) return "⌁";
  if (key.includes("restaurant") || key.includes("patio")) return "☕";
  if (key.includes("district")) return "⌖";
  if (key.includes("museum") || key.includes("historic")) return "◇";
  if (key.includes("study") || key.includes("campus")) return "□";
  return "●";
}

function readCurrentView() {
  stopSpeech();
  const synth = window.speechSynthesis;
  if (!synth) {
    $("#speechStatus").textContent = "No speech.";
    return;
  }
  const text = `${activeLocation.name}. ${activeLocation.description}. Selected spot: ${activeSpot.name}. ${activeSpot.summary}. Accessible path: ${activeLocation.path}`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.onend = () => {
    speaking = false;
    $("#speechStatus").textContent = "Done.";
  };
  speaking = true;
  $("#speechStatus").textContent = "Reading.";
  synth.speak(utterance);
}

function stopSpeech() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  if (speaking) {
    speaking = false;
    $("#speechStatus").textContent = "Stopped.";
  }
}

init();
