// Zadatak 5 - zapremina sfere: V = 4/3 * PI * r^3

function izracunajZapreminu() {
    let unos = document.forms["forma-sfera"]["radius"].value.trim().replace(",", ".");
    let r = Number(unos);
    let greska = document.getElementById("greska");
    let polje = document.forms["forma-sfera"]["volume"];

    if (unos === "" || !Number.isFinite(r) || r < 0) {
        greska.textContent = "Unesite nenegativan broj za radius.";
        polje.value = "0.0000";
        return;
    }

    greska.textContent = "";
    let v = (4 / 3) * Math.PI * Math.pow(r, 3);
    polje.value = v.toFixed(4);
}

window.onload = function () {
    document.getElementById("izracunaj").addEventListener("click", izracunajZapreminu);
};
