// TP3 — Partie 6 : vérification du formulaire d'inscription
// Compléter chaque étape en suivant l'énoncé du TP.

// Étape 1 : sélectionner les éléments (formulaire, champs, case à cocher, résultat)
const formulaire = document.querySelector("#inscription");
const champNom = document.querySelector("#nom");
const e_mail = document.querySelector("#email");
const age = document.querySelector("#age");
const atelier = document.querySelector("#atelier");
// Étape 2 : fonctions afficherErreur(champ, idErreur, message) et effacerErreur(champ, idErreur)
function afficherErreur(champ, idErreur, message) {
document.querySelector(idErreur).textContent = message;
champ.classList.add("invalide");
}

// Étape 3 : écouter l'envoi du formulaire et lire les saisies
formulaire.addEventListener("submit", function (event) {
event.preventDefault();
const nom = champNom.value.trim();
const email = champEmail.value.trim();
const age = Number(champAge.value);
const atelier = champAtelier.value;
let valide = true;
// étapes 4 et 5 ici
});

// Étape 4 : vérifier chaque champ (nom, email, age, atelier, reglement)
if (nom.length < 3) {
afficherErreur(champNom, "#erreur-nom", "Au moins 3 caractères.");
valide = false;
} else {
effacerErreur(champNom, "#erreur-nom");
}

  // Étape 5 : afficher le résultat ou le vider
