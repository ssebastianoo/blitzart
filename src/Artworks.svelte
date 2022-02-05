<script>
  import Artwork from "./Artwork.svelte";
  import artworks from "./artworks.json";
</script>

<div class="artworks">
  {#each artworks.artworks as artwork}
    <Artwork
      title={artwork.title}
      author={artwork.author}
      section={artwork.section}
      image={artwork.image}
    />
  {/each}
</div>

<style>
  .artworks {
    margin-bottom: 3em;
    background-image: url("../bulletinboard.jpg");
    border: .6em solid var(--main-color);
    border-radius: .5em;
    margin: 2em 20%;
    display: block;
    overflow: hidden;
    transition: margin .5s;
  }

  @media screen and (max-width: 800px) {
    .artworks {
      margin: 2em .5em;
    }
  }
</style>
