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
    article: "https://medium.com/@alaobabajide.a/visionary-ai-detecting-eye-diseases-with-deep-learning-e8e4f40988e4",
    short: "Built during the KaggleX BIPOC Mentorship Program 2023: a CNN that classifies retinal images into cataract, glaucoma, diabetic retinopathy or normal.",
    metric: "KaggleX 2023 · 4 classes · ~4,200 images",
    skills: ["Python", "CNNs"],
    points: [
      "My project as a mentee on the KaggleX BIPOC Mentorship Program 2023, written up in my Medium article \"Visionary AI\".",
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

const DASHBOARDS = [
  {
    img: "dash-mexico-toys.jpg", title: "Mexico Toys: Sales Analysis",
    kpis: ["$14.44M sales", "$4.01M gross profit"],
    desc: "Sales performance for a Mexican toy-store chain across product categories, store locations and cities, 2017 vs 2018.",
    insights: [
      "Toys is the biggest category at $5.1M in sales.",
      "Art & Crafts doubled year over year ($0.9M → $1.8M) while Electronics dropped ($1.4M → $0.8M).",
      "Downtown stores lead every category; Ciudad de México is the top city ($1.65M).",
    ],
  },
  {
    img: "dash-olympics.jpg", title: "Maven Olympics Challenge",
    kpis: ["207 countries", "223K summer athletes", "49K winter athletes"],
    desc: "120+ years of Olympic history: participation, sports, events and medals for the Maven Analytics challenge.",
    insights: [
      "The USA sent the most athletes (18.9K) and won the most golds (2.6K).",
      "Athletics, Gymnastics and Swimming are the most-entered sports.",
      "Michael Phelps (28) and Larisa Latynina (18) top the all-time medal tables.",
    ],
  },
  {
    img: "dash-superbowl.jpg", title: "Super Bowl Commercial Analysis",
    kpis: ["10 brands", "$1.28bn est. ad spend", "372M YouTube views"],
    desc: "What makes a Super Bowl ad? Views, likes, spend and creative themes (funny, patriotic, celebrity, animals…) by brand.",
    insights: [
      "Bud Light ran the most commercials (62), drew the most TV views and had the highest estimated spend ($225M).",
      "Doritos led on YouTube likes despite far fewer ads.",
      "Most ads skip patriotic themes; about a third feature animals.",
    ],
  },
  {
    img: "dash-usa-travel.jpg", title: "USA International Travel Analysis",
    kpis: ["4bn passengers", "46 countries"],
    desc: "Three decades of international air passengers from the USA: growth, seasonality and the most and least visited countries.",
    insights: [
      "Passengers grew from 74M (1990) to 224M (2019) before collapsing to 30M during the pandemic.",
      "Canada, Mexico and the UK are the top destinations.",
      "Travel peaks in July and August; February is the quietest month.",
    ],
  },
];

DASHBOARDS.push({
  img: "dash-hr-diversity.jpg", title: "HR: Geographical & Age Diversity",
  kpis: ["15 nationalities", "32 average age"],
  desc: "Workforce diversity report: age bands, nationalities, and promotions by department across FY20 and FY21.",
  insights: [
    "Most employees are in their 20s and 30s, with an average age of 32.",
    "15 nationalities, led by Switzerland, then France and Germany.",
    "Operations and Sales & Marketing are the largest departments and account for most promotions in both years.",
  ],
});

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
const REDRAW = [];
function toggleTheme() {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch {}
  REDRAW.forEach((f) => f());
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
  const words = ["Senior Data Analyst", "dashboard architect", "ML model builder", "data storyteller", "Power BI developer", "data-quality guardian"];
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
    const isPBI = s === "Power BI";
    const n = isPBI ? DASHBOARDS.length : PROJECTS.filter((p) => p.skills.includes(s)).length;
    const b = document.createElement("button");
    b.className = "skill"; b.dataset.skill = s;
    b.innerHTML = s + (n ? `<span class="cnt">${n}</span>` : "");
    b.onclick = () => {
      if (isPBI) return document.getElementById("dashboards").scrollIntoView({ behavior: "smooth" });
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
REDRAW.push(() => drawGame());
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

/* =========================================================
   Hobbies, dashboards gallery, game tabs + 4 extra games
   ========================================================= */

/* ---------- hobbies ---------- */
$$(".hobby").forEach((h) => (h.onclick = () => toast(h.dataset.msg)));

/* ---------- dashboards + lightbox ---------- */
let lbIndex = 0;
DASHBOARDS.forEach((d, i) => {
  const el = document.createElement("article");
  el.className = "dash reveal"; el.tabIndex = 0;
  el.innerHTML = `
    <div class="thumb"><img src="${d.img}" alt="${d.title} Power BI dashboard" loading="lazy" /><span class="zoom">🔍 click to expand</span></div>
    <div class="body">
      <span class="pbi">Power BI</span>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
      <div class="kpis">${d.kpis.map((k) => `<span class="kpi">${k}</span>`).join("")}</div>
    </div>`;
  el.onclick = () => openLightbox(i);
  el.onkeydown = (e) => { if (e.key === "Enter") openLightbox(i); };
  $("#dashGrid").appendChild(el);
  io.observe(el);
});
function openLightbox(i) {
  lbIndex = (i + DASHBOARDS.length) % DASHBOARDS.length;
  const d = DASHBOARDS[lbIndex];
  $("#lbImg").src = d.img; $("#lbImg").alt = d.title;
  $("#lbCap").innerHTML = `<h4>${d.title} <span class="pbi">Power BI</span></h4><span class="muted small">${lbIndex + 1} / ${DASHBOARDS.length}</span><ul>${d.insights.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  $("#lightbox").classList.add("open"); $("#lightbox").setAttribute("aria-hidden", "false");
}
function closeLightbox() { $("#lightbox").classList.remove("open"); $("#lightbox").setAttribute("aria-hidden", "true"); }
$("#lbClose").onclick = closeLightbox;
$("#lbPrev").onclick = () => openLightbox(lbIndex - 1);
$("#lbNext").onclick = () => openLightbox(lbIndex + 1);
$("#lightbox").onclick = (e) => { if (e.target.id === "lightbox") closeLightbox(); };
document.addEventListener("keydown", (e) => {
  if (!$("#lightbox").classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") openLightbox(lbIndex + 1);
  if (e.key === "ArrowLeft") openLightbox(lbIndex - 1);
});
let touchX = null;
$("#lightbox").addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
$("#lightbox").addEventListener("touchend", (e) => {
  if (touchX == null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) openLightbox(lbIndex + (dx < 0 ? 1 : -1));
  touchX = null;
});

/* ---------- game tabs ---------- */
const GAME_INIT = {};
function showGame(name) {
  $$(".gtab").forEach((t) => t.classList.toggle("active", t.dataset.game === name));
  $$(".gpanel").forEach((p) => p.classList.toggle("active", p.dataset.panel === name));
  if (GAME_INIT[name]) GAME_INIT[name]();
}
$$(".gtab").forEach((t) => (t.onclick = () => showGame(t.dataset.game)));

/* shared helpers */
function canvasPos(e, cv) {
  const r = cv.getBoundingClientRect();
  return { x: ((e.clientX - r.left) / r.width) * cv.width, y: ((e.clientY - r.top) / r.height) * cv.height };
}
function axes(ctx, S, pad) {
  ctx.clearRect(0, 0, S, S);
  ctx.strokeStyle = css("--line"); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pad, S - pad); ctx.lineTo(S - pad / 2, S - pad); ctx.moveTo(pad, S - pad); ctx.lineTo(pad, pad / 2); ctx.stroke();
}
function setMsg(el, text, kind) { el.className = "game-msg" + (kind ? " " + kind : ""); el.innerHTML = text; }
const ols = (pts) => {
  const n = pts.length, mx = pts.reduce((a, p) => a + p[0], 0) / n, my = pts.reduce((a, p) => a + p[1], 0) / n;
  let sxy = 0, sxx = 0; pts.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; });
  const m = sxy / sxx; return { m, b: my - m * mx };
};

/* ---------- game 2: spot the outlier ---------- */
(function outlierGame() {
  const cv = $("#outCanvas"), ctx = cv.getContext("2d"), S = cv.width, pad = 30;
  const st = { pts: [], out: -1, done: false, score: 0, streak: 0, level: 1, clicked: -1 };
  const X = (x) => pad + 12 + (x / 10) * (S - pad * 2 - 20);
  const Y = (y) => S - pad - 12 - (y / 10) * (S - pad * 2 - 20);
  function round() {
    const m = (Math.random() * 1.4 - 0.7), b = 5 - m * 5, sd = 0.45;
    const n = 30 + Math.floor(Math.random() * 15);
    st.pts = [];
    for (let i = 0; i < n; i++) { const x = 0.3 + Math.random() * 9.4; st.pts.push([x, Math.max(0.2, Math.min(9.8, m * x + b + randn() * sd))]); }
    // plant outlier: gets sneakier with level
    const k = Math.max(2.6, 6.5 - st.level * 0.5) * sd;
    const ox = 1 + Math.random() * 8;
    let oy = m * ox + b + (Math.random() < 0.5 ? -1 : 1) * k;
    if (oy < 0.3 || oy > 9.7) oy = m * ox + b - Math.sign(oy - 5) * k;
    st.out = Math.floor(Math.random() * n);
    st.pts[st.out] = [ox, oy];
    st.done = false; st.clicked = -1;
    $("#outNext").disabled = true;
    setMsg($("#outMsg"), `Level ${st.level}. Click the point that doesn't belong.`);
    draw();
  }
  function draw() {
    axes(ctx, S, pad);
    st.pts.forEach(([x, y], i) => {
      ctx.fillStyle = css("--violet"); ctx.globalAlpha = 0.85;
      ctx.beginPath(); ctx.arc(X(x), Y(y), 5.5, 0, 7); ctx.fill();
    });
    ctx.globalAlpha = 1;
    if (st.done) {
      const f = ols(st.pts.filter((_, i) => i !== st.out));
      ctx.strokeStyle = css("--teal"); ctx.lineWidth = 2; ctx.setLineDash([8, 6]);
      ctx.beginPath(); ctx.moveTo(X(0), Y(f.b)); ctx.lineTo(X(10), Y(f.m * 10 + f.b)); ctx.stroke(); ctx.setLineDash([]);
      const [ox, oy] = st.pts[st.out];
      ctx.strokeStyle = css("--pink"); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(X(ox), Y(oy), 14, 0, 7); ctx.stroke();
      if (st.clicked >= 0 && st.clicked !== st.out) {
        const [cx, cy] = st.pts[st.clicked];
        ctx.strokeStyle = css("--amber"); ctx.beginPath(); ctx.arc(X(cx), Y(cy), 11, 0, 7); ctx.stroke();
      }
    }
  }
  cv.addEventListener("click", (e) => {
    if (st.done) return;
    const p = canvasPos(e, cv);
    let best = -1, bd = 1e9;
    st.pts.forEach(([x, y], i) => { const d = Math.hypot(X(x) - p.x, Y(y) - p.y); if (d < bd) { bd = d; best = i; } });
    if (bd > 26) return;
    st.done = true; st.clicked = best;
    if (best === st.out) {
      st.streak++; const pts = 50 + st.level * 10; st.score += pts; st.level++;
      setMsg($("#outMsg"), `🎯 Got it! +${pts} pts. The next one will be harder to spot.`, "good");
      if (st.streak % 3 === 0) confetti();
    } else {
      st.streak = 0; st.level = Math.max(1, st.level - 1);
      setMsg($("#outMsg"), `Not quite: the outlier is circled in pink. It sits furthest from the trend line.`, "bad");
    }
    $("#outScore").textContent = st.score; $("#outStreak").textContent = st.streak + " 🔥"; $("#outLevel").textContent = st.level;
    $("#outNext").disabled = false;
    draw();
  });
  $("#outNext").onclick = round;
  REDRAW.push(draw);
  let started = false;
  GAME_INIT.outlier = () => { if (!started) { started = true; round(); } else draw(); };
})();

/* ---------- game 3: fit the line ---------- */
(function fitGame() {
  const cv = $("#fitCanvas"), ctx = cv.getContext("2d"), S = cv.width, pad = 30;
  const st = { pts: [], h: [5, 5], done: false, total: 0, best: 0, drag: -1 };
  const XL = 0.4, XR = 9.6;
  const X = (x) => pad + 12 + (x / 10) * (S - pad * 2 - 20);
  const Y = (y) => S - pad - 12 - (y / 10) * (S - pad * 2 - 20);
  const Yinv = (py) => ((S - pad - 12 - py) / (S - pad * 2 - 20)) * 10;
  function round() {
    const m = Math.random() * 1.6 - 0.8, b = 5 - m * 5 + (Math.random() - 0.5) * 2, sd = 0.5 + Math.random() * 1.1;
    st.pts = [];
    for (let i = 0; i < 40; i++) { const x = 0.3 + Math.random() * 9.4; st.pts.push([x, Math.max(0.2, Math.min(9.8, m * x + b + randn() * sd))]); }
    st.h = [5, 5]; st.done = false;
    $("#fitSubmit").disabled = false; $("#fitNext").disabled = true;
    setMsg($("#fitMsg"), "Drag the ● handles at each end of the line.");
    draw();
  }
  const userLine = () => { const m = (st.h[1] - st.h[0]) / (XR - XL); return { m, b: st.h[0] - m * XL }; };
  const sse = (f) => st.pts.reduce((a, [x, y]) => a + (y - (f.m * x + f.b)) ** 2, 0);
  function draw() {
    axes(ctx, S, pad);
    ctx.fillStyle = css("--violet"); ctx.globalAlpha = 0.8;
    st.pts.forEach(([x, y]) => { ctx.beginPath(); ctx.arc(X(x), Y(y), 4.5, 0, 7); ctx.fill(); });
    ctx.globalAlpha = 1;
    const u = userLine();
    if (st.done) {
      // residuals to best line
      const f = ols(st.pts);
      ctx.strokeStyle = css("--teal"); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(X(0), Y(f.b)); ctx.lineTo(X(10), Y(f.m * 10 + f.b)); ctx.stroke();
      ctx.fillStyle = css("--teal"); ctx.font = "12px JetBrains Mono, monospace"; ctx.fillText("least squares", X(0.2), Y(f.b) - 8);
    }
    ctx.strokeStyle = css("--amber"); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(X(XL), Y(st.h[0])); ctx.lineTo(X(XR), Y(st.h[1])); ctx.stroke();
    if (!st.done) {
      ctx.strokeStyle = css("--amber"); ctx.globalAlpha = 0.35; ctx.lineWidth = 1;
      st.pts.forEach(([x, y]) => { ctx.beginPath(); ctx.moveTo(X(x), Y(y)); ctx.lineTo(X(x), Y(u.m * x + u.b)); ctx.stroke(); });
      ctx.globalAlpha = 1;
    }
    [XL, XR].forEach((hx, i) => {
      ctx.fillStyle = css("--amber"); ctx.beginPath(); ctx.arc(X(hx), Y(st.h[i]), 10, 0, 7); ctx.fill();
      ctx.fillStyle = css("--bg"); ctx.beginPath(); ctx.arc(X(hx), Y(st.h[i]), 4, 0, 7); ctx.fill();
    });
  }
  cv.addEventListener("pointerdown", (e) => {
    if (st.done) return;
    const p = canvasPos(e, cv);
    const d = [XL, XR].map((hx, i) => Math.hypot(X(hx) - p.x, Y(st.h[i]) - p.y));
    st.drag = d[0] < d[1] ? 0 : 1;
    if (Math.min(...d) > 60) { st.drag = p.x < S / 2 ? 0 : 1; }
    st.h[st.drag] = Math.max(0, Math.min(10, Yinv(p.y)));
    cv.setPointerCapture(e.pointerId); cv.style.cursor = "grabbing"; draw();
  });
  cv.addEventListener("pointermove", (e) => {
    if (st.drag < 0) return;
    st.h[st.drag] = Math.max(0, Math.min(10, Yinv(canvasPos(e, cv).y))); draw();
  });
  const end = () => { st.drag = -1; cv.style.cursor = "grab"; };
  cv.addEventListener("pointerup", end); cv.addEventListener("pointercancel", end);
  $("#fitSubmit").onclick = () => {
    if (st.done) return;
    st.done = true;
    const ratio = sse(userLine()) / sse(ols(st.pts));
    const pts = Math.max(0, Math.round(100 - (ratio - 1) * 80));
    st.total += pts; st.best = Math.max(st.best, pts);
    $("#fitLast").textContent = pts; $("#fitScore").textContent = st.total; $("#fitBest").textContent = st.best;
    const pct = Math.round((ratio - 1) * 100);
    setMsg($("#fitMsg"), pts >= 90
      ? `📏 Superb! Your line's squared error is only ${pct}% above least squares. ${pts} pts.`
      : pts >= 60 ? `Not bad! ${pct}% more squared error than the optimal line. ${pts} pts.`
      : `Your line has ${pct}% more squared error than least squares (in teal). Tip: balance the points above and below. ${pts} pts.`,
      pts >= 60 ? "good" : "bad");
    if (pts >= 95) confetti();
    $("#fitSubmit").disabled = true; $("#fitNext").disabled = false;
    draw();
  };
  $("#fitNext").onclick = round;
  REDRAW.push(draw);
  let started = false;
  GAME_INIT.fit = () => { if (!started) { started = true; round(); } else draw(); };
})();

/* ---------- game 4: data detective ---------- */
(function detectiveGame() {
  const NAMES = ["Ada", "Tunde", "Chinedu", "Ngozi", "Femi", "Aisha", "Emeka", "Bola", "Kemi", "Ibrahim", "Zainab", "Segun", "Yemi", "Amaka", "Musa", "Funke"];
  const CITIES = ["Lagos", "Abuja", "Ibadan", "Kano", "Enugu", "Port Harcourt"];
  const TYPOS = { Lagos: "Lagso", Abuja: "Abjua", Ibadan: "Ibadn", Kano: "Knao", Enugu: "Enuug", "Port Harcourt": "Port Harcout" };
  const DEPTS = ["Ops", "Finance", "AI Ops", "Sales", "HR"];
  const COLS = ["ID", "Name", "Age", "City", "Dept", "Salary (₦k)", "Joined"];
  const st = { rows: [], errors: [], flags: new Set(), done: false, score: 0, t0: 0, timer: null };
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const pad2 = (n) => String(n).padStart(2, "0");
  function newData() {
    const names = [...NAMES].sort(() => Math.random() - 0.5);
    st.rows = Array.from({ length: 9 }, (_, i) => [
      String(1001 + i * 7 + Math.floor(Math.random() * 5)), names[i], String(22 + Math.floor(Math.random() * 30)),
      pick(CITIES), pick(DEPTS), String(180 + Math.floor(Math.random() * 60) * 10),
      `20${pad2(15 + Math.floor(Math.random() * 10))}-${pad2(1 + Math.floor(Math.random() * 12))}-${pad2(1 + Math.floor(Math.random() * 28))}`,
    ]);
    // plant 4-5 distinct error types in distinct rows
    const types = ["age", "blank", "typo", "salary", "date", "dupe", "negative"].sort(() => Math.random() - 0.5).slice(0, 4 + Math.floor(Math.random() * 2));
    const rowsAvail = [...Array(9).keys()].sort(() => Math.random() - 0.5);
    st.errors = [];
    types.forEach((t) => {
      const r = rowsAvail.pop();
      if (t === "age") { st.rows[r][2] = pick(["214", "7", "301", "0"]); st.errors.push({ cells: [`${r},2`], label: "Impossible age" }); }
      if (t === "negative") { st.rows[r][5] = "-" + st.rows[r][5]; st.errors.push({ cells: [`${r},5`], label: "Negative salary" }); }
      if (t === "blank") { const c = pick([1, 3, 4]); st.rows[r][c] = ""; st.errors.push({ cells: [`${r},${c}`], label: "Missing value" }); }
      if (t === "typo") { st.rows[r][3] = TYPOS[st.rows[r][3]]; st.errors.push({ cells: [`${r},3`], label: "City typo" }); }
      if (t === "salary") { st.rows[r][5] = pick(["abc", "2OO", "n/a?"]); st.errors.push({ cells: [`${r},5`], label: "Non-numeric salary" }); }
      if (t === "date") { st.rows[r][6] = pick(["2031-04-12", "2022-13-05", "2021-02-30"]); st.errors.push({ cells: [`${r},6`], label: "Invalid / future date" }); }
      if (t === "dupe") { const o = rowsAvail[rowsAvail.length - 1] ?? (r === 0 ? 1 : 0); st.rows[r][0] = st.rows[o][0]; st.errors.push({ cells: [`${r},0`, `${o},0`], label: "Duplicate ID" }); }
    });
    st.flags.clear(); st.done = false;
    $("#detCount").textContent = st.errors.length;
    $("#detCheck").disabled = false;
    setMsg($("#detMsg"), `There are <b>${st.errors.length}</b> problems hiding in this table. Find them!`);
    render();
    clearInterval(st.timer); st.t0 = Date.now();
    st.timer = setInterval(() => { if (!st.done) $("#detTime").textContent = Math.floor((Date.now() - st.t0) / 1000) + "s"; }, 500);
  }
  function render() {
    const t = $("#detTable");
    t.innerHTML = `<thead><tr>${COLS.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${st.rows
      .map((row, r) => `<tr>${row.map((v, c) => `<td data-k="${r},${c}" class="${v === "" ? "empty" : ""}">${v}</td>`).join("")}</tr>`).join("")}</tbody>`;
    $$("td", t).forEach((td) => (td.onclick = () => {
      if (st.done) return;
      const k = td.dataset.k;
      st.flags.has(k) ? st.flags.delete(k) : st.flags.add(k);
      td.classList.toggle("flag");
    }));
  }
  $("#detCheck").onclick = () => {
    if (st.done) return;
    st.done = true; clearInterval(st.timer);
    const secs = Math.floor((Date.now() - st.t0) / 1000);
    const errorCells = new Set(st.errors.flatMap((e) => e.cells));
    let found = 0;
    st.errors.forEach((e) => { if (e.cells.some((c) => st.flags.has(c))) found++; });
    const wrong = [...st.flags].filter((k) => !errorCells.has(k)).length;
    const bonus = found === st.errors.length ? Math.max(0, 60 - secs) : 0;
    const pts = Math.max(0, found * 25 - wrong * 10 + bonus);
    st.score += pts; $("#detScore").textContent = st.score;
    $$("#detTable td").forEach((td) => {
      const k = td.dataset.k; td.classList.remove("flag");
      const isErr = errorCells.has(k), flagged = st.flags.has(k);
      if (isErr && flagged) td.classList.add("hit");
      else if (isErr) { const e = st.errors.find((x) => x.cells.includes(k)); if (!e.cells.some((c) => st.flags.has(c))) td.classList.add("miss"); }
      else if (flagged) td.classList.add("wrong");
    });
    const list = `<ul class="det-legend">${st.errors.map((e) => `<li>${e.cells.some((c) => st.flags.has(c)) ? "✅" : "❌"} ${e.label}</li>`).join("")}</ul>`;
    setMsg($("#detMsg"), `${found === st.errors.length && !wrong ? "🕵️ Spotless audit!" : "Audit complete."} Found ${found}/${st.errors.length}, ${wrong} false flag${wrong === 1 ? "" : "s"}${bonus ? `, +${bonus} speed bonus` : ""}. <b>+${pts} pts</b>${list}`, found === st.errors.length ? "good" : "bad");
    if (found === st.errors.length && !wrong) confetti();
    $("#detCheck").disabled = true;
  };
  $("#detNew").onclick = newData;
  let started = false;
  GAME_INIT.detective = () => { if (!started) { started = true; newData(); } };
})();

/* ---------- game 5: guess the average ---------- */
(function meanGame() {
  const cv = $("#meanCanvas"), ctx = cv.getContext("2d"), S = cv.width, pad = 34;
  const st = { data: [], lo: 0, hi: 100, mean: 0, median: 0, done: false, score: 0, streak: 0, round: 1, ctxLabel: "", unit: "" };
  const SCEN = [
    { label: "Delivery time", unit: "mins", gen: () => 12 + Math.exp(2.4 + randn() * 0.55) },
    { label: "Monthly data usage", unit: "GB", gen: () => Math.exp(2.2 + randn() * 0.7) },
    { label: "Exam scores", unit: "pts", gen: () => Math.max(0, Math.min(100, 64 + randn() * 12)) },
    { label: "Ride fare", unit: "₦k", gen: () => 1.5 + Math.exp(0.8 + randn() * 0.6) },
    { label: "Daily steps", unit: "k", gen: () => Math.random() < 0.55 ? Math.max(0.5, 4 + randn() * 1.2) : 10 + randn() * 1.6 },
    { label: "Call duration", unit: "mins", gen: () => Math.random() * 30 + 2 },
    { label: "Customer age", unit: "yrs", gen: () => Math.max(18, 48 - Math.exp(2.6 + randn() * 0.5) + 15) },
  ];
  const nbins = 16;
  function round() {
    const sc = SCEN[Math.floor(Math.random() * SCEN.length)];
    st.ctxLabel = sc.label; st.unit = sc.unit;
    st.data = Array.from({ length: 220 }, sc.gen);
    st.lo = Math.min(...st.data); st.hi = Math.max(...st.data);
    st.mean = st.data.reduce((a, b) => a + b, 0) / st.data.length;
    const s = [...st.data].sort((a, b) => a - b); st.median = (s[109] + s[110]) / 2;
    const g = $("#meanGuess");
    g.min = st.lo.toFixed(1); g.max = st.hi.toFixed(1); g.step = ((st.hi - st.lo) / 400).toFixed(3);
    g.value = ((st.lo + st.hi) / 2).toFixed(1); $("#meanVal").textContent = (+g.value).toFixed(1) + " " + st.unit;
    st.done = false;
    $("#meanSubmit").disabled = false; $("#meanNext").disabled = true;
    setMsg($("#meanMsg"), `<b>${sc.label}</b> for 220 people. Where's the mean?`);
    draw();
  }
  const Xv = (v) => pad + ((v - st.lo) / (st.hi - st.lo || 1)) * (S - pad * 1.5);
  function vline(v, color, label, yoff) {
    ctx.strokeStyle = color; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(Xv(v), pad / 2 + 14); ctx.lineTo(Xv(v), S - pad); ctx.stroke();
    ctx.fillStyle = color; ctx.font = "bold 12px JetBrains Mono, monospace";
    const tw = ctx.measureText(label).width;
    const tx = Xv(v) + 6 + tw > S - 4 ? Xv(v) - 6 - tw : Xv(v) + 6;
    ctx.fillText(label, tx, pad / 2 + 14 + yoff);
  }
  function draw() {
    axes(ctx, S, pad);
    if (!st.data.length) return;
    const bins = Array(nbins).fill(0), w = (st.hi - st.lo) / nbins || 1;
    st.data.forEach((v) => bins[Math.min(nbins - 1, Math.floor((v - st.lo) / w))]++);
    const max = Math.max(...bins), bw = (S - pad * 1.5) / nbins, H = S - pad * 2 - 20;
    bins.forEach((c, i) => {
      const h = (c / max) * H;
      ctx.fillStyle = css("--violet"); ctx.globalAlpha = 0.75;
      ctx.fillRect(pad + i * bw + 1, S - pad - h, bw - 2, h);
    });
    ctx.globalAlpha = 1;
    ctx.fillStyle = css("--muted"); ctx.font = "11px JetBrains Mono, monospace";
    ctx.fillText(st.lo.toFixed(1), pad - 4, S - pad + 16);
    ctx.fillText(st.hi.toFixed(1), S - pad - 20, S - pad + 16);
    ctx.fillText(`${st.ctxLabel} (${st.unit})`, S / 2 - 70, S - 6);
    const g = +$("#meanGuess").value;
    vline(g, css("--amber"), "you " + g.toFixed(1), 0);
    if (st.done) {
      vline(st.mean, css("--teal"), "mean " + st.mean.toFixed(1), 16);
      vline(st.median, css("--pink"), "median " + st.median.toFixed(1), 32);
    }
  }
  $("#meanGuess").oninput = (e) => { $("#meanVal").textContent = (+e.target.value).toFixed(1) + " " + st.unit; if (!st.done) draw(); };
  $("#meanSubmit").onclick = () => {
    if (st.done) return;
    st.done = true;
    const g = +$("#meanGuess").value, err = Math.abs(g - st.mean) / (st.hi - st.lo);
    const pts = Math.max(0, Math.round(100 * (1 - err / 0.12)));
    const skew = Math.abs(st.mean - st.median) / (st.hi - st.lo) > 0.03;
    if (err <= 0.04) { st.streak++; if (st.streak % 3 === 0) confetti(); } else st.streak = 0;
    st.score += pts;
    $("#meanScore").textContent = st.score; $("#meanStreak").textContent = st.streak + " 🔥";
    const nearMedian = Math.abs(g - st.median) < Math.abs(g - st.mean) && skew;
    setMsg($("#meanMsg"), `${err <= 0.04 ? "📊 Spot on!" : "Mean was"} ${st.mean.toFixed(1)} ${st.unit} (you: ${g.toFixed(1)}). +${pts} pts.` +
      (nearMedian ? `<br><span class="small">You landed nearer the <b>median</b> (${st.median.toFixed(1)}). With skewed data the mean is dragged toward the tail.</span>` :
       skew ? `<br><span class="small">Notice the gap between mean and median: that's skew.</span>` : ""), err <= 0.04 ? "good" : "bad");
    $("#meanSubmit").disabled = true; $("#meanNext").disabled = false;
    draw();
  };
  $("#meanNext").onclick = () => { st.round++; $("#meanRound").textContent = st.round; round(); };
  REDRAW.push(draw);
  let started = false;
  GAME_INIT.mean = () => { if (!started) { started = true; round(); } else draw(); };
})();

/* ---------- extra terminal commands ---------- */
CMDS.dashboards = () => DASHBOARDS.map((d, i) => `<span class="y">[${i + 1}]</span> ${d.title}`).join("\n") + `\n<span class="m">type "dash 1" to open one</span>`;
CMDS.dash = (a) => { const i = parseInt(a) - 1; if (!DASHBOARDS[i]) return `usage: dash &lt;1-${DASHBOARDS.length}&gt;`; closeTerm(); openLightbox(i); return `opening ${DASHBOARDS[i].title}…`; };
CMDS.games = () => `<span class="c">corr</span>  guess the correlation\n<span class="c">outlier</span>  spot the outlier\n<span class="c">fit</span>  fit the line\n<span class="c">detective</span>  data detective\n<span class="c">mean</span>  guess the average\n<span class="m">type "play &lt;name&gt;"</span>`;
CMDS.play = (a) => { closeTerm(); location.hash = "#play"; if (a && $(`.gtab[data-game="${a}"]`)) showGame(a); return ""; };
CMDS.hobbies = () => "🤝 meeting new people\n✈️ travelling\n🎌 anime (ask me for recommendations)";
const _help = CMDS.help;
CMDS.help = () => _help().replace("  <span class=\"c\">play</span>        jump to the correlation game", "  <span class=\"c\">dashboards</span>  list my Power BI dashboards\n  <span class=\"c\">games</span>       list the arcade games\n  <span class=\"c\">play</span> [game]  jump to the arcade\n  <span class=\"c\">hobbies</span>     life outside data");
