
const pokemons: number = 48;

async function callAPI(url: string){
    let data: Response = await fetch(url);
    return await data.json();
}

console.log(Math.floor(Math.random()*48))

const APP: HTMLElement | null = document.getElementById('app');
let html: string = '';

for (let index = 0; index < 48; index++){
    const data: any = callAPI(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*48)+1}`);

    data.then(function (response: any){
        html += `
            <div class="col-1">
                <div class="card mb-3 p-1 shadow position-relative">
                    <span class="position-absolute top-0">${response.id}</span>
                    <img src="${response.sprites.front_default}" alt="${response.name}">
                </div>
            </div>
        `;
        APP?.innerHTML = html;
    })
}