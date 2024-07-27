<script lang="ts">
    import {
        mousePosition,
        deviceOrientation,
        screenSize,
    } from "@assets/js/common";

    $: widthScreen = $screenSize.width;
    $: heightScreen = $screenSize.height;

    // Définir les coordonnées de base quand beta ≈ 30°, gamma ≈ 0°
    const baseX = 29;
    const baseY = 49;

    // Définir les plages des valeurs d'orientation
    const betaRange = 180;
    const gammaRange = 50;

    // Définir le point de repos pour beta et gamma
    const restBeta = 30;
    const restGamma = 0;

    let x = baseX;
    let y = baseY;

    $: {
        // Obtenir les valeurs d'orientation
        const beta = $deviceOrientation.beta ?? 0;
        const gamma = $deviceOrientation.gamma ?? 0;

        // Normaliser beta et gamma autour des valeurs de repos
        const normalizedBeta = (beta - restBeta) / (betaRange / 2);
        const normalizedGamma = (gamma - restGamma) / gammaRange;

        // Calculer les coordonnées des yeux
        x = baseX + normalizedGamma * (58 - baseX);
        y = baseY - normalizedBeta * baseY;

        // S'assurer que les yeux restent à l'intérieur du bonhomme
        x = Math.max(0, Math.min(x, 58));
        y = Math.max(0, Math.min(y, 98));
    }
</script>

<div>
    x:{$mousePosition.x}
    y:{$mousePosition.y}
</div>

<svg
    width="140"
    height="144"
    viewBox="0 0 140 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M91.52 119C91.52 132.12 80.88 142.76 67.76 142.76C54.64 142.76 44 132.12 44 119"
        stroke="black"
        stroke-miterlimit="10"
    />
    <path
        d="M57.5 49C57.5 62.4571 54.2707 74.6159 49.0758 83.3936C43.8743 92.1823 36.7601 97.5 29 97.5C21.2399 97.5 14.1257 92.1823 8.92419 83.3936C3.72926 74.6159 0.5 62.4571 0.5 49C0.5 35.5429 3.72926 23.3841 8.92419 14.6064C14.1257 5.81774 21.2399 0.5 29 0.5C36.7601 0.5 43.8743 5.81774 49.0758 14.6064C54.2707 23.3841 57.5 35.5429 57.5 49Z"
        stroke="black"
    />
    <mask
        id="mask0_97_117"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="58"
        height="98"
    >
        <ellipse cx="29" cy="49" rx="29" ry="49" fill="black" />
    </mask>
    <g mask="url(#mask0_97_117)">
        <ellipse cx={x} cy={y} rx="17" ry="26" fill="black" />
    </g>
    <path
        d="M139.5 49C139.5 62.4571 136.271 74.6159 131.076 83.3936C125.874 92.1823 118.76 97.5 111 97.5C103.24 97.5 96.1257 92.1823 90.9242 83.3936C85.7293 74.6159 82.5 62.4571 82.5 49C82.5 35.5429 85.7293 23.3841 90.9242 14.6064C96.1257 5.81774 103.24 0.5 111 0.5C118.76 0.5 125.874 5.81774 131.076 14.6064C136.271 23.3841 139.5 35.5429 139.5 49Z"
        stroke="black"
    />
    <mask
        id="mask1_97_117"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="82"
        y="0"
        width="58"
        height="98"
    >
        <ellipse cx="111" cy="49" rx="29" ry="49" fill="black" />
    </mask>
    <g mask="url(#mask1_97_117)">
        <ellipse cx={x + 82} cy={y} rx="17" ry="26" fill="black" />
    </g>
</svg>
