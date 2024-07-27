<script lang="ts">
    export let title: string = "";
    export let theme: string = "";
</script>

<div class={theme}>
    <span>{title}</span>
</div>

<style lang="scss" scoped>
    @use "@assets/scss/base/font" as *;

    div {
        display: flex;
        width: fit-content;
        padding: 0px 8px;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 100px;
        border: 1px solid black;
        user-select: none;
        height: 24px;
        white-space: nowrap;

        span {
            @include small-text;
            transform: translateY(0.05em);
        }

        &.dark,
        &:hover {
            background-color: #000;
            span {
                color: #fff;
            }
        }
    }
</style>
