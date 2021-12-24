let img = document.getElementById('img');

window.addEventListener('load', () => {
    if (img.width >= img.height) {
        img.classList.add('horizontal');
    } else {
        img.classList.add('vertical');
    }
});