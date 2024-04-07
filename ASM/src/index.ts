const showPKM = () => {
    let qty = 24;
    const apiPKM = async (url: string) => {
        let data: Response = await fetch(url);
        return await data.json();
    }

    const shuffle = (): number[] => {
        const arrayPokemon: number[] = [];
        const shuffleArrayPokemon: number[] = [];

        for (let i = 1; i <= 1025; i++) {
            arrayPokemon.push(i);
        }
        for (let i = 10001; i <= 10277; i++) {
            arrayPokemon.push(i);
        }

        while (arrayPokemon.length > 0) {
            const randomIndex = Math.floor(Math.random() * arrayPokemon.length);
            const randomNum = arrayPokemon.splice(randomIndex, 1)[0];
            shuffleArrayPokemon.push(randomNum);
        }
        const pokemonArrayShuffled: number[] = []
        for (let index = 0; index < qty; index++) {
            pokemonArrayShuffled[index] = shuffleArrayPokemon[index];
        }
        return pokemonArrayShuffled;
    };

    const shuffles = shuffle();
    const shufflePokemon = (array: PokemonApi[]) => {
        const doublePokemon: PokemonApi[] = [];
        const pokemonArray: number[] = [];
        const shuffleArrayPokemon: number[] = [];
        for (let i = 0; i < array.length; i++) {
            pokemonArray.push(i);
        }

        while (pokemonArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * pokemonArray.length);
            const randomNum = pokemonArray.splice(randomIndex, 1)[0];
            shuffleArrayPokemon.push(randomNum);
            for (let index = 0; index < array.length; index++) {
                doublePokemon[shuffleArrayPokemon[index]] = array[index];
            }
        }
        return doublePokemon;
    }

    interface PokemonApi {
        id: number;
        name: string;
        image: string;
    }
    const pokemonData: PokemonApi[] = [];

    for (let index = 0; index < qty; index++) {
        const data: any = apiPKM(`https://pokeapi.co/api/v2/pokemon/${shuffles[index]}/`);
        data.then((response: any) => {

            const Pokemon: PokemonApi = {
                id: response.id,
                name: response.name,
                image: response.sprites.front_default,
            }
            pokemonData.push(Pokemon);
            if (pokemonData.length === qty) {
                const doubleData: PokemonApi[] = [...pokemonData, ...pokemonData];
                const doubleDataPokemon = shufflePokemon(doubleData);
                console.log(doubleDataPokemon);
                const APP: HTMLElement | null = document.getElementById("app");
                let html: string = "";
                doubleDataPokemon.forEach(pkm => {
                    html += `
                        <div class="col-1">
                            <div class="card mb-3 p-1 shadow border border-dark position-relative" id="pokemon-card-${pkm.id}">
                                <span class=" rounded position-absolute top-0">#$${pkm.id}</span>
                                <img src="${pkm.image}" alt="${pkm.name}">
                            </div>
                        </div>
                    `;
                });
                APP?.innerHTML = html;
                TinhDiem();
            }
        })
    }
}

const TinhDiem = () => {
    let point: number = 0;
    let selectedPokemon: string[] = [];
    const cards: NodeListOf<Element> = document.querySelectorAll('[id^="pokemon-card-"]');
    cards.forEach((cardElement) => {
        cardElement.addEventListener('click', handleCardClick);
    });
    const TinhDiem: HTMLElement | null = document.getElementById('diem');
    async function handleCardClick(event: any) {
        const img: HTMLElement | null = event.currentTarget.querySelector('img');
        const idPokemon: string = event.currentTarget.id;
        if (img && img.style) {
            img.style.opacity = '1';
            selectedPokemon.push(idPokemon);
            if (selectedPokemon.length === 2) {
                const imgId1: string = selectedPokemon[0];
                const imgId2: string = selectedPokemon[1];

                if (imgId1 !== imgId2) {
                    const img1 = document.getElementById(imgId1)?.querySelector('img');
                    const img2 = document.getElementById(imgId2)?.querySelector('img');
                    if (img1 && img2 && img1.style && img2.style) {
                        await new Promise((resolve) => setTimeout(resolve, 200));
                        img1.style.opacity = '0';
                        await new Promise((resolve) => setTimeout(resolve, 100));
                        img2.style.opacity = '0';
                    }
                } else if (imgId1 === imgId2) {
                    point++;
                    TinhDiem?.innerHTML = `<h3 class="shadow text-center" style="color: greenyellow;">Điểm Của Bạn:  ${point}</h3>`;
                }
                selectedPokemon = [];
            }
        }
    }
}

const countdown = () => {
    const startCount: HTMLElement | null = document.getElementById('start_count');
    const countdown: HTMLElement | null = document.getElementById('countdown');
    let countdownInterval: ReturnType<typeof setInterval>;
    if (startCount && countdown) {
        startCountdown(10);
    }

    function startCountdown(minutes: number): void {
        let seconds: number = minutes * 60;

        countdownInterval = setInterval(() => {
            seconds--;

            const minutesRemaining: number = Math.floor(seconds / 60);
            const secondsRemaining: number = seconds % 60;

            if (countdown) {
                countdown.innerHTML = `${minutesRemaining}m: ${secondsRemaining}s</h6>`;
            }

            if (seconds <= 0) {
                clearInterval(countdownInterval);
                if (countdown) {
                    countdown.innerHTML = `<h6 class="text-danger">Bạn Đã Hết Thời Gian !!!`;
                }
            }
        }, 1000);
    }
}
let AddUser = (form: string) => {
    console.log(form);
    const nameInput: any = document.getElementById("name");
    const nameError: any = document.getElementById("nameError");
    let isValid = true;
    let nameValid = (value: string) => {
        const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return regex.test(value);
    }
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Vui lòng nhập tên người chơi vào đây !";
        isValid = false;
    } else if (nameValid(nameInput.value)) {
        nameError.textContent = "Vui lòng không nhập kí tự đặc biệt vào đây !";
        isValid = false;
    } else if (nameInput.value.length === 1) {
        nameError.textContent = "Vui lòng nhập trên 1 kí tự !";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    if (isValid == true) {
        countdown();
        showPKM();
    }
}

const cancel: HTMLElement | null = document.getElementById('cancel');
let Cancel = () => {
    if (cancel) {
        if (confirm('Bạn có chắc chắn muốn hủy không !')) {
            location.reload();
        }
    }
}

const resetGame: HTMLElement | null = document.getElementById('reset');
let reset = () => {
    if (resetGame) {
        showPKM();
    }
}