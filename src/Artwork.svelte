<script>
  export let title;
  export let image;
  export let author;
  export let section;
</script>

<div class="artwork">
  <img src={image} alt={title} class="img" />
  <div class="stamp">
    <img src="logo.png" alt="Francobollo">
  </div>
  <div class="artwork-content">
    <span class="artwork-title">{title}</span>
    <span class="artwork-author">{author}</span>
    <span class="artwork-section">{section}</span>
  </div>
</div>

<style>
  .artwork {
    box-shadow: 0.5em 0.5em 1em RGBA(255, 255, 255, 0.2);
    margin: 0.5em;
    display: block;
    background-color: white;
    transition-duration: 0.2s;
    border: 2px transparent transparent;
    border-radius: 0.3em;
    display: flex;
  }

  .artwork:hover {
    border-color: var(--neon-color);
    box-shadow: 0 0 2rem var(--neon-color), 0 0 0.8rem var(--neon-color),
      0 0 2.8rem var(--neon-color), inset 0 0 1.3rem var(--neon-color);
  }

  .artwork-content {
    padding: 1em;
  }

  .artwork .img {
    width: 15em;
    padding: .5em;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .artwork-content span {
    display: block;
    border-bottom: 1px solid black;
    margin: 0;
  }

  .stamp {
    width: 4em;
    height: 4em;
  }
</style>
