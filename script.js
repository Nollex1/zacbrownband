// ---------- CONFIG ----------
const NOWPAYMENTS_VIP_LINK = "";      // put your VIP payment link here (optional)
const CARD_CHECKOUT_LINK   = "";      // optional card checkout link


  // Minimal render: no dependencies on styles or external files
  const dates = [
    { id:"dec5",  date:"DEC 5",  venue:"Sphere", city:"Las Vegas, NV" },
    { id:"dec6",  date:"DEC 6",  venue:"Sphere", city:"Las Vegas, NV" },
    { id:"dec12", date:"DEC 12", venue:"Sphere", city:"Las Vegas, NV" },
    { id:"dec13", date:"DEC 13", venue:"Sphere", city:"Las Vegas, NV" },
    { id:"jan9",  date:"JAN 9",  venue:"Sphere", city:"Las Vegas, NV" },
    { id:"jan10", date:"JAN 10", venue:"Sphere", city:"Las Vegas, NV" },
  ];

  const list = document.getElementById('dates-list');
  list.innerHTML = dates.map(d => `
    <div style="display:flex;align-items:center;justify-content:space-between;
                padding:10px 0;border-bottom:1px solid rgba(255,255,255,.12)">
      <div>
        <div style="font-weight:700">${d.date}</div>
        <div style="opacity:.8">${d.venue}</div>
      </div>
      <div style="opacity:.9">${d.city}</div>
      <div>
        <a href="tickets.html?id=${encodeURIComponent(d.id)}"
           target="_blank" rel="noopener"
           style="display:inline-block;padding:8px 12px;border-radius:8px;
                  background:#fff;color:#111;text-decoration:none;font-weight:600;">
          Tickets
        </a>
      </div>
    </div>
  `).join('');

// ---------- FOOTER YEAR ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- COOKIE BAR ----------
const cookieBar = document.getElementById('cookie-bar');
const acceptBtn = document.getElementById('cookie-accept');
const prefBtn   = document.getElementById('cookie-pref');

if (localStorage.getItem('cookiesAccepted') === '1' && cookieBar) {
  cookieBar.style.display = 'none';
}
if (acceptBtn) {
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', '1');
    if (cookieBar) cookieBar.style.display = 'none';
  });
}
if (prefBtn) {
  prefBtn.addEventListener('click', () => {
    alert('Preferences modal placeholder');
  });
}