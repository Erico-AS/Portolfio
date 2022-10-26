//Efeito impressão
const texto = document.querySelector(".bio h1") //pegando elemento no HTML
const texto2 = document.querySelector(".bio p")
console.log(texto)

function Impressao(texto) {
    const txt = texto.innerText.split(''); 
    /* Pegando apenas o conteúdo
    Dividindo as letras da string em um array, parâmetro vazio para dividir em cada letra */
    console.log(txt)

    texto.innerText = '';

    txt.forEach( (letra, i) =>  { // O '=>' significa que ali é uma função, parâmetro vem antes do sinal
        setTimeout( () => texto.innerHTML += letra, 130 * i) 
        /* 1- forEach == para cada elemento numa array
        2- setTimeout == método para ser executado a cada período de tempo
        3- Período de tempo do 'setTimeout' pode vir na última linha depois da vírgula, e por padrão é milesegundo
        4- Quando é apenas uma linha, não necessita de chaves.*/
    })

}

Impressao(texto) //Chamando a função com a constante no início
Impressao(texto2)




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
