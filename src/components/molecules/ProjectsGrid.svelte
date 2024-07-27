<script lang="ts">
    import ProjectGridCell from "@atoms/ProjectGridCell.svelte";
    import ProjectHover from "@molecules/ProjectHover.svelte";
    import { randomNumber } from "@assets/js/common";
    import { writable } from "svelte/store";

    export let projects: Array<any>;

    const repeatColumns = randomNumber(12, 6);
    const repeatRows = randomNumber(12, 6);

    const repeat = repeatRows * repeatColumns;

    const sizeProjects = projects.length;

    let mouseIsOver = writable(true);

    function mouseIsOut() {
        mouseIsOver.set(false);
    }

    function mouseIsIn() {
        mouseIsOver.set(true);
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    on:mouseout={mouseIsOut}
    on:mouseover={mouseIsIn}
    class="projects_grid"
    style="
        grid-template-columns: repeat({repeatColumns}, 1fr);
        grid-template-rows: repeat({repeatRows}, 1fr);
    "
>
    {#each Array(repeat) as _, i}
        {#if sizeProjects > 0}
            <ProjectGridCell
                project={projects[randomNumber(sizeProjects - 1, 1)]}
            />
        {/if}
    {/each}
</div>

{#if $mouseIsOver}
    <ProjectHover />
{/if}

<style lang="scss" scoped>
    @use "@assets/scss/base/space" as space;

    .projects_grid {
        display: grid;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        clip-path: inset(0 round 8px);
        height: 100%;
        position: relative;
        top: 0;
        bottom: 0;
    }
</style>
