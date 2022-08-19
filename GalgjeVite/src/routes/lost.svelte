<script lang="ts">
    import { push } from "svelte-spa-router";
</script>
<p>
    You ran out of tries! 

    Try again next time!
</p>


<button on:click={ () => push("/") }>Play again?</button >