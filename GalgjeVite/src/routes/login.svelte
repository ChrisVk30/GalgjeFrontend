<script lang="ts">
	import { push } from 'svelte-spa-router';
	import type { GameSetup } from '../lib/GameConfig'
	let Username: string;

	const start = () => {
		fetch('https://localhost:52916/api/game', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ Username })
		})
			.then((x) => x.json())
			.then((game : GameSetup ) => {
				push(`/game/${game.id}`);
			});
	};

	
</script>

<h3>Choose a username to play a game</h3>

<form on:submit|preventDefault={start}>
    <label for="input-name">Username: </label>
    <input id="input-name" bind:value={Username} required/>
    <button>Start a game!</button>
</form> 

