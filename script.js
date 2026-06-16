const WA_NUMBER = '5598885437922';

const PRODUTOS = {
  automotiva: [
    {
      img: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Moura',
      nome: 'Moura Clean 60 FH',
      specs: ['60 Ah', '12V', 'Polo Positivo Esq.'],
      garantia: '18 meses',
    },
    {
      img: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Heliar',
      nome: 'Heliar HF60',
      specs: ['60 Ah', '12V', 'Alto Desempenho'],
      garantia: '18 meses',
    },
    {
      img: 'https://images.pexels.com/photos/1426214/pexels-photo-1426214.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Freedom',
      nome: 'Freedom DF2000',
      specs: ['50 Ah', '12V', 'Selada'],
      garantia: '12 meses',
    },
    {
      img: 'https://images.pexels.com/photos/1009871/pexels-photo-1009871.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Zetta',
      nome: 'Zetta ZM60',
      specs: ['60 Ah', '12V', 'Polo Positivo Dir.'],
      garantia: '12 meses',
    },
  ],
  moto: [
    {
      img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Moura',
      nome: 'Moura Moto MA5-E',
      specs: ['5 Ah', '12V', 'Selada'],
      garantia: '12 meses',
    },
    {
      img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Heliar',
      nome: 'Heliar HTZ7',
      specs: ['6 Ah', '12V', 'Alto Desempenho'],
      garantia: '12 meses',
    },
    {
      img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Freedom',
      nome: 'Freedom 5BS-C',
      specs: ['5 Ah', '12V', 'Convencional'],
      garantia: '12 meses',
    },
  ],
  caminhao: [
    {
      img: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Moura',
      nome: 'Moura Clean 150',
      specs: ['150 Ah', '12V', 'Polo Positivo Esq.'],
      garantia: '12 meses',
    },
    {
      img: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Heliar',
      nome: 'Heliar HD150',
      specs: ['150 Ah', '12V', 'Heavy Duty'],
      garantia: '18 meses',
    },
    {
      img: 'https://images.pexels.com/photos/1426214/pexels-photo-1426214.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Freedom',
      nome: 'Freedom Cargo 180',
      specs: ['180 Ah', '12V', 'Selada'],
      garantia: '12 meses',
    },
  ],
  estacionaria: [
    {
      img: 'https://images.pexels.com/photos/1009871/pexels-photo-1009871.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Freedom',
      nome: 'Freedom DF1500',
      specs: ['150 Ah', '12V', 'Estacionária'],
      garantia: '12 meses',
    },
    {
      img: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Moura',
      nome: 'Moura Estac. 100',
      specs: ['100 Ah', '12V', 'VRLA'],
      garantia: '12 meses',
    },
    {
      img: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Zetta',
      nome: 'Zetta Solar 200',
      specs: ['200 Ah', '12V', 'Solar/Estac.'],
      garantia: '12 meses',
    },
  ],
  nobreak: [
    {
      img: 'https://images.pexels.com/photos/1426214/pexels-photo-1426214.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Moura',
      nome: 'Moura Nobreak 7Ah',
      specs: ['7 Ah', '12V', 'AGM Selada'],
      garantia: '12 meses',
    },
    {
      img: 'https://images.pexels.com/photos/1009871/pexels-photo-1009871.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Freedom',
      nome: 'Freedom Nobreak 9Ah',
      specs: ['9 Ah', '12V', 'VRLA'],
      garantia: '12 meses',
    },
    {
      img: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=600',
      marca: 'Heliar',
      nome: 'Heliar NB12V7',
      specs: ['7 Ah', '12V', 'Alto Ciclo'],
      garantia: '12 meses',
    },
  ],
};

function buildProductCard(produto) {
  const msg = encodeURIComponent(`Olá! Tenho interesse no produto: ${produto.marca} ${produto.nome}. Poderia me passar mais informações e valor?`);
  return `
    <div class="produto-card reveal">
      <img src="${produto.img}" alt="${produto.nome}" class="produto-img" loading="lazy" />
      <div class="produto-body">
        <div class="produto-marca">${produto.marca}</div>
        <div class="produto-nome">${produto.nome}</div>
        <div class="produto-specs">
          ${produto.specs.map(s => `<span class="spec-tag">${s}</span>`).join('')}
          <span class="garantia-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Garantia ${produto.garantia}
          </span>
        </div>
        <div class="produto-footer">
          <a href="https://wa.me/${WA_NUMBER}?text=${msg}" target="_blank" class="btn btn-whatsapp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(tab) {
  const grid = document.getElementById('produtosGrid');
  if (!grid) return;
  const items = PRODUTOS[tab] || [];
  grid.innerHTML = items.map(buildProductCard).join('');
  observeReveal();
}

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.tab);
  });
});

renderProducts('automotiva');

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// Vehicle finder → WhatsApp redirect
document.getElementById('vehicleForm').addEventListener('submit', e => {
  e.preventDefault();
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value.trim();
  const ano = document.getElementById('ano').value.trim();
  const msg = encodeURIComponent(
    `Olá! Gostaria de consultar a bateria ideal para meu veículo:\n\n` +
    `Marca: ${marca}\nModelo: ${modelo}\nAno: ${ano}\n\nPoderia me indicar a bateria correta?`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
});

// Scroll reveal
function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

document.querySelectorAll('.reveal').forEach(el => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  io.observe(el);
});
