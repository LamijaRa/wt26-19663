function dodajDva(a) {
    return a + 2;
}
console.log(dodajDva(1));
console.log(dodajDva(2));
console.log(dodajDva(10));

function jednom(callback) {
    let a = false;
    let rez;

    return function (b) {
        if (!a) {
            rez = callback(b);
            a = true;
        }

        return rez;
    };
}

const jednomFunkcija = jednom(dodajDva);

console.log(jednomFunkcija(4));
console.log(jednomFunkcija(10));
console.log(jednomFunkcija(9001));
