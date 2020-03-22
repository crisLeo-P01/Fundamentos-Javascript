const buttonImg = document.getElementById('button-img');
const buttonPDF = document.getElementById('button-pdf');

buttonImg.addEventListener('click', () => {
  fetch('images/dog.jpg')
    .then(res => console.log(res))
    .then(img => {
      document.getElementById('img').src = 'images/dog.jpg';
    })
});