
function sabiranje() {
        let a = parseFloat(document.getElementById("sabirak1").value);
        let b = parseFloat(document.getElementById("sabirak2").value);
        let c = a + b;
        document.getElementById("zbir").value = c;
}
document.getElementById("dugme").addEventListener("click", sabiranje);

