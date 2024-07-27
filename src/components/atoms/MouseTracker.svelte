<script lang="ts">
    import { mousePosition, screenSize } from "@assets/js/common";

    $: widthScreen = $screenSize.width;
    $: heightScreen = $screenSize.height;

    $: y = Math.min(Math.max(0, $mousePosition.y), heightScreen / 1.25);
    $: x = Math.min(Math.max(0, $mousePosition.x), widthScreen / 1.25);
</script>

<div class="mouse_tracker" style="top: {y}px; left: {x}px;">
    <slot />
</div>

<style lang="scss">
    .mouse_tracker {
        position: absolute;
        right: 100px;
        z-index: 1;
    }
</style>
