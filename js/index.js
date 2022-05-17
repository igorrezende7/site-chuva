function Show(){
    let thirdconteudo = document.getElementById('third-conteudo')
    let vermais = document.getElementById('vermais')
    let texto = document.getElementById('conteudo-vermais')
    let card2 = document.getElementById('card2')
    vermais.style.display = 'none'
    texto.style.display = 'inline-block'
    card2.style.height = 'auto'
    card2.style.cursor = 'pointer'
    card2.setAttribute('onclick', 'Hide()')


    
}
function Hide(){
    let vermais = document.getElementById('vermais')
    let texto = document.getElementById('conteudo-vermais')
    let card2 = document.getElementById('card2')
    vermais.style.display = 'inline-block'
    texto.style.display = 'none'
    card2.style.height = '150px'
    card2.setAttribute('onclick', 'Show()')
}

function CreateTopic(){
    let hidden = document.getElementById('card-body3-hidden')
    let card3 = document.getElementById('card-body3')
    let btn = document.getElementById('btn')
    hidden.style.display = 'block'
    card3.style.display = 'none'
    btn.style.display = 'none'
}

function SendTopic(){
    let hidden = document.getElementById('card-body3-hidden')
    let sent = document.getElementById('card-body3-send')

    hidden.style.display = 'none'
    sent.style.display = 'block'
}
function BackNormal(){
    let sent = document.getElementById('card-body3-send')
    let card3 = document.getElementById('card-body3')
    let btn = document.getElementById('btn')

    card3.style.display = 'block'
    sent.style.display = 'none'
    btn.style.display = 'block'
}

function ShowAutor(){
    let focus1 = document.getElementById('card-focus1')
    let focus2 = document.getElementById('card-focus2')
    let focus3 = document.getElementById('card-focus3')
    let focus4 = document.getElementById('card-focus4')
    let card = document.getElementById('cardhide')

    focus1.style.display = 'block'
    focus2.style.display = 'block'
    focus3.style.display = 'block'
    focus4.style.display = 'block'
    card.setAttribute('onclick','HideAutor()')
}

function HideAutor(){
    let focus1 = document.getElementById('card-focus1')
    let focus2 = document.getElementById('card-focus2')
    let focus3 = document.getElementById('card-focus3')
    let focus4 = document.getElementById('card-focus4')
    let card = document.getElementById('cardhide')

    focus1.style.display = 'none'
    focus2.style.display = 'none'
    focus3.style.display = 'none'
    focus4.style.display = 'none'
    card.setAttribute('onclick','ShowAutor()')
}

function ShowSibeBar(){
    let side = document.getElementById('sidebar')
    let click = document.getElementById('click')
    let center = document.getElementById('center');
    let img = document.getElementById('img-conteudo')

    center.style.display = 'none'
    side.style.display = 'block'
    side.style.backgroundColor = 'white'
    side.style.zIndex = '1'
    side.style.position = 'relative'
    side.style.width = '100%'
    click.setAttribute('onclick','HideSideBar()')
}
function HideSideBar(){
    let side = document.getElementById('sidebar')
    let click = document.getElementById('click')
    let center = document.getElementById('center')
    center.style.display='block'
    side.style.display = 'none'
    click.setAttribute('onclick','ShowSibeBar()')
}

window.onresize = function(event) {
    location.reload()
};