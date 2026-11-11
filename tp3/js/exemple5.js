function moyenne(notes) {
let somme = 0;
for (const note of notes) {
somme = somme + note;
}
return somme / notes.length;
}
console.log(moyenne([12, 8, 15, 10, 17]));
console.log(moyenne([9, 11]));