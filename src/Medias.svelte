<script>
    import { onMount } from "svelte";
    let paused = false;
    let removeActive;

    let medias = [];
    onMount(async () => {
        const response = await fetch("https://blitzart.seba.gq/getMedias");
        medias = await response.json();
        const mediaEl = document.querySelector(".medias");
        const mediaEls = document.getElementsByClassName("media-img");

        setInterval(() => {
            if (!paused) {
                if (removeActive) removeActive.classList.remove("active");
                const random = Math.floor(Math.random() * mediaEls.length);
                const media = mediaEls[random];
                //media.scrollIntoView({behavior: 'smooth', block: 'center'});
                console.log(media.width);
                mediaEl.scroll({
                    left:
                        media.offsetLeft -
                        window.innerWidth / 2 +
                        media.width / 2,
                    behavior: "smooth",
                });
                media.classList.add("active");
                removeActive = media;
            }
        }, 1000);
    });

    function timeoutScroll() {
        switch (paused) {
            case true:
                paused = false;
                break;
            case false:
                paused = true;
                break;
        }
        if (removeActive) removeActive.classList.remove("active");
    }
</script>

<div class="medias" on:click={timeoutScroll}>
    {#each medias as media}
        <img
            src={"https://blitzart.seba.gq/" + media}
            alt="Blitzart"
            class="media-img"
        />
    {/each}
</div>
