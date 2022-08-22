<script lang="ts">
    import { push } from "svelte-spa-router";

    export const loseMessage : string = `
    You ran out of tries! 

    Try again next time!
    `
</script>
<p> {loseMessage}
</p>


<button on:click={ () => push("/") }>Play again?</button >