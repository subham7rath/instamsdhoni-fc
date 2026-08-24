// ==========================================================
// instamsdhoni-fc — shared site script
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Dropdown (More menu) — click-to-open, works on touch too ---------- */
  document.querySelectorAll('nav li.dropdown > .dropbtn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var parentLi = btn.closest('li.dropdown');
      var alreadyOpen = parentLi.classList.contains('open');
      document.querySelectorAll('nav li.dropdown.open').forEach(function (li) {
        li.classList.remove('open');
      });
      if (!alreadyOpen) parentLi.classList.add('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav li.dropdown')) {
      document.querySelectorAll('nav li.dropdown.open').forEach(function (li) {
        li.classList.remove('open');
      });
    }
  });

  /* ---------- Back to top button ---------- */
  var backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Header search bar (every page) ---------- */
  var headerSearchForm = document.getElementById('headerSearchForm');
  if (headerSearchForm) {
    headerSearchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = document.getElementById('headerSearchInput').value.trim();
      if (q) {
        window.location.href = 'search.html?q=' + encodeURIComponent(q);
      }
    });
  }
});
