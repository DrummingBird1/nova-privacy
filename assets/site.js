/* Nova site: "try smart add" demo. A deliberately simplified, in-page stand-in for the extension's on-device parser:
   it knows "today / tomorrow / urgent" in all 18 languages, plus weekdays and "in N days" in English and Hebrew.
   No network, no storage, nothing leaves the page. */
(() => {
  const demo = document.getElementById("demo");
  if (!demo) return;
  const input = document.getElementById("demoInput");
  const titleEl = document.getElementById("demoTitle");
  const pillsEl = document.getElementById("demoPills");
  const langsEl = document.getElementById("demoLangs");
  const PAGE_LANG = document.documentElement.lang === "he" ? "he" : "en";

  const L = {
    en: { name: "English", today: ["today"], tomorrow: ["tomorrow"], after: ["day after tomorrow"], urgent: ["urgent", "important"], ex: "Call mom tomorrow urgent #family" },
    he: { name: "עברית", today: ["היום"], tomorrow: ["מחר"], after: ["מחרתיים"], urgent: ["דחוף", "חשוב"], ex: "להתקשר לאמא מחר דחוף #משפחה" },
    fr: { name: "Français", today: ["aujourd'hui", "aujourd’hui"], tomorrow: ["demain"], urgent: ["urgent"], ex: "Appeler maman demain urgent #famille" },
    es: { name: "Español", today: ["hoy"], tomorrow: ["mañana"], urgent: ["urgente"], ex: "Llamar a mamá mañana urgente #familia" },
    de: { name: "Deutsch", today: ["heute"], tomorrow: ["morgen"], after: ["übermorgen"], urgent: ["dringend"], ex: "Mama morgen anrufen dringend #familie" },
    ru: { name: "Русский", today: ["сегодня"], tomorrow: ["завтра"], after: ["послезавтра"], urgent: ["срочно"], ex: "Позвонить маме завтра срочно #семья" },
    ar: { name: "العربية", today: ["اليوم"], tomorrow: ["غدًا", "غدا", "غداً"], urgent: ["عاجل"], ex: "اتصل بأمي غدًا عاجل #العائلة" },
    pt: { name: "Português", today: ["hoje"], tomorrow: ["amanhã"], urgent: ["urgente"], ex: "Ligar à mãe amanhã urgente #família" },
    ja: { name: "日本語", cjk: true, today: ["今日"], tomorrow: ["明日"], urgent: ["緊急"], ex: "明日 母に電話 緊急 #家族" },
    ko: { name: "한국어", today: ["오늘"], tomorrow: ["내일"], urgent: ["긴급"], ex: "내일 엄마한테 전화 긴급 #가족" },
    zh: { name: "中文", cjk: true, today: ["今天"], tomorrow: ["明天"], urgent: ["紧急"], ex: "明天给妈妈打电话 紧急 #家人" },
    hi: { name: "हिन्दी", today: ["आज"], tomorrow: ["कल"], urgent: ["ज़रूरी", "जरूरी"], ex: "कल माँ को फ़ोन करना ज़रूरी #परिवार" },
    it: { name: "Italiano", today: ["oggi"], tomorrow: ["domani"], urgent: ["urgente"], ex: "Chiama la mamma domani urgente #famiglia" },
    nl: { name: "Nederlands", today: ["vandaag"], tomorrow: ["morgen"], urgent: ["dringend"], ex: "Mama morgen bellen dringend #familie" },
    pl: { name: "Polski", today: ["dzisiaj", "dziś"], tomorrow: ["jutro"], urgent: ["pilne"], ex: "Zadzwonić do mamy jutro pilne #rodzina" },
    tr: { name: "Türkçe", today: ["bugün"], tomorrow: ["yarın"], urgent: ["acil"], ex: "Anneyi yarın ara acil #aile" },
    th: { name: "ไทย", cjk: true, today: ["วันนี้"], tomorrow: ["พรุ่งนี้"], urgent: ["ด่วน"], ex: "โทรหาแม่พรุ่งนี้ด่วน #ครอบครัว" },
    vi: { name: "Tiếng Việt", today: ["hôm nay"], tomorrow: ["ngày mai"], urgent: ["gấp"], ex: "Gọi cho mẹ ngày mai gấp #giađình" },
  };
  const EN_DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const HE_DAYS = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const rx = (token, cjk) => new RegExp(cjk ? esc(token) : `(?<![\\p{L}\\p{N}\\p{M}])${esc(token)}(?![\\p{L}\\p{N}\\p{M}])`, "iu");

  /* returns [langCode, matchedText] for the first token of `kind` found in `text`, longest tokens first */
  function findToken(text, kind) {
    for (const [code, def] of Object.entries(L)) {
      for (const tok of [...(def[kind] || [])].sort((a, b) => b.length - a.length)) {
        const m = rx(tok, def.cjk).exec(text);
        if (m) return { code, text: m[0], index: m.index };
      }
    }
    return null;
  }
  const cut = (text, hit) => (text.slice(0, hit.index) + " " + text.slice(hit.index + hit.text.length));

  function parse(raw) {
    let text = raw;
    const out = { tags: [], projects: [], high: false, offset: null, lang: null };
    text = text.replace(/#([\p{L}\p{N}_]+)/gu, (_, t) => { out.tags.push(t); return " "; });
    text = text.replace(/(^|\s)\+([\p{L}\p{N}_]+)/gu, (_, sp, p) => { out.projects.push(p); return sp; });

    const hi = findToken(text, "urgent");
    if (hi) { out.high = true; out.lang = hi.code; text = cut(text, hi); }
    if (/(^|\s)!(high|urgent)(\s|$)/i.test(text)) { out.high = true; text = text.replace(/(^|\s)!(high|urgent)(?=\s|$)/i, " "); }

    // date: longest/most specific first
    let hit = findToken(text, "after");
    if (hit) { out.offset = 2; out.lang = out.lang || hit.code; text = cut(text, hit); }
    if (out.offset === null && (hit = findToken(text, "tomorrow"))) { out.offset = 1; out.lang = hit.code; text = cut(text, hit); }
    if (out.offset === null && (hit = findToken(text, "today"))) { out.offset = 0; out.lang = hit.code; text = cut(text, hit); }
    if (out.offset === null) {
      const n = /\bin (\d{1,3}) days?\b/i.exec(text) || /בעוד (\d{1,3}) ימים/.exec(text);
      if (n) { out.offset = Math.min(+n[1], 365); out.lang = /בעוד/.test(n[0]) ? "he" : "en"; text = text.replace(n[0], " "); }
    }
    if (out.offset === null) {
      const dow = new Date().getDay();
      const en = new RegExp(`(^|\\s)(?:on\\s+)?(${EN_DAYS.join("|")})(?=\\s|$)`, "i").exec(text);
      const he = new RegExp(`(^|\\s)(?:ב)?יום (${HE_DAYS.join("|")})(?=\\s|$)`).exec(text);
      const m = en || he;
      if (m) {
        const idx = en ? EN_DAYS.indexOf(m[2].toLowerCase()) : HE_DAYS.indexOf(m[2]);
        out.offset = ((idx - dow + 7) % 7) || 7;
        out.lang = en ? "en" : "he";
        text = text.replace(m[0], " ");
      }
    }
    out.title = text.replace(/\s+/g, " ").replace(/^[\s,.:;\-–—]+|[\s,.:;\-–—]+$/g, "");
    return out;
  }

  function render() {
    const raw = input.value.trim();
    pillsEl.textContent = "";
    if (!raw) { titleEl.textContent = "…"; return; }
    const p = parse(raw);
    titleEl.textContent = p.title || raw;
    const add = (txt, cls) => { const s = document.createElement("span"); s.className = "pill" + (cls ? " " + cls : ""); s.textContent = txt; pillsEl.appendChild(s); };
    if (p.offset !== null) {
      const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + p.offset);
      const fmt = new Intl.DateTimeFormat(L[p.lang] ? p.lang : PAGE_LANG, { weekday: "short", month: "short", day: "numeric" }).format(d);
      add(`📅 ${demo.dataset.due} ${fmt}`);
    }
    if (p.high) add(`🔴 ${demo.dataset.high}`, "hi");
    p.projects.forEach((x) => add("+" + x));
    p.tags.forEach((x) => add("#" + x));
    if (!pillsEl.childNodes.length) add(demo.dataset.none);
  }

  // language chips
  const buttons = [];
  for (const [code, def] of Object.entries(L)) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip"; b.textContent = def.name; b.lang = code; b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", () => { input.value = def.ex; buttons.forEach((x) => x.setAttribute("aria-pressed", String(x === b))); render(); });
    buttons.push(b); langsEl.appendChild(b);
  }
  input.addEventListener("input", () => { buttons.forEach((x) => x.setAttribute("aria-pressed", "false")); render(); });
  input.value = L[PAGE_LANG].ex;
  buttons.find((b) => b.lang === PAGE_LANG).setAttribute("aria-pressed", "true");
  render();
})();
