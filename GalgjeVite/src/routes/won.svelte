<script lang="ts">
    import { push } from "svelte-spa-router";
</script>

<p>
    You won and guessed the word, congratulations! 

    Check the <a href="#/top10players">top scores</a> top scores to see whether or not you made it to top 10!
</p>

<button on:click={ () => push("/") }>Play again?</button >