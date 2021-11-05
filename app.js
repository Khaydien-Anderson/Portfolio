///////////////// TYPING GENERATOR ON FRONT PAGE //////////////////
const name = 'Khaydien Anderson'
let index = 0;
let currentText = '';
let letter = '';


(function type() {

    
letter = name.slice(0, ++index)

document.querySelector('.typing').textContent = letter

setTimeout(type, 100)
})();
///////////////////////////////////////////////////////////////////////

/////////////// SWIPER JS INITIALIZE ////////////////////////////////

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap: 10,
  autoplay: 3000,
breakpoints: {
   768: {
     perView: 2
   },
   576: {
     perView: 1
   }
   
  }
}).mount()
///////////////////////////////////////////////////////////////////////

/////////////// MODAL INTERACTION ////////////////////////////////
const projectsUL = document.querySelector('.glide__slides')
const projects = projectsUL.querySelectorAll('li')

const modalTitle = document.querySelector('.modal-title')
const modalBody = document.querySelector('.modal-body')

projects.forEach(project => {

  project.addEventListener('click', () => {
   modalTitle.textContent = project.querySelector('p').textContent
 modalBody.innerHTML = ''
 modalBody.innerHTML += `<img class="img-fluid modal-img" style="max-height: 400px;" src="${project.querySelector('img').getAttribute('src')}"></img> <h2>yo</h2>`
  })

})
