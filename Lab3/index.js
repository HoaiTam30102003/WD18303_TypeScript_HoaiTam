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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var shuffle = function (data) {
    var _a;
    // Trộn mảng sử dụng thuật toán Fisher-Yates
    for (var i = data.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [data[j], data[i]], data[i] = _a[0], data[j] = _a[1];
    }
    return data;
};
var show = function (data) {
    var APP = document.getElementById("app");
    if (APP) {
        var html_1 = "";
        data.forEach(function (pokemon) {
            html_1 += "\n                <div class=\"col-2\">\n                    <div class=\"card mb-3 p-1 shadow position-relative\">\n                        <span class=\"position-absolute top-10\">#".concat(pokemon.id, "</span>\n                        <img src=\"").concat(pokemon.image, "\" alt=\"").concat(pokemon.name, "\" width=\"200px\">\n                    </div>\n                </div>\n            ");
        });
        APP.innerHTML = html_1;
    }
};
var pokemonCount = 12; // Số lượng cặp Pokémon (cần lấy 24 con và 14 cặp giống nhau)
function fetchDuplicatePokemons(count) {
    return __awaiter(this, void 0, void 0, function () {
        var pokemons, seenIds, randomId, data, pokemon;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pokemons = [];
                    seenIds = new Set();
                    _a.label = 1;
                case 1:
                    if (!(pokemons.length < count * 2)) return [3 /*break*/, 4];
                    randomId = Math.floor(Math.random() * 1000) + 1;
                    if (!!seenIds.has(randomId)) return [3 /*break*/, 3];
                    return [4 /*yield*/, apiPokemon("https://pokeapi.co/api/v2/pokemon/".concat(randomId, "/"))];
                case 2:
                    data = _a.sent();
                    pokemon = {
                        id: data.id,
                        name: data.name,
                        image: data.sprites.front_default,
                        type: data.types[0].type.name, // Lấy loại đầu tiên của Pokémon
                    };
                    pokemons.push(pokemon);
                    pokemons.push(pokemon); // Thêm Pokémon vào danh sách 2 lần để tạo thành cặp giống nhau
                    seenIds.add(randomId);
                    _a.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [2 /*return*/, pokemons];
            }
        });
    });
}
function apiPokemon(url) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
(function () { return __awaiter(_this, void 0, void 0, function () {
    var pokemons, shuffledPokemons;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchDuplicatePokemons(pokemonCount)];
            case 1:
                pokemons = _a.sent();
                shuffledPokemons = shuffle(pokemons);
                show(shuffledPokemons);
                return [2 /*return*/];
        }
    });
}); })();
/// viet mmot ham tinh so chan
// gia tri truyen vao la 1 so nguyen bat ky
var f_name = function (num) {
    return num % 2 === 0 ? true : false;
};
// console.log(f_name(2));
var number = 0;
// number = f_name(2);
// if(f_name(2)){
// }
var sum = function (x, y) {
    return x + y;
};
var print0utput = function (output) {
    // khong co gia tri tra ve thi do la void void khong duoc gan bien let name= print0put
    return "heloo" + output;
    // da gan cho gia tri tra ve la string "heloo"
};
//let heloo : string = print0output("2") string tra ve la string thi gan vao cung la string
console.log(sum(5, 7));
console.log(print0utput("string"));
console.log(print0utput(2));
var heloo = function (msg) {
    if (msg === void 0) { msg = "world"; }
    return "hello ".concat(msg);
};
console.log(heloo());
console.log(heloo("hello"));
// 1 Arrow function
//Tạo một arrow function đơn giản để nhân đôi một số.
//So sánh cách viết arrow function với function thông thường trong TypeScript.
var nhandoi = function (a) {
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
var numm = function (num, num2) {
    return num + num2 + 2;
};
console.log(numm(2, 4));
// 5 Default parameter
// Tạo một hàm có một tham số mặc định và trả về bình phương của tham số đó.4
// Sử dụng giá trị mặc định cho một tham số trong hàm tính tổng của hai số.
var sqr = function (number) {
    if (number === void 0) { number = 0; }
    return number * number;
};
console.log(sqr(3));
function sum($a, $b) {
    if ($b === void 0) { $b = 0; }
    return $a + $b;
}
console.log(6, 8);
// 6 Optional parameter
// Viết một hàm có một tham số tùy chọn và trả về giá trị của tham số đó nếu được cung cấp, ngược lại trả về giá trị mặc định.
function parameter($value) {
    if ($value === void 0) { $value = "Gia tri mac dinh"; }
    return $value;
}
// console.log(parameter);
console.log("gia tri moi");
// 7 Spread operators
// Sử dụng toán tử spread để truyền một mảng các số vào một hàm tính tổng.
// 8 Rest parameter
//Viết một hàm nhận một số lượng biến đối số không xác định, sau đó tính tổng của chúng.
var tong = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, curr) { return acc + curr; }, 0);
};
console.log(tong(5, 10, 15));
// 9 Function & void
//Tạo một hàm không trả về giá trị nào (void) nhưng in ra một thông báo ra console.
//Viết một hàm không nhận bất kỳ tham số nào và không trả về giá trị.
// const  trave= () => {
//     console.log("hihi");
// }
// trave();
