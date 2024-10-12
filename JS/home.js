function redirecionar(){
    window.location.href= 'HTML/nyan_abel.html';

}

// Adicionando um ouvinte de evento ao botão
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.rainbow-button');
    button.addEventListener('click', redirecionar);
  });