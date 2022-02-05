<script>
    let artworks = document.getElementsByClassName('artwork-container');
    function search(e) {
        console.log(e.target.value);
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
</script>

<div class="search">
    <input type="text" placeholder="cerca..." on:keyup={search}>
</div>

<style>
    .search {
        text-align: center;
    }

    .search input {
        font-size: 1em;
        border: none;
        outline: none;
        background-color: var(--main-color);
        color: white;
        font-family: unset;
        padding: .2em;
        border-radius: .2em;
        transition: font-size .2s;
    }

    .search input:focus {
        font-size: 1.2em;
    }
</style>