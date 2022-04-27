const nxtArrow = document.getElementById('next');
const prevArrow = document.getElementById('prev');
const row1 = document.querySelector('.row1');
const row2 = document.querySelector('.row2');

nxtArrow.addEventListener('click', function () {
    row1.classList.toggle('hide');
    row2.classList.toggle('hide');
});

prevArrow.addEventListener('click', function () {
    row1.classList.toggle('hide');
    row2.classList.toggle('hide');

});