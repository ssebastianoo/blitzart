const fileEl = document.getElementById('file');
const submit = document.getElementById('submit');

submit.addEventListener('click', async () => {
    let file = fileEl.files[0];
    if (file) {
        /* let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const req = await fetch('/fileTest', {
                method: 'POST',
                files: [file],
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            console.log(req.status)
        } */
        let formData = new FormData();
        formData.append('file', file, file.name);
        await fetch('/fileTest', {
            method: 'POST',
            body: formData,
        });
    }
})