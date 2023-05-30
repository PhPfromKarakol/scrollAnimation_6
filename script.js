const boxes = document.querySelectorAll('.box');

//console.log(window.innerHeight);


window.addEventListener('scroll', ff);

ff();

function ff() {
    const triggerBtn = (window.innerHeight / 5 * 4);

    boxes.forEach(box => {
        const boxT = box.getBoundingClientRect().top;
        if (boxT < triggerBtn) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    });
};