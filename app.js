/////////////// MODAL INTERACTION ////////////////////////////////
const projectsUL = document.querySelector('.glide__slides')
const projects = projectsUL.querySelectorAll('li')
const projectsAr = Array.from(projects);

const modalTitle = document.querySelector('.modal-title')
const modalBody = document.querySelector('.modal-body')
const projectTexts  = [`<li>Javascript lightbox functionality used to bring pictures to the front.</li>
<li>Search filter enabled to filter pictures by caption.</li>
<li>Responsive CSS Grid</li>
<li>Left + Right navigation when picture selected</li>`,

`<li>2Javascript lightbox functionality used to bring pictures to the front.</li>
<li>Search filter enabled to filter pictures by caption.</li>
<li>Responsive CSS Grid</li>
<li>Left + Right navigation when picture selected</li>`,

`<li>3Javascript lightbox functionality used to bring pictures to the front.</li>
<li>Search filter enabled to filter pictures by caption.</li>
<li>Responsive CSS Grid</li>
<li>Left + Right navigation when picture selected</li>`,

`<li>4Javascript lightbox functionality used to bring pictures to the front.</li>
<li>Search filter enabled to filter pictures by caption.</li>
<li>Responsive CSS Grid</li>
<li>Left + Right navigation when picture selected</li>`,

`<li>5Javascript lightbox functionality used to bring pictures to the front.</li>
<li>Search filter enabled to filter pictures by caption.</li>
<li>Responsive CSS Grid</li>
<li>Left + Right navigation when picture selected</li>`,

`<li>6Javascript lightbox functionality used to bring pictures to the front.</li>
<li>Search filter enabled to filter pictures by caption.</li>
<li>Responsive CSS Grid</li>
<li>Left + Right navigation when picture selected</li>`]
//// FOR EACH PROJECT THE MODAL WILL UPDATE WITH PROJECTTEXTS ARRAY CONTENT
projectsAr.forEach(project => {

  project.addEventListener('click', () => {
    
          modalTitle.textContent = project.querySelector('p').textContent;
          modalBody.innerHTML = `<img class="img-fluid modal-img" style="max-height: 400px;" src="${project.querySelector('img').getAttribute('src')}"></img><p>This project includes the following:<ul>  
          </ul>`;
        const textContent = projectTexts[projectsAr.indexOf(project)]; //finds index in array and uses arrays content to fill modal

        modalBody.querySelector('ul').innerHTML = textContent;
  })
})


///////////////// TYPING GENERATOR ON FRONT PAGE //////////////////
const name = 'Khaydien Anderson'
let index = 0;
let currentText = '';
let letter = '';

///function starts automattically on load with open parenthesis before function /////
(function type() {

    
letter = name.slice(0, ++index) //letter is the name sliced from the first letter onwards

document.querySelector('.typing').textContent = letter //letters sliced from array placed on screen

setTimeout(type, 100)
})();
///////////////////////////////////////////////////////////////////////

/////////////// GL JS INITIALIZE ////////////////////////////////

new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 3,
  gap: 10,
  autoplay: 2400,
  bound: true,
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







