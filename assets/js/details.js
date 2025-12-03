const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const detailsContainer = document.getElementById("pokemonDetails");

function loadDetails() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(p => {
            detailsContainer.innerHTML = `
                <div class="pokemon-box ${p.types[0].type.name}">
                    <h1>#${p.id} - ${p.name.toUpperCase()}</h1>

                    <img src="${p.sprites.other['official-artwork'].front_default}" class="img-big">

                    <h2>Tipos:</h2>
                    <p>${p.types.map(t => t.type.name).join(", ")}</p>

                    <h2>Altura:</h2>
                    <p>${p.height / 10} m</p>

                    <h2>Peso:</h2>
                    <p>${p.weight / 10} kg</p>

                    <h2>Habilidades:</h2>
                    <p>${p.abilities.map(a => a.ability.name).join(", ")}</p>

                    <button class="back-btn" onclick="history.back()">Voltar</button>
                </div>
            `;
        });
}

loadDetails();