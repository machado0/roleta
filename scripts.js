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
    let iterations = 5;

    if (champion) {
        for (i = 1; i < iterations; i++) {
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
    let iterations = 5;
    
    for (let i = 0; i < 5; i++) {
        updateChampionImage(lane, getRandomChampionByLane(lane));
        await delay(250); 
    }

    const finalChampion = getRandomChampionByLane(lane);
    if (finalChampion) {
        selectedChampions[lane] = finalChampion;
        updateChampionImage(lane, finalChampion);
        document.getElementById(lane).innerText = finalChampion;
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

const spinWheel = document.getElementById("spin-wheel");
const spinBtn = document.getElementById("spin-button");
const text = document.getElementById("text");

const spinValues = [
    { minDegree: 61, maxDegree: 90, value: "Sim" },
    { minDegree: 31, maxDegree: 60, value: "Não" },
    { minDegree: 0, maxDegree: 30, value: "Sim" },
    { minDegree: 331, maxDegree: 360, value: "Não" },
    { minDegree: 301, maxDegree: 330, value: "Sim" },
    { minDegree: 271, maxDegree: 300, value: "Não" },
    { minDegree: 241, maxDegree: 270, value: "Sim" },
    { minDegree: 211, maxDegree: 240, value: "Não" },
    { minDegree: 181, maxDegree: 210, value: "Sim" },
    { minDegree: 151, maxDegree: 180, value: "Não" },
    { minDegree: 121, maxDegree: 150, value: "Sim" },
    { minDegree: 91, maxDegree: 120, value: "Não" },
  ]

const size = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var spinColors = ["#4CAF50", "#F44336"]; 

let spinChart = new Chart(spinWheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: ["Sim", "Não", "Sim", "Não", "Sim", "Não", "Sim", "Não", "Sim", "Não", "Sim", "Não"],
    datasets: [
      {
        backgroundColor: spinColors,
        data: size,
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: { display: false },
      datalabels: {
        rotation: 90,
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});

const generateValue = (angleValue) => {
  for (let i of spinValues) {
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      text.innerHTML = `<p id="yes-no">${i.value}!</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

let count = 0;
let resultValue = 101;
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  text.innerHTML = `<p id="spinning">Girando...</p>`;
  let randomDegree = Math.floor(Math.random() * 360);
  let rotationInterval = window.setInterval(() => {
    spinChart.options.rotation += resultValue;
    spinChart.update();
    if (spinChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      spinChart.options.rotation = 0;
    } else if (count > 15 && spinChart.options.rotation == randomDegree) {
      generateValue(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});

document.addEventListener('DOMContentLoaded', (event) => {
    initializeApp(); 
});
