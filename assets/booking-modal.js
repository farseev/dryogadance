/*
  Desert Roses Yoga Dance — embedded trial-booking modal.
  Opens the real, live Wix Bookings calendar (the same system that already
  powers dryogadance.com/book, including per-class booking-calendar pages)
  inside an in-page overlay, so a visitor never leaves this site to book a
  class. Every [data-open-booking] trigger on the page (nav pill, hero CTA,
  a specific class card, contact CTA, etc.) opens this same modal pointed at
  whatever URL that trigger declares, instead of navigating away.

  Why an iframe rather than re-building the calendar: the live booking
  calendar is a Wix Bookings application — real-time class availability,
  staff schedules and payment/checkout logic that only exist inside Wix's
  own backend. There is no safe or reliable way to re-implement that logic
  outside Wix, so the honest "embed" is to load the real calendar in place.

  Fallback note: a cross-origin iframe's `load` event fires even when the
  navigation itself failed (blocked by X-Frame-Options, offline, DNS error,
  etc.) — the browser still "loads" an error page. That means load/error
  events can't be trusted to detect a broken embed. Rather than pretend to
  detect failure, the modal always keeps a small permanent "open in a new
  tab" link visible, so a visitor is never stuck looking at a blank or
  broken box with no way out.
*/
(function () {
  var DEFAULT_BOOKING_URL = "https://www.dryogadance.com/book";
  var SPINNER_MIN_MS = 600; // avoid a spinner flash on instant loads

  var STRINGS = {
    en: { title: "Book Your Free Trial Class", loading: "Loading the live class calendar…", prefer: "Prefer a full page?", open: "Open booking in a new tab →" },
    zh: { title: "预约免费试课", loading: "正在加载实时课程日历…", prefer: "更喜欢完整页面？", open: "在新标签页中打开预约 →" }
  };

  function currentLang() {
    var l = document.documentElement.getAttribute("lang");
    return l === "zh" ? "zh" : "en";
  }

  var overlay, modal, iframe, loading, loadingText, fallbackLink, fallbackPrefer, titleEl, closeBtn;
  var lastFocused = null;

  function buildModal() {
    overlay = document.createElement("div");
    overlay.className = "booking-modal-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Book a free trial class");

    overlay.innerHTML =
      '<div class="booking-modal">' +
        '<div class="booking-modal-header">' +
          '<h2></h2>' +
          '<button type="button" class="booking-modal-close" aria-label="Close booking window">&times;</button>' +
        '</div>' +
        '<div class="booking-modal-body">' +
          '<div class="booking-modal-loading">' +
            '<div class="booking-modal-spinner"></div>' +
            '<span class="booking-modal-loading-text"></span>' +
          '</div>' +
        '</div>' +
        '<div class="booking-modal-fallback">' +
          '<span class="booking-modal-prefer"></span>' +
          '<a href="' + DEFAULT_BOOKING_URL + '" target="_blank" rel="noopener"></a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    modal = overlay.querySelector(".booking-modal");
    loading = overlay.querySelector(".booking-modal-loading");
    loadingText = overlay.querySelector(".booking-modal-loading-text");
    fallbackPrefer = overlay.querySelector(".booking-modal-prefer");
    fallbackLink = overlay.querySelector(".booking-modal-fallback a");
    titleEl = overlay.querySelector(".booking-modal-header h2");
    closeBtn = overlay.querySelector(".booking-modal-close");

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
    });
  }

  function openModal(url, label) {
    if (!overlay) buildModal();
    var bookingUrl = url || DEFAULT_BOOKING_URL;
    var s = STRINGS[currentLang()];

    lastFocused = document.activeElement;
    titleEl.textContent = label || s.title;
    loadingText.textContent = s.loading;
    fallbackPrefer.textContent = s.prefer;
    fallbackLink.textContent = s.open;
    loading.style.display = "flex";
    fallbackLink.href = bookingUrl;

    // Lazily create the iframe only when the modal is actually opened,
    // so the heavy booking-calendar app never loads on first page view.
    if (iframe) {
      iframe.parentNode.removeChild(iframe);
      iframe = null;
    }
    var openedAt = Date.now();
    iframe = document.createElement("iframe");
    iframe.setAttribute("title", "Desert Roses Yoga Dance — booking calendar");
    iframe.setAttribute("loading", "eager");
    iframe.addEventListener("load", function () {
      var elapsed = Date.now() - openedAt;
      var wait = Math.max(0, SPINNER_MIN_MS - elapsed);
      setTimeout(function () { loading.style.display = "none"; }, wait);
    });
    overlay.querySelector(".booking-modal-body").appendChild(iframe);
    iframe.src = bookingUrl;

    overlay.classList.add("open");
    document.body.classList.add("booking-modal-locked");

    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove("open");
    document.body.classList.remove("booking-modal-locked");
    if (iframe) {
      iframe.src = "about:blank";
    }
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function init() {
    var triggers = document.querySelectorAll("[data-open-booking]");
    triggers.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var url = el.getAttribute("data-open-booking") || el.getAttribute("href") || DEFAULT_BOOKING_URL;
        var label = el.getAttribute("data-booking-label");
        openModal(url, label);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for the i18n switcher: re-localize header text live if the modal
  // happens to be open at the moment the user flips the language.
  window.__drBookingModalRelocalize = function () {
    if (!overlay || !overlay.classList.contains("open")) return;
    var s = STRINGS[currentLang()];
    if (!titleEl.dataset.customLabel) titleEl.textContent = s.title;
    loadingText.textContent = s.loading;
    fallbackPrefer.textContent = s.prefer;
    fallbackLink.textContent = s.open;
  };
})();
