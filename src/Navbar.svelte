<nav>
    <div class="item">
        <div>
            <a href="https://www.liceoguggenheim.edu.it/">Scuola</a>
        </div>
    </div>
    <div class="item">
        <div>
            <a href="https://blitzart.seba.gq">Blitzart 16</a>
        </div>
    </div>
</nav>

<style>
    nav {
        background-color: var(--cyan);
        padding: 1em 1em;
        display: flex;
    }

    nav a {
        text-decoration: none;
        color: white;
        transition-duration: .3s;
    }

    nav a:hover {
        background-color: white;
        color: var(--cyan);
        padding: .3em;
        border-radius: .2em;
    }

    nav .item:not(:first-child) {
        margin: 0 1em;
    }
</style>