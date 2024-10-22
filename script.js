// Remover a tela de carregamento após alguns segundos
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 2000);
};
