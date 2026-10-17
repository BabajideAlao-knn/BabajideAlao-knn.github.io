/* =========================================================
   Babajide Alao — portfolio scripts
   To add a project: copy an object in PROJECTS and edit it.
   ========================================================= */

const GH = "https://github.com/BabajideAlao-knn/";

const SKILLS = {
  lang: ["Python", "R", "SQL"],
  ml: ["Pandas", "NumPy", "scikit-learn", "XGBoost", "PyTorch", "CNNs", "Web Scraping", "Streamlit", "Matplotlib", "Seaborn"],
  bi: ["Power BI", "Tableau", "Excel", "Google Sheets", "IBM Cognos"],
  db: ["MySQL", "SQL Server", "NoSQL", "Azure", "IBM Watson Studio"],
};

const PROJECTS = [
  {
    title: "Nigerian Car Price Prediction (Autochek)",
    emoji: "🚗", cats: ["ml", "live"], repo: "Detailed-car-prediction",
    live: "https://babajide-car-price-prediction-v2.streamlit.app/",
    short: "Scraped 9,304 live car listings, compared 11 regression models and shipped the best one as a price-estimator app.",
    metric: "XGBoost · R² 0.904 · 17.1% MAPE",
    skills: ["Python", "Web Scraping", "Pandas", "scikit-learn", "XGBoost", "Streamlit"],
    points: [
      "Built a scraper that pulled 9,304 listings from Autochek Nigeria; 9,230 survived cleaning.",
      "Compared 11 regression algorithms with a 30% hold-out set and 5-fold cross-validation.",
      "Best model (XGBoost): 11.6% median error, and 71% of test predictions land within ±20% of the listed price.",
      "Shared feature-engineering module used by both training and the Streamlit app, so they never drift apart.",
    ],
    chart: { title: "Data pipeline (listings)", unit: "", data: [["Scraped", 9304], ["After cleaning", 9230], ["Test set", 2769]] },
  },
  {
    title: "Dog Breed Classifier",
    emoji: "🐶", cats: ["dl", "ml", "live"], repo: "dog-breed-classifier",
    live: "https://babajide-dog-breed-classifier.streamlit.app",
    short: "Upload a dog photo, get its breed. Transfer learning with EfficientNet-B0 in PyTorch across 10 breeds.",
    metric: "99.3% test accuracy (145 / 146)",
    skills: ["Python", "PyTorch", "CNNs", "Streamlit"],
    points: [
      "Fine-tuned an ImageNet-pretrained EfficientNet-B0 in two stages (5 head-only epochs + 12 fine-tuning epochs).",
      "10 breeds, from Beagle to Yorkshire Terrier, on ~1,000 Kaggle images.",
      "Only one test mistake: a German Shepherd it thought was a Yorkie.",
      "Deployed on Streamlit Community Cloud so anyone can try it.",
    ],
    chart: { title: "Images per split", unit: "", data: [["Train", 676], ["Validation", 145], ["Test", 146]] },
  },
  {
    title: "Nigerian Car Price Prediction (Kaggle)",
    emoji: "🚙", cats: ["ml", "live"], repo: "Car-price-prediction",
    live: "https://babajide-car-price-prediction.streamlit.app/",
    short: "Estimates used-car prices in Naira from make, year, condition, mileage, engine and transmission.",
    metric: "Tuned SVR · best of 11 regressors",
    skills: ["Python", "Pandas", "scikit-learn", "Streamlit"],
    points: [
      "Cleaned 4,095 listings down to 2,586 reliable rows (duplicates, impossible engine sizes, outliers).",
      "Engineered car age, mileage per year, a luxury flag and a log-price target.",
      "Tuned Support Vector Regressor ranked best overall; 74% of test cars predicted within ±30%.",
    ],
  },
  {
    title: "Eye Disease Classification",
    emoji: "👁️", cats: ["dl", "ml"], repo: "Eye-Disease-Classification",
    short: "A CNN that classifies retinal images into cataract, glaucoma, diabetic retinopathy or normal, for earlier diagnosis.",
    metric: "4 classes · ~4,200 retinal images",
    skills: ["Python", "CNNs"],
    points: [
      "Images from IDRiD, Ocular recognition, HRF and more, via Kaggle.",
      "Trained on 3,374 images, validated on 843.",
      "Convolution + max-pooling feature extractor feeding fully-connected layers on 224×224 inputs.",
    ],
    chart: { title: "Images per class", unit: "", data: [["Cataract", 1038], ["Glaucoma", 1007], ["Normal", 1074], ["Diabetic ret.", 1098]] },
  },
  {
    title: "Lagos House Rent Prediction",
    emoji: "🏠", cats: ["ml"], repo: "Lagos-House-Rent-Prediction",
    article: "https://medium.com/@olalekan.kehinde83/lagos-house-rent-price-prediction-6f5df180c4c6",
    short: "Team project: scraped 141,000+ Lagos property listings and built an XGBoost model to predict rent by location.",
    metric: "141k+ scraped rows · XGBoost · Streamlit",
    skills: ["Python", "Web Scraping", "Pandas", "Matplotlib", "Seaborn", "XGBoost", "Streamlit"],
    points: [
      "Scraped a real-estate site with Beautiful Soup (over 141,000 observations, 7 features).",
      "Cleaning, EDA and modelling notebooks; final XGBoost model served in a Streamlit app.",
      "Built with the TrailBlazersNG team of five.",
    ],
  },
  {
    title: "SQL Data Analytics Assessment",
    emoji: "🗄️", cats: ["sql", "analysis"], repo: "DataAnalytics-Assessment",
    short: "MySQL solutions that pull business insights from a fintech customer database: CLV, churn risk and engagement.",
    metric: "4 business questions · MySQL",
    skills: ["SQL", "MySQL"],
    points: [
      "Found high-value customers holding both funded savings and investment plans.",
      "Segmented customers into high / medium / low transaction frequency.",
      "Flagged accounts with no inflow for 365+ days.",
      "Estimated customer lifetime value from tenure and transaction profit.",
    ],
  },
  {
    title: "SpaceX Launch Analysis (IBM Capstone)",
    emoji: "🚀", cats: ["ml", "analysis"], repo: "Ibm-Applied-Data-Science-Project",
    short: "Capstone for the IBM Data Science Professional Certificate: scraping, analysis, visualization and modelling of SpaceX launches.",
    metric: "IBM Data Science capstone",
    skills: ["Python", "Web Scraping", "Pandas", "scikit-learn"],
    points: [
      "Collected launch data through scraping and APIs.",
      "Explored launch outcomes with visual analysis.",
      "Built classification models to predict first-stage landing success.",
    ],
  },
  {
    title: "Spaceship Titanic: Data Visualization",
    emoji: "🛸", cats: ["analysis"], repo: "Udacity-Data-Visualization-Project",
    short: "Exploratory and explanatory analysis of 8,693 passengers on Kaggle's Spaceship Titanic. Who got transported?",
    metric: "8,693 passengers · 14 variables",
    skills: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    points: [
      "Passengers heading to 55 Cancri e, or coming from Europa, were more likely to be transported.",
      "Ages 40–59, Deck G and the Starboard side showed higher transport rates.",
      "Most passengers in cryosleep were transported, while onboard spending made little difference.",
    ],
  },
  {
    title: "WeRateDogs Data Wrangling",
    emoji: "🐕", cats: ["analysis"], repo: "Udacity-Data-Wrangling-Project",
    short: "Gathered, assessed and cleaned the WeRateDogs Twitter archive, then analysed what makes a dog post popular.",
    metric: "Udacity Data Analysis project",
    skills: ["Python", "Pandas"],
    points: ["Gathered data from multiple sources.", "Documented quality and tidiness issues, then cleaned them programmatically.", "Analysed and visualised the cleaned data."],
  },
  {
    title: "TMDB Movies Analysis",
    emoji: "🎬", cats: ["analysis"], repo: "TMDB-Analysis",
    short: "Cleaning and visual exploration of The Movie Database dataset: budgets, revenue, genres and popularity.",
    metric: "Data cleaning + visualization",
    skills: ["Python", "Pandas", "Matplotlib"],
    points: ["Cleaned and prepared the TMDB dataset.", "Explored trends across genres, budgets and revenue with charts."],
  },
  {
    title: "Iris Classification",
    emoji: "🌸", cats: ["ml"], repo: "Iris-Dataset-Classification",
    short: "The classic Fisher dataset: EDA plus five classifiers compared head-to-head.",
    metric: "5 algorithms compared",
    skills: ["Python", "scikit-learn"],
    points: [
      "Found strong positive correlations between petal and sepal length and width.",
      "Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting and KNN on a 70/30 split.",
      "Every model performed well; Logistic Regression was lowest at 91% test accuracy.",
    ],
  },
  {
    title: "Gender Classification",
    emoji: "🧑", cats: ["ml"], repo: "Gender-Classification",
    short: "A machine-learning model that predicts gender from facial-feature measurements.",
    metric: "Binary classification",
    skills: ["Python", "scikit-learn"],
    points: ["Trained and evaluated a classifier on facial-feature data."],
  },
  {
    title: "BMI Calculator App",
    emoji: "⚖️", cats: ["apps"], repo: "bmi",
    short: "A small Python script and a Tkinter desktop app that calculate body mass index.",
    metric: "Python · Tkinter GUI",
    skills: ["Python"],
    points: ["BMI.py: command-line calculator.", "bmi_app.py: desktop interface built with Tkinter."],
  },
  {
    title: "Tableau Dashboards",
    emoji: "📊", cats: ["analysis"], url: "https://public.tableau.com/app/profile/babajide.alao",
    short: "A gallery of interactive Tableau dashboards on my Tableau Public profile.",
    metric: "Tableau Public",
    skills: ["Tableau"],
    points: ["Interactive dashboards you can filter and explore in the browser."],
  },
];

const JOBS = [
  { role: "Administrative Officer", org: "Kunbinyin Global Ventures", from: 2018.0, to: 2020.0, color: "#64748b",
    pts: ["Processed bills, payments and receipts worth millions of naira with the accounts team.", "Prepared cost reports and office budgets.", "Liaised with HR to build the employee database and schedule payroll."] },
  { role: "Data Analytics Consultant", org: "All and Tech Limited", from: 2020.0, to: 2021.85, color: "#f472b6",
    pts: ["Built interactive Power BI and Tableau dashboards for clients.", "Trained and onboarded team members and clients on Excel, Power BI and Tableau.", "Helped shape the product strategy through research."] },
  { role: "Data Annotation Specialist", org: "Hugo Technologies", from: 2021.85, to: 2023.4, color: "#a78bfa",
    pts: ["Annotated and labelled data to improve deep-learning model precision.", "Worked with quality analysts to choose and interpret ML training data.", "🏆 Award of Excellence, Machine Learning Department, 2022."] },
  { role: "Data Quality Analyst", org: "Hugo Technologies", from: 2023.45, to: 2026.8, color: "#fbbf24",
    pts: ["Designed data-validation processes and quality standards: 30% higher-quality global data.", "Monitoring and audits with annotation teams cut errors by 20%.", "Real-time KPI dashboards helped lift production rates by 15%."] },
  { role: "Data Analyst, AI Operations", org: "Hugo Technologies", from: 2024.2, to: 2026.2, color: "#38bdf8",
    pts: ["Built and maintained workforce-trend dashboards.", "Automated analysis and billing processes to hit client targets.", "Designed custom client dashboards for real-time management insight."] },
  { role: "Senior Data Analyst, AI Operations", org: "Hugo Technologies", from: 2026.2, to: 2026.8, color: "#2dd4bf",
    pts: ["Automated KPI dashboards for 5+ teams: 45% less manual reporting time.", "Automated billing workflows: 35% more accurate, from 2 days to a few hours.", "Client dashboards raised satisfaction scores by 20%; productivity analysis lifted output 15%.", "Standardised validation across projects, cutting reporting discrepancies by 30%."] },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- theme ---------- */
const savedTheme = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
else if (matchMedia("(prefers-color-scheme: light)").matches) document.documentElement.dataset.theme = "light";
function toggleTheme() {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch {}
  drawGame();
}
$("#themeBtn").onclick = toggleTheme;

/* ---------- nav ---------- */
$("#menuBtn").onclick = () => $("#links").classList.toggle("open");
$$("#links a").forEach((a) => (a.onclick = () => $("#links").classList.remove("open")));
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  $("#nav").classList.toggle("scrolled", h.scrollTop > 30);
  let cur = "";
  $$("section[id]").forEach((s) => { if (s.getBoundingClientRect().top < 140) cur = s.id; });
  $$("#links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
}, { passive: true });
$("#year").textContent = new Date().getFullYear();

/* ---------- typed roles ---------- */
(function typed() {
  const words = ["Senior Data Analyst", "dashboard architect", "ML model builder", "data storyteller", "Power BI enthusiast", "data-quality guardian"];
  const el = $("#typed");
  let w = 0, i = 0, del = false;
  (function tick() {
    const word = words[w];
    el.textContent = word.slice(0, i);
    if (!del && i === word.length) { del = true; return setTimeout(tick, 1600); }
    if (del && i === 0) { del = false; w = (w + 1) % words.length; }
    i += del ? -1 : 1;
    setTimeout(tick, del ? 40 : 85);
  })();
})();

/* ---------- hero canvas: live regression playground ---------- */
(function hero() {
  const cv = $("#heroCanvas"), ctx = cv.getContext("2d");
  let W, H, pts = [], mouse = { x: -999, y: -999 };
  const dpr = Math.min(devicePixelRatio || 1, 2);
  function resize() {
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function seed() {
    pts = [];
    const n = W < 600 ? 40 : 70;
    for (let k = 0; k < n; k++) {
      const x = Math.random();
      const y = 0.15 + x * 0.6 + (Math.random() - 0.5) * 0.35;
      pts.push(mk(x * W, H - y * H));
    }
  }
  function mk(x, y, fresh) {
    return { x, y, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: 2 + Math.random() * 2.5, fresh: fresh ? 1 : 0,
      c: ["--teal", "--violet", "--amber"][Math.floor(Math.random() * 3)] };
  }
  function fit() {
    const n = pts.length; let sx = 0, sy = 0, sxx = 0, sxy = 0, syy = 0;
    pts.forEach((p) => { const y = H - p.y; sx += p.x; sy += y; sxx += p.x * p.x; sxy += p.x * y; syy += y * y; });
    const den = n * sxx - sx * sx; if (!den) return null;
    const m = (n * sxy - sx * sy) / den, b = (sy - m * sx) / n;
    const r = (n * sxy - sx * sy) / Math.sqrt(den * (n * syy - sy * sy) || 1);
    return { m, b, r2: r * r };
  }
  cv.addEventListener("mousemove", (e) => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  cv.addEventListener("mouseleave", () => (mouse.x = mouse.y = -999));
  cv.addEventListener("click", (e) => {
    const r = cv.getBoundingClientRect();
    pts.push(mk(e.clientX - r.left, e.clientY - r.top, true));
    if (pts.length > 160) pts.shift();
  });
  let r2Shown = 0;
  function frame() {
    ctx.clearRect(0, 0, W, H);
    const colors = { "--teal": css("--teal"), "--violet": css("--violet"), "--amber": css("--amber") };
    const line = css("--line");
    // grid
    ctx.strokeStyle = line; ctx.globalAlpha = 0.35; ctx.lineWidth = 1;
    for (let gx = 0; gx < W; gx += 80) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke(); }
    for (let gy = 0; gy < H; gy += 80) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke(); }
    ctx.globalAlpha = 1;
    pts.forEach((p) => {
      if (!reduceMotion) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 110 && d > 0) { p.vx += (dx / d) * 0.35; p.vy += (dy / d) * 0.35; }
        p.vx *= 0.96; p.vy *= 0.96;
        p.vx += (Math.random() - 0.5) * 0.04; p.vy += (Math.random() - 0.5) * 0.04;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        p.x = Math.max(0, Math.min(W, p.x)); p.y = Math.max(0, Math.min(H, p.y));
      }
      ctx.fillStyle = colors[p.c];
      ctx.globalAlpha = 0.55 + p.fresh * 0.45;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r + p.fresh * 4, 0, 7); ctx.fill();
      if (p.fresh > 0) p.fresh = Math.max(0, p.fresh - 0.01);
    });
    ctx.globalAlpha = 1;
    const f = fit();
    if (f) {
      ctx.strokeStyle = colors["--teal"]; ctx.lineWidth = 2.5; ctx.setLineDash([10, 8]);
      ctx.beginPath(); ctx.moveTo(0, H - f.b); ctx.lineTo(W, H - (f.m * W + f.b)); ctx.stroke(); ctx.setLineDash([]);
      r2Shown += (f.r2 - r2Shown) * 0.1;
      $("#r2").textContent = r2Shown.toFixed(2);
    }
    $("#npts").textContent = pts.length;
    requestAnimationFrame(frame);
  }
  resize(); seed(); frame();
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { const ow = W, oh = H; resize(); pts.forEach((p) => { p.x *= W / ow; p.y *= H / oh; }); }, 150); });
})();

/* ---------- reveal + counters ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    $$("[data-count]", e.target).forEach(countUp);
    if (e.target.id === "gantt") growGantt();
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
function countUp(el) {
  const end = +el.dataset.count, dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || "";
  const t0 = performance.now(), dur = 1400;
  (function step(t) {
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = (end * e).toFixed(dec) + suf;
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}

/* ---------- skills ---------- */
let skillFilter = null;
Object.entries(SKILLS).forEach(([g, list]) => {
  const box = $(`.skill-cloud[data-group="${g}"]`);
  list.forEach((s) => {
    const n = PROJECTS.filter((p) => p.skills.includes(s)).length;
    const b = document.createElement("button");
    b.className = "skill"; b.dataset.skill = s;
    b.innerHTML = s + (n ? `<span class="cnt">${n}</span>` : "");
    b.onclick = () => {
      if (!n) return toast(`${s}: I use it at work, no public repo yet`);
      skillFilter = skillFilter === s ? null : s;
      $$(".skill").forEach((x) => x.classList.toggle("on", x.dataset.skill === skillFilter));
      setCat("all");
      if (skillFilter) document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    };
    box.appendChild(b);
  });
});

/* ---------- projects ---------- */
const grid = $("#projectGrid");
PROJECTS.forEach((p, i) => {
  const c = document.createElement("article");
  c.className = "card reveal"; c.tabIndex = 0; c.dataset.i = i;
  c.innerHTML = `
    <div class="top"><span class="emoji">${p.emoji}</span>${p.live ? '<span class="live">LIVE APP</span>' : ""}</div>
    <h3>${p.title}</h3>
    <p>${p.short}</p>
    <div class="metric">${p.metric}</div>
    <div class="tags">${p.skills.map((s) => `<span class="tag" data-s="${s}">${s}</span>`).join("")}</div>
    <span class="more">Details →</span>`;
  c.onclick = () => openProject(i);
  c.onkeydown = (e) => { if (e.key === "Enter") openProject(i); };
  if (!reduceMotion) {
    c.onmousemove = (e) => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-4px)`;
      c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
    };
    c.onmouseleave = () => (c.style.transform = "");
  }
  grid.appendChild(c);
});
let cat = "all";
function setCat(c) {
  cat = c;
  $$(".filter").forEach((b) => b.classList.toggle("active", b.dataset.filter === c));
  let shown = 0;
  $$(".card").forEach((el) => {
    const p = PROJECTS[el.dataset.i];
    const ok = (c === "all" || p.cats.includes(c)) && (!skillFilter || p.skills.includes(skillFilter));
    el.classList.toggle("hide", !ok);
    if (ok) { shown++; el.classList.add("in"); }
    $$(".tag", el).forEach((t) => t.classList.toggle("hl", t.dataset.s === skillFilter));
  });
  $("#filterNote").innerHTML = skillFilter
    ? `showing ${shown} project${shown === 1 ? "" : "s"} using <b>${skillFilter}</b> · <button id="clearSkill">clear</button>`
    : `${shown} project${shown === 1 ? "" : "s"}`;
  const cl = $("#clearSkill");
  if (cl) cl.onclick = () => { skillFilter = null; $$(".skill").forEach((x) => x.classList.remove("on")); setCat(cat); };
}
$$(".filter").forEach((b) => (b.onclick = () => setCat(b.dataset.filter)));
setCat("all");

function openProject(i) {
  const p = PROJECTS[i];
  const links = [];
  if (p.live) links.push(`<a class="btn primary" href="${p.live}" target="_blank" rel="noopener">🚀 Try the live app</a>`);
  if (p.repo) links.push(`<a class="btn ghost" href="${GH + p.repo}" target="_blank" rel="noopener">View code on GitHub ↗</a>`);
  if (p.url) links.push(`<a class="btn primary" href="${p.url}" target="_blank" rel="noopener">Open dashboards ↗</a>`);
  if (p.article) links.push(`<a class="btn ghost" href="${p.article}" target="_blank" rel="noopener">Read the article ↗</a>`);
  let chart = "";
  if (p.chart) {
    const max = Math.max(...p.chart.data.map((d) => d[1]));
    chart = `<p class="mono small muted">${p.chart.title}</p><div class="mini-chart">${p.chart.data
      .map((d) => `<div class="col"><span class="v">${d[1]}${p.chart.unit}</span><div class="b" data-h="${(d[1] / max) * 70}"></div><span class="lbl">${d[0]}</span></div>`)
      .join("")}</div>`;
  }
  $("#modalBody").innerHTML = `
    <span style="font-size:2.4rem">${p.emoji}</span>
    <h3 id="modalTitle">${p.title}</h3>
    <div class="metric">${p.metric}</div>
    ${chart}
    <ul>${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>
    <div class="tags">${p.skills.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
    <div class="modal-links">${links.join("")}</div>`;
  $("#modal").classList.add("open"); $("#modal").setAttribute("aria-hidden", "false");
  setTimeout(() => $$("#modalBody .b").forEach((b) => (b.style.height = b.dataset.h + "px")), 60);
  $("#modalClose").focus();
}
function closeModal() { $("#modal").classList.remove("open"); $("#modal").setAttribute("aria-hidden", "true"); }
$("#modalClose").onclick = closeModal;
$("#modal").onclick = (e) => { if (e.target.id === "modal") closeModal(); };

/* ---------- gantt ---------- */
const Y0 = 2018, Y1 = 2027;
const pct = (y) => ((y - Y0) / (Y1 - Y0)) * 100;
(function buildGantt() {
  let ticks = '<div></div><div class="ticks">';
  for (let y = Y0; y <= Y1; y++) ticks += `<span class="tick" style="left:${pct(y)}%">${y === Y1 ? "" : "'" + String(y).slice(2)}</span>`;
  $("#ganttAxis").innerHTML = ticks + "</div>";
  JOBS.forEach((j, i) => {
    const r = document.createElement("div");
    r.className = "gantt-row"; r.tabIndex = 0;
    r.innerHTML = `<div class="name">${j.role}<small>${j.org}</small></div>
      <div class="track"><div class="bar" style="left:${pct(j.from)}%;background:${j.color}" data-w="${pct(j.to) - pct(j.from)}"></div></div>`;
    const show = () => selectJob(i);
    r.onmouseenter = show; r.onclick = show; r.onfocus = show;
    $("#ganttRows").appendChild(r);
  });
  selectJob(JOBS.length - 1);
})();
function growGantt() { $$(".gantt-row .bar").forEach((b, i) => setTimeout(() => (b.style.width = b.dataset.w + "%"), i * 120)); }
function selectJob(i) {
  const j = JOBS[i];
  $$(".gantt-row").forEach((r, k) => r.classList.toggle("sel", k === i));
  const fmt = (y) => (y >= 2026.75 ? "Present" : Math.floor(y));
  $("#ganttDetail").style.borderColor = j.color;
  $("#ganttDetail").innerHTML = `<h4>${j.role} <span class="muted">@ ${j.org}</span></h4>
    <span class="mono small muted">${fmt(j.from)} – ${fmt(j.to)}</span>
    <ul>${j.pts.map((p) => `<li>${p}</li>`).join("")}</ul>`;
}

/* ---------- game: guess the correlation ---------- */
const gc = $("#gameCanvas"), g = gc.getContext("2d");
let game = { pts: [], r: 0, done: false, score: 0, streak: 0, best: 0, round: 1 };
try { game.best = +localStorage.getItem("bestScore") || 0; } catch {}
$("#best").textContent = game.best;
function randn() { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
function newRound() {
  const target = Math.random() * 2 - 1, n = 40 + Math.floor(Math.random() * 60);
  const pts = [];
  for (let k = 0; k < n; k++) { const x = randn(), y = target * x + Math.sqrt(1 - target * target) * randn(); pts.push([x, y]); }
  const mx = pts.reduce((a, p) => a + p[0], 0) / n, my = pts.reduce((a, p) => a + p[1], 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  pts.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; syy += (y - my) ** 2; });
  game.pts = pts; game.r = sxy / Math.sqrt(sxx * syy); game.done = false;
  $("#submitGuess").disabled = false; $("#nextRound").disabled = true;
  $("#gameMsg").className = "game-msg"; $("#gameMsg").textContent = `Round ${game.round}. What's the correlation?`;
  drawGame();
}
function drawGame(showLine) {
  const S = gc.width, pad = 30;
  g.clearRect(0, 0, S, S);
  g.strokeStyle = css("--line"); g.lineWidth = 1;
  g.beginPath(); g.moveTo(pad, S - pad); g.lineTo(S - pad / 2, S - pad); g.moveTo(pad, S - pad); g.lineTo(pad, pad / 2); g.stroke();
  if (!game.pts.length) return;
  const xs = game.pts.map((p) => p[0]), ys = game.pts.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const X = (x) => pad + 10 + ((x - x0) / (x1 - x0)) * (S - pad * 2 - 10), Y = (y) => S - pad - 10 - ((y - y0) / (y1 - y0)) * (S - pad * 2 - 10);
  g.fillStyle = css("--violet"); g.globalAlpha = 0.8;
  game.pts.forEach(([x, y]) => { g.beginPath(); g.arc(X(x), Y(y), 4.5, 0, 7); g.fill(); });
  g.globalAlpha = 1;
  if (game.done) {
    const n = xs.length, mx = xs.reduce((a, b) => a + b) / n, my = ys.reduce((a, b) => a + b) / n;
    let sxy = 0, sxx = 0; game.pts.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; });
    const m = sxy / sxx, b = my - m * mx;
    g.strokeStyle = css("--teal"); g.lineWidth = 3;
    g.beginPath(); g.moveTo(X(x0), Y(m * x0 + b)); g.lineTo(X(x1), Y(m * x1 + b)); g.stroke();
  }
}
$("#guess").oninput = (e) => ($("#guessVal").textContent = (+e.target.value).toFixed(2));
$("#submitGuess").onclick = () => {
  if (game.done) return;
  const guess = +$("#guess").value, err = Math.abs(guess - game.r);
  game.done = true;
  const msg = $("#gameMsg");
  if (err <= 0.1) {
    game.streak++; const pts = Math.round((1 - err * 10) * 50) + 50 + game.streak * 10;
    game.score += pts;
    msg.className = "game-msg good";
    msg.textContent = `🎯 Nice! Actual r = ${game.r.toFixed(2)}, you were off by ${err.toFixed(2)}. +${pts} pts`;
    if (game.streak % 3 === 0) confetti();
  } else {
    game.streak = 0;
    msg.className = "game-msg bad";
    msg.textContent = `Actual r = ${game.r.toFixed(2)}, you were off by ${err.toFixed(2)}. Streak reset. ${err > 0.5 ? "Hint: steeper and tighter clouds mean |r| is closer to 1." : "So close!"}`;
  }
  if (game.score > game.best) { game.best = game.score; try { localStorage.setItem("bestScore", game.best); } catch {} }
  $("#score").textContent = game.score; $("#streak").textContent = game.streak + " 🔥"; $("#best").textContent = game.best;
  $("#submitGuess").disabled = true; $("#nextRound").disabled = false;
  drawGame();
};
$("#nextRound").onclick = () => { game.round++; newRound(); };
newRound();

/* ---------- copy email / toast ---------- */
function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("show"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("show"), 2200); }
$("#copyEmail").onclick = () => { navigator.clipboard?.writeText("Alaobabajide.a@gmail.com").then(() => toast("Email copied ✓"), () => toast("Alaobabajide.a@gmail.com")); };

/* ---------- confetti ---------- */
function confetti() {
  if (reduceMotion) return;
  const cv = $("#confetti"), c = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight;
  const cols = [css("--teal"), css("--amber"), css("--violet"), css("--pink")];
  const ps = Array.from({ length: 160 }, () => ({ x: innerWidth / 2, y: innerHeight / 2, vx: (Math.random() - 0.5) * 16, vy: Math.random() * -16 - 4, s: 4 + Math.random() * 6, c: cols[Math.floor(Math.random() * 4)], a: Math.random() * 6 }));
  let f = 0;
  (function tick() {
    c.clearRect(0, 0, cv.width, cv.height);
    ps.forEach((p) => { p.vy += 0.4; p.x += p.vx; p.y += p.vy; p.a += 0.2; c.fillStyle = p.c; c.save(); c.translate(p.x, p.y); c.rotate(p.a); c.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); c.restore(); });
    if (++f < 150) requestAnimationFrame(tick); else c.clearRect(0, 0, cv.width, cv.height);
  })();
}

/* ---------- terminal ---------- */
const term = $("#terminal"), out = $("#termOut"), inp = $("#termInput");
const hist = []; let hi = 0;
function print(html) { out.insertAdjacentHTML("beforeend", html + "\n"); out.scrollTop = out.scrollHeight; }
function openTerm() {
  term.classList.add("open"); term.setAttribute("aria-hidden", "false");
  if (!out.textContent) print(`<span class="c">Welcome to babajide.data v1.0</span>\n<span class="m">Type <span class="y">help</span> to see what I can do.</span>`);
  setTimeout(() => inp.focus(), 50);
}
function closeTerm() { term.classList.remove("open"); term.setAttribute("aria-hidden", "true"); }
$("#termBtn").onclick = () => (term.classList.contains("open") ? closeTerm() : openTerm());
$("#termClose").onclick = closeTerm;
const CMDS = {
  help: () => `<span class="y">available commands</span>
  <span class="c">whoami</span>      who is this guy?
  <span class="c">skills</span>      tools I work with
  <span class="c">projects</span>    list projects
  <span class="c">open</span> &lt;n&gt;    open project details
  <span class="c">experience</span>  career summary
  <span class="c">contact</span>     how to reach me
  <span class="c">resume</span>      download my résumé
  <span class="c">theme</span>       toggle light / dark
  <span class="c">play</span>        jump to the correlation game
  <span class="c">clear</span>       clear the screen
  <span class="c">exit</span>        close terminal
  <span class="m">…and maybe a secret or two.</span>`,
  whoami: () => `Babajide Alao: Senior Data Analyst (AI Operations) @ Hugo Technologies, Lagos 🇳🇬\n4+ years turning data into dashboards, automations and ML apps. Open to relocation.`,
  skills: () => Object.entries(SKILLS).map(([k, v]) => `<span class="v">${{ lang: "languages", ml: "ml & data", bi: "bi & viz", db: "db & cloud" }[k].padEnd(11)}</span> ${v.join(", ")}`).join("\n"),
  projects: () => PROJECTS.map((p, i) => `<span class="y">[${String(i + 1).padStart(2)}]</span> ${p.emoji} ${p.title}${p.live ? ' <span class="c">(live)</span>' : ""}`).join("\n") + `\n<span class="m">type "open 1" for details</span>`,
  open: (a) => { const i = parseInt(a) - 1; if (!PROJECTS[i]) return `usage: open &lt;1-${PROJECTS.length}&gt;`; closeTerm(); openProject(i); return `opening ${PROJECTS[i].title}…`; },
  experience: () => JOBS.slice().reverse().map((j) => `<span class="c">${j.role}</span> <span class="m">@ ${j.org}</span>`).join("\n"),
  contact: () => `email     <a href="mailto:Alaobabajide.a@gmail.com">Alaobabajide.a@gmail.com</a>\nlinkedin  <a href="https://www.linkedin.com/in/babajide-alao/" target="_blank">linkedin.com/in/babajide-alao</a>\ngithub    <a href="${GH}" target="_blank">github.com/BabajideAlao-knn</a>`,
  resume: () => { window.open("Babajide_Alao_Resume.pdf", "_blank"); return "opening résumé…"; },
  theme: () => { toggleTheme(); return "theme switched ✓"; },
  play: () => { closeTerm(); location.hash = "#play"; return ""; },
  clear: () => { out.innerHTML = ""; return null; },
  exit: () => { closeTerm(); return null; },
  ls: () => `about.md  projects/  journey.csv  play.exe  contact.txt  <span class="y">secret.txt</span>`,
  "cat": (a) => a === "secret.txt" ? `try: <span class="c">sudo hire-me</span>` : `cat: ${a || ""}: no such file`,
  sudo: (a) => { if (a === "hire-me") { confetti(); return `<span class="c">[sudo] access granted ✓</span>\nExcellent decision. Drop me a line at <a href="mailto:Alaobabajide.a@gmail.com">Alaobabajide.a@gmail.com</a> 🎉`; } return "nice try 😄"; },
  hello: () => "hey there 👋", hi: () => "hey there 👋",
  coffee: () => "☕ brewing… ETL pipelines run better with coffee.",
};
inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const raw = inp.value.trim(); inp.value = "";
    if (!raw) return;
    hist.push(raw); hi = hist.length;
    print(`<span class="prompt">➜ ~</span> ${raw.replace(/</g, "&lt;")}`);
    const [cmd, ...rest] = raw.split(/\s+/);
    const fn = CMDS[cmd.toLowerCase()];
    const res = fn ? fn(rest.join(" ")) : `command not found: ${cmd.replace(/</g, "&lt;")}. type <span class="y">help</span>`;
    if (res) print(res);
  } else if (e.key === "ArrowUp") { if (hi > 0) inp.value = hist[--hi]; e.preventDefault(); }
  else if (e.key === "ArrowDown") { inp.value = hi < hist.length - 1 ? hist[++hi] : ((hi = hist.length), ""); e.preventDefault(); }
  else if (e.key === "Tab") { e.preventDefault(); const m = Object.keys(CMDS).find((k) => k.startsWith(inp.value)); if (m) inp.value = m; }
});

/* ---------- keyboard: ` terminal, Esc, Konami ---------- */
const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let kpos = 0;
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); closeTerm(); }
  const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName) && document.activeElement.type !== "range";
  if (e.key === "`" && !typing) { e.preventDefault(); term.classList.contains("open") ? closeTerm() : openTerm(); }
  kpos = e.key === konami[kpos] ? kpos + 1 : e.key === konami[0] ? 1 : 0;
  if (kpos === konami.length) { kpos = 0; confetti(); toast("🎮 Konami unlocked: you're clearly a person of culture"); }
});

/* ---------- start reveals ---------- */
$$(".reveal").forEach((el) => io.observe(el));
