let shelf = document.getElementById('shelf');
let shelf2 = document.getElementById('shelf2');
let medias = ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/1200px-Logo_TVE-1.svg.png", "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_TVE-2.svg", "https://media.istockphoto.com/photos/number-3-3d-clean-blue-isolated-on-white-picture-id1019544808?k=20&m=1019544808&s=170667a&w=0&h=7yuA5i8bRJ7T4MQ_aaIIVieuT1e4RWAQ_M05yvLXVdY=", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/NYCS-bull-trans-4.svg/1024px-NYCS-bull-trans-4.svg.png", "https://thumbs.dreamstime.com/b/3d-numero-5-vetro-5212805.jpg"]

function init() {
    medias.forEach((media) => {
        let img = document.createElement('img');
        img.src = media;
        shelf.appendChild(img);
        shelf2.appendChild(img);
        shelf2.scrollLeft = shelf.scrollLeftMax;
    });
}   

init();

let x = 0;
let x2 = shelf2.scrollLeftMax
setInterval(() => {
    shelf.scroll({left: x, behavior: 'smooth'});
    shelf2.scroll({left: x2, behavior: 'smooth'});
    x += 5;
    x2 -= 5;
    if (x >= shelf.scrollLeftMax) {
        x = 0;
    }

    if (x2 <= 0) {
        x2 = shelf2.scrollLeftMax;
    }
}, 100);

/*
let repeat = 0;
setTimeout(() => {
    setInterval(() => {
        let img = document.createElement('img');
        img.src = medias[repeat];
        shelf.appendChild(img);
        repeat++;

        if (repeat == medias.length) {
            repeat = 0;
        }

        // shelf.children[0].remove();
        console.log(shelf.children.length);
    }, 1000);
}, 2000);
*/