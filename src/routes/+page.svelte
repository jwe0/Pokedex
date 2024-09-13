<script>
    import "/src/style.css";
    import { cards } from "$lib/cards";
</script>

<head>
    <title>Pokedex</title>
</head>

<body>
    <div class="dex">
        {#each cards as card}
            <div class="card {card.shiny ? 'shiny' : ''}">
                {#if card.shiny}
                    <div class="glint"></div>
                {/if}
                <div class="top_stats">
                    <h5 class="stage">{card["stage"]}</h5>
                    <h5 class="type">{card["type"]}</h5>
                    <h5 class="health">HP: <strong>{card["hp"]}</strong></h5>
                </div>
                <div class="prices">
                    <h5>Low: ${card["prices"]["low"]}</h5>
                    <h5>Mid: ${card["prices"]["mid"]}</h5>
                    <h5>High: ${card["prices"]["high"]}</h5>
                    <h5>Market: ${card["prices"]["market"]}</h5>
                </div>
                <h5 class="name">{card["name"]}</h5>
            </div>
        {/each}
    </div>
</body>
