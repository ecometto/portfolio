const botonTheme = document.querySelector('.onOff')
const ballTheme = document.querySelector('.ball')

botonTheme.addEventListener('click', () => {

    if (ballTheme.style.left == "") {
        ballTheme.style.left = "20px"
        ballTheme.style.backgroundColor = "white";

        // agregar aqui el cambio de VideoColorSpace.apply. ver como 

    } else if (ballTheme.style.left == "20px") {
        ballTheme.style.left = ""
        ballTheme.style.backgroundColor = "black";

        // agregar aqui el cambio de VideoColorSpace.apply. ver como 
    }
})

const cards = document.querySelectorAll('.carousel-item')
const secciones = document.querySelectorAll('section')


cards.forEach((card, index)=>{
    secciones[index].style.display = "none"

    card.addEventListener('click',()=>{
        secciones.forEach(secc=>{
            secc.style.display = "none"
        })
        secciones[index].style.display = "block"


    })
})