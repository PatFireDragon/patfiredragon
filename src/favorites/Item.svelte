<script>

    import {colors} from './constants';

    import {fade} from 'svelte/transition';

    export let onClick = (e) => {};
    export let item = {
        name: 'undefined',
        link: 'about:blank'
    };

</script>

<div style="{`background-color:${colors[item.link.length % colors.length]};`}" transition:fade="{{duration:500}}">
    <a href={item.link}>{item.name}</a>
    <button on:click={onClick}><span>✖</span></button>
</div>

<style>
    div {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        border-radius: 25px;
        width: 80%;
    }

    button {
        padding: 7px;
        color:white;
        background-color: inherit;
        border-radius: 25px;
        border: none;
    }

    a {
        padding: 7px;
        font-family: Arial, Helvetica, sans-serif;
        color:white
    }

   div button span {
        transition:0.5s;
        color:inherit;
        opacity: 0;
    }

    div:hover button span {
        opacity: 1;
    }

</style>