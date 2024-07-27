<script lang="ts">
    import { theme } from "@store/theme";
    import { useLanguage } from "@/i18n/utils";
    import { onMount } from "svelte";

    const url = new URL(window.location.href);
    const { t } = useLanguage(new URL(url));

    let currentTheme: string;

    $: currentTheme = $theme.theme;

    onMount(() => {
        theme.init();
    });
</script>

<button on:click={theme.toggleTheme}>
    {#if currentTheme === "grey"}
        ( {t("color.picker.grey")} )
    {:else}
        ( {t("color.picker.color")} )
    {/if}
</button>
