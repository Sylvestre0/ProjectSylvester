(function() {
    const bottons = document.querySelectorAll(".botton");
    const caixaLeft = document.querySelector(".sideleft-bar");
    const caixaRight = document.querySelector(".sideright-bar");
    const caixaFooter = document.querySelector("footer");
    const content = document.querySelector(".content");
    const header = document.querySelector("header")

    let isLeftOpen = true;
    let isRightOpen = true;

    function adjustContent() {
        let newWidth = 100;
        if (isLeftOpen) newWidth -= 18;
        if (isRightOpen) newWidth -= 18;
        
        header.style.width = `${newWidth}vw`
        header.style.left = isLeftOpen ? "18vw" : "0";
        content.style.width = `${newWidth}vw`;
        content.style.left = isLeftOpen ? "18vw" : "0";
    }

    function toggleBar(direcao) {
        if (direcao === "left") {
            caixaLeft.classList.toggle("openleft");
            isLeftOpen = !isLeftOpen; 
        } else if (direcao === "right") {
            caixaRight.classList.toggle("openright");
            isRightOpen = !isRightOpen;
        } else if (direcao === "botton") {
            caixaFooter.classList.toggle("openbotton");
            content.classList.toggle("footerclose")
        }
        adjustContent();    
    }

    function options(botton) {
        botton.addEventListener("click", (event) => {
            const direcao = event.target.getAttribute("data-move");
            toggleBar(direcao);
        });
    }

    bottons.forEach(botton => {
        options(botton);
    });

    adjustContent();
})();

document.querySelectorAll('.botoes').forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-value');
        const content = document.querySelector(".options");

        document.querySelectorAll('.botoes').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        if (tab === "6") {
            content.classList.toggle("closearea");
        } else {
            updateContent(tab, content);
        }
    });
});

function updateContent(tab, content) {
    const contentAreas = document.querySelectorAll(".optionvalue");

    contentAreas.forEach(section => {
        section.style.display = "none";
    });

    const targetSection = contentAreas[parseInt(tab) - 1];
    if (targetSection) {
        if (content.classList.contains("closearea")) content.classList.toggle("closearea");
        targetSection.style.display = "block";
    }
}function processarElemento(elemento, nivel = 0, resultado = [], left = 7) {
    // Cria a string com a estrutura HTML desejada para o elemento
    resultado.push(`
        <div class="layer">
            <div class="cube" style="left: ${left}%;">
                <span>${elemento.tagName}</span>
                <span>${nivel}</span>
            </div>
        </div>    
    `);

    // Itera sobre os filhos do elemento
    for (const filho of elemento.children) {
        processarElemento(filho, nivel + 1, resultado, left + 5);  // Incrementa 5% a cada nível
    }

    return resultado;
}

// Seleciona o elemento principal (main, por exemplo)
const main = document.querySelector(".content");

// Seleciona o contêiner onde você quer adicionar os elementos
const sideLeftBar = document.querySelector(".teste");

if (main && sideLeftBar) {
    // Processa o conteúdo e acumula o resultado
    const resultado = processarElemento(main);

    // Adiciona todo o conteúdo ao .sideleft-bar de uma vez
    sideLeftBar.innerHTML = resultado.join('');
} else {
    console.error('Elemento "main" ou ".sideleft-bar" não encontrado!');
}
