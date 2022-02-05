<script>
  import Artwork from "./Artwork.svelte";
  import artworks from "./artworks.json";
</script>

<div class="artworks">
  <div id="noResults">
    <p>La ricerca non ha dato risultati</p>
  </div>
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
  #noResults {
    text-align: center;
    padding: 0.7em;
    font-size: 1.5em;
    display: none;
  }

  #noResults p {
    color: white;
    background-color: #dfa375;
    background-image: linear-gradient(315deg, #dfa375 0%, #c58e7f 74%);
    font-style: italic;
    padding: 0.1em;
  }

  .artworks {
    margin-bottom: 3em;
    background-image: url("../bulletinboard.jpg");
    border: 0.6em solid var(--main-color);
    border-radius: 0.5em;
    margin: 2em 20%;
    display: block;
    overflow: hidden;
    transition: margin 0.5s;
  }

  @media screen and (max-width: 800px) {
    .artworks {
      margin: 2em 0.5em;
    }

    :global(.artwork-parent) {
      margin-left: 2% !important;
      margin-right: 2% !important;
    }
  }
</style>
