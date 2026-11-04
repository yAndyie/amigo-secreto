const desejos = [
  {
    nome: "Moletom Unlimited",
    descricao: "Tamanho M, azul",
    foto: "blusao.jpg",
    link: "https://www.lojasrenner.com.br/p/blusao-masculino-moletom-unlimited-com-capuz-e-half-ziper/-/A-931051068-br.lr?sku=931051076"
  },
  {
    nome: "Mouse gamer sem fio",
    descricao: "Na cor branca, ou roxa",
    foto: "mouse.jpg",
    link: "https://www.kabum.com.br/produto/611255/mouse-gamer-sem-fio-redragon-invader-pro-rgb-10000-dpi-8-botoes-wireless-branco-m719w-rgb-pro"
  },
  {
    nome: "Relógio Anadigi Casio",
    descricao: "Quem me conhece sabe que eu sou péssimo com horas, por isso preciso de um relógio lindo para ficar em meu pulso",
    foto: "relogio.jpg",
    link: "https://www.lojasrenner.com.br/p/relogio-anadigi-casio-aq230a7bmq/-/A-536686688-br.lr?sku=536686696"
  },
  {
    nome: "Pulseira na cor prata ou de preta rsrs",
    descricao: "Não sei link, Deus te ajude a achar",
    foto: "pulseira.jpg",
    link: ""
  },
  {
    nome: "Camiseta Polo Nanda Tsunami",
    descricao: "Tamanho M",
    foto: "nanda.jpg",
    link: "https://shopee.com.br/product/1459954671/58208321640?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMc1TPTF0zl9lUk9doKYfbtNkYCBZaTm6dQ6q3WJIrnGYlyLtpSCE1-D6jy2YmlKEe_b7zxJZfI6lpwZ6fqmNpcGhlcnRleHTEdAAAAAzzd48Z0iZJNJwTvu0XAir4-KL8sj6sqPA6BGNDqpoqFk0tiFCrZI0bvXuX88VSscsFb89eHO5sIkRax4zZEpg9gIt254VjJo6x6Dm55IfYKXqFw-_sYdPEpLoyBAAbP4F1BuQpq2MasHxi18O8OmV5"
  },
  {
    nome: "Camieta Marina Sena Coisas Naturais",
    descricao: "Tamanho M",
    foto: "marina.jpg",
    link: "https://shopee.com.br/-Camiseta-Premium-em-Algod%C3%A3o-Puro-TT-Camiseta-Oversized-Marina-Sena-Coisas-Naturais-Tour-Moda-Tend%C3%AAncia-100-Algod%C3%A3o-i.1615546910.58201855754?extraParams=%7B%22display_model_id%22%3A239433973977%2C%22model_selection_logic%22%3A3%7D&image_ids=sg-11134201-822x3-mi2wk3d2ploh41"
  }
];

const lista = document.getElementById("wish-list");

desejos.forEach((desejo) => {
  const card = document.createElement("article");
  card.className = "card";

  const imagem = document.createElement("img");
  imagem.src = new URL(desejo.foto, window.location.href).href;
  imagem.alt = desejo.nome;
  imagem.onerror = () => {
    imagem.style.display = "none";
  };

  const conteudo = document.createElement("div");
  conteudo.className = "card-content";

  const titulo = document.createElement("h3");
  titulo.textContent = desejo.nome;

  const descricao = document.createElement("p");
  descricao.textContent = desejo.descricao;

  conteudo.append(titulo, descricao);

  if (desejo.link) {
    const link = document.createElement("a");
    link.href = desejo.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Ver ideia do presente ↗";
    conteudo.appendChild(link);
  }

  card.append(imagem, conteudo);
  lista.appendChild(card);
});
