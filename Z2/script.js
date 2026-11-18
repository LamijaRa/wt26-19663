
function napraviProfil(){
    let profil={naziv: "Pocetni"};
    return{
        pregled: function(){return profil;},
        postaviNaziv: function(n){ profil.naziv=n;}
    };
}

