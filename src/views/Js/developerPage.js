document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');
        updateContent(tab);
    });
});

function updateContent(tab) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; 

    switch (tab) {
        case 'html':
            contentArea.innerHTML = '<p>Este é o conteúdo de <strong>HTML</strong>.</p>';
            break;
        case 'css':
            contentArea.innerHTML = '<p>Este é o conteúdo de <strong>CSS</strong>.</p>';
            break;
        case 'js':
            contentArea.innerHTML = '<p>Este é o conteúdo de <strong>JavaScript</strong>.</p>';
            break;
        default:
            contentArea.innerHTML = '<p>Selecione uma opção acima.</p>';
    }
}


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    
    // Alterna a classe 'open' para mostrar ou esconder a barra lateral
    sidebar.classList.toggle('open');
    
    // Atualiza o texto do botão dependendo do estado da barra lateral
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    
    if (sidebar.classList.contains('open')) {
      openBtn.style.display = 'none';
      closeBtn.style.display = 'block';
    } else {
      openBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    }
  }