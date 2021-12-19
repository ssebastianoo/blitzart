const fileEl = document.getElementById('file');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let file = fileEl.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            await fetch('/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    base64: reader.result
                })
            })
        }
    }
})