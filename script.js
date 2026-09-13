// ===== MERIDIAN — i18n + UI =====
(function () {
  "use strict";

  function t(lang, path) {
    return path.split(".").reduce(function (o, k) {
      return (o && o[k] != null) ? o[k] : undefined;
    }, I18N[lang]) || path;
  }

  // 1) Static text via data-i18n
  function applyStatic(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n"));
      if (v !== undefined) el.textContent = v;
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.indexOf(lang) !== -1 ? "rtl" : "ltr";
    var cur = document.getElementById("langCurrent");
    if (cur) cur.textContent = LANG_NAMES[lang];
  }

  // 2) Dynamic lists (re-rendered per language)
  function renderDynamic(lang) {
    var d = I18N[lang];

    document.getElementById("destCards").innerHTML = d.destinations.cards.map(function (c) {
      return '<article class="card"><div class="card__body"><h3>' + c.title +
        '</h3><p>' + c.desc + '</p></div></article>';
    }).join("");

    document.getElementById("journeyList").innerHTML = d.journeys.items.map(function (it) {
      var meta = it.meta.map(function (m) { return '<span>' + m + '</span>'; }).join("");
      return '<article class="journey">' +
        '<div class="journey__media" style="--c:' + it.c + '"></div>' +
        '<div class="journey__info">' +
        '<div class="journey__meta">' + meta + '</div>' +
        '<h3>' + it.title + '</h3>' +
        '<p>' + it.desc + '</p>' +
        '<div class="journey__foot">' +
        '<span class="price">' + d.journeys.from + ' <strong>' + it.price + '</strong> ' + d.journeys.per + '</span>' +
        '<a href="#contact" class="link">' + d.journeys.custom + '</a>' +
        '</div></div></article>';
    }).join("");

    document.getElementById("serviceList").innerHTML = d.services.items.map(function (s) {
      return '<div class="service"><h3>' + s.title + '</h3><p>' + s.desc + '</p></div>';
    }).join("");

    document.getElementById("aboutList").innerHTML = d.about.list.map(function (i) {
      return '<li>' + i + '</li>';
    }).join("");

    document.getElementById("contactMeta").innerHTML = d.contact.meta.map(function (m) {
      return '<li>' + m + '</li>';
    }).join("");

    document.getElementById("tripType").innerHTML = d.contact.form.opts.map(function (o) {
      return '<option>' + o + '</option>';
    }).join("");
  }

  // 3) Set language + persist
  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "en";
    applyStatic(lang);
    renderDynamic(lang);
    try { localStorage.setItem("meridian_lang", lang); } catch (e) {}
  }

  // 4) Language switcher UI
  var langBtn = document.getElementById("langBtn");
  var langPanel = document.getElementById("langPanel");
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var open = langPanel.classList.toggle("open");
    langBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  langPanel.querySelectorAll("button").forEach(function (b) {
    b.addEventListener("click", function () {
      setLang(b.getAttribute("data-lang"));
      langPanel.classList.remove("open");
      langBtn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", function () {
    langPanel.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  });

  // 5) Mobile menu
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", function () { navLinks.classList.toggle("open"); });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { navLinks.classList.remove("open"); });
  });

  // 6) Sticky nav shadow
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    nav.style.boxShadow = window.scrollY > 10 ? "0 6px 24px rgba(0,0,0,.06)" : "none";
  });

  // 7) Inquiry form (demo)
  var form = document.getElementById("inquiryForm");
  var note = document.getElementById("formNote");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var lang = (localStorage.getItem("meridian_lang") || "en");
    var name = form.elements["name"].value.trim();
    note.hidden = false;
    note.textContent = I18N[lang].contact.form.note;
    form.querySelector("button").textContent = "✓";
  });

  // 8) Init
  var saved = "en";
  try { saved = localStorage.getItem("meridian_lang") || "en"; } catch (e) {}
  setLang(saved);
})();
