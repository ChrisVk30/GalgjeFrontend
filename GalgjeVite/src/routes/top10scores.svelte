<script lang="ts">
  import type { ScoreSetup } from '../lib/ScoreConfig'
  async function fetchData() {
    const res = await fetch(`https://localhost:52916/api/scores/top10scores`)
    const data : ScoreSetup[] = await res.json();                       
    return data;
  };

  let columns : string[] = ["Username", "Time", "Characters of word guessed"]

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
      <td>{item.convertedTime}</td>
      <td>{item.wordLength}</td>
    </tr>
    {/each}
  {/await}
</table>

