/* Jay Stud Farm — home mockup v1. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Sticky header state ---- */
  var header = document.getElementById("header");
  var wa = document.querySelector(".wa");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
    // On phones, keep the WhatsApp button out of the hero stats until the visitor scrolls.
    if (wa) wa.classList.toggle("is-hidden", window.innerWidth <= 480 && window.scrollY < 320);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile drawer ---- */
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  burger.addEventListener("click", function () {
    setNav(!document.body.classList.contains("nav-open"));
  });
  drawer.querySelectorAll("[data-close]").forEach(function (a) {
    a.addEventListener("click", function () { setNav(false); });
  });
  var backdrop = document.getElementById("drawerBackdrop");
  var drawerClose = document.getElementById("drawerClose");
  if (backdrop) backdrop.addEventListener("click", function () { setNav(false); });
  if (drawerClose) drawerClose.addEventListener("click", function () { setNav(false); });
  // Accordion groups inside the drawer
  drawer.querySelectorAll(".drawer__toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = btn.parentElement;
      var open = !group.classList.contains("is-open");
      drawer.querySelectorAll(".drawer__group.is-open").forEach(function (g) {
        if (g !== group) { g.classList.remove("is-open"); g.querySelector(".drawer__toggle").setAttribute("aria-expanded", "false"); }
      });
      group.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) setNav(false);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) setNav(false);
  });

  /* ---- Horse carousel controls ---- */
  var carousel = document.getElementById("carousel");
  if (carousel) {
    document.querySelectorAll(".ctrl[data-dir]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = carousel.querySelector(".card-horse");
        var step = card ? card.getBoundingClientRect().width + 16 : 320;
        carousel.scrollBy({ left: step * Number(btn.dataset.dir), behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  }

  /* ---- Count-up stats ---- */
  function countUp(el) {
    var target = Number(el.dataset.count);
    var start = Number(el.textContent) || 0;
    if (reduceMotion || !("IntersectionObserver" in window)) { el.textContent = target; return; }
    var duration = 1600;
    var t0 = null;
    function frame(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * eased);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var statEls = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countUp(en.target); statObs.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    statEls.forEach(function (el) { statObs.observe(el); });
  } else {
    statEls.forEach(function (el) { el.textContent = el.dataset.count; });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); revObs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { revObs.observe(el); });
    // Safety net: anything already scrolled past (e.g. after a jump link) is shown.
    window.addEventListener("scroll", function () {
      revealEls.forEach(function (el) {
        if (!el.classList.contains("is-visible") && el.getBoundingClientRect().bottom < 0) { el.classList.add("is-visible"); revObs.unobserve(el); }
      });
    }, { passive: true });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Placeholder links: stop "#" from jumping to top in the mockup ---- */
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
})();
