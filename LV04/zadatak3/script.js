// Zadatak 3 - tabela evidencije troskova
//
// Odabrani pristup: zbir se NE cuva u varijabli, nego se nakon svake
// promjene ponovo racuna iz redova tabele.
// Obrazlozenje: tabela je jedini "izvor istine". Ako bi zbir bio u
// varijabli, mogao bi se razici sa tabelom (npr. ako se red doda ili
// obrise na nekom drugom mjestu u kodu, a varijabla se zaboravi azurirati).
// Za ovako mali broj redova ponovno racunanje je zanemarivo sporo.
// (Alternativa: cuvati zbir u varijabli i samo dodavati novi iznos -
// brze je, ali treba paziti da varijabla uvijek prati tabelu.)

function izracunajZbir() {
    let tijelo = document.getElementById("stavke");
    let zbir = 0;
    for (let i = 0; i < tijelo.rows.length; i++) {
        // druga celija (indeks 1) u svakom redu je iznos
        zbir += Number(tijelo.rows[i].cells[1].textContent);
    }
    return zbir;
}

function azurirajPrikaz() {
    let tijelo = document.getElementById("stavke");
    document.getElementById("zbir").textContent = izracunajZbir().toFixed(2);
    document.getElementById("broj-stavki").textContent = tijelo.rows.length;
}

function dodajStavku() {
    let poljeNaziv = document.getElementById("naziv");
    let poljeIznos = document.getElementById("iznos");
    let greska = document.getElementById("greska");

    let naziv = poljeNaziv.value.trim();
    let iznosTekst = poljeIznos.value.trim().replace(",", "."); // dozvoli i decimalni zarez
    let iznos = Number(iznosTekst);

    // Validacija - ako nesto ne valja, tabela se ne dira
    if (naziv === "") {
        greska.textContent = "Naziv ne smije biti prazan.";
        return;
    }
    // Number("") je 0, zato se prazan unos posebno provjerava
    if (iznosTekst === "" || !Number.isFinite(iznos)) {
        greska.textContent = "Iznos mora biti broj.";
        return;
    }
    if (iznos < 0) {
        greska.textContent = "Iznos ne smije biti negativan.";
        return;
    }

    greska.textContent = "";

    // Redovi stavki su u <tbody>, a red sa zbirom u <tfoot>,
    // pa insertRow(-1) na tbody dodaje red neposredno prije reda sa zbirom.
    let tijelo = document.getElementById("stavke");
    let red = tijelo.insertRow(-1);
    let celijaNaziv = red.insertCell(0);
    let celijaIznos = red.insertCell(1);

    celijaNaziv.textContent = naziv; // textContent - unos se prikazuje kao tekst
    celijaIznos.textContent = iznos.toFixed(2);
    celijaIznos.className = "iznos";

    azurirajPrikaz();

    poljeNaziv.value = "";
    poljeIznos.value = "";
    poljeNaziv.focus();
}

window.onload = function () {
    document.getElementById("dodaj").addEventListener("click", dodajStavku);
    azurirajPrikaz();
};
