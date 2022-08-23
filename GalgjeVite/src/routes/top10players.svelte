<script lang="ts">
  import type { ScoreSetup } from '../lib/ScoreConfig'
  async function fetchData() {
    const res = await fetch(`https://localhost:52916/api/scores/top10players`)
    const data : ScoreSetup[] = await res.json();                       
    return data;
  };

  let columns : string[] = ["Username", "% Words Guessed Correctly", "# Words Guessed"]

  let sortBy = {col: "% Words Guessed Correctly", descending: true};

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
