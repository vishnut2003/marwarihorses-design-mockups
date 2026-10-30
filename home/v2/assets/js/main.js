/* Jay Stud Farm — home mockup v2. Vanilla JS, no dependencies. */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Header ---- */
  var header = document.getElementById("header");
  var wa = document.querySelector(".wa");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 60);
    if (wa) wa.classList.toggle("is-hidden", window.innerWidth <= 480 && window.scrollY < 320);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu panel ---- */
  var menuOpen = document.getElementById("menuOpen");
  var menu = document.getElementById("menu");
  var backdrop = document.getElementById("menuBackdrop");
  var menuClose = document.getElementById("menuClose");
  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    menuOpen.setAttribute("aria-expanded", String(open));
  }
  menuOpen.addEventListener("click", function () { setNav(true); });
  backdrop.addEventListener("click", function () { setNav(false); });
  menuClose.addEventListener("click", function () { setNav(false); });
  menu.querySelectorAll("[data-close]").forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && document.body.classList.contains("nav-open")) setNav(false); });
  menu.querySelectorAll(".menu__toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = btn.parentElement;
      var open = !group.classList.contains("is-open");
      menu.querySelectorAll(".menu__group.is-open").forEach(function (g) {
        if (g !== group) { g.classList.remove("is-open"); g.querySelector(".menu__toggle").setAttribute("aria-expanded", "false"); }
      });
      group.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  /* ---- Hero video controls ---- */
  var heroVideo = document.getElementById("heroVideo");
  var heroPause = document.getElementById("heroPause");
  var heroSound = document.getElementById("heroSound");
  if (heroVideo && heroPause) {
    heroPause.addEventListener("click", function () {
      if (heroVideo.paused) { heroVideo.play(); heroPause.innerHTML = '<svg><use href="#i-pause"/></svg>'; }
      else { heroVideo.pause(); heroPause.innerHTML = '<svg><use href="#i-play"/></svg>'; }
    });
  }
  if (heroVideo && heroSound) {
    heroSound.addEventListener("click", function () { heroVideo.muted = !heroVideo.muted; heroSound.style.opacity = heroVideo.muted ? "" : ".6"; });
  }

  /* ---- Farm film: play in place, no native controls ---- */
  var film = document.getElementById("film");
  var filmVideo = document.getElementById("filmVideo");
  var filmPlay = document.getElementById("filmPlay");
  if (film && filmVideo && filmPlay) {
    filmVideo.controls = false;
    function playFilm() { film.classList.add("is-playing"); film.classList.remove("is-paused"); filmVideo.muted = false; filmVideo.play(); }
    function pauseFilm() { filmVideo.pause(); film.classList.add("is-paused"); }
    film.addEventListener("click", function () {
      if (!film.classList.contains("is-playing") || filmVideo.paused) playFilm(); else pauseFilm();
    });
    film.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); film.click(); } });
    var filmBar = document.getElementById("filmBar");
    filmVideo.addEventListener("timeupdate", function () { if (filmBar && filmVideo.duration) filmBar.style.width = (filmVideo.currentTime / filmVideo.duration * 100) + "%"; });
    filmVideo.addEventListener("ended", function () { film.classList.remove("is-playing", "is-paused"); if (filmBar) filmBar.style.width = "0"; filmVideo.currentTime = 0; filmVideo.load(); });
  }

  /* ---- Generic sliders (showcase + quote) ---- */
  document.querySelectorAll("[data-slider]").forEach(function (root) {
    var type = root.getAttribute("data-slider");
    var slides = root.querySelectorAll(type === "showcase" ? ".showcase__slide" : ".quote__slide");
    var images = root.querySelectorAll(".showcase__media img");
    var counter = root.querySelector("[data-counter]");
    var bar = root.querySelector("[data-bar]");
    var dots = root.querySelectorAll("[data-go]");
    var i = 0;
    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle("is-active", k === i); });
      images.forEach(function (im, k) { im.classList.toggle("is-active", k === i); });
      dots.forEach(function (d, k) { d.classList.toggle("is-active", k === i); });
      if (counter) counter.textContent = (i + 1) + " / " + slides.length;
      if (bar) bar.style.width = ((i + 1) / slides.length * 100) + "%";
    }
    var next = root.querySelector("[data-next]"), prev = root.querySelector("[data-prev]");
    if (next) next.addEventListener("click", function () { go(i + 1); });
    if (prev) prev.addEventListener("click", function () { go(i - 1); });
    dots.forEach(function (d) { d.addEventListener("click", function () { go(Number(d.dataset.go)); }); });
    go(0);
  });

  /* ---- Count-up stats ---- */
  function countUp(el) {
    var target = Number(el.dataset.count), start = Number(el.textContent) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    var t0 = null, duration = 1800;
    function frame(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / duration, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * eased);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); cObs.unobserve(en.target); } });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cObs.observe(el); });
  } else { counters.forEach(function (el) { el.textContent = el.dataset.count; }); }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var rObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); rObs.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { rObs.observe(el); });
    window.addEventListener("scroll", function () {
      revealEls.forEach(function (el) {
        if (!el.classList.contains("is-visible") && el.getBoundingClientRect().bottom < 0) { el.classList.add("is-visible"); rObs.unobserve(el); }
      });
    }, { passive: true });
  } else { revealEls.forEach(function (el) { el.classList.add("is-visible"); }); }

  /* ---- Placeholder links ---- */
  document.querySelectorAll('a[href="#"]').forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); }); });
})();
