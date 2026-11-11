// Zadatak 4 - interaktivno stablo predmeta (DHTML)

function prebaci(idNaslova, idPodstabla) {
    let naslov = document.getElementById(idNaslova);
    let podstablo = document.getElementById(idPodstabla);
    let znak = naslov.querySelector(".znak");

    if (podstablo.style.display === "block") {
        // skupi
        podstablo.style.display = "none";
        znak.textContent = "+";
    } else {
        // rasiri
        podstablo.style.display = "block";
        znak.textContent = "-";
    }
}

window.onload = function () {
    // klik na znak ili na tekst - oba su unutar span-a .naslov-cvora
    document.getElementById("naslov-prva").addEventListener("click", function () {
        prebaci("naslov-prva", "podstablo-prva");
    });
    document.getElementById("naslov-druga").addEventListener("click", function () {
        prebaci("naslov-druga", "podstablo-druga");
    });
};
