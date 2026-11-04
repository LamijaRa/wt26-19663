
function generisiPlanTreninga(n,k){
    const plan=[];

    for(let i=0;i<=n;i++){
        plan.push('Serija ${i}');
        if(i%k===0 && i!==n){
        plan.push('Odmor');}
    }
    plan.push('Kraj treninga');
    return plan;
}

function procitajPlanTreninga(plan){
    const unos=prompt(plan);

    if(unos===null){
        alert("Unos je otkazan");
        return null;
    }
    if(unos.trim()===""){
        alert("Niste unijeli seriju");
        return null;
    }

    const broj=Number(unos.trim());

    if(!Number.isInteger(broj)){
        alert("Unos mora biti cijeli broj");
        return null;
    }
    if(broj<=0){
        alert("Unos mora biti pozitivan broj");
        return null;
    }
    return broj;
}

const n=procitajPlanTreninga("Unesite broj serija: ");
if(n!==null){
    const k=procitajPlanTreninga("Unesite broj serija nakon kojih se ide na odmor: ");
    if(k!==null){
        const plan=generisiPlanTreninga(n,k);
        console.log(plan.join('\n'));
        alert(plan.join('\n'));
    }
}