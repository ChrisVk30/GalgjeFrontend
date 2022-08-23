<script lang="ts">
    import { push } from 'svelte-spa-router'
    import { onMount } from "svelte";
    import type { GameSetup } from '../lib/GameConfig'
    import type { ParamsSetup } from '../lib/ParamsConfig'
    // import { GameStatusEnum } from '../lib/GameStatus';

    onMount(async function () {
		const response = await fetch(`https://localhost:52916/api/game/${id}`)
		const game = await response.json();

        currentGame.id = game.id;
        currentGame.guessedWord = game.guessedWord;
        currentGame.secretWord = game.secretWord;
        src = `./images/hangman_phase${currentGame.incorrectGuesses}.jpg`;
			
        });

    let guessLetter = () => {
        fetch(`https://localhost:52916/api/game/${id}/guess`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ letter })
		})
			.then((x) => x.json())
			.then((game) => {
                currentGame.chosenLetters = currentGame.processGuess(letter);
                src = `./images/hangman_phase${currentGame.incorrectGuesses}.jpg`;
                currentGame.guessedWord = currentGame.buildWordToGuess();
				push(`/game/${game.id}`);
			});
	};

    export let params : ParamsSetup;
    export let id : number = params.id;
    let currentGame : GameSetup;
    export let src = ``;
    export let letter;

</script>

<h2>Let's play a game!</h2> 


{#if currentGame.chosenLetters === undefined}
    <p>Loading game...</p>
{:else}
    <h4>Letters already chosen: {currentGame.chosenLetters}</h4>

    <p>Word to guess is: {currentGame.guessedWord}</p>

    <img {src} alt="current state of game" width="450px" height="400px">
{/if}

<form on:submit|preventDefault={guessLetter}>
    <label for="input-letter">Letter: </label>
    <input id="input-letter" bind:value={letter}/>
    <button>Guess letter</button>
</form>