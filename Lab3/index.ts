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

// bai con pokemon
interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

const shuffle = (data: Pokemon[]): Pokemon[] => {
    // Trộn mảng sử dụng thuật toán Fisher-Yates
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

const pokemonCount: number = 12; // Số lượng cặp Pokémon (cần lấy 24 con và 14 cặp giống nhau)

async function fetchDuplicatePokemons(count: number): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = [];
    const seenIds = new Set<number>(); // Sử dụng Set để kiểm tra các ID đã xuất hiện

    while (pokemons.length < count * 2) {
        // Nhân đôi số lượng
        const randomId = Math.floor(Math.random() * 1000) + 1;
        if (!seenIds.has(randomId)) {
            const data: any = await apiPokemon(
                `https://pokeapi.co/api/v2/pokemon/${randomId}/`
            );
            const pokemon: Pokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                type: data.types[0].type.name, // Lấy loại đầu tiên của Pokémon
            };
            pokemons.push(pokemon);
            pokemons.push(pokemon); // Thêm Pokémon vào danh sách 2 lần để tạo thành cặp giống nhau
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
    const pokemons: Pokemon[] = await fetchDuplicatePokemons(pokemonCount); // Lấy 24 con Pokémon giống nhau
    const shuffledPokemons = shuffle(pokemons); // Trộn mảng để hiển thị ngẫu nhiên
    show(shuffledPokemons);
})();

/// viet mmot ham tinh so chan
// gia tri truyen vao la 1 so nguyen bat ky
let f_name = (num: number): boolean => {
    return num % 2 === 0 ? true : false;
};
// console.log(f_name(2));
let number: number = 0;
// number = f_name(2);
// if(f_name(2)){
// }
const sum = (x: number, y: number) => {
    return x + y;
};
const print0utput = (output: string | number): string => {
    // khong co gia tri tra ve thi do la void void khong duoc gan bien let name= print0put
    return "heloo" + output;
    // da gan cho gia tri tra ve la string "heloo"
};
//let heloo : string = print0output("2") string tra ve la string thi gan vao cung la string
console.log(sum(5, 7));
console.log(print0utput("string"));
console.log(print0utput(2));
const heloo = (msg: string = "world"): string => {
    return `hello ${msg}`;
};
console.log(heloo());
console.log(heloo("hello"));

// 1 Arrow function
//Tạo một arrow function đơn giản để nhân đôi một số.
//So sánh cách viết arrow function với function thông thường trong TypeScript.
const nhandoi = (a: number): number => {
    return a * 2;
};
console.log(nhandoi(8));

function nhandoi2(b) {
    return b * 2;
}
console.log(nhandoi2(8));

// 2 Function return
//Viết một hàm trả về tổng của hai số được truyền vào.
//Tạo một hàm trả về một chuỗi được đảo ngược.
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));

function reverseString(a) {
    return a.split("").reverse().join("");
}
console.log(reverseString("phuoc hoc truong f"));
// 3 Function as types
// Định nghĩa một loại dữ liệu (type) cho một hàm có thể nhận vào hai số và trả về một số.
// Tạo một biến có kiểu là một hàm và gán một hàm cộng hai số vào đó.
type double = (a: number, b: number) => number;

const numm: double = (num, num2) => {
    return num + num2 + 2;
};
console.log(numm(2, 4));
// 5 Default parameter
// Tạo một hàm có một tham số mặc định và trả về bình phương của tham số đó.4
// Sử dụng giá trị mặc định cho một tham số trong hàm tính tổng của hai số.
const sqr = (number = 0) => {
    return number * number;
};
console.log(sqr(3));

function sum($a, $b = 0) {
    return $a + $b;
}
console.log(6, 8);

// 6 Optional parameter
// Viết một hàm có một tham số tùy chọn và trả về giá trị của tham số đó nếu được cung cấp, ngược lại trả về giá trị mặc định.
function parameter($value = "Gia tri mac dinh") {
    return $value;
}
// console.log(parameter);
console.log("gia tri moi");

// 7 Spread operators
// Sử dụng toán tử spread để truyền một mảng các số vào một hàm tính tổng.

// 8 Rest parameter
//Viết một hàm nhận một số lượng biến đối số không xác định, sau đó tính tổng của chúng.
const tong = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(tong(5, 10, 15));

// 9 Function & void
//Tạo một hàm không trả về giá trị nào (void) nhưng in ra một thông báo ra console.
//Viết một hàm không nhận bất kỳ tham số nào và không trả về giá trị.
// const  trave= () => {
//     console.log("hihi");
// }
// trave();
