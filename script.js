let compteur = 0;

const affichage = document.getElementById("count");
const plus = document.getElementById("plus");
const moins = document.getElementById("moins");

plus.addEventListener("click", () => {
    compteur++;
    affichage.textContent = compteur;
});

moins.addEventListener("click", () => {
    compteur--;
    affichage.textContent = compteur;
});