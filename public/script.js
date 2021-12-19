let shelves = document.getElementById('shelves');
const scrollXSpeed = 2;
let imgOnTop = document.getElementById('imgOnTop');
let closeButton = document.getElementById('close');
let artwork = document.getElementById('artwork');
let element;
let medias;
const lines = 2.8;

const isOdd = (num) => num % 2;

window.addEventListener('load', async () => {
    let res = await fetch('/getMedias');
    let medias = await res.json();
    medias.forEach((media) => {
        let videoID = getVideoID(media);
        if (videoID) {
            /* element = document.createElement('iframe');
            element.frameBorder = 0;
            element.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            element.allowFullscreen = true; */
            media = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
        }
        let element = document.createElement('img');
        element.src = media;
        element.classList.add('media');
    
        element.addEventListener('click', () => {
            showImgOnTop(media);
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

function showImgOnTop(url) {
    artwork.innerHTML = '';
    let videoID = getVideoID(url);
    if (videoID) {
        element = document.createElement('iframe');
        element.src = "https://youtube.com/embed/" + videoID;
        element.frameBorder = '0';
        artwork.appendChild(element);
    } else { 
        element = document.createElement('img');
        element.src = url;
        positionImg();
        artwork.appendChild(element);
    }
    
    imgOnTop.style.removeProperty('display');
    setTimeout(() => {
        imgOnTop.classList.remove('hidden');
    }, 100);
}

let size = 80;
function align(method) {
    switch (method) {
        case 'width':
            let iHeight = element.height;
            element.width = window.innerWidth*size/100;
            imgOnTop.style.width = element.height*element.width/iHeight + 'px';
            break;
        case 'height':
            element.height = window.innerHeight*size/100;
            imgOnTop.style.width = element.width + 'px';
            break;
    } 
}

function positionImg() {
    if (element.width > element.height) {
        imgOnTop.classList.remove('vertical');
        imgOnTop.classList.add('horizontal')
    } else {
        imgOnTop.classList.remove('horizontal');
        imgOnTop.classList.add('vertical')
    }
}
 
function getVideoID(url) {
    var p = /^(?:https?:\/\/)?(?:m\.|www\.|img\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|vi\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if(url.match(p)){
        let re = /(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
        let id = url.match(re)[7];
        return id;
    }
    return null;
}

closeButton.addEventListener('click', () => {
    imgOnTop.classList.add('hidden');
    setTimeout(() => {
        imgOnTop.style.display = 'none';
        artwork.innerHTML = '';
    }, 500);
});

let imgNumber = 0;
let shelfDiv = document.createElement('div');
shelfDiv.classList.add('shelf');
shelves.appendChild(shelfDiv);

/* <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/2oBGhxFni5U" 
    title="YouTube video player" 
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/