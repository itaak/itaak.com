<script lang="ts">
    import { theme } from '@store/theme';
    import { onMount } from 'svelte';

    onMount(() => {
        theme.init();
    });
</script>