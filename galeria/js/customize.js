// ============================================================
// OBRAS DE ARTE
// ============================================================
const obras = [
  {
    id: 1,
    imagem: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    titulo: "Luz do Amanhecer",
    artista: "Marina Oliveira",
    ano: 2021,
    preco: "R$ 4.500,00",
    descricao: "Uma explosão de cores quentes que captura os primeiros raios de sol sobre o horizonte. A obra transmite esperança e renovação através de pinceladas livres e vibrantes. Ideal para ambientes que buscam energia e positividade.",
    contato: "marina.oliveira@artista.com.br",
    favorito: false
  },
  {
    id: 2,
    imagem: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&q=80",
    titulo: "Fragmentos do Tempo",
    artista: "Carlos Mendonça",
    ano: 2019,
    preco: "R$ 7.200,00",
    descricao: "Uma composição abstrata que explora a fragmentação da memória e do tempo. Camadas sobrepostas de tinta criam profundidade e mistério na contemplação. Carlos Mendonça é reconhecido por obras que desafiam a percepção do observador.",
    contato: "carlos.mendonca@galeria.art",
    favorito: false
  },
  {
    id: 3,
    imagem: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
    titulo: "Jardim Secreto",
    artista: "Luísa Ferreira",
    ano: 2022,
    preco: "R$ 3.800,00",
    descricao: "Uma paisagem onírica inspirada nos jardins escondidos da infância da artista. Tons de verde e dourado se misturam em harmonia perfeita. A obra convida o espectador a encontrar seu próprio refúgio interior.",
    contato: "luisa.ferreira@atelierarte.com",
    favorito: false
  },
  {
    id: 4,
    imagem: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    titulo: "Silêncio Urbano",
    artista: "Rafael Santos",
    ano: 2020,
    preco: "R$ 5.900,00",
    descricao: "Uma reflexão sobre a solidão nas grandes cidades, capturada em tons frios e geometrias precisas. A obra questiona a relação entre o indivíduo e o espaço urbano moderno. Rafael Santos é um dos artistas contemporâneos mais promissores do Brasil.",
    contato: "rafael.santos@arteurbana.net",
    favorito: false
  },
  {
    id: 5,
    imagem: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
    titulo: "Raízes Profundas",
    artista: "Ana Paula Ramos",
    ano: 2023,
    preco: "R$ 6.100,00",
    descricao: "Inspirada na cultura afro-brasileira, esta obra celebra as raízes e a ancestralidade com força e beleza singular. Cores terrosas e formas orgânicas criam uma narrativa visual poderosa e emotiva. Ana Paula Ramos dedica sua arte à valorização da diversidade cultural.",
    contato: "anapaula.ramos@culturabr.art",
    favorito: false
  },
  {
    id: 6,
    imagem: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800&q=80",
    titulo: "Ondas Eternas",
    artista: "Pedro Cavalcanti",
    ano: 2018,
    preco: "R$ 8.700,00",
    descricao: "Uma meditação sobre a infinidade do mar e o ciclo eterno das ondas do Nordeste. Técnica mista com areia real coletada nas praias do litoral brasileiro. A obra captura o movimento e o poder da natureza de forma única e imersiva.",
    contato: "pedro.cavalcanti@mareart.com.br",
    favorito: false
  },
  {
    id: 7,
    imagem: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?w=800&q=80",
    titulo: "Dança das Cores",
    artista: "Fernanda Brito",
    ano: 2022,
    preco: "R$ 5.300,00",
    descricao: "Uma celebração da alegria através de formas geométricas e cores saturadas em movimento. A tela vibra com energia cinética, como se os elementos dançassem ao ritmo de um batuque invisível. Fernanda Brito é reconhecida por transformar emoções em geometria pura.",
    contato: "fernanda.brito@dancadascores.art",
    favorito: false
  },
  {
    id: 8,
    imagem: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    titulo: "Memória Líquida",
    artista: "Gustavo Almeida",
    ano: 2020,
    preco: "R$ 9.400,00",
    descricao: "Aquarelas dissolvidas em camadas translúcidas evocam memórias que escorregam pela consciência como água entre os dedos. A obra explora a impermanência das lembranças e a beleza do esquecimento. Uma das peças mais aclamadas da carreira de Gustavo Almeida.",
    contato: "gustavo.almeida@liquidart.com.br",
    favorito: false
  },
  {
    id: 9,
    imagem: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
    titulo: "Sertão Vivo",
    artista: "Beatriz Nascimento",
    ano: 2021,
    preco: "R$ 4.900,00",
    descricao: "Uma homenagem à resistência e à beleza árida do sertão nordestino. Ocres, vermelhos e amarelos queimados constroem uma paisagem que pulsa vida mesmo na secura. Beatriz Nascimento nasceu no Ceará e pinta o semi-árido como poucos artistas conseguem.",
    contato: "beatriz.nascimento@sertaoarte.com",
    favorito: false
  },
  {
    id: 10,
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    titulo: "Geometria do Caos",
    artista: "Rodrigo Vieira",
    ano: 2023,
    preco: "R$ 11.200,00",
    descricao: "Padrões fractais gerados à mão revelam a ordem oculta dentro do aparente caos. Cada centímetro da tela esconde novos detalhes para quem se aproxima. Rodrigo Vieira leva meses produzindo cada obra e nunca repete um padrão.",
    contato: "rodrigo.vieira@caosgeometrico.art",
    favorito: false
  },
  {
    id: 11,
    imagem: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    titulo: "Retrato da Cidade",
    artista: "Camila Torres",
    ano: 2019,
    preco: "R$ 6.800,00",
    descricao: "Um olhar poético sobre a arquitetura e as pessoas que habitam os grandes centros urbanos brasileiros. A paleta fria contrasta com a humanidade calorosa dos personagens retratados. Camila Torres documenta o cotidiano das metrópoles com sensibilidade ímpar.",
    contato: "camila.torres@retratourbano.com.br",
    favorito: false
  },
];

// ============================================================
// PALETAS DE CORES
// ============================================================
const paletas = {
  claro:       { bg: '#ffffff', text: '#333333', accent: '#2185d0' },
  escuro:      { bg: '#1b1c1d', text: '#f0f0f0', accent: '#00b5ad' },
  sepia:       { bg: '#f4ecd8', text: '#5b4636', accent: '#a0522d' },
  minimalista: { bg: '#fafafa', text: '#333333', accent: '#e91e63' },
  lavanda:     { bg: '#f0ebff', text: '#3d2b6b', accent: '#7c4dff' },
  floresta:    { bg: '#f0f7f0', text: '#1b3a1b', accent: '#2e7d32' },
  oceano:      { bg: '#e8f4fd', text: '#0d2137', accent: '#0277bd' },
  crepusculo:  { bg: '#1a0a2e', text: '#e8d5f5', accent: '#ce93d8' }
};

// ============================================================
// UTILITÁRIOS DE COOKIE
// ============================================================
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const prefix = name + '=';
  for (let part of document.cookie.split(';')) {
    part = part.trim();
    if (part.startsWith(prefix)) return decodeURIComponent(part.slice(prefix.length));
  }
  return null;
}

function cookiesAceitos() {
  return getCookie('cookies_aceitos') === 'true';
}

// ============================================================
// FAVORITOS (localStorage)
// ============================================================
function getFavoritos() {
  try { return JSON.parse(localStorage.getItem('favoritos') || '[]'); }
  catch { return []; }
}

function setFavorito(id, estado) {
  const favs = getFavoritos();
  if (estado && !favs.includes(id)) {
    favs.push(id);
  } else if (!estado) {
    const i = favs.indexOf(id);
    if (i > -1) favs.splice(i, 1);
  }
  localStorage.setItem('favoritos', JSON.stringify(favs));
}

function isFavorito(id) {
  return getFavoritos().includes(id);
}

// ============================================================
// RENDERIZAÇÃO DE CARDS
// ============================================================
function renderCards() {
  const container = document.getElementById('cards-container');
  container.innerHTML = '';

  obras.forEach(obra => {
    const fav  = isFavorito(obra.id);
    const card = document.createElement('div');
    card.className  = 'ui card obra-card';
    card.dataset.id = obra.id;
    card.innerHTML  = `
      <div class="image card-img-wrapper">
        <img src="${obra.imagem}" alt="${obra.titulo}">
        <i class="heart icon card-fav-icon ${fav ? 'visible' : ''}" data-fav-id="${obra.id}"></i>
      </div>
      <div class="content">
        <div class="header card-titulo">${obra.titulo}</div>
        <div class="meta card-artista">${obra.artista}</div>
        <div class="description card-preco">${obra.preco}</div>
      </div>
      <div class="extra content card-extra">
        <span><i class="calendar alternate outline icon"></i>${obra.ano}</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(obra.id));
    container.appendChild(card);
  });
}

function updateCardFavIcon(id) {
  const fav  = isFavorito(id);
  const icon = document.querySelector(`[data-fav-id="${id}"]`);
  if (icon) icon.classList.toggle('visible', fav);
}

// ============================================================
// MODAL
// ============================================================
let obraAtualId = null;

function openModal(id) {
  const obra = obras.find(o => o.id === id);
  if (!obra) return;
  obraAtualId = id;

  document.getElementById('modal-img').src             = obra.imagem;
  document.getElementById('modal-img').alt             = obra.titulo;
  document.getElementById('modal-titulo').textContent  = obra.titulo;
  document.getElementById('modal-artista').textContent = obra.artista;
  document.getElementById('modal-ano').textContent     = obra.ano;
  document.getElementById('modal-descricao').textContent = obra.descricao;
  document.getElementById('modal-preco-val').textContent = obra.preco;

  const contatoEl     = document.getElementById('modal-contato');
  contatoEl.textContent = obra.contato;
  contatoEl.href        = 'mailto:' + obra.contato;

  atualizarBotaoFav(id);

  document.getElementById('overlay').classList.add('active');
  document.getElementById('obra-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('overlay').classList.remove('active');
  document.getElementById('obra-modal').classList.remove('active');
  document.body.style.overflow = '';
  obraAtualId = null;
}

function atualizarBotaoFav(id) {
  document.getElementById('modal-fav-btn').classList.toggle('favorited', isFavorito(id));
}

// ============================================================
// PAINEL DE PERSONALIZAÇÃO
// ============================================================
function abrirPainel() {
  document.getElementById('customize-panel').classList.add('open');
}

function fecharPainel() {
  document.getElementById('customize-panel').classList.remove('open');
}

// ============================================================
// FONTE
// ============================================================
function aplicarFonte(valor) {
  document.body.style.fontFamily = valor;
  const sel = document.getElementById('font-select');
  for (const opt of sel.options) {
    if (opt.value === valor) { sel.value = valor; break; }
  }
}

// ============================================================
// PALETA
// ============================================================
function aplicarPaleta(nome) {
  const p = paletas[nome];
  if (!p) return;
  const root = document.documentElement;
  root.style.setProperty('--bg-color',     p.bg);
  root.style.setProperty('--text-color',   p.text);
  root.style.setProperty('--accent-color', p.accent);
  document.querySelectorAll('.palette-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.palette === nome)
  );
}

// ============================================================
// SALVAR PREFERÊNCIA (só se cookies aceitos)
// ============================================================
function salvarPreferencia(chave, valor) {
  if (cookiesAceitos()) setCookie(chave, valor, 30);
}

// ============================================================
// CARREGAR PREFERÊNCIAS SALVAS
// ============================================================
function carregarPreferencias() {
  if (!cookiesAceitos()) return;
  const fonte  = getCookie('fonte_preferida');
  if (fonte)  aplicarFonte(fonte);
  const paleta = getCookie('paleta_preferida');
  if (paleta) aplicarPaleta(paleta);
}

// ============================================================
// BANNER DE CONSENTIMENTO DE COOKIES
// ============================================================
function initBannerCookies() {
  const consentimento = getCookie('cookies_aceitos');
  if (consentimento !== null) {
    if (consentimento === 'true') carregarPreferencias();
    return;
  }
  document.getElementById('cookie-banner').style.display = 'flex';
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  initBannerCookies();

  // Overlay fecha o modal ao clicar fora
  document.getElementById('overlay').addEventListener('click', () => {
    if (document.getElementById('obra-modal').classList.contains('active')) {
      closeModal();
    }
  });

  // Fechar modal pelo botão Voltar
  document.getElementById('modal-voltar').addEventListener('click', closeModal);

  // Favoritar/desfavoritar no modal
  document.getElementById('modal-fav-btn').addEventListener('click', () => {
    if (obraAtualId === null) return;
    const novoEstado = !isFavorito(obraAtualId);
    setFavorito(obraAtualId, novoEstado);
    atualizarBotaoFav(obraAtualId);
    updateCardFavIcon(obraAtualId);
  });

  // Abrir painel de edição
  document.getElementById('btn-edicao').addEventListener('click', abrirPainel);

  // Fechar painel de edição
  document.getElementById('btn-fechar-painel').addEventListener('click', fecharPainel);

  // Mudança de fonte
  document.getElementById('font-select').addEventListener('change', e => {
    aplicarFonte(e.target.value);
    salvarPreferencia('fonte_preferida', e.target.value);
  });

  // Botões de paleta
  document.querySelectorAll('.palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      aplicarPaleta(btn.dataset.palette);
      salvarPreferencia('paleta_preferida', btn.dataset.palette);
    });
  });

  // Aceitar cookies
  document.getElementById('btn-aceitar-cookies').addEventListener('click', () => {
    setCookie('cookies_aceitos', 'true', 30);
    document.getElementById('cookie-banner').style.display = 'none';
    carregarPreferencias();
  });

  // Recusar cookies
  document.getElementById('btn-recusar-cookies').addEventListener('click', () => {
    setCookie('cookies_aceitos', 'false', 30);
    document.getElementById('cookie-banner').style.display = 'none';
  });
});
