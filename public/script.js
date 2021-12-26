let shelves = document.getElementById('shelves');
let topMedia = document.getElementById('topMedia');
const scrollXSpeed = 2;
let element, medias;
const lines = 5;
let header = document.querySelector('.header');
let container = document.querySelector('.container');
let arrow = document.querySelector('.arrow');

const isOdd = (num) => num % 2;

function nextSection() {
    document.documentElement.scrollTop = header.clientHeight*(Math.floor(document.documentElement.scrollTop/header.clientHeight) + 1);
}

window.addEventListener('load', async () => {
    if (topMedia) {
        console.log(topMedia.clientHeight)
        console.log(topMedia.clientWidth)
        if (topMedia.clientWidth >= topMedia.clientHeight) {
            topMedia.classList.add('horizontal');
        } else {
            topMedia.classList.add('vertical');
        }
        nextSection();
    }

    let res = await fetch('/getMedias');
    let medias = await res.json();
    let imgNumber = 0;
    let shelfDiv = document.createElement('div');
    shelfDiv.classList.add('shelf');
    shelves.appendChild(shelfDiv);
    medias.forEach((media) => {
        let ext = media.split('.').pop().toLowerCase();
        let element;
        if (["mp4", "mov"].includes(ext)) {
            element = document.createElement('video');
            element.controls = false;
            element.src = media;
        } else if (["jpg", "jpeg", "png", "gif"].includes(ext)) {
            element = document.createElement('img');
            element.src = media;
        } else {
            element = document.createElement('img');
            element.src = "not-supported.png";
        }
        element.classList.add('media');
    
        element.addEventListener('click', async(e) => {
            location.href = "/?media=" + e.target.src.split('/').pop().split('.')[0];
        });
    
        imgNumber++;
        if (imgNumber > Math.floor(medias.length/lines)) {
            imgNumber = 1;
            shelfDiv = document.createElement('div');
            shelfDiv.classList.add('shelf');
            shelves.appendChild(shelfDiv);
        } 
        shelfDiv.appendChild(element);
    });
    for (i=0; i<shelves.children.length; i++) {
        if (isOdd(i)) {
            shelves.children[i].scrollLeft = shelves.children[i].scrollWidth - shelves.children[i].clientWidth;
        } else {
            shelves.children[i].scrollLeft = 0;
        }
    }

    let pos = new Object();
    setInterval(() => {
        for (let i = 0; i < shelves.children.length; i++) {
            if (!pos[i] || pos[i] > (shelves.children[i].scrollWidth - shelves.children[i].clientWidth)) {
                pos[i] = 0;
            }
            pos[i] += shelves.children[i].children.length/scrollXSpeed;

            if (isOdd(i)) {
                shelves.children[i].scroll({left: shelves.children[i].scrollWidth-shelves.children[i].clientWidth-pos[i], behavior: 'smooth'});
            } else {
                shelves.children[i].scroll({left: pos[i], behavior: 'smooth'});
            }            
        }
    }, 100);
});

arrow.addEventListener('click', nextSection)