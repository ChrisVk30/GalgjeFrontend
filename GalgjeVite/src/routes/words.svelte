<script lang="ts">

    async function fetchData() {
      const res = await fetch(`https://localhost:52916/api/words`);
      const data = await res.json();                       
      return data;
    };
    
    async function addWord() {
        fetch(`https://localhost:52916/api/words`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ Value })
		})
        .then(() => location.reload());
    }

    let columns : string[] = ["Words available in the game"];
    let Value : string;
  
</script>
  
  
<form on:submit|preventDefault={addWord}>
    <label for="input-word">Word: </label>
    <input id="input-word" bind:value={Value} required/>
    <button>Add word!</button>
</form> 

  <table>
    <tr>
      {#each columns as column}
        <th>{column}</th>
      {/each}
    </tr>
    {#await fetchData()}
      <p>Loading all words...</p>
    {:then items}
      {#each items as item}
      <tr>
        <td>{item.value}</td>
      </tr>
      {/each}
    {/await}
  </table>
  