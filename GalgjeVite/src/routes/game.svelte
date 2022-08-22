<script lang="ts">
    import { push } from 'svelte-spa-router'
    import { onMount } from "svelte";
    import type { GameSetup } from '../lib/GameConfig'
    import type { ParamsSetup } from '../lib/ParamsConfig'

    onMount(async function () {
		fetch(`https://localhost:52916/api/game/${Id}`)
			.then((x) => x.json())
			.then((game) => {
                console.log(game);
                currentGame = game;
                console.log(currentGame);
                if (currentGame.status === 1) {
                    push('/won');
                }
                else if (currentGame.status === 2) {
                    push('/lost');
                }
                src = `./images/hangman_phase${currentGame.incorrectGuesses}.jpg`
			});
        });

    let guessLetter = () => {
        fetch(`https://localhost:52916/api/guess/${Id}/guessletter`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ Letter })
		})
			.then((x) => x.json())
			.then((game) => {
				push(`/game/${game.id}`);
                location.reload();
			});
	};

    

    export let params : ParamsSetup;
    export let Id : number = params.id;
    export let currentGame : GameSetup = {};
    export let src = ``;
    export let Letter : string;

    

</script>

<h2>Let's play a game!</h2> 

<img {src} alt="current state of game" width="450px" height="400px">

<h4>Letters already chosen: {currentGame.chosenLetters}</h4>

<p>Word to guess is: {currentGame.guessedWord}</p>

<form on:submit|preventDefault={guessLetter}>
    <label for="input-name">Letter: </label>
    <input id="input-name" bind:value={Letter}/>
    <button>Guess letter</button>
</form>