// let sum = (x:number = 5, y?:number) => {
//     return x + <number>y;
// }
// const printOutput = (output: string|number) => {
//     console.log("Result: " + output)
// }
//
// printOutput(sum(3))
// printOutput(sum(undefined, 5))
// printOutput(sum(3,5))


// let person : {
//     name: string,
//     age: number
// } = {
//     name: 'Tam Ne',
//     age: 8
// }
//
// const salary : {
//     grade: string,
//     basic: string
// } = {
//     grade: 'S',
//     basic: '$4000'
// }
//
// const summary = {...person,...salary};
// console.log(summary)

// Hien thi pokemon
interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

const tronPkm = (data: Pokemon[]): Pokemon[] => {
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
};

const show = (data: Pokemon[]): void => {
    const APP: HTMLElement | null = document.getElementById("app");
    if (APP) {
        let html: string = "";
        data.forEach((pokemon: Pokemon) => {
            html += `
                <div class="col-2">
                    <div class="card mb-3 p-1 shadow position-relative">
                        <span class="position-absolute top-10">#${pokemon.id}</span>
                        <img src="${pokemon.image}" alt="${pokemon.name}" width="200px">
                    </div>
                </div>
            `;
        });
        APP.innerHTML = html;
    }
};
const pokemonCount: number = 12;

async function fetchDuplicatePokemons(count: number): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = [];
    const seenIds = new Set<number>();

    while (pokemons.length < count * 2) {
        const randomId = Math.floor(Math.random() * 1000) + 1;
        if (!seenIds.has(randomId)) {
            const data: any = await apiPokemon(
                `https://pokeapi.co/api/v2/pokemon/${randomId}/`
            );
            const pokemon: Pokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                type: data.types[0].type.name,
            };
            pokemons.push(pokemon);
            pokemons.push(pokemon);
            seenIds.add(randomId);
        }
    }
    return pokemons;
}

async function apiPokemon(url: string): Promise<any> {
    let data: Response = await fetch(url);
    return await data.json();
}

(async () => {
    const pokemons: Pokemon[] = await fetchDuplicatePokemons(pokemonCount);
    const tronPokemons = tronPkm(pokemons);
    show(tronPokemons);
})();

// Ham tinh so chan
// Gia tri truyen vao la 1 so nguyen bat ky
let aaa = (num: number): boolean => {
    return num % 2 === 0 ? true : false;
};
let number: number = 0;
const sum2 = (x: number, y: number) => {
    return x + y;
};
const print0utput = (output: string | number): string => {
    return "hello" + output;
};
console.log(sum2(5, 7));
console.log(print0utput("string"));
console.log(print0utput(2));
const hello = (msg: string = "world"): string => {
    return `hello ${msg}`;
};
console.log(hello());
console.log(hello("hello"));

// Arrow function
const nhan2 = (a: number): number => {
    return a * 2;
};
console.log(nhan2(8));

function x2(b) {
    return b * 2;
}
console.log(x2(4));

//  Function return
function sum3(a: number, b: number) {
    return a + b;
}
console.log(sum3(4, 6));
function reverseString(a: string) {
    return a.split("").reverse().join("");
}
console.log(reverseString("alo alo alo"));

//  Function as types
type double = (a: number, b: number) => number;

const num2: double = (num, num2) => {
    return num + num2 + 2;
};
console.log(num2(2, 4));

// Default parameter
const sqrt = (number = 0) => {
    return number * number;
};
console.log(sqrt(8));

function sum(a3: number, b3: number = 0) {
    return a3 + b3;
}
console.log(4, 8);

// Optional parameter
function parameter($value = "Gia tri ban dau") {
    return $value;
}
console.log("Gia tri moi");

// Rest Parameter
const tong = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(tong(5, 10, 15));

// Function & void
const a = () => {
    console.log("hahahaha");
}
a();
