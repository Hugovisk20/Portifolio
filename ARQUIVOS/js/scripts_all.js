function openContato(classe) {
    let clas = document.getElementsByClassName(classe)[0];
    let descer = clas.querySelector('.article__redes__cel__bottom');
    descer.classList.toggle('open');
}