new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 1,
    autoplay: 4000
  }).mount();


const name = 'Khaydien Anderson'
let index = 0;
let currentText = '';
let letter = '';


(function type() {

    
letter = name.slice(0, ++index)

document.querySelector('.typing').textContent = letter

setTimeout(type, 100)
})();