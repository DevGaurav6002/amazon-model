const mainImage = document.querySelector('.main-image');
const model = document.querySelector('.product-model');
const removeBtn = document.querySelector('.remove-model');
const bodyElement = document.body;

mainImage.addEventListener('click', (e) => {
    e.preventDefault()
    model.style.display = "block";
    bodyElement.style.background = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
})

removeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    model.style.display = "none";
    bodyElement.style.background = '#fff';
})