<script>
  export let title;
  export let image;
  export let author;
  export let section;
</script>

<div class="artwork">
  <img src={image} alt={title} class="img" />
  <div class="artwork-content">
    <div class="stamp">
      <img src="logo.png" alt="Francobollo">
    </div>
    <span class="artwork-title">{title}</span>
    <span class="artwork-author">{author}</span>
    <span class="artwork-section">{section}</span>
  </div>
</div>

<style>
  .artwork {
    box-shadow: 0.5em 0.5em 1em RGBA(255, 255, 255, 0.2);
    margin: 1em 1em;
    display: block;
    background-image: url("../paper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    transition-duration: 0.2s;
    border: 2px transparent transparent;
    border-radius: 0.3em;
    display: flex;
  }

  .artwork:hover {
    border-color: var(--cyan);
    box-shadow: 0 0 2rem var(--cyan), 0 0 0.8rem var(--cyan),
      0 0 2.8rem var(--cyan), inset 0 0 1.3rem var(--cyan);
  }

  .artwork-content {
    padding: 1em;
  }

  .artwork .img {
    height: 10em;
    padding: .5em;
    padding-right: 0;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .artwork-content span {
    display: block;
    border-bottom: 1px solid black;
    margin: 0;
  }

  .stamp {
    width: 100%;
    text-align: right;
  }
  .stamp img {
    width: 3em;
    border: 2px solid black;
    padding: 5px;
  }

  @media only screen and (max-width: 721px) {
    .artwork .img {
      height: auto;
      width: 85%;
    }
  }
</style>
