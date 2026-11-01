/* Meupet — comportamento do site: loja, carrinho, agendamento, corações animados */
const IM = {
  h1: 'images/hero-golden.jpg',   // hero-golden
  h2: 'images/hero-salsicha.jpg',   // hero-salsicha
  p0: 'images/produto-01.jpg',   // produto-01
  p1: 'images/produto-02.jpg',   // produto-02
  p2: 'images/produto-03.jpg',   // produto-03
  p3: 'images/produto-04.jpg',   // produto-04
  p4: 'images/produto-05.jpg',   // produto-05
  p5: 'images/produto-06.jpg',   // produto-06
  p6: 'images/produto-07.jpg',   // produto-07
  p7: 'images/produto-08.jpg',   // produto-08
  p8: 'images/produto-09.jpg',   // produto-09
  p9: 'images/produto-10.jpg',   // produto-10
  p10: 'images/produto-11.jpg',   // produto-11
  p11: 'images/produto-12.jpg',   // produto-12
  s0: 'images/servico-1.jpg',   // servico-1
  s1: 'images/servico-2.jpg',   // servico-2
  s2: 'images/servico-3.jpg',   // servico-3
  s3: 'images/servico-4.jpg',   // servico-4
  mel: 'images/turminha-mel.jpg',   // turminha-mel
  nuvem: 'images/turminha-nuvem.jpg',   // turminha-nuvem
  lin: 'images/turminha-linguica.jpg',   // turminha-linguica
  a0: 'images/depoimento-avatar-1.jpg',   // depoimento-avatar-1
  a1: 'images/depoimento-avatar-2.jpg',   // depoimento-avatar-2
  a2: 'images/depoimento-avatar-3.jpg',   // depoimento-avatar-3
  g0: 'images/galeria-01.jpg',   // galeria-01
  g1: 'images/galeria-02.jpg',   // galeria-02
  g2: 'images/galeria-03.jpg',   // galeria-03
  g3: 'images/galeria-04.jpg',   // galeria-04
  g4: 'images/galeria-05.jpg',   // galeria-05
  g5: 'images/galeria-06.jpg',   // galeria-06
  g6: 'images/galeria-07.jpg',   // galeria-07
  g7: 'images/galeria-08.jpg',   // galeria-08
};
const $ = s => document.querySelector(s), RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
/* Dogs */
const K = { golden: { f: '#F2B95A', e: '#D9963A', s: '#FBE0A8', ex: 26, ey: 50, sy: 22 }, shih: { f: '#FFF8EE', e: '#C9996B', s: '#fff', ex: 24, ey: 42, sy: 20 }, dach: { f: '#9A5B34', e: '#6E3C1E', s: '#C98C5A', ex: 19, ey: 64, sy: 28 } };
function D(k) {
  const c = K[k], ey = c.ey, y = k == 'dach' ? 126 : 122;
  return `<svg viewBox="0 0 200 200" role="img" aria-label="${k}"><g class="dg">
<ellipse cx="42" cy="${90 + ey / 2}" rx="${c.ex}" ry="${ey}" fill="${c.e}" transform="rotate(10 42 100)"/><ellipse cx="158" cy="${90 + ey / 2}" rx="${c.ex}" ry="${ey}" fill="${c.e}" transform="rotate(-10 158 100)"/>
<circle cx="100" cy="100" r="60" fill="${c.f}"/>${k == 'shih' ? '<path d="M60 66Q100 30 140 66Q100 50 60 66Z" fill="#C9996B"/><path d="M92 46l-12-8v14zM108 46l12-8v14z" fill="#62B9F0"/>' : ''}
<ellipse cx="100" cy="${y}" rx="${k == 'dach' ? 26 : 30}" ry="${c.sy}" fill="${c.s}"/><ellipse cx="100" cy="${y - 12}" rx="10" ry="7" fill="#3b2a20"/>
<path d="M88 ${y + 2}q12 10 24 0" stroke="#3b2a20" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse class="tg" cx="100" cy="${y + 10}" rx="8" ry="8" fill="#FF8FA3"/>
<g class="bl"><ellipse cx="78" cy="92" rx="6" ry="8" fill="#2b2118"/><ellipse cx="122" cy="92" rx="6" ry="8" fill="#2b2118"/><circle cx="80" cy="89" r="2" fill="#fff"/><circle cx="124" cy="89" r="2" fill="#fff"/></g>
<path d="M0 6C-9-2-6-9 0-4C6-9 9-2 0 6Z" fill="#62B9F0" transform="translate(142 120) scale(1.4)"/></g></svg>`}
const dogs = ['golden', 'shih', 'dach'];
$('#h1').src = IM.h1; $('#h2').src = IM.h2;
const crew = [['Mel', 'mel', 'Alegre, amiga de todo mundo e viciada em abraços.'], ['Nuvem', 'nuvem', 'Fofinha, delicada e sempre pronta para brincar.'], ['Linguiça', 'lin', 'Curioso, arteiro e dono do próprio nariz.']];
$('#cg').innerHTML = crew.map(c => `<div class="card rv"><div class="d ph" data-k="${c[1]}"><img src="${IM[c[1]]}" alt="${c[0]}"></div><h3 style="margin-top:8px">${c[0]}</h3><p>${c[2]}</p></div>`).join('');
$('#cg').onclick = e => { const d = e.target.closest('.d'); if (d) { burst(e.clientX, e.clientY, 12); toast('Au au! 💙') } };
/* Products */
const P = [['Ração Filhotes Frango e Salmão', 'Rações', 139.9, 4.9], ['Ração Adultos Frango e Arroz', 'Rações', 119.9, 4.7], ['Bolinha Saltitante', 'Brinquedos', 19.9, 4.8], ['Corda Divertida', 'Brinquedos', 24.9, 4.6], ['Caminha Nuvem', 'Caminhas', 189.9, 5], ['Caminha Iglu Patinhas', 'Caminhas', 159.9, 4.8], ['Moletom Azulzinho', 'Roupinhas', 59.9, 4.7], ['Capa de Chuva', 'Roupinhas', 69.9, 4.5], ['Coleira', 'Coleiras', 44.9, 4.9], ['Peitoral Confort', 'Coleiras', 79.9, 4.8], ['Comedouro Duplo', 'Acessórios', 34.9, 4.6], ['Bandana Fofa', 'Acessórios', 22.9, 4.7]];
const cats = ['Todos', ...new Set(P.map(p => p[1]))]; let cat = 'Todos', cart = {};
const R = n => 'R$ ' + n.toFixed(2).replace('.', ',');
$('#chips').innerHTML = cats.map(c => `<button class="chip${c == cat ? ' on' : ''}">${c}</button>`).join('');
$('#chips').onclick = e => { if (e.target.classList.contains('chip')) { cat = e.target.textContent; document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c == e.target)); draw() } };
$('#q').oninput = draw;
function draw() {
  const q = $('#q').value.toLowerCase(); const l = P.map((p, i) => [p, i]).filter(([p]) => (cat == 'Todos' || p[1] == cat) && p[0].toLowerCase().includes(q));
  $('#pg').innerHTML = l.length ? l.map(([p, i]) => `<div class="card"><div class="img"><img src="${IM['p' + i]}" alt="${p[0]}" loading="lazy"></div><h3>${p[0]}</h3><div class="st">${'★'.repeat(Math.round(p[3]))} <small style="color:var(--mut)">${p[3]}</small></div><div class="row"><span class="pr">${R(p[2])}</span><button class="btn" data-add="${i}" style="padding:9px 16px">Adicionar</button></div></div>`).join('') : '<p class="sub" style="grid-column:1/-1">Nenhum produto encontrado. Tente outra palavra ou categoria.</p>'
}
draw();
$('#pg').onclick = e => { const i = e.target.dataset.add; if (i != null) { cart[i] = (cart[i] || 0) + 1; upd(); toast(P[i][0] + ' no carrinho 💙') } };
function upd() {
  const ks = Object.keys(cart); $('#cn').textContent = ks.reduce((s, k) => s + cart[k], 0);
  $('#ci').innerHTML = ks.length ? ks.map(k => `<div class="li"><img src="${IM['p' + k]}" width="48" height="48" alt="" style="border-radius:12px;object-fit:cover"><b>${P[k][0]}<br><small>${R(P[k][2])}</small></b><button data-m="${k}" aria-label="Menos">−</button>${cart[k]}<button data-p="${k}" aria-label="Mais">+</button></div>`).join('') : '<p>Seu carrinho está vazio. Que tal um mimo para o seu pet?</p>';
  $('#ct').textContent = 'Total: ' + R(ks.reduce((s, k) => s + cart[k] * P[k][2], 0))
}
$('#ci').onclick = e => { const m = e.target.dataset.m, p = e.target.dataset.p; if (m != null && --cart[m] < 1) delete cart[m]; if (p != null) cart[p]++; upd() };
upd();
$('#co').onclick = () => {
  const ks = Object.keys(cart); if (!ks.length) return toast('Adicione algo ao carrinho primeiro');
  const t = ks.map(k => `${cart[k]}x ${P[k][0]}`).join(', '); window.open('' + encodeURIComponent('Oi! Quero pedir: ' + t), '_blank')
};
/* Services */
const S = [['Banho e tosa', '🛁', 'Banho cheiroso e tosa na medida do seu pet.'], ['Hidratação', '💧', 'Pelos macios, brilhantes e com cheirinho de carinho.'], ['Cuidados especiais', '🩺', 'Unhas, ouvidos, dentes e atenção para idosos e filhotes.'], ['Atendimento personalizado', '💙', 'Cada pet tem um jeitinho, e a gente respeita o dele.']];
$('#sg').innerHTML = S.map((s, i) => `<div class="card svc rv"><div class="img"><img src="${IM['s' + i]}" alt="${s[0]}" loading="lazy"></div><h3>${s[0]}</h3><p>${s[2]}</p><button class="btn" data-book="${i}">Agendar</button></div>`).join('');
$('#bs').innerHTML = S.map(s => `<option>${s[0]}</option>`).join('');
const open = (m, s) => { $(m).classList.add('on'); $('#ov').classList.add('on'); if (s) $('#side').classList.remove('on') };
const closeAll = () => { document.querySelectorAll('.on:not(.chip)').forEach(e => e.id != 'nv' && e.classList.remove('on')) };
document.addEventListener('click', e => { const b = e.target.closest('[data-book]'); if (b) { if (b.dataset.book) $('#bs').selectedIndex = b.dataset.book; open('#md') } });
$('#cb').onclick = () => open('#side'); $('#ov').onclick = closeAll; $('#bx').onclick = closeAll;
addEventListener('keydown', e => e.key == 'Escape' && closeAll());
$('#bc').onclick = () => {
  const p = $('#bp').value.trim(), d = $('#bd').value; if (!p || !d) return toast('Preencha o nome do pet e a data');
  closeAll(); toast('Pedido enviado! Confirmaremos pelo WhatsApp 💙'); window.open('' + encodeURIComponent(`Oi! Quero agendar ${$('#bs').value} para ${p} em ${d.split('-').reverse().join('/')}.`), '_blank')
};
$('#bg').onclick = () => $('#nv').classList.toggle('on'); $('#nv').onclick = () => $('#nv').classList.remove('on');
/* Testimonials + gallery */
const T = [['Ana & Aurora', 'A Aurora volta do banho cheirosa e feliz. Atendimento cheio de carinho!'], ['Carlos & Biscoito', 'Achei tudo para o Biscoito em um lugar só. Entrega rápida e preço justo.'], ['Bia & Pipoca', 'A Pipoca ama a lojinha. Já entra puxando a guia!']];
$('#tg').innerHTML = T.map((t, i) => `<div class="card quote rv"><img class="av" src="${IM['a' + i]}" alt="${t[0]}"><div class="st">★★★★★ <span style="color:var(--b3)">💙</span></div><p>“${t[1]}”</p><b>${t[0]}</b></div>`).join('');
$('#gl').innerHTML = [['g0', 0.8], ['g1', 1], ['g2', 0.75], ['g3', 0.8], ['g4', 1], ['g5', 0.75], ['g6', 0.8], ['g7', 0.9]].map(g => `<div style="aspect-ratio:${g[1]}"><img src="${IM[g[0]]}" alt="Foto fofa de pet" loading="lazy"></div>`).join('');
function toast(m) { const t = $('#ts'); t.textContent = m; t.classList.add('on'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('on'), 2400) }
$('#nf').onsubmit = e => { e.preventDefault(); toast('Bem-vindo ao mundinho! 💙'); e.target.reset() };
/* Reveal + parallax */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .12 });
document.querySelectorAll('.rv').forEach(e => io.observe(e));
if (!RM) { let tk = 0; addEventListener('scroll', () => { if (tk) return; tk = 1; requestAnimationFrame(() => { const y = scrollY; document.querySelectorAll('[data-p]').forEach(e => e.style.transform = `translateY(${-y * e.dataset.p}px)`); tk = 0 }) }, { passive: true }) }
/* Heart particles */
const C = $('#fx'), x = C.getContext('2d'), cols = ['#62B9F0', '#A8DFFF', '#3A9BDC', '#8ACFF7', '#2877BA'], hs = [], ps = []; let W, H, last = 0, mt = 0;
function rs() { const r = devicePixelRatio > 1 ? 1.5 : 1; W = innerWidth; H = innerHeight; C.width = W * r; C.height = H * r; x.setTransform(r, 0, 0, r, 0, 0) } rs(); addEventListener('resize', rs);
const rw = () => Array.from({ length: 7 }, () => (Math.random() - .5) * 5);
function path(s, w) { x.beginPath(); x.moveTo(0, s * .35 + w[0]); x.bezierCurveTo(-s * .1 + w[1], s * .1, -s * .6, -s * .05 + w[2], -s * .5, -s * .35 + w[3]); x.bezierCurveTo(-s * .4, -s * .7, -s * .05 + w[4], -s * .65, 0, -s * .3); x.bezierCurveTo(s * .05, -s * .65, s * .4, -s * .7, s * .5, -s * .35); x.bezierCurveTo(s * .6, -s * .05 + w[5], s * .1, s * .1 + w[6], 0, s * .35 + w[0]); x.closePath() }
function dh(o, a) { x.save(); x.translate(o.x, o.y); x.rotate(o.r || 0); x.globalAlpha = a; path(o.s, o.w); x.fillStyle = o.c + '33'; x.fill(); x.lineWidth = 2; x.strokeStyle = o.c; x.lineCap = 'round'; x.stroke(); x.restore() }
function mk(px, py, s, vy, o = {}) { return Object.assign({ x: px, y: py, s, vy, ph: Math.random() * 6, c: cols[Math.random() * 5 | 0], w: rw(), r: (Math.random() - .5) * .6 }, o) }
function burst(bx, by, n = 8) { if (RM) return; for (let i = 0; i < n && ps.length < 90; i++) { const a = Math.PI * 2 * i / n + Math.random() * .5, v = 1.5 + Math.random() * 2.5; ps.push(mk(bx, by, 8 + Math.random() * 8, 0, { vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1 })) } }
document.addEventListener('click', e => { if (e.target.closest('.btn,.chip,button,.cartb')) burst(e.clientX, e.clientY, 10) });
document.addEventListener('mousemove', e => { if (RM || e.timeStamp - mt < 90 || ps.length > 70) return; mt = e.timeStamp; ps.push(mk(e.clientX + 8, e.clientY + 8, 7 + Math.random() * 5, 0, { vx: (Math.random() - .5), vy: -.6, life: .8 })) });
function loop(t) {
  requestAnimationFrame(loop); if (RM || document.hidden || t - last < 33) return; last = t; x.clearRect(0, 0, W, H);
  if (hs.length < (W < 700 ? 9 : 16) && Math.random() < .05) hs.push(mk(Math.random() * W, H + 30, 14 + Math.random() * 24, .6 + Math.random() * 1.1));
  for (let i = hs.length - 1; i >= 0; i--) {
    const h = hs[i]; h.y -= h.vy * 2; h.ph += .03; h.x += Math.sin(h.ph) * .8; const p = 1 + Math.sin(h.ph * 2) * .06;
    if (h.y < 30) { burst(h.x, 30, 7); hs.splice(i, 1); continue } dh({ ...h, s: h.s * p }, .75)
  }
  for (let i = ps.length - 1; i >= 0; i--) { const p = ps[i]; p.x += p.vx; p.y += p.vy; p.vy += .04; p.life -= .025; if (p.life <= 0) { ps.splice(i, 1); continue } dh(p, p.life) }
}
requestAnimationFrame(loop);
