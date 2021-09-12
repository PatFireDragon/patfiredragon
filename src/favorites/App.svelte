<script>

    import {beforeUpdate} from 'svelte';
    import Item from './Item';

    let items = [];

    const possible = localStorage.getItem('items');
    if (possible) {
        items = JSON.parse(possible);
    };

    let name = "name";
    let link = "about:blank";

    beforeUpdate(
        () => {
            localStorage.setItem('items', JSON.stringify(items));
        }
    );

    function handleRemove(e, idx) {
        items.splice(idx, 1);
        items = items;
    };

    function handleAdd(e) {
        items = [...items, {name, link}]

    };
    
</script>

<div>
    
    <input type="text" bind:value={name}/>
    <input type="text" bind:value={link}/>
    <input type="submit" on:click={handleAdd} value="Add"/>
    

    {#each items as item, i (item)}
        <Item item={item} onClick={(e) => handleRemove(e, i)}/>
    {/each}
</div>

<style>

    input {
        border-radius: 25px;
        padding: 7px;
        border: none;
        width: 80%;
    }

    div {
        padding: 25px;
        background-color:inherit;
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        row-gap: 10px;
    }


</style>