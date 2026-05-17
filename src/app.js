const data = window.projectData;
let selectedExperiment = 0;

function setView(view) {
  document.querySelectorAll(".surface-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  document.querySelectorAll(".surface").forEach((surface) => {
    surface.classList.toggle("active", surface.id === view);
  });
}

function renderMetrics() {
  document.querySelector("#metric-grid").innerHTML = data.metrics.map((metric) => `
    <article class="metric-card ${metric.status}">
      <span>${metric.label}</span>
      <strong>${metric.value}</strong>
      <p>${metric.detail}</p>
    </article>
  `).join("");
}

function renderFunnel() {
  document.querySelector("#funnel").innerHTML = data.funnel.map((step, index) => `
    <article>
      <div>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${step.label}</strong>
        <b>${step.display}</b>
      </div>
      <i style="--bar:${step.width}%"></i>
    </article>
  `).join("");
}

function renderChannels() {
  document.querySelector("#channel-list").innerHTML = data.channels.map((channel) => `
    <article>
      <div>
        <strong>${channel.name}</strong>
        <span>${channel.sessions} sessions</span>
      </div>
      <div class="bar"><i style="--bar:${channel.quality}%"></i></div>
      <dl>
        <div><dt>Conv.</dt><dd>${channel.conversion}</dd></div>
        <div><dt>CAC</dt><dd>${channel.spend}</dd></div>
        <div><dt>Lift</dt><dd>${channel.lift}</dd></div>
      </dl>
    </article>
  `).join("");
}

function renderMarkets() {
  document.querySelector("#market-table").innerHTML = `
    <div class="table-row table-head">
      <span>Market</span>
      <span>Demand</span>
      <span>Occupancy</span>
      <span>Capacity</span>
      <span>Competitor gap</span>
      <span>Action</span>
    </div>
    ${data.markets.map((market) => `
      <div class="table-row">
        <strong>${market.market}</strong>
        <span>${market.demand}</span>
        <span>${market.occupancy}</span>
        <span>${market.capacity}</span>
        <span>${market.competitorGap}</span>
        <p>${market.action}</p>
      </div>
    `).join("")}
  `;
}

function renderExperiment() {
  const experiment = data.experiments[selectedExperiment];
  document.querySelector("#experiment-id").textContent = experiment.id;
  document.querySelector("#experiment-title").textContent = experiment.name;
  document.querySelector("#experiment-hypothesis").textContent = experiment.hypothesis;
  document.querySelector("#experiment-metrics").innerHTML = [
    ["Impact", experiment.impact],
    ["Confidence", experiment.confidence],
    ["Readiness", `${experiment.readiness}%`],
    ["Effort", experiment.effort],
    ["Capacity fit", `${experiment.capacityFit}%`],
    ["Competitor risk", experiment.competitorRisk]
  ].map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");

  document.querySelector("#matrix").innerHTML = data.experiments.map((item, index) => `
    <button class="${index === selectedExperiment ? "active" : ""}" data-index="${index}" style="left:${item.confidence}%; bottom:${item.impact}%">
      <span>${item.id}</span>
      <strong>${item.name}</strong>
    </button>
  `).join("");

  document.querySelector("#test-plan").innerHTML = `
    <dl>
      <div><dt>Primary metric</dt><dd>${experiment.primaryMetric}</dd></div>
      <div><dt>Sample</dt><dd>${experiment.sample}</dd></div>
      <div><dt>Duration</dt><dd>${experiment.duration}</dd></div>
    </dl>
    <h3>Guardrails</h3>
    <ul>${experiment.guardrails.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;

  document.querySelector("#readout").innerHTML = `
    <div>
      <h3>What the data says</h3>
      ${experiment.insights.map((item) => `<p>${item}</p>`).join("")}
    </div>
    <div>
      <h3>Recommendation</h3>
      ${experiment.recs.map((item, index) => `<p><b>${index + 1}</b>${item}</p>`).join("")}
    </div>
  `;

  document.querySelectorAll("#matrix button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedExperiment = Number(button.dataset.index);
      renderExperiment();
    });
  });
}

function renderOperations() {
  document.querySelector("#ops-list").innerHTML = data.operations.map((feed) => `
    <article class="${feed.status.toLowerCase()}">
      <div>
        <strong>${feed.feed}</strong>
        <span>${feed.owner}</span>
      </div>
      <div class="bar"><i style="--bar:${feed.completeness}%"></i></div>
      <dl>
        <div><dt>Freshness</dt><dd>${feed.freshness}</dd></div>
        <div><dt>Complete</dt><dd>${feed.completeness}%</dd></div>
        <div><dt>Status</dt><dd>${feed.status}</dd></div>
      </dl>
      <p>${feed.issue}</p>
    </article>
  `).join("");

  document.querySelector("#quality-list").innerHTML = data.qualityChecks.map((check) => `
    <article class="${check.status}">
      <span>${check.status === "pass" ? "Pass" : "Needs work"}</span>
      <strong>${check.check}</strong>
      <div>
        <b>${check.result}</b>
        <small>Target ${check.target}</small>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".surface-tabs button").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

renderMetrics();
renderFunnel();
renderChannels();
renderMarkets();
renderExperiment();
renderOperations();
