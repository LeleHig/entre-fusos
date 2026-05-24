// Pega todos os botões de filtro
const filtros = document.querySelectorAll('.filtro');

// Pega todos os cards de países
const cards = document.querySelectorAll('.grade a');

// Para cada botão, adiciona um evento de clique
filtros.forEach(function(botao) {
  botao.addEventListener('click', function() {

    // Remove o "ativo" de todos os botões
    filtros.forEach(function(b) {
      b.classList.remove('ativo');
    });

    // Adiciona "ativo" no botão clicado
    botao.classList.add('ativo');

    // Pega qual filtro foi clicado
    const filtroEscolhido = botao.dataset.filtro;

    // Mostra ou esconde os cards
    cards.forEach(function(card) {
      const categoria = card.dataset.categoria;

      if (filtroEscolhido === 'todos' || categoria === filtroEscolhido) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});