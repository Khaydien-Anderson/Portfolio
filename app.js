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
  type: 'slider',
  startAt: 0,
  perView: 3,
  gap: 20,
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