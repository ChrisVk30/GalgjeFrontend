<script lang="ts">

  async function fetchData() {
    const res = await fetch(`https://localhost:52916/api/scores/top10players`)
    const data = await res.json();            
    console.log(data);            
    return data;
  };

  let columns = ["Username", "% Words Guessed Correctly", "# Words Guessed"]

</script>


  <table>
    <tr>
      {#each columns as column}
        <th>{column}</th>
      {/each}
    </tr>
    {#await fetchData()}
      <p>Loading scores...</p>
    {:then items}
      {#each items as item}
      <tr>
        <td>{item.userName}</td>
        <td>{item.ratio}</td>
        <td>{item.guessedWords}</td>
      </tr>
      {/each}
    {/await}
</table>

