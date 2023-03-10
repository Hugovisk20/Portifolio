function openContato(classe) {
    let clas = document.getElementsByClassName(classe)[0];
    let descer = clas.querySelector('.article__redes__cel__bottom');
    descer.classList.toggle('open');
}

function openMenuMobile(classe) {
    let img = document.getElementsByClassName(classe)[0];
    img.classList.toggle('openMobile');
}

/**/

window.addEventListener('scroll', () =>{
    let txt1 = document.querySelectorAll('.animateText');
    txt1.forEach((e) => {
        if(e.getBoundingClientRect().top < window.innerHeight * 0.8){
            e.classList.add('active');
        }

    })
})