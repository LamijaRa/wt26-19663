function napraviResurs(pocetnaKolicina) {
    if (!Number.isFinite(pocetnaKolicina) || pocetnaKolicina < 0) {
        throw new RangeError("Početna količina mora biti konačan broj veći ili jednak nuli.");
    }

    let stanje = pocetnaKolicina;

    return {
        potrosi: function (kolicina) {
            if (!Number.isFinite(kolicina) || kolicina < 0 || kolicina > stanje) {
                return false;
            }

            stanje -= kolicina;
            return true;
        },

        preostalo: function () {
            return stanje;
        }
    };
}

const minuteA = napraviResurs(100);
const minuteB = napraviResurs(50);

console.log(minuteA.potrosi(30)); // true
console.log(minuteA.preostalo()); // 70
console.log(minuteB.preostalo()); // 50

console.log(minuteB.potrosi(20)); // true
console.log(minuteB.preostalo()); // 30
console.log(minuteA.preostalo()); // 70

console.log(minuteA.potrosi(80)); // false, ima samo 70
console.log(minuteA.preostalo()); // 70

console.log(minuteB.potrosi(-5)); // false, količina je negativna
console.log(minuteB.preostalo()); // 30