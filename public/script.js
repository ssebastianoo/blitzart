let shelves = document.getElementById('shelves');
let img = document.getElementById('img');
const scrollXSpeed = 2;
let element, medias;
const lines = 2.8;
let header = document.querySelector('.header');
let container = document.querySelector('.container');
let arrow = document.querySelector('.arrow');

const isOdd = (num) => num % 2;

function nextSection() {
    document.documentElement.scrollTop = header.clientHeight*(Math.floor(document.documentElement.scrollTop/header.clientHeight) + 1);
}

window.addEventListener('load', async () => {
    if (img) {
        if (img.width >= img.height) {
            img.classList.add('horizontal');
        } else {
            img.classList.add('vertical');
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
        let videoID = getVideoID(media);
        if (videoID) {
            media = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
        }
        let element = document.createElement('img');
        element.src = media;
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

function getVideoID(url) {
    var p = /^(?:https?:\/\/)?(?:m\.|www\.|img\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|vi\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
        let re = /(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
        let id = url.match(re)[7];
        return id;
    }
    return null;
}

arrow.addEventListener('click', nextSection)