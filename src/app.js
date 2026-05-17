const data = window.projectData;
let selected = 0;

function renderFunnel() {
  document.querySelector("#funnel").innerHTML = data.funnel.map(([label, value, width]) => `
    <article style="--w:${width}%">
      <span>${label}</span>
      <strong>${value}</strong>
      <div><i></i></div>
    </article>
  `).join("");
}

function renderExperiment() {
  const experiment = data.experiments[selected];
  document.querySelector("#experiment-title").textContent = experiment.name;
  document.querySelector("#experiment-hypothesis").textContent = experiment.hypothesis;
  document.querySelector("#experiment-metrics").innerHTML = experiment.metrics.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
  document.querySelector("#insights").innerHTML = experiment.insights.map((item) => `<p>${item}</p>`).join("");
  document.querySelector("#recommendations").innerHTML = experiment.recs.map((item, index) => `<p><b>${index + 1}</b> ${item}</p>`).join("");
  document.querySelector("#matrix").innerHTML = data.experiments.map((item, index) => `
    <button class="${index === selected ? "active" : ""}" data-index="${index}" style="left:${item.confidence}%; bottom:${item.impact}%">
      <span>${item.name}</span>
    </button>
  `).join("");
  document.querySelectorAll("#matrix button").forEach((button) => {
    button.addEventListener("click", () => {
      selected = Number(button.dataset.index);
      renderExperiment();
    });
  });
}

renderFunnel();
renderExperiment();
