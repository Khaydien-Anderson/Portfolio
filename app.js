/////////////// MODAL INTERACTION ////////////////////////////////
const projectsUL = document.querySelector('.glide__slides')
const projects = projectsUL.querySelectorAll('li')
const projectsAr = Array.from(projects);

const modalTitle = document.querySelector('.modal-title')
const modalBody = document.querySelector('.modal-body')
const projectTexts  = [`<li>Javascript lightbox functionality used to bring pictures to the front</li>
<li>Search filter enabled to filter pictures by caption</li>
<li>Responsive CSS Grid</li>
<li>Left + Right navigation when picture selected</li>
`,

`<li>Javascript plugins used (chart.js) to create responsive chart that adjusts to time. (hourly, daily, weekly, monthly)</li>
<li>Search filter enabled to filter users by name</li>
<li>Mobile first responsive CSS Grid</li>
<li>Local storage created to save users settings and send messages</li>
<li>Javascript interactivity used to create open and close alerts</li>`,

`<li>AJAX used to fetch random users from API generator and display users</li>
<li>Search filter enabled to filter users by name</li>
<li>Modal created to load more information on user</li>
<li>Functionality to switch back and forth between users</li>`,

`<li>Form created using HTML forms</li>
<li>Flexbox for layout</li>
<li>Mobile first approach</li>
<li>All required input attributes with labels</li>`,

`<li>Javascript interactivity to open close hamburger menu</li>
<li>Contact form added</li>
<li>Mobile first approach for Mobile, Tablet & Desktop</li>
<li>Videos manually added to index and embedded Youtube videos.</li>`,

`<li>Javascript arrays used to store correct phrases.</li>
<li>Javascript interactivity when clicking right and wrong answer</li>
<li>CSS transitions on phrase display</li>
<li>Interactive on screen keyboard </li>`]

const demoLinks = ['https://khaydien-anderson.github.io/Techdegree-Project-5/',
                'https://crumpcode.github.io/Techdegree-Project-7.0/',
                'https://crumpcode.github.io/Treehouse-Techdegree-8/',
                'https://crumpcode.github.io/Techdegree-Project-3/',
                'https://crumpcode.github.io/MikeXV/',
                'https://crumpcode.github.io/Techdegree-Project-6/'
              ]

const viewLinks = ['https://github.com/crumpcode/Techdegree-Project-5.git',
                    'https://github.com/crumpcode/Techdegree-Project-7.git',
                    'https://github.com/crumpcode/Treehouse-Techdegree-8.git',
                  'https://github.com/crumpcode/Techdegree-Project-3.git',
                'https://github.com/crumpcode/MikeXV.git',
              'https://github.com/crumpcode/Techdegree-Project-6.git']

//// FOR EACH PROJECT THE MODAL WILL UPDATE WITH PROJECTTEXTS ARRAY CONTENT
const demo = document.getElementById('demo')
    const view = document.getElementById('view')

projectsAr.forEach(project => {

  project.addEventListener('click', () => {
    

          modalTitle.textContent = project.querySelector('p').textContent;
          modalBody.innerHTML = `<img class="img-fluid modal-img" style="max-height: 350px; border: 1px solid grey" src="${project.querySelector('img').getAttribute('src')}"></img><p>This project was created with the following:<ul>  
          </ul>`;
        const textContent = projectTexts[projectsAr.indexOf(project)]; //finds index in array and uses arrays content to fill modal
        const buttonContent = demoLinks[projectsAr.indexOf(project)]
        const viewContent = viewLinks[projectsAr.indexOf(project)]
        modalBody.querySelector('ul').innerHTML = textContent;
        
        demo.setAttribute('href', buttonContent)
        view.setAttribute('href', viewContent)
  })
})
if (modalBody.querySelectorAll('button').clicked === true) {

} 

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







