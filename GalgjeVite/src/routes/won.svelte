<script lang="ts">
    import { push } from "svelte-spa-router";

    let src = './images/image.gif'
</script>

<template>
    <div id="general">
        <p> 
            You won and guessed the word, congratulations!<br/><br/>

            Check the <a href="#/top10players">top scores</a> top scores to see whether or not you made it to top 10!
        </p>

        <img {src} alt = "Rick Astley dancing because you won!"/>

        <button on:click={ () => push("/") }>Play again?</button >
    </div>
</template>


