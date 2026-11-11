const nombre=Number(prompt("quel nombre voulez-vous"));
let nb=0;
for (let i=1;i<=nombre;i++){
    nb=nb+i;
}
alert(`la somme de 1 à ${nombre} est egal ${nb}`);