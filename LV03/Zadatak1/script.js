const P1=15;
const P2=30;

function procjenaCekanja(minute){
    if(minute < P1) 
        return "Prihvatljivo vrijeme cekanja klijenta";
    if(minute < P2)
        return "Normalno vrijeme cekanja klijenta"
    
    return "Neprihvatljivo vrijeme cekanja klijenta";
}

let unos=prompt("Unesite vrijeme cekanja klijenta u minutama: ");

if(unos === null){
    alert("Niste unijeli vrijeme cekanja klijenta");
}
else{
    unos=unos.trim().replace(",",",");
    const broj=Number(unos);

    if(unos==""){
        alert("Niste unijeli vrijeme cekanja klijenta");
    }
    else if(Number.isNaN(broj)){
        alert("Vrijeme cekanja klijenta mora biti broj");
    }
    else if(!Number.isFinite(broj)){
        alert("Vrijeme cekanja klijenta mora biti konačan broj");
    }
    else if(broj<0){
        alert("Vrijeme cekanja klijenta mora biti nenegativan broj");
    }
    else{
        const rezultat=procjenaCekanja(broj);
        alert(rezultat);
    }
}
