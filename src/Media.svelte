<script>
    import { onMount } from "svelte";
    export let id;
    let title, author, description, className, ext;

    onMount(async () => {
        const response = await fetch(`https://blitzart.seba.gq/media/${id}`);
        const media = await response.json();
        title = media.title;
        author = media.author;
        description = media.description;
        ext = media.ext;
        className = media.class;
    });
</script>

<div class="info">
    {#if title}
        <div class="sections">
            <div class="text">
                <div class="section">
                    <h1>{title}</h1>
                </div>
                <div class="section">
                    <p>{author}</p>
                    <p>{className}</p>
                </div>
                <div class="section">
                    <p>{description}</p>
                </div>
            </div>
            <img
                src={"https://blitzart.seba.gq/medias/" + id + "." + ext}
                alt="Blitzart"
            />
        </div>
    {/if}
</div>
