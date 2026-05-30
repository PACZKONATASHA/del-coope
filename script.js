/* ==============================================
   NAVBAR — scroll shadow
   ============================================== */
var nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ==============================================
   MOBILE MENU — hamburger toggle
   ============================================== */
var ham = document.getElementById('ham');
var mob = document.getElementById('mob');

ham.addEventListener('click', function () {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

mob.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    ham.classList.remove('open');
    mob.classList.remove('open');
  });
});

/* ==============================================
   SMOOTH SCROLL — anchor links
   ============================================== */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    var target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  });
});

/* ==============================================
   SCROLL REVEAL — intersection observer
   ============================================== */
var revObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add('on');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.rv, .rv-l, .rv-r').forEach(function (el) {
  revObs.observe(el);
});

/* ==============================================
   COUNTER ANIMATION
   ============================================== */
var ctrObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting && !e.target.dataset.done) {
      e.target.dataset.done = '1';
      var target = parseInt(e.target.dataset.target, 10);
      var cur    = 0;
      var step   = target / 60;

      var t = setInterval(function () {
        cur = Math.min(cur + step, target);
        e.target.textContent = Math.floor(cur).toLocaleString('es-AR');
        if (cur >= target) clearInterval(t);
      }, 1000 / 60);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.ctr').forEach(function (el) {
  ctrObs.observe(el);
});

/* ==============================================
   BENEFITS TABS
   ============================================== */
document.querySelectorAll('.btab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.btab').forEach(function (t) {
      t.classList.remove('active');
    });
    tab.classList.add('active');

    var key = tab.dataset.tab;

    document.querySelectorAll('.bpanel').forEach(function (p) {
      p.classList.remove('active');
    });
    document.getElementById('panel-' + key).classList.add('active');

    var cta = document.getElementById('bene-cta');
    cta.textContent = key === 'comercio' ? 'Registrar mi Comercio' : 'Quiero Repartir';
  });
});

/* ==============================================
   MARQUEE — generate business items
   ============================================== */
var shops = [
  { n: 'La Chimera',     c: '#e74c3c', i: 'LC' },
  { n: 'Burger Bros',    c: '#e67e22', i: 'BB' },
  { n: 'Sushi Nori',     c: '#27ae60', i: 'SN' },
  { n: 'Panadería Sol',  c: '#f39c12', i: 'PS' },
  { n: 'Pizza Express',  c: '#c0392b', i: 'PE' },
  { n: 'Verde Natura',   c: '#2ecc71', i: 'VN' },
  { n: 'El Rincón',      c: '#8e44ad', i: 'ER' },
  { n: 'Tacos & Co',     c: '#d35400', i: 'TC' },
  { n: 'Heladería Roma', c: '#2980b9', i: 'HR' },
  { n: 'Don Felipe',     c: '#c0392b', i: 'DF' },
  { n: 'Saboré',         c: '#27ae60', i: 'SA' },
  { n: 'La Casona',      c: '#7f8c8d', i: 'LC' },
  { n: 'Empanadas MJ',   c: '#e74c3c', i: 'EM' },
  { n: 'Wok Oriental',   c: '#e67e22', i: 'WO' },
  { n: 'Café Central',   c: '#795548', i: 'CC' },
  { n: 'Almacén Bio',    c: '#27ae60', i: 'AB' }
];

var mq      = document.getElementById('mq');
var doubled = shops.concat(shops);

doubled.forEach(function (s) {
  var div       = document.createElement('div');
  div.className = 'mq-item';
  div.innerHTML =
    '<div class="mq-ico" style="background:' + s.c + '">' + s.i + '</div>' +
    '<span class="mq-name">' + s.n + '</span>';
  mq.appendChild(div);
});
