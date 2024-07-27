<script lang="ts">
    import { projectHover, mousePosition } from "@assets/js/common";
    import MouseTracker from "@atoms/MouseTracker.svelte";
    import Label from "@atoms/Label.svelte";
</script>

{#if $projectHover.title && $mousePosition.x}
    <MouseTracker>
        <div class="project_hover">
            <Label title={$projectHover.title} theme="dark"/>
            <div class="tags">
                {#each $projectHover.tags.slice(0, 4) as tag}
                  <Label title={tag}/>
                {/each}
            </div>
        </div>
    </MouseTracker>
{/if}

<style lang="scss">
    .project_hover {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20vw;
        max-width: 200px;
        gap: 8px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4px;
        max-width: 100%;
    }
</style>
