<script lang="ts">
  import Router from 'svelte-spa-router';
  
  import Login from './routes/login.svelte';
  import Game from './routes/game.svelte';
  import Top10Players from './routes/top10players.svelte';
  import Top10Scores from './routes/top10scores.svelte';
  import NotFound from './routes/notfound.svelte';
  import Words from './routes/words.svelte';
  import Won from './routes/won.svelte';
  import Lost from './routes/lost.svelte';

  let routes = {
    "/": Login,
    "/game/:id": Game,
    "/top10players": Top10Players,
    "/top10scores": Top10Scores,
    "/words": Words,
    "/won": Won,
    "/lost": Lost,

    "*": NotFound,
  }
</script>

<nav>
    <a href="/">Login</a>
    <a href="#/top10scores">Top 10 Scores</a>
    <a href="#/top10players">Top 10 Players</a>
    <a href="#/words">All words</a>
</nav>

<main>
  <Router {routes}/>
</main>