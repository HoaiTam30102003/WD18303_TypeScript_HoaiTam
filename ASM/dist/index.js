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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
var showPKM = function () {
    var qty = 24;
    var apiPKM = function (url) { return __awaiter(_this, void 0, void 0, function () {
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
    }); };
    var shuffle = function () {
        var arrayPokemon = [];
        var shuffleArrayPokemon = [];
        for (var i = 1; i <= 1025; i++) {
            arrayPokemon.push(i);
        }
        for (var i = 10001; i <= 10277; i++) {
            arrayPokemon.push(i);
        }
        while (arrayPokemon.length > 0) {
            var randomIndex = Math.floor(Math.random() * arrayPokemon.length);
            var randomNum = arrayPokemon.splice(randomIndex, 1)[0];
            shuffleArrayPokemon.push(randomNum);
        }
        var pokemonArrayShuffled = [];
        for (var index = 0; index < qty; index++) {
            pokemonArrayShuffled[index] = shuffleArrayPokemon[index];
        }
        return pokemonArrayShuffled;
    };
    var shuffles = shuffle();
    var shufflePokemon = function (array) {
        var doublePokemon = [];
        var pokemonArray = [];
        var shuffleArrayPokemon = [];
        for (var i = 0; i < array.length; i++) {
            pokemonArray.push(i);
        }
        while (pokemonArray.length > 0) {
            var randomIndex = Math.floor(Math.random() * pokemonArray.length);
            var randomNum = pokemonArray.splice(randomIndex, 1)[0];
            shuffleArrayPokemon.push(randomNum);
            for (var index = 0; index < array.length; index++) {
                doublePokemon[shuffleArrayPokemon[index]] = array[index];
            }
        }
        return doublePokemon;
    };
    var pokemonData = [];
    for (var index = 0; index < qty; index++) {
        var data = apiPKM("https://pokeapi.co/api/v2/pokemon/".concat(shuffles[index], "/"));
        data.then(function (response) {
            var Pokemon = {
                id: response.id,
                name: response.name,
                image: response.sprites.front_default,
            };
            pokemonData.push(Pokemon);
            if (pokemonData.length === qty) {
                var doubleData = __spreadArray(__spreadArray([], pokemonData, true), pokemonData, true);
                var doubleDataPokemon = shufflePokemon(doubleData);
                console.log(doubleDataPokemon);
                var APP = document.getElementById("app");
                var html_1 = "";
                doubleDataPokemon.forEach(function (pkm) {
                    html_1 += "\n                        <div class=\"col-1\">\n                            <div class=\"card mb-3 p-1 shadow border border-dark position-relative\" id=\"pokemon-card-".concat(pkm.id, "\">\n                                <span class=\" rounded position-absolute top-0\">").concat(pkm.id, "</span>\n                                <img src=\"").concat(pkm.image, "\" alt=\"").concat(pkm.name, "\">\n                            </div>\n                        </div>\n                    ");
                });
                APP === null || APP === void 0 ? void 0 : APP.innerHTML = html_1;
                TinhDiem();
            }
        });
    }
};
var TinhDiem = function () {
    var point = 0;
    var selectedPokemon = [];
    var cards = document.querySelectorAll('[id^="pokemon-card-"]');
    cards.forEach(function (cardElement) {
        cardElement.addEventListener('click', handleCardClick);
    });
    var TinhDiem = document.getElementById('diem');
    function handleCardClick(event) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var img, idPokemon, imgId1, imgId2, img1, img2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        img = event.currentTarget.querySelector('img');
                        idPokemon = event.currentTarget.id;
                        if (!(img && img.style)) return [3 /*break*/, 6];
                        img.style.opacity = '1';
                        selectedPokemon.push(idPokemon);
                        if (!(selectedPokemon.length === 2)) return [3 /*break*/, 6];
                        imgId1 = selectedPokemon[0];
                        imgId2 = selectedPokemon[1];
                        if (!(imgId1 !== imgId2)) return [3 /*break*/, 4];
                        img1 = (_a = document.getElementById(imgId1)) === null || _a === void 0 ? void 0 : _a.querySelector('img');
                        img2 = (_b = document.getElementById(imgId2)) === null || _b === void 0 ? void 0 : _b.querySelector('img');
                        if (!(img1 && img2 && img1.style && img2.style)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
                    case 1:
                        _c.sent();
                        img1.style.opacity = '0';
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                    case 2:
                        _c.sent();
                        img2.style.opacity = '0';
                        _c.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        if (imgId1 === imgId2) {
                            point++;
                            TinhDiem === null || TinhDiem === void 0 ? void 0 : TinhDiem.innerHTML = "<h3 class=\"shadow text-center\" style=\"color: greenyellow;\">\u0110i\u1EC3m C\u1EE7a B\u1EA1n:  ".concat(point, "</h3>");
                        }
                        _c.label = 5;
                    case 5:
                        selectedPokemon = [];
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
};
var countdown = function () {
    var startCount = document.getElementById('start_count');
    var countdown = document.getElementById('countdown');
    var countdownInterval;
    if (startCount && countdown) {
        startCountdown(10);
    }
    function startCountdown(minutes) {
        var seconds = minutes * 60;
        countdownInterval = setInterval(function () {
            seconds--;
            var minutesRemaining = Math.floor(seconds / 60);
            var secondsRemaining = seconds % 60;
            if (countdown) {
                countdown.innerHTML = "".concat(minutesRemaining, "m: ").concat(secondsRemaining, "s</h6>");
            }
            if (seconds <= 0) {
                clearInterval(countdownInterval);
                if (countdown) {
                    countdown.innerHTML = "<h6 class=\"text-danger\">B\u1EA1n \u0110\u00E3 H\u1EBFt Th\u1EDDi Gian !!!";
                }
            }
        }, 1000);
    }
};
var AddUser = function (form) {
    console.log(form);
    var nameInput = document.getElementById("name");
    var errorName = document.getElementById("errorName");
    var isValid = true;
    var nameValid = function (value) {
        var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return regex.test(value);
    };
    if (nameInput.value.trim() === "") {
        errorName.textContent = "Vui lòng nhập tên người chơi vào đây !";
        isValid = false;
    }
    else if (nameValid(nameInput.value)) {
        errorName.textContent = "Vui lòng không nhập kí tự đặc biệt vào đây !";
        isValid = false;
    }
    else if (nameInput.value.length === 1) {
        errorName.textContent = "Vui lòng nhập trên 1 kí tự !";
        isValid = false;
    }
    else {
        errorName.textContent = "";
    }
    if (isValid == true) {
        countdown();
        showPKM();
    }
};
var cancel = document.getElementById('cancel');
var Cancel = function () {
    if (cancel) {
        if (confirm('Bạn có chắc chắn muốn hủy không !')) {
            location.reload();
        }
    }
};
var resetGame = document.getElementById('reset');
var reset = function () {
    if (resetGame) {
        showPKM();
    }
};
