const overlay = document.getElementById("overlay")
const OpenButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 800px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
    const isMobile = e.matches
    console.log(isMobile)
    if(isMobile){
        navbar.setAttribute('inert', '')
    }
    else{
        navbar.removeAttribute('inert')
    }
}

function openSidebar(){
    navbar.classList.add('show')
    overlay.style.display = "block"
    OpenButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
}
function closeSidebar(){
    navbar.classList.remove('show')
    overlay.style.display = "none"
    OpenButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '')
}

updateNavbar(media)

const btns = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".img-slide")
const contents = document.querySelectorAll(".content")

var sliderNav = function(manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active")
  })

  slides.forEach((slide) => {
    slide.classList.remove("active")
  })

  contents.forEach((content) => {
    content.classList.remove("active")
  })

  btns[manual].classList.add("active")
  slides[manual].classList.add("active")
  contents[manual].classList.add("active")
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i)
  })
})

const cards = document.querySelectorAll('.card')

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')

    setTimeout(() => {
      window.location.href = card.dataset.link;
    }, 300)
  })
})