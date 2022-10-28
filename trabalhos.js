const titulo = document.querySelector('.titulo2')

function Impressao(titulo) {
    const tit = titulo.innerHTML.split('')
    console.log(tit)

    titulo.innerHTML = ''

    tit.forEach( (letra,i) => {
        setTimeout ( ()  =>  titulo.innerHTML += letra, 130*i) 
    })
}

Impressao(titulo)

//Animação
AOS.init({
    duration: 1000,
    once: true,
    mirror:true,
});

//Menu recolhível
function cliqueMenu() {
    if (itens.style.display == 'flex'){
        menu.style.width = '7vw'
        menu.style.transition = '1.5s'
        itens.style.transition = '1.5s'
        itens.style.display = 'none'
        document.getElementById("menu").style.boxShadow = '0.7vw 0vh 0.5vw 0.1vw rgba(0, 0, 0, 0.178)';
    } else {
        menu.style.width = '15vw'
        menu.style.transition = '1.5s'
        itens.style.transition = '1.5s'
        itens.style.display = 'flex'
        document.getElementById("menu").style.boxShadow = '2vw 0vh 0.5vw 0.1vw black';
    }
}