//criando o botao de topo
// Obtém o botão
const btnTopo = document.getElementById("btn-topo");

// Mostra o botão quando o usuário rola para baixo 100px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Quando o botão é clicado, rola para o topo da página
btnTopo.onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
};


// criando o menu mobile
const btnAbrirMenu = document.getElementById('btn-abrir-menu');
const btnFechar = document.getElementById('btn-fechar');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

btnAbrirMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu'); // Adiciona a classe para abrir o menu
    overlay.style.display = 'block'; // Mostra a sobreposição
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu'); // Remove a classe para fechar o menu
    overlay.style.display = 'none'; // Esconde a sobreposição
});

// Fecha o menu se o overlay for clicado
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
});
