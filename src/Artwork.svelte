<script>
  export let title;
  export let image;
  export let author;
  export let section;
</script>

<div class="artwork">
    <img src={image} alt={title} />
  <div class="artwork-content">
    <span class="artwork-title">{title}</span>
    <span class="artwork-author">{author}</span>
    <span class="artwork-section">{section}</span>
  </div>
</div>

<style>
  .artwork {
    box-shadow: 0.5em 0.5em 1em RGBA(0, 0, 0, 0.2);
    margin: 0.5em;
    display: block;
    background-color: white;
    cursor: pointer;
    transition-duration: .2s;
    border: 2px transparent transparent;
  }

  .artwork:hover {
    border-color: var(--neon-color);
    box-shadow: 0 0 2rem var(--neon-color), 0 0 0.8rem var(--neon-color), 0 0 2.8rem var(--neon-color), inset 0 0 1.3rem var(--neon-color);
  }

  .artwork-content {
    padding: 1em;
    margin: 0;
  }

  .artwork img {
    width: 15em;
    margin: 0;
  }

  .artwork-content span {
    display: block;
    border-bottom: 1px solid black;
    margin: 0.5em 0;
  }
</style>
