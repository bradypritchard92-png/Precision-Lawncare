/**
 * Precision Lawn Care — shared interactions
 */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".nav-mobile");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.classList.toggle("is-open", !open);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
      });
    });
  }

  /* Quote form validation + success state */
  var form = document.getElementById("quote-form");
  if (!form) return;

  var fields = {
    name: form.querySelector("#name"),
    phone: form.querySelector("#phone"),
    email: form.querySelector("#email"),
    area: form.querySelector("#area"),
    message: form.querySelector("#message"),
    photo: form.querySelector("#photo"),
  };

  function setError(el, msg) {
    var group = el.closest(".form-group");
    if (!group) return;
    group.classList.add("has-error");
    var err = group.querySelector(".error-msg");
    if (err) err.textContent = msg;
  }

  function clearError(el) {
    var group = el.closest(".form-group");
    if (group) group.classList.remove("has-error");
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function isValidPhone(v) {
    var digits = v.replace(/\D/g, "");
    return digits.length >= 10;
  }

  Object.keys(fields).forEach(function (key) {
    var el = fields[key];
    if (!el) return;
    el.addEventListener("input", function () {
      clearError(el);
    });
    el.addEventListener("change", function () {
      clearError(el);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;

    if (!fields.name.value.trim()) {
      setError(fields.name, "Please enter your name.");
      valid = false;
    }
    if (!fields.phone.value.trim() || !isValidPhone(fields.phone.value)) {
      setError(fields.phone, "Please enter a valid phone number (at least 10 digits).");
      valid = false;
    }
    if (!fields.email.value.trim() || !isValidEmail(fields.email.value)) {
      setError(fields.email, "Please enter a valid email address.");
      valid = false;
    }
    if (!fields.area.value.trim()) {
      setError(fields.area, "Please tell me your neighbourhood or area.");
      valid = false;
    }

    var checked = form.querySelectorAll('input[name="services"]:checked');
    var servicesGroup = form.querySelector(".services-checkboxes");
    if (servicesGroup) {
      var errEl = servicesGroup.querySelector(".error-msg");
      if (checked.length === 0) {
        servicesGroup.classList.add("has-error");
        if (errEl) errEl.textContent = "Please select at least one service.";
        valid = false;
      } else {
        servicesGroup.classList.remove("has-error");
      }
    }

    var file = fields.photo && fields.photo.files && fields.photo.files[0];
    if (!file) {
      setError(fields.photo, "Please add a photo of your lawn or project.");
      valid = false;
    } else if (file.type && file.type.indexOf("image/") !== 0) {
      setError(fields.photo, "Please choose an image file (JPG, PNG, HEIC).");
      valid = false;
    } else if (file.size > 10 * 1024 * 1024) {
      setError(fields.photo, "That photo is over 10 MB. Please choose a smaller one.");
      valid = false;
    }

    if (!valid) {
      var firstErr = form.querySelector(".has-error input, .has-error textarea");
      if (firstErr) firstErr.focus();
      return;
    }

    /* Demo success: no backend yet */
    var card = form.closest(".form-card");
    if (card) {
      card.classList.add("is-submitted");
      var success = card.querySelector(".form-success");
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
    }
  });

  var resetBtn = document.getElementById("form-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      var card = form.closest(".form-card");
      if (card) {
        card.classList.remove("is-submitted");
        var success = card.querySelector(".form-success");
        if (success) success.classList.remove("is-visible");
      }
      Object.keys(fields).forEach(function (key) {
        if (fields[key]) clearError(fields[key]);
      });
      var sg = form.querySelector(".services-checkboxes");
      if (sg) sg.classList.remove("has-error");
    });
  }
})();
