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

    let medias = [
        "https://www.youtube.com/watch?v=pTn6Ewhb27k",
        "https://images.unsplash.com/photo-1639147591951-07df749c760b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639202293330-5f8437183fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639182946622-7de9d7efa6b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639154872768-355420897b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639161042430-2d5ebacc40b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639156299871-a1ffbf7946b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639164666181-d0d9e2cee51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639180724511-cfd35fe65305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639165734963-63e358fc5f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1638741451679-eb5fa54bce9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639157022525-560bedcbb628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639175661184-33f1eb06dd29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639170126730-2a09d100e129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639193910816-d3a259ecb61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639062532911-5a6e9591d21c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639166248278-04720caa884d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639153519880-d78f6404abe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639146856276-9ee379bb4dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639243516757-0f0a659a821b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639156290987-1d156b82a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639142982207-8a27b0613298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639250382548-4ee9396f5372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639112089287-235c3efef652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639275617881-d4d39df84950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639221521531-653e5a57833f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1639242585400-f7029d3eb17c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
    ]
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