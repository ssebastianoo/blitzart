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
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3em;
  }
</style>
