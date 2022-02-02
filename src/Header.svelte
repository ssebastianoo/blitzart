<script>
  import Navbar from './Navbar.svelte';
</script>

<header>
  <Navbar />
  <div class="header-child">
    <div class="title">
      <h1><span>Blitzart 15</span></h1>
    </div>
    <div class="description">
      <div class="description-content">
        <div class="image">
          <img src="logo.png" alt="Blitzart">
        </div>
        <div class="description-text">
          <p>
            Una selezione delle molte cartoline artistiche realizzate dai nostri
            studenti con la collaborazione dei docenti della Commissione Blitzart e
            di discipline artistico-laboratoriali, incentrate sul tema del LIMITE
            come riflessione individuale e di gruppo sulle limitazioni imposte
            dall'attuale situazione sanitaria e divenute, all'interno della scuola,
            vero e proprio circuito di mail art, arricchiranno così l'articolato
            progetto culturale PAESAGGI ANTROPICI, curato dai proff. Gaetano Salerno
            e Valerio Vivian in collaborazione con il Comune di Mira e molte
            associazioni culturali del territorio.
          </p>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  .title h1 {
    text-align: center;
    color: white;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3em;
  }

  .description-content {
    max-width: 70%;
    padding: 1em;
    background-color: white;
    border-radius: .3em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .description-text {
    overflow-x: auto;
  }

  .description-text p {
    float: left;
    text-decoration: underline;
    line-height: 1.5em;
    margin: 1em;
    color: black;
    max-width: 40em;
    border-left: 1.5px solid black;
    padding-left: 1em;
  }

  .description-content img {
    width: 5em;
  }

  @media screen and (max-width: 768px) {
    .description-content {
      flex-wrap: wrap;
    }

    .description-content p {
      border-left: 0;
      border-top: 1.5px solid black;
      padding-left: 0;
      padding-top: 1em;
    }
  }

</style>
