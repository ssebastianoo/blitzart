<script>
    import { Router, Route } from "svelte-navigator";
    import Medias from "./Medias.svelte";
    import Media from "./Media.svelte";
    import Header from "./Header.svelte";
</script>

<main>
    <Router>
        <div>
            <Header />
            <Route path="media/:id" component={Media} />
            <Medias />
        </div>
    </Router>
</main>
