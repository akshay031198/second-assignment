'use strict';

const modal1 = document.querySelector('.modal');
const btncloseModal = document.querySelector(".close-modal");
const btndisplayModal = document.querySelector(".display-model")

const showModel = function(){
    modal1.classList.remove('hidden');
}



const nshowModel = function(){
    modal1.classList.add('hidden');
}

btndisplayModal.addEventListener('click', showModel);
btncloseModal.addEventListener('click', nshowModel);

