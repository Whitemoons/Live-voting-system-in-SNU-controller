<script lang="ts">
    import { setSavedState } from '$lib/state';

    const labels = ['Round 2~5', 'Round 6'];
    let selected = 9;

    function toggle(index: number) {
        selected = index;
    }

    async function confirm() {
        console.log("선택된 상태:", selected);
        setSavedState(selected);
        toggle(7);
    }

    function buttonLabel(i: number) {
        if (i == 0) return 'Inital';
        if ([2, 4].includes(i)) return '히스';
        if ([1, 3].includes(i)) return '혼또니';
        if (i === 5) return 'Final';
        if (i == 6) return 'result';
        return '확인';
    }
</script>

<div class="grid">
    <div class="label">Round 1</div>
    <button class="button  {selected == 0 ? 'selected' : ''}" on:click={() => toggle(0)}>
        {buttonLabel(0)}
    </button>
    <button class="button" on:click={() => confirm()}>
        {buttonLabel(7)}
    </button>
    {#each labels as label, rowIdx}
        <div class="label">{label}</div>
        <button class="button {selected ==  rowIdx * 2 + 1 ? 'selected' : ''}" on:click={() => toggle(rowIdx * 2 + 1)}>
            {buttonLabel(rowIdx * 2 + 1)}
        </button>
        <button class="button {selected ==  rowIdx * 2 + 2 ? 'selected' : ''}" on:click={() => toggle(rowIdx * 2 + 2)}>
            {buttonLabel(rowIdx * 2 + 2)}
        </button>
    {/each}
    <div></div>
    <button class="button  {selected == 5 ? 'selected' : ''}" on:click={() => toggle(5)}>
        {buttonLabel(5)}
    </button>
    <button class="button  {selected == 6 ? 'selected' : ''}" on:click={() => toggle(6)}>
        {buttonLabel(6)}
    </button>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        gap: 1rem;
        align-items: center;
    }
    .label {
        font-weight: bold;
    }
    .button {
        padding: 0.5rem 1rem;
        background-color: #eee;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .selected {
        background-color: #99ccff;
        border-color: #3399ff;
        color: white;
        font-weight: bold;
    }
</style>