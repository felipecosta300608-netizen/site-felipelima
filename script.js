// ===== Versão mínima — Felipe Lima =====
document.addEventListener('DOMContentLoaded', () => {
  // Controles
  const btnAcess = document.getElementById('btn-acess');
  const painel = document.getElementById('painel-acess');
  const maisFonte = document.getElementById('mais-fonte');
  const menosFonte = document.getElementById('menos-fonte');
  const contraste = document.getElementById('contraste');

  // 1) Abrir/fechar painel com ARIA
  btnAcess.addEventListener('click', () => {
    const aberto = painel.classList.toggle('aberto');
    btnAcess.setAttribute('aria-expanded', aberto.toString());
    painel.setAttribute('aria-hidden', (!aberto).toString());
  });

  // 2) Aumentar/Diminuir fonte — altera html{ font-size }
  let tamanho = 100; // %
  function aplicarTamanho(){ document.documentElement.style.fontSize = tamanho + '%'; }

  maisFonte.addEventListener('click', () => {
    tamanho = Math.min(tamanho + 10, 180); // limite superior simples
    aplicarTamanho();
  });

  menosFonte.addEventListener('click', () => {
    tamanho = Math.max(tamanho - 10, 80); // limite inferior simples
    aplicarTamanho();
  });

  // 3) Alto contraste — alterna classe no body
  contraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
});
