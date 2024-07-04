const khodamList = [
    "yanto semriwing",
    "sprei mewing",
    "kucing hitam",
    "ular rizz",
    "kai cenat",
    "rusdi kalimalang",
    "harimau gyat",
    "arif magelang",
    "Macan sigma",
    "Ambatron",
    "tugu monas",
    "sungutlele",
    "jmk48",
    "telor balado",
    "eren yeager",
    "stephen hawking",
    "mantan terindah",
    "bhanu azizi",
    "arizz bus edan",
    "prambanan sugiyono",
    "laron flexing",
    "lintah kebon",
    "asinan cianjur",
    "tahu sumedang",
    "rica-rica bebek",
    "benedict",
    "belalang cibereum",
    "slamet banyumas",
    "semen tiga roda",
    "badak jawa",
    "kuda alpha",
    "tupai omega",
    "katak blitar",
    "mahkota tramadol"
];

function cekKhodam() {
    const nameInput = document.getElementById('nameInput');
    const loader = document.getElementById('loader');
    const khodamTitle = document.getElementById('khodamTitle');
    const result = document.getElementById('result');
    const inputName = document.getElementById('inputName');
    const name = nameInput.value.trim();
    
    if (name === "") {
        alert("Silakan masukkan nama Anda");
        return;
    }

    nameInput.disabled = true; // Disable input while processing
    nameInput.value = "Memproses..."; // Show loading message
    loader.style.display = "inline-block"; // Show loader
    khodamTitle.style.display = "none"; // Hide khodam title while processing
    result.innerText = ""; // Clear previous result

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const khodamName = khodamList[randomIndex];

        nameInput.value = ""; // Clear input field after processing
        nameInput.disabled = false; // Enable input after processing
        loader.style.display = "none"; // Hide loader
        inputName.innerText = name; // Set the input name in khodam title
        khodamTitle.style.display = "block"; // Show khodam title
        result.innerText = khodamName; // Display khodam name in result

        // Add new row to history table
        addToHistory(name, khodamName);

        // Speak the result
        speak(`${name}, khodam kamu adalah ${khodamName}`);
    }, 2000); // Simulate a delay for loading
}

function checkEnter(event) {
    if (event.key === "Enter") {
        cekKhodam();
    }
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID'; // Set language to Indonesian
    window.speechSynthesis.speak(utterance);
}

function addToHistory(name, khodam) {
    const historyTable = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
    const newRow = historyTable.insertRow();
    
    const nameCell = newRow.insertCell(0);
    const khodamCell = newRow.insertCell(1);
    
    nameCell.textContent = name;
    khodamCell.textContent = khodam;
}
