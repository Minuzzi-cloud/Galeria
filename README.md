# Arte em Foco — Galeria de Arte Contemporânea

Site estático de galeria de arte fictícia desenvolvido com HTML, CSS e JavaScript puro, utilizando Semantic UI como framework de interface.

---

## Funcionalidades

- **Galeria em grid** com 11 obras de arte de artistas brasileiros fictícios
- **Modal de detalhes** ao clicar em uma obra, exibindo imagem ampliada, descrição, preço e contato
- **Sistema de favoritos** com persistência via `localStorage` — o coração no modal marca/desmarca a obra
- **Painel de personalização** deslizante com:
  - Troca de fonte (4 opções)
  - Troca de paleta de cores (8 temas)
- **Persistência de preferências** via cookies com validade de 30 dias
- **Banner de consentimento de cookies** na primeira visita, com opção de aceitar ou recusar
- **Design responsivo** com breakpoint em 600px

---

## Estrutura de Arquivos

```
galeria/
├── index.html        # Página principal e estrutura HTML
├── css/
│   └── style.css     # Estilos customizados e variáveis de tema
└── js/
    └── customize.js  # Lógica da galeria, favoritos, modal e personalização
```

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| Semantic UI | 2.4.1 (CDN) | Componentes de interface (cards, botões, formulários) |
| jQuery | 3.6.0 (CDN) | Dependência do Semantic UI |
| Playfair Display | Google Fonts | Tipografia dos títulos |
| Inter | Google Fonts | Tipografia do corpo |
| localStorage | — | Persistência dos favoritos |
| Cookies | — | Persistência das preferências de tema |

---

## Como Usar

Por ser um projeto totalmente estático, basta abrir o arquivo diretamente no navegador:

```
galeria/index.html
```

Não é necessário nenhum servidor, instalação ou build.

---

## Paletas de Cores

O painel de personalização oferece 8 temas visuais:

| Paleta | Fundo | Texto | Destaque |
|---|---|---|---|
| Claro | `#ffffff` | `#333333` | `#2185d0` |
| Escuro | `#1b1c1d` | `#f0f0f0` | `#00b5ad` |
| Sépia | `#f4ecd8` | `#5b4636` | `#a0522d` |
| Minimalista | `#fafafa` | `#333333` | `#e91e63` |
| Lavanda | `#f0ebff` | `#3d2b6b` | `#7c4dff` |
| Floresta | `#f0f7f0` | `#1b3a1b` | `#2e7d32` |
| Oceano | `#e8f4fd` | `#0d2137` | `#0277bd` |
| Crepúsculo | `#1a0a2e` | `#e8d5f5` | `#ce93d8` |

Os temas são aplicados via CSS Custom Properties (`--bg-color`, `--text-color`, `--accent-color`) no `:root`.

---

## Opções de Fonte

| Opção | Família |
|---|---|
| Padrão | `sans-serif` |
| Serif | `Georgia, serif` |
| Monospace | `Courier New, Courier, monospace` |
| Moderna | `Trebuchet MS, Helvetica, sans-serif` |

---

## Obras em Exposição

| # | Título | Artista | Ano |
|---|---|---|---|
| 1 | Luz do Amanhecer | Marina Oliveira | 2021 |
| 2 | Fragmentos do Tempo | Carlos Mendonça | 2019 |
| 3 | Jardim Secreto | Luísa Ferreira | 2022 |
| 4 | Silêncio Urbano | Rafael Santos | 2020 |
| 5 | Raízes Profundas | Ana Paula Ramos | 2023 |
| 6 | Ondas Eternas | Pedro Cavalcanti | 2018 |
| 7 | Dança das Cores | Fernanda Brito | 2022 |
| 8 | Memória Líquida | Gustavo Almeida | 2020 |
| 9 | Sertão Vivo | Beatriz Nascimento | 2021 |
| 10 | Geometria do Caos | Rodrigo Vieira | 2023 |
| 11 | Retrato da Cidade | Camila Torres | 2019 |

---

## Comportamento dos Cookies

| Cookie | Valor | Descrição |
|---|---|---|
| `cookies_aceitos` | `true` / `false` | Consentimento do usuário |
| `fonte_preferida` | string da fonte | Fonte selecionada (salva só se aceito) |
| `paleta_preferida` | nome da paleta | Paleta selecionada (salva só se aceito) |

- Se **aceito**: preferências são salvas e restauradas a cada visita (validade de 30 dias)
- Se **recusado**: preferências funcionam apenas durante a sessão atual, sem persistência
