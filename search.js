let artworks = document.getElementsByClassName('artwork-parent');
const input = document.getElementById('search');

function search(e) {
    let count = 0;
    for (let i = 0; i < artworks.length; i++) {
        if (artworks[i].innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            artworks[i].style.display = 'block';
            count++;
        } else {
            artworks[i].style.display = 'none';
        }
    }
    let noResults = document.getElementById('noResults');
    if (count === 0) {
       noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

input.addEventListener('keyup', search);