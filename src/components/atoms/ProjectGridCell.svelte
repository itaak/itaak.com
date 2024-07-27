<script lang="ts">
    import { onMount } from "svelte";
    import { projectHover } from "@assets/js/common";
    import type { ProjectType } from "@/types/project";
    import { getLangFromUrl, useTranslatedPath } from "@/i18n/utils";

    export let project: ProjectType;

    const selectedTheme =
        project.theme.length > 0
            ? project.theme[0]
            : { colorBody: "#fff", color: "#000" };

    function handleMouseOver() {
        projectHover.set({
            title: project.title,
            tags: project.tags,
        });
    }

    let lang;
    let translatePath: any;

    onMount(() => {
        if (typeof window !== "undefined") {
            lang = getLangFromUrl(new URL(window.location.href));
            translatePath = useTranslatedPath(lang);
        }
    });
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<a
    href={translatePath ? translatePath(`/projects/${project.slug}`) : ""}
    on:mouseover={handleMouseOver}
    style="background-color: {selectedTheme.colorBody};"
>
</a>

<style lang="scss" scoped>
    a {
        display: flex;
        width: 100%;
        border: none;

        &:hover {
            opacity: 0.9;
        }
    }
</style>
