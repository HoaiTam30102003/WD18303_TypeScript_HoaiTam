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
var tronPkm = function (data) {
    var _a;
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
var pokemonCount = 12;
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
                        type: data.types[0].type.name,
                    };
                    pokemons.push(pokemon);
                    pokemons.push(pokemon);
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
    var pokemons, tronPokemons;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchDuplicatePokemons(pokemonCount)];
            case 1:
                pokemons = _a.sent();
                tronPokemons = tronPkm(pokemons);
                show(tronPokemons);
                return [2 /*return*/];
        }
    });
}); })();
// Ham tinh so chan
// Gia tri truyen vao la 1 so nguyen bat ky
var aaa = function (num) {
    return num % 2 === 0 ? true : false;
};
var number = 0;
var sum2 = function (x, y) {
    return x + y;
};
var print0utput = function (output) {
    return "hello" + output;
};
console.log(sum2(5, 7));
console.log(print0utput("string"));
console.log(print0utput(2));
var hello = function (msg) {
    if (msg === void 0) { msg = "world"; }
    return "hello ".concat(msg);
};
console.log(hello());
console.log(hello("hello"));
// Arrow function
var nhan2 = function (a) {
    return a * 2;
};
console.log(nhan2(8));
function x2(b) {
    return b * 2;
}
console.log(x2(4));
//  Function return
function sum3(a, b) {
    return a + b;
}
console.log(sum3(4, 6));
function reverseString(a) {
    return a.split("").reverse().join("");
}
console.log(reverseString("alo alo alo"));
var num2 = function (num, num2) {
    return num + num2 + 2;
};
console.log(num2(2, 4));
// Default parameter
var sqrt = function (number) {
    if (number === void 0) { number = 0; }
    return number * number;
};
console.log(sqrt(8));
function sum(a3, b3) {
    if (b3 === void 0) { b3 = 0; }
    return a3 + b3;
}
console.log(4, 8);
// Optional parameter
function parameter($value) {
    if ($value === void 0) { $value = "Gia tri ban dau"; }
    return $value;
}
console.log("Gia tri moi");
// Rest Parameter
var tong = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, curr) { return acc + curr; }, 0);
};
console.log(tong(5, 10, 15));
// Function & void
var a = function () {
    console.log("hahahaha");
};
a();
