<script>
  export let title;
  export let image;
  export let author;
  export let section;
</script>

<div class="artwork-container">
  <div class="artwork-parent">
    <div class="artwork">
      <img src={image} alt={title} class="img" />
      <div class="artwork-content">
        <div class="top-images">
          <div class="pin">
            <img src="pin.webp" alt="pin" />
          </div>
          <div class="stamp">
            <img src="logo.png" alt="Francobollo" />
          </div>
        </div>
        <span class="artwork-title">{title}</span>
        <span class="artwork-author">{author}</span>
        <span class="artwork-section">{section}</span>
      </div>
    </div>
  </div>
</div>

<style>
  .artwork-container {
    width: 100%;
    overflow: hidden;
  }

  .artwork-container:nth-child(odd) .artwork-parent {
    margin-right: 10%;
    float: right;
  }

  .artwork-container:nth-child(even) .artwork-parent {
    margin-left: 10%;
  }

  .artwork-parent {
    display: inline-block;
    margin: 2em;
  }

  .artwork {
    box-shadow: 0.5em 0.5em 1em RGBA(0, 0, 0, 0.5);
    margin: var(--margin);
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
    border-color: var(--main-color);
    box-shadow: 0 0 2rem var(--main-color), 0 0 0.8rem var(--main-color),
      0 0 2.8rem var(--main-color), inset 0 0 1.3rem var(--main-color);
  }

  .artwork-content {
    padding: 1em;
  }

  .artwork .img {
    height: 7.5em;
    padding: 0.5em;
    padding-right: 0;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .artwork-content span {
    display: block;
    border-bottom: 1px solid black;
    margin: 0;
    font-size: 0.8em;
  }

  .top-images {
    display: flex;
  }

  .pin {
    transform: translateY(-1.4em);
  }

  .pin img {
    width: 3em;
  }

  .stamp {
    width: 100%;
    text-align: right;
  }

  .stamp img {
    width: 2em;
    border: 2px solid black;
    padding: 5px;
  }
</style>
