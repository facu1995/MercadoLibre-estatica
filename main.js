/* DOM */
const siguiente = document.querySelector(".siguiente");
const atras = document.querySelector(".atras");
const arrImg = document.querySelectorAll(".img");

/* variables */
const cantImag = 7;
let i = 0;
actualizarFoto();
function actualizarFoto(){
    let resto = Math.abs(i %cantImag);
    arrImg.forEach((el, i) => {
        if (i == resto) {
            el.classList.add("activo");
        }
        else {
            el.classList.remove("activo")
        }
    })
}

siguiente.addEventListener('click', () => {
    i++;
    actualizarFoto();
}); 

atras.addEventListener('click', () => {
    i--;
    actualizarFoto();
}); 


/* Tomi js */
let content = document.querySelectorAll('.card-info-p');
let cards = document.querySelectorAll('.card');

cards.forEach((card,indix)=>{card.addEventListener('mouseover', ()=> {
    content[indix].innerHTML = 'Adaptador Conversor Usb 3.0 A Hdmi Salida Video 1 Junta Fact';
});
card.addEventListener('mouseout', ()=> {
    content[indix].innerHTML = '';
})})
    

