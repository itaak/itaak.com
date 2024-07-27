<script>
    import { onMount, onDestroy } from "svelte";

    let error = null;
    let orientation = null;

    function onDeviceOrientation(event) {
        orientation = {
            alpha: event.alpha,
            beta: event.beta,
            gamma: event.gamma,
        };
    }

    async function revokeAccess() {
        window.removeEventListener("deviceorientation", onDeviceOrientation);
        orientation = null;
    }

    async function requestAccess() {
        if (!("DeviceOrientationEvent" in window)) {
            error = new Error(
                "Device orientation event is not supported by your browser",
            );
            return false;
        }

        if (
            "DeviceOrientationEvent" in window &&
            typeof DeviceOrientationEvent.requestPermission === "function"
        ) {
            try {
                const permission =
                    await DeviceOrientationEvent.requestPermission();
                if (permission !== "granted") {
                    error = new Error(
                        "Request to access the device orientation was rejected",
                    );
                    return false;
                }
            } catch (err) {
                error = err;
                return false;
            }
        }

        window.addEventListener("deviceorientation", onDeviceOrientation);
        return true;
    }

    onMount(() => {
        return () => {
            revokeAccess();
        };
    });
</script>

<main>
    <h1>Device Orientation</h1>
    {#if error}
        <p>Error: {error.message}</p>
    {/if}
    {#if orientation}
        <div>
            <p>Alpha: {orientation.alpha}</p>
            <p>Beta: {orientation.beta}</p>
            <p>Gamma: {orientation.gamma}</p>
        </div>
    {/if}
    <button on:click={requestAccess}>Request Access</button>
    <button on:click={revokeAccess}>Revoke Access</button>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }
</style>
