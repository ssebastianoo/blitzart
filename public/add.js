const submit = document.getElementById('submit');
let fileEl = document.getElementById('file');
let title = document.getElementById('title');
let description = document.getElementById('description');
let author = document.getElementById('author');
let classEl = document.getElementById('class');

submit.addEventListener('click', async () => {
    let file = fileEl.files[0];
    if ([file, title, description, author, classEl].includes(undefined)) {
        return alert('Assicurati di aver riempito tutti i form')
    }
    if (file) {
        let formData = new FormData();
        formData.append('media', file, file.name);
        formData.append('title', title.value);
        formData.append('description', description.value);
        formData.append('author', author.value);
        formData.append('class', classEl.value);
        let res = await fetch('/add', {
            method: 'POST',
            body: formData,
        });
        if (res.status === 200) {
            alert('file aggiunto');
            let json = await res.json();
            location.href = `/media/${json.id}`;
        } else {
            alert("c'e' stato un errore, riprovare")
        }
    }
})