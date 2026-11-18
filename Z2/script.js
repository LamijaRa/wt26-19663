function napraviProfilPocetni() {
    let profil = { naziv: "Početni" };

    return {
        pregled: function () {
            return profil;
        },

        postaviNaziv: function (n) {
            profil.naziv = n;
        }
    };
}

const pocetniModul = napraviProfilPocetni();

const dobijeniProfil = pocetniModul.pregled();
dobijeniProfil.naziv = "Promijenjen izvana";

console.log(pocetniModul.pregled());

function napraviProfil() {
    const profil = {
        naziv: "Početni",
        bodovi: 0
    };

    return {
        pregled: function () {
            return {
                naziv: profil.naziv,
                bodovi: profil.bodovi
            };
        },

        postaviNaziv: function (n) {
            profil.naziv = n;
        }
    };
}

const modulProfila = napraviProfil();
const kopijaProfila = modulProfila.pregled();

kopijaProfila.naziv = "Promijenjen izvana";
kopijaProfila.bodovi = 100;

console.log(kopijaProfila);
// { naziv: 'Promijenjen izvana', bodovi: 100 }

console.log(modulProfila.pregled());
// { naziv: 'Početni', bodovi: 0 }

modulProfila.postaviNaziv("Novi naziv");

console.log(modulProfila.pregled());
// { naziv: 'Novi naziv', bodovi: 0 }