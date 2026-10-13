/* =====================================================
   CONFIG: the only part you need to edit for content.
   ===================================================== */
const CONFIG = {
  name: "Mangal Dev Mahato",
  logoImage: "", // optional: e.g. "assets/images/logo.png" replaces the built-in logo
  profileImage: "MANGAL.jpeg",
  aboutImage: "1770898857151.JPG.jpeg",
  roles: ["Civil Engineering Student", "Graphic Designer", "Video Editor", "Creative Explorer"],
  intro: "I enjoy bringing engineering, design and digital creativity together, from technical drawings to visual stories.",
  bio: "My name is Mangal Dev Mahato, and I am a civil engineering student from Lalbandi, Sarlahi, Nepal.I am passionate about engineering, modern construction technology, and infrastructure development. I am continuously improving my technical knowledge, problem-solving abilities, and practical skills while exploring civil engineering software and digital technologies.",
  statement: "I want to build things that are useful, well made and good to look at.",
  education: { College: "IOE ERC", University: "TRIBHUVAN UNIVERSITY", "Academic year": "2025" },
  cvPath: "assets/documents/cv.pdf",
  designerCredit: "Designed by Mangal Dev Mahato.",
  defaultTheme: "dark", // "dark" or "light"
  // Social profile URLs. Leave "" until you add the real link; empty ones stay hidden.
  instagramURL: "https://www.instagram.com/mangaldev_10",
  facebookURL: "https://www.facebook.com/mangaldev0206",
  tiktokURL: "https://www.tiktok.com/@mangaldev_10"
};

// Skills. "level" is optional (0-100); delete it to hide the bar.
const SKILLS = [
  { group: "Civil Engineering", items: [
    { icon: "fa-drafting-compass", title: "AutoCAD", text: "2D drafting and plans." },
    { icon: "fa-ruler-combined", title: "Engineering drawing", text: "Reading and producing technical drawings." },
    { icon: "fa-building", title: "Structural engineering fundamentals", text: "Core principles of loads and structures." },
    { icon: "fa-helmet-safety", title: "Construction technology", text: "Materials, methods and site basics." },
    { icon: "fa-file-lines", title: "Technical documentation", text: "Clear reports and specifications." } ] },
  { group: "Creative Skills", items: [
    { icon: "fa-pen-nib", title: "Graphic design", text: "Layouts, posters and visual identity." },
    { icon: "fa-film", title: "Video editing", text: "Cutting, pacing and storytelling." },
    { icon: "fa-image", title: "Image editing", text: "Retouching and color work." },
    { icon: "fa-book-open", title: "Visual storytelling", text: "Turning ideas into visuals." } ] },
  { group: "Personal Interests", items: [
    { icon: "fa-plane", title: "Travelling", text: "Exploring new places." },
    { icon: "fa-camera", title: "Photography", text: "Capturing memories." },
    { icon: "fa-laptop-code", title: "Learning new technologies", text: "Picking up new software and tools." } ] }
];

// Exactly 10 certificates. Replace each placeholder; url is optional.
const CERTIFICATES = [
  // Each certificate is ONE block. Change "image" to your file path, and edit title/issuer/date/description/url.
  { title: "MechTRIX", image: "1000013377.jpg.jpeg", issuer: "SOMAES", date: "2079", description: "", url: "" },
  { title: "LOCUS", image: "1000013376.jpg.jpeg", issuer: "IOE PULCHOWK", date: "2079", description: "", url: "" },
  { title: "MAZE OF SCIENCE", image: "1000013506.jpg.jpeg", issuer: "CSC", date: "2079", description: "", url: "" },
  { title: "MATH QUIZ", image: "1000015927.jpg.jpeg", issuer: "PIC", date: "2079", description: "", url: "" },
  { title: "DRONE WORKSHOP", image: "1000013378.jpg.jpeg", issuer: "SOFTWARICA-CSC", date: "2079", description: "", url: "" },
  { title: "MAZE OF SCIENCE", image: "1000370760.jpg.jpeg", issuer: "CSC", date: "2080", description: "", url: "" },
  { title: "FAREWELL", image: "1000370752.jpg.jpeg", issuer: "CSC", date: "2081", description: "", url: "" },
  
];

// Exactly 2 projects. Descriptions are placeholders until you add real details.
const PROJECTS = [
  { title: "Civil Engineering Academic Project", category: "Civil Engineering", image: "assets/images/projects/project-01.jpg", year: "",
    description: "[Placeholder] Describe your drawing, design, estimation or assignment here.", tools: ["AutoCAD"], url: "" },
  { title: "Creative Design and Video Editing Project", category: "Creative Design / Video Editing", image: "assets/images/projects/project-02.jpg", year: "",
    description: "[Placeholder] Describe your design or video editing work here.", tools: ["[Add tools used]"], url: "" }
];

// Interest cards and gallery. Add images to assets/images/interests/.
const INTERESTS = [
  { icon: "fa-plane", title: "Travelling", text: "Exploring new places.", image: "pokhari-2.jpg" },
  { icon: "fa-camera", title: "Photography", text: "Capturing memories.", image: "1710074770105-01.jpeg" },
  { icon: "fa-pen-nib", title: "Graphic design", text: "Creative experimentation.", image: "graphics.jpg" },
  { icon: "fa-film", title: "Video editing", text: "Storytelling through cuts.", image: "images.jpg" },
  { icon: "fa-laptop-code", title: "engineering software", text: "Learning new tools.", image: "cad.jpg" }
];

const GALLERY = [
  {
    image: "IMG_20211209_121251_577.jpg.jpeg",
    alt: "Gallery photo 1"
  },
  {
    image: "IMG_20211209_132411_840.jpg.jpeg",
    alt: "Gallery photo 2"
  },
  {
    image: "IMG_20211209_123634_6.jpg.jpeg",
    alt: "Gallery photo 3"
  },
  {
    image: "IMG_20211209_121246_590.jpg.jpeg",
    alt: "Gallery photo 4"
  },
  {
    image: "IMG_20211209_132153_992.jpg.jpeg",
    alt: "Gallery photo 5"
  }
];


/* ================= Helpers ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Builds an <img> that shows a placeholder box if the file is missing. */
function img(src, alt, label = "Image placeholder", lazy = true) {
  return `<img src="${esc(src)}" alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : ""} onerror="this.removeAttribute('src');this.classList.add('noimg');this.dataset.ph='${esc(label)}'">`;
}

/* ================= Render content ================= */
function renderStatic() {
  $("#intro").textContent = CONFIG.intro;
  $("#bio").textContent = CONFIG.bio;
  $("#statement").textContent = CONFIG.statement;
  $("#cv").href = CONFIG.cvPath;
  $("#edu").innerHTML = Object.entries(CONFIG.education).map(([k, v]) => `<li><b>${esc(k)}:</b> ${esc(v)}</li>`).join("");
  $$("img[data-cfg]").forEach(el => {
    el.outerHTML = img(CONFIG[el.dataset.cfg], el.alt, "Add assets/images/profile.jpg", el.getAttribute("loading") === "lazy");
  });
  $("#credit").textContent = `© ${new Date().getFullYear()} ${CONFIG.name}. All Rights Reserved.\n${CONFIG.designerCredit}`;
}

function renderSkills() {
  $("#skillGroups").innerHTML = SKILLS.map(g => `<h3 class="group-title rv">${esc(g.group)}</h3><div class="grid sk">${g.items.map(s =>
    `<div class="card skill rv"><i class="fa-solid ${s.icon}"></i><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>${s.level ? `<div class="bar"><span style="width:${+s.level}%"></span></div>` : ""}</div>`).join("")}</div>`).join("");
}

function renderCertificates() {
  $("#certGrid").innerHTML = CERTIFICATES.map((c, i) => `<article class="card rv">
    <button class="thumb" data-cert="${i}" aria-label="Enlarge ${esc(c.title)}">${img(c.image, c.title, "Certificate image")}</button>
    <div class="body"><h3>${esc(c.title)}</h3><p>${esc(c.issuer)} · ${esc(c.date)}</p><p>${esc(c.description)}</p>
    ${c.url ? `<a class="chip" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">View Certificate</a>` : ""}</div></article>`).join("");
  $$("[data-cert]").forEach(b => b.addEventListener("click", () => openLightbox(+b.dataset.cert, b)));
}

function renderProjects() {
  $("#projGrid").innerHTML = PROJECTS.map((p, i) => `<article class="card proj rv">
    <div class="pimg">${img(p.image, p.title, "Project image")}</div>
    <div class="body"><span class="tag">${esc(p.category)}${p.year ? " · " + esc(p.year) : ""}</span><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
    <p><small>Tools: ${esc(p.tools.join(", "))}</small></p><div><button class="btn primary" data-proj="${i}">View Project</button></div></div></article>`).join("");
  $$("[data-proj]").forEach(b => b.addEventListener("click", () => openProject(+b.dataset.proj, b)));
}

function renderInterests() {
  $("#intGrid").innerHTML = INTERESTS.map(t => `<article class="card rv"><div class="thumb" style="cursor:default">${img(t.image, t.title, "Add " + t.image)}</div><div class="body"><h3><i class="fa-solid ${t.icon}"></i> ${esc(t.title)}</h3><p>${esc(t.text)}</p></div></article>`).join("");
  $("#track").innerHTML = GALLERY.map(g => `<figure>${img(g.image, g.alt, "Add gallery photo")}</figure>`).join("");
  const by = d => $("#track").scrollBy({ left: d * 336, behavior: reduce ? "auto" : "smooth" });
  $("#prev").onclick = () => by(-1); $("#next").onclick = () => by(1);
}

function renderSocials() {
  const nets = [["instagramURL", "fa-instagram", "Instagram"], ["facebookURL", "fa-facebook-f", "Facebook"], ["tiktokURL", "fa-tiktok", "TikTok"]];
  // Unconfigured networks show a dimmed, non-clickable icon (never a wrong profile).
  $$("[data-social]").forEach(box => {
    box.innerHTML = nets.map(([k, ic, n]) => CONFIG[k]
      ? `<a href="${esc(CONFIG[k])}" target="_blank" rel="noopener noreferrer" aria-label="${n}"><i class="fa-brands ${ic}"></i></a>`
      : `<span class="off" role="img" aria-label="${n} (link not added yet)" title="Add ${k} in script.js"><i class="fa-brands ${ic}"></i></span>`).join("");
  });
}

/* ================= Overlays (lightbox + project modal) ================= */
let lastFocus = null, current = 0;
function showOverlay(el, opener) { lastFocus = opener; el.hidden = false; document.body.style.overflow = "hidden"; $("[data-close]", el).focus(); }
function closeOverlays() { $$(".ov").forEach(o => o.hidden = true); document.body.style.overflow = ""; lastFocus && lastFocus.focus(); }
function openLightbox(i, opener) {
  current = (i + CERTIFICATES.length) % CERTIFICATES.length;
  const c = CERTIFICATES[current];
  $("#lbImg").src = c.image; $("#lbImg").alt = c.title;
  $("#lbImg").onerror = () => { $("#lbImg").removeAttribute("src"); };
  $("#lbCap").textContent = `${c.title} (${current + 1}/${CERTIFICATES.length}). ${c.description}`;
  if ($("#lb").hidden) showOverlay($("#lb"), opener);
}
function openProject(i, opener) {
  const p = PROJECTS[i];
  $("#pmImg").src = p.image; $("#pmImg").alt = p.title; $("#pmImg").onerror = () => $("#pmImg").removeAttribute("src");
  $("#pmTitle").textContent = p.title; $("#pmMeta").textContent = p.category + (p.year ? " · " + p.year : "");
  $("#pmDesc").textContent = p.description; $("#pmTools").textContent = "Tools: " + p.tools.join(", ");
  const l = $("#pmLink"); l.hidden = !p.url; if (p.url) l.href = p.url;
  showOverlay($("#pm"), opener);
}
function bindOverlays() {
  $$("[data-close]").forEach(b => b.onclick = closeOverlays);
  $$(".ov").forEach(o => o.addEventListener("click", e => { if (e.target === o) closeOverlays(); }));
  $("#lbPrev").onclick = () => openLightbox(current - 1); $("#lbNext").onclick = () => openLightbox(current + 1);
  addEventListener("keydown", e => {
    if (e.key === "Escape") closeOverlays();
    if (!$("#lb").hidden) { if (e.key === "ArrowLeft") openLightbox(current - 1); if (e.key === "ArrowRight") openLightbox(current + 1); }
  });
}

/* ================= Interactions ================= */
function typeRoles() {
  const el = $("#role"); let r = 0, c = 0, del = false;
  if (reduce) { el.textContent = CONFIG.roles[0]; return; }
  (function tick() {
    const w = CONFIG.roles[r];
    c += del ? -1 : 1; el.textContent = w.slice(0, c);
    let t = del ? 40 : 80;
    if (!del && c === w.length) { del = true; t = 1400; } else if (del && c === 0) { del = false; r = (r + 1) % CONFIG.roles.length; t = 300; }
    setTimeout(tick, t);
  })();
}
function revealOnScroll() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  $$(".rv").forEach(el => { el.style.transitionDelay = ([...el.parentNode.children].indexOf(el) % 4) * 90 + "ms"; io.observe(el); });
}
function trackNav() {
  const links = $$("#menu a"), secs = $$("main section");
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach(s => io.observe(s));
  links.forEach(a => a.addEventListener("click", () => { $("#menu").classList.remove("open"); $("#burger").setAttribute("aria-expanded", "false"); }));
  $("#burger").onclick = () => { const o = $("#menu").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", o); };
}
function scrollUI() {
  const bar = $("#progress"), top = $("#top");
  addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + "%"; top.classList.toggle("show", scrollY > 600);
  }, { passive: true });
  top.onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}
function theme() {
  const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
  const set = t => { document.documentElement.dataset.theme = t; try { localStorage.setItem("theme", t); } catch {} };
  set(saved || CONFIG.defaultTheme);
  $("#theme").onclick = () => set(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
}
function cursorGlow() {
  const g = $("#glow"); if (reduce) return;
  addEventListener("pointermove", e => { g.style.left = e.clientX + "px"; g.style.top = e.clientY + "px"; }, { passive: true });
}
function contact() {
  const email = "081bce065@ioepc.edu.np", st = $("#status");
  $("#copy").onclick = async () => {
    try { await navigator.clipboard.writeText(email); st.className = "ok"; st.textContent = "Email copied."; }
    catch { st.className = "err"; st.textContent = "Copy failed. Select the email and copy it manually."; }
  };
  $("#form").addEventListener("submit", e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target)), ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email || "");
    if (!f.name.trim() || !f.subject.trim() || !f.message.trim() || !ok) { st.className = "err"; st.textContent = "Fill in every field and use a valid email address."; return; }
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    location.href = `mailto:${email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
    st.className = "ok"; st.textContent = "Your email app should open. Press send there to deliver the message.";
  });
}

function customLogo() {
  if (!CONFIG.logoImage) return;
  $$(".mark").forEach(m => { const i = new Image(); i.src = CONFIG.logoImage; i.alt = ""; i.className = m.getAttribute("class"); i.style.height = m.classList.contains("big") ? "110px" : "44px"; i.style.width = "auto"; i.onload = () => m.replaceWith(i); });
}
/** 3D card/portrait tilt (desktop pointers only). */
function tilt() {
  if (reduce || !matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  let el = null;
  const reset = () => { if (el) { el.style.transform = ""; el.style.transition = ""; el = null; } };
  document.addEventListener("pointermove", e => {
    const t = e.target.closest(".tilt,.card:not(.proj)");
    if (t !== el) { reset(); el = t; }
    if (!t) return;
    const r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    t.style.transition = "transform .1s";
    t.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-4px)`;
  }, { passive: true });
}
/** Background: interactive node network (like a structural truss). Nodes drift, link to neighbours and to the cursor, and light pulses travel along the links. */
function network() {
  const cv = $("#bg3d"), ctx = cv.getContext("2d"), rnd = (a, b) => a + Math.random() * (b - a);
  let W, H, dpr, mx = -999, my = -999, last = performance.now(), pulses = [];
  const nodes = [];
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 1.5); W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(70, W * H / 20000)); while (nodes.length < n) nodes.push({ x: rnd(0, W), y: rnd(0, H), vx: rnd(-.12, .12), vy: rnd(-.12, .12), r: rnd(1.2, 2.4) }); nodes.length = n;
  }
  function draw() {
    const light = document.documentElement.dataset.theme === "light", rgb = light ? "2,132,199" : "56,189,248", rgb2 = light ? "109,40,217" : "139,92,246", L = W > 820 ? 150 : 110, a0 = W > 820 ? 1 : .7;
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const q = nodes[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < L) { ctx.strokeStyle = `rgba(${rgb},${(1 - d / L) * .28 * a0})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
      const dm = Math.hypot(p.x - mx, p.y - my);
      if (dm < 190) { ctx.strokeStyle = `rgba(${rgb2},${(1 - dm / 190) * .6})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my); ctx.stroke(); }
      ctx.fillStyle = `rgba(${rgb},${.55 * a0})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
    }
    ctx.shadowColor = `rgba(${rgb},1)`; ctx.shadowBlur = 12;                    // glowing pulses
    pulses.forEach(u => { const x = u.a.x + (u.b.x - u.a.x) * u.t, y = u.a.y + (u.b.y - u.a.y) * u.t; ctx.fillStyle = `rgba(${rgb},${1 - Math.abs(u.t - .5)})`; ctx.beginPath(); ctx.arc(x, y, 2.6, 0, 6.283); ctx.fill(); });
    ctx.shadowBlur = 0;
  }
  function loop(now) {
    const dt = Math.min(now - last, 50); last = now;
    if (!document.hidden) {
      nodes.forEach(p => { p.x += p.vx * dt * .06 * 16 / 16; p.y += p.vy * dt * .06 * 16 / 16;
        if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy); if (d < 120 && d > 0) { p.x += dx / d * .6; p.y += dy / d * .6; } });
      if (Math.random() < .05 && pulses.length < 6) { const a = nodes[Math.floor(Math.random() * nodes.length)], b = nodes.find(q => q !== a && Math.hypot(a.x - q.x, a.y - q.y) < 150); if (a && b) pulses.push({ a, b, t: 0 }); }
      pulses.forEach(u => u.t += dt * .0012); pulses = pulses.filter(u => u.t < 1);
      draw();
    }
    requestAnimationFrame(loop);
  }
  size(); addEventListener("resize", () => { size(); if (reduce) draw(); });
  if (reduce) { draw(); return; }
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  addEventListener("pointerleave", () => { mx = my = -999; });
  requestAnimationFrame(loop);
}

/* ================= Init ================= */
document.addEventListener("DOMContentLoaded", () => {
  theme(); renderStatic(); renderSkills(); renderCertificates(); renderProjects(); renderInterests(); renderSocials();
  bindOverlays(); typeRoles(); revealOnScroll(); trackNav(); scrollUI(); cursorGlow(); contact(); customLogo(); tilt(); network();
});
addEventListener("load", () => setTimeout(() => $("#loader").classList.add("done"), reduce ? 0 : 600));
