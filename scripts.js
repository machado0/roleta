let selectedChampions = {};

let bannedChampions = {
    top: null,
    jungle: null,
    mid: null,
    adc: null,
    support: null
};

function updateChampionSelection(lane, champion) {
    bannedChampions[lane] = champion; 

    const button = document.getElementById(`${lane}-ban`);
    if (button) {
        button.innerText = champion;
        button.style.backgroundImage = `url(${championImages[champion] || "imagens/ping.png"})`;
    } else {
        console.error(`Ban button for ${lane} not found`);
    }
}


function getRandomChampionByLane(lane) {
    const laneChampions = {
        top: [ "Ambessa", "Gragas", "Heimerdinger", "Rengar", "Smolder", "Sylas", "Vayne", "Vladimir", "Warwick", "Wukong", "Zac", "Aatrox", "Akali", "Aurora", "Camille", "Cho'Gath", "Darius", "Dr. Mundo", "Fiora", "Gangplank", "Garen", "Gnar", "Gwen", "Illaoi", "Irelia", "Jax", "Jayce", "K'Sante", "Kayle", "Kennen", "Kled", "Malphite", "Mordekaiser", "Nasus", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Riven", "Rumble", "Sett", "Shen", "Singed", "Sion", "Skarner", "Tahm Kench", "Teemo", "Trundle", "Tryndamere", "Udyr", "Urgot", "Volibear", "Yasuo", "Yone", "Yorick" ],
        jungle: [ "Gragas", "Teemo", "Rengar", "Warwick", "Wukong", "Zac", "Amumu", "Bel'Veth", "Briar", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Graves", "Hecarim", "Ivern", "Jarvan IV", "Karthus", "Kayn", "Kha'Zix", "Kindred", "Lee Sin", "Lillia", "Maokai", "Master Yi", "Nocturne", "Nidalee", "Nunu & Willump", "Rammus", "Rek'Sai", "Sejuani", "Shaco", "Shyvana", "Taliyah", "Vi", "Viego", "Xin Zhao" ],
        mid: [ "Mel", "Karma", "Heimerdinger", "Smolder", "Sylas", "Twisted Fate", "Vladimir", "Ahri", "Akali", "Aurora", "Irelia", "Jayce", "Naafiri", "Ryze", "Syndra", "Taliyah", "Yasuo", "Yone", "Cassiopeia", "Corki", "Diana", "Ekko", "Fizz", "Galio", "Hwei", "Kassadin", "Katarina", "LeBlanc", "Lissandra", "Lux", "Malzahar", "Orianna", "Qiyana", "Swain", "Talon", "Tristana", "Veigar", "Vel'Koz", "Vex", "Viktor", "Xerath", "Zed", "Ziggs", "Zoe" ],
        adc: [ "Smolder", "Vayne", "Aphelios", "Ashe", "Draven", "Ezreal", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Kog'Maw", "Lucian", "Miss Fortune", "Nilah", "Samira", "Sivir", "Tristana", "Twitch", "Varus", "Xayah", "Zeri" ],
        support: [ "Mel", "Karma", "Zac", "Pantheon", "Shen", "Tahm Kench", "Teemo", "Amumu", "Alistar", "Bard", "Blitzcrank", "Braum", "Galio", "Janna", "Leona", "Lulu", "Lux", "Milio", "Morgana", "Nami", "Nautilus", "Neeko", "Pyke", "Rakan", "Rell", "Renata Glasc", "Senna", "Seraphine", "Sona", "Soraka", "Swain", "Taric", "Thresh", "Twitch", "Vel'Koz", "Yuumi", "Zilean", "Zyra" ]
    };

    const bannedChampion = bannedChampions[lane]; // Get the banned champion for this lane
    let filteredChampions = laneChampions[lane];

    if (bannedChampion) {
        filteredChampions = filteredChampions.filter(champion => champion !== bannedChampion);
    }

    if (filteredChampions.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * filteredChampions.length);
    return filteredChampions[randomIndex];
}

const champions = [
    "Mel", "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Ambessa", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Aurora", "Azir", "Bardo", "Bel'Vetth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
]

function getRandomChampion() {
    const randomIndex = Math.floor(Math.random() * champions.length);
    return champions[randomIndex];
}

let championImages = {};

function updateChampionImage(lane, championName = null) {
    const imageElement = document.getElementById(`${lane}-img`);
    if (championName) {
        imageElement.src = championImages[championName] || "imagens/ping.png";
        imageElement.alt = championName;
    } else {
        imageElement.src = "imagens/ping.png";
        imageElement.alt = "No Champion Selected";
    }
}

async function selectRandomChampion(lane) {
    const champion = getRandomChampion();
    if (champion) {
        for (i = 1; i < 5; i++) {
            const champion  = getRandomChampionByLane(lane);
            updateChampionImage(lane, champion);
            await delay(250);
            }
         
        updateChampionImage(lane, champion);
        document.getElementById(lane).innerText = champion;
    } else {
        console.error(`No champions found`);
    }
}

async function selectChampion(lane) {
    const champion = getRandomChampionByLane(lane);

    if (champion) {
        selectedChampions[lane] = champion;
        updateChampionImage(lane, champion);
        document.getElementById(lane).innerText = champion;
    } else {
        console.warn(`No available champions for ${lane}.`);
    }
}


let isUserInteracted = false;

document.addEventListener('click', () => {
    isUserInteracted = true;
});

function playRandomHoverSound() {
    if (!isUserInteracted) return;
    const soundFiles = [
        'sons/Caution_ping_SFX.ogg',
        'sons/Enemy_Missing_ping_SFX.ogg',
        'sons/Generic_ping_SFX.ogg',
        'sons/Caution_ping_SFX.ogg'
    ];

    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    const audio = new Audio(soundFiles[randomIndex]);

    audio.volume = 0.15; 
    audio.play().catch(err => console.error('Audio playback failed:', err));
}

document.querySelectorAll('.champion-image').forEach(image => {
    image.addEventListener('mouseenter', playRandomHoverSound);
});

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };

function showDropdown(button, lane) {
    const dropdown = document.getElementById("dropdown");
    dropdown.innerHTML = ""; 

    Object.keys(championImages).forEach(champion => {
        const option = document.createElement("div");
        option.textContent = champion;
        option.classList.add("dropdown-option");
        option.addEventListener("click", () => {
            updateChampionSelection(lane, champion);
            dropdown.classList.add("hidden");
        });
        dropdown.appendChild(option);
    });

    const rect = button.getBoundingClientRect();
    dropdown.style.position = "absolute";
    dropdown.style.left = `${rect.left}px`;
    dropdown.style.top = `${rect.bottom + window.scrollY}px`;
    dropdown.classList.remove("hidden");
}

document.querySelectorAll(".ban-button").forEach(button => {
    button.addEventListener("click", function () {
        const lane = this.getAttribute("data-lane");
        showDropdown(this, lane);
    });
});

function updateButtonImage(button, imageURL) {
    if (imageURL) {
        button.style.backgroundImage = `url(${imageURL})`;
        button.style.backgroundSize = "cover";
        button.style.backgroundPosition = "center";
    } else {
        button.style.backgroundImage = "";
    }
}

async function fetchChampionImages() {
    try {
        const response = await fetch('./championImages.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading champion images:', error);
        return {};
    }
}

async function initialize() {
    championImages = await fetchChampionImages();
    ['top', 'jungle', 'mid', 'adc', 'support'].forEach(lane => {
        updateChampionImage(lane);
    });
}

async function initializeApp() {
    await initialize();
}

document.addEventListener('DOMContentLoaded', (event) => {
    initializeApp(); 
});
