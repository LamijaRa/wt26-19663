let stavke = document.querySelectorAll(".stavka");

function azurirajSazetak() {
    let zavrsene = document.querySelectorAll(".stavka.zavrseno").length;
    document.getElementById("sazetak").textContent =
        "Završeno: " + zavrsene + " / " + stavke.length;
}

function postaviStanje(stavka, zavrseno) {
    let status = stavka.querySelector(".status");
    let dugme = stavka.querySelector("button");

    if (zavrseno) {
        stavka.classList.add("zavrseno");
        status.textContent = "(završeno)";
        dugme.textContent = "Poništi";
    } else {
        stavka.classList.remove("zavrseno");
        status.textContent = "(nije završeno)";
        dugme.textContent = "Označi";
    }
}

for (let stavka of stavke) {
    stavka.querySelector("button").onclick = function () {
        let jeZavrsena = stavka.classList.contains("zavrseno");
        postaviStanje(stavka, !jeZavrsena);
        azurirajSazetak();
    };
}

document.getElementById("resetuj").onclick = function () {
    for (let stavka of stavke) {
        postaviStanje(stavka, false);
    }
    azurirajSazetak();
};

azurirajSazetak();
