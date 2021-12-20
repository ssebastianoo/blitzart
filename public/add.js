const fileEl = document.getElementById('file');
const submit = document.getElementById('submit');

submit.addEventListener('click', async () => {
    let file = fileEl.files[0];
    if (file) {
        let formData = new FormData();
        formData.append('media', file, file.name);
        console.log(formData.entries());
        let res = await fetch('/add', {
            method: 'POST',
            body: formData,
        });
        if (res.status === 200) {
            alert('added file');
            fileEl.value = null;
        } else {
            alert('there was an error')
        }
    }
})