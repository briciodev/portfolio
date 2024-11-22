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
let btnMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})