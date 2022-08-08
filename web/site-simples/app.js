'use strict'

//document.query obtem a referencia do botão ('.btn)//
const switcher = document.querySelector('.btn');
//add ouvinte de eventos (espera para ser chamado pelo evento quando ele for disparado) - função passada é o manipulador de eventos real//
//toggle: habilita e desabilita recursos e funcionalidades sem alterar cód e em tempo real//
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
//adicionado if para verificar tema atual e atualizar o rotulo do botão//
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
});