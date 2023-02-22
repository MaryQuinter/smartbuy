const contenedor = document.querySelector('#contenedor');

window.addEventListener('resize', () => {
    if(window.innerWidth <= 768){
        contenedor.classList.remove('active');
    } else {
        contenedor.classList.add('active');
    }
});
