<script>
    import {pages} from './pages';
</script>

<ul>
    {#each pages as page}
        <li><a href={`../${page}/index.html`}>{page}</a></li>
    {/each}
</ul>