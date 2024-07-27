<script lang="ts">
    import { currentTime } from "@assets/js/common";
</script>

<div>
    <span class="time title"> {$currentTime.time} </span>
    <span class="title">({$currentTime.timeZoneCode})</span>
</div>

<style lang="scss" scoped>
    div {
        display: flex;
        .time {
            min-width: 4.5em;
        }
    }
</style>
