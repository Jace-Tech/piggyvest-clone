const selector = name => document.querySelector(name)

const btn = selector('#burger')
const menu = selector('.dropdown_menu')
const subMenuBtn = selector('#drop-btn')
const subMenu = selector('.dropdown-submenu')


const toggleBtn = e => {
    e.stopPropagation()
    btn.classList.toggle('turn')
    menu.classList.toggle('show')
}

const removeClass = () => {
    if(btn.classList.contains('turn')){
        btn.classList.remove('turn')
        menu.classList.remove('show')
    }
   
}



btn.addEventListener('click', toggleBtn)

subMenuBtn.addEventListener('click', e => {
    e.preventDefault()
    subMenu.classList.toggle('show')
})

menu.addEventListener('click', e => {
    e.stopPropagation()
})

window.addEventListener('click', removeClass)