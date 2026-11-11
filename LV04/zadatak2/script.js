// Zadatak 2 - forma za obavijest i pregled

const nazivKategorije = {
    hitno: "Hitno",
    informacija: "Informacija"
};

function prikaziPregled() {
    let naslov = document.getElementById("naslov").value.trim();
    let tekst = document.getElementById("tekst").value.trim();
    let kategorija = document.querySelector(
        '#forma-obavijest input[name="kategorija"]:checked'
    ).value;
    let greska = document.getElementById("greska");

    // Prvo se sve provjeri, pa tek onda mijenja pregled.
    // Tako neispravna forma ne moze djelimicno promijeniti pregled.
    let poruke = [];
    if (naslov === "") {
        poruke.push("Naslov ne smije biti prazan.");
    }
    if (tekst === "") {
        poruke.push("Tekst obavijesti ne smije biti prazan.");
    }

    if (poruke.length > 0) {
        greska.textContent = poruke.join(" ");
        return;
    }

    greska.textContent = "";

    // textContent (a ne innerHTML) - korisnicki unos se prikazuje
    // iskljucivo kao tekst, pa se npr. <b> nece protumaciti kao HTML
    document.getElementById("pregled-naslov").textContent = naslov;
    document.getElementById("pregled-tekst").textContent = tekst;
    document.getElementById("pregled-kategorija").textContent = nazivKategorije[kategorija];

    let pregled = document.getElementById("pregled");
    pregled.classList.remove("hitno", "informacija");
    pregled.classList.add(kategorija);
}

function resetujFormu() {
    document.getElementById("forma-obavijest").reset();
    document.getElementById("greska").textContent = "";
}

window.onload = function () {
    document.getElementById("dugme-pregled").addEventListener("click", prikaziPregled);
    document.getElementById("dugme-reset").addEventListener("click", resetujFormu);
};
