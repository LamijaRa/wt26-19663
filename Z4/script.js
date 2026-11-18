const brojacModul = (function () {
    let brojac = 0;

    return {
        dodaj: function () {
            brojac += 1;
            return brojac;
        },

        resetuj: function () {
            brojac = 0;
        }
    };
})();

console.log(brojacModul.dodaj()); // 1
console.log(brojacModul.dodaj()); // 2
console.log(brojacModul.dodaj()); // 3

brojacModul.resetuj();

console.log(brojacModul.dodaj()); // 1