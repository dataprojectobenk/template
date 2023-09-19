let btn = document.querySelector('#content button.navbar-toggler')
const bg_blur = document.createElement('div')
let box = document.getElementById('content')
bg_blur.classList.add('blur', 'd-none')
box.appendChild(bg_blur)
btn.onclick = () => {
    document.getElementById('wrapper').classList.toggle('show-menu')
    bg_blur.classList.toggle('d-none', false)
}
bg_blur.onclick = () => {
    document.getElementById('wrapper').classList.toggle('show-menu', false)
    bg_blur.classList.toggle('d-none')
}
document.querySelectorAll('#sidebar a.nav-link').forEach(el => {
    el.addEventListener('click', ()=>{
        document.getElementById('wrapper').classList.toggle('show-menu', false)
        bg_blur.classList.toggle('d-none')
    })
})