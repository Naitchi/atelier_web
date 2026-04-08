// 1) On récupère les éléments HTML qu'on va manipuler
const button = document.getElementById("buttonOutsideDiv");
const title = document.getElementById("title");
const statusText = document.getElementById("status");
const counterText = document.getElementById("counter");

// 2) Variable d'état : garde en mémoire le nombre de clics
let count = 0;

// 3) Événement click : se déclenche à chaque clic sur le bouton
button.addEventListener("click", () => {
    window.alert("On m'a cliqué dessus !");

    // On incrémente le compteur
    count += 1;

    // On met à jour le texte affiché dans la page
    counterText.textContent = `Compteur : ${count}`;
    statusText.textContent = `Bouton cliqué ${count} fois ✅`;
});

// 4) Événement souris au-dessus du titre
title.addEventListener("mouseover", () => {
    title.style.color = "crimson";
    statusText.textContent = "Souris sur le titre 👀";
});

// 5) Événement quand la souris quitte le titre
title.addEventListener("mouseout", () => {
    title.style.color = "";
    statusText.textContent = "Souris sortie du titre";
});
