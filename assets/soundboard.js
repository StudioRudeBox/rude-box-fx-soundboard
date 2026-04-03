const sounds = [
    {label: 'Raarrr',                                fileName: 'raarrr.mp3',                                creatorMicro: true},
    {label: 'Dat is m, fantastisch gedaan zo',        fileName: 'dat-is-m-fantastisch-gedaan-zo.mp3',        creatorMicro: false},
    {label: 'I love AI',                             fileName: 'i-love-ai.mp3',                             creatorMicro: true},
    {label: 'You use ChatGPT?',                      fileName: 'you-use-chatgpt.mp3',                       creatorMicro: false},
    {label: 'Technologia',                           fileName: 'technologia.mp3',                           creatorMicro: false},
    {label: 'Wat een bedrijf',                       fileName: 'wat-een-bedrijf.mp3',                       creatorMicro: true},
    {label: 'Joh, laat gaan',                        fileName: 'joh-laat-gaan.mp3',                         creatorMicro: true},
    {label: 'Lekker, lekker, lekker',                fileName: 'lekker-lekker-lekker.mp3',                  creatorMicro: false},
    {label: 'Nee is nee',                            fileName: 'nee-is-nee.mp3',                            creatorMicro: false},
    {label: 'Schitterend bedrijf',                   fileName: 'schitterend-bedrijf.mp3',                   creatorMicro: true},
    {label: 'Tempo beetje opschroeven',              fileName: 'tempo-beetje-opschroeven.mp3',              creatorMicro: false},
    {label: 'Volledig ongevraagd die tips',          fileName: 'volledig-ongevraagd-die-tips.mp3',          creatorMicro: false},
    {label: 'Wat heb ie nou weer voor schoenen aan?', fileName: 'wat-heb-ie-nou-weer-voor-schoenen-aan.mp3', creatorMicro: true},
    {label: 'Voor mekaar hoor, Ajeto',               fileName: 'voor-mekaar-hoor-ajeto.mp3',                creatorMicro: true},
    {label: 'Nou die is naar de gallemiezen',        fileName: 'nou-die-is-naar-de-gallemiezen.mp3',        creatorMicro: true},
    {label: 'Lekker genieten vriend',                fileName: 'lekker-genieten-vriend.mp3',                creatorMicro: false},
    {label: 'Hier is helemaal zand',                 fileName: 'hier-is-helemaal-zand.mp3',                 creatorMicro: false},
    {label: 'Rustaagh',                              fileName: 'rustaagh.mp3',                              creatorMicro: true},
    {label: "Ok, let's go",                          fileName: 'ok-lets-go.mp3',                            creatorMicro: false},
    {label: 'Ik vind niet normaal maar komt goed',   fileName: 'ik-vind-niet-normaal-maar-komt-goed.mp3',   creatorMicro: false},
    {label: 'Jezus man wat een rotzooi',             fileName: 'jezus-man-wat-een-rotzooi.mp3',             creatorMicro: true},
    {label: 'Stift, elleboog op tafel',              fileName: 'stift-elleboog-op-tafel.mp3',               creatorMicro: false},
    {label: 'Dat vink goed',                         fileName: 'dat-vink-goed-gewoon-goed.mp3',             creatorMicro: true},
    {label: 'Ga een behoorlijke baan zoeken man',    fileName: 'ga-een-behoorlijke-baan-zoeken-man.mp3',    creatorMicro: true}
];

var soundboardButtons = [];
const soundboard = document.querySelector('#soundboard');

var audioElements = sounds.map(sound => {
    const audio = new Audio(`fx/${sound.fileName}`);
    audio.preload = 'auto';
    return audio;
});

function createButton(sound, index) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = sound.label;

    const key = index < 26 ? String.fromCharCode(97 + index) : null;
    if (key) {
        const shortkeySpan = document.createElement('span');
        shortkeySpan.classList.add('shortkey');
        shortkeySpan.textContent = key;
        button.appendChild(shortkeySpan);
    }

    if (sound.creatorMicro) {
        button.classList.add('creator-micro');
    }

    button.addEventListener('click', () => playSound(index));
    return button;
}

function playSound(index) {
    const audio = audioElements[index];
    const button = soundboardButtons[index];

    button.classList.add('is-playing');
    audio.play();
    audio.addEventListener('ended', () => {
        button.classList.remove('is-playing');
    });
}

function iFeelLucky() {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    playSound(randomIndex);
}

function keypressToIndex(key) {
    if (key === ' ') { iFeelLucky(); return; }
    const index = key.charCodeAt(0) - 97;
    if (index >= 0 && index < sounds.length) playSound(index);
}

sounds.forEach((sound, index) => {
    const button = createButton(sound, index);
    soundboard.appendChild(button);
    soundboardButtons.push(button);
});

document.addEventListener('keydown', event => keypressToIndex(event.key.toLowerCase()));
document.querySelector('#randomizer').addEventListener('click', () => iFeelLucky());
