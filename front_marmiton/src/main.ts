import './style.css'

const addButton = document.querySelector('.addButton') as HTMLButtonElement;
const nomRecette = document.querySelector('.nomrecette') as HTMLInputElement;
const lienRecette = document.querySelector('.lienrecette') as HTMLInputElement;
const dureeRecette = document.querySelector('.dureerecette') as HTMLInputElement;
const noteRecette = document.querySelector('.noterecette') as HTMLInputElement;

let idCounter = 0;

addButton.addEventListener("click", function(event){
if (nomRecette.value != "" && lienRecette.value != "" && dureeRecette.value != "" && noteRecette.value != "") {

    if (idCounter == 0){
    const titleRecipe = document.createElement("h2");
    titleRecipe.innerText = "Mes Recettes";
    document.querySelector('#app')?.appendChild(titleRecipe);
}

    idCounter ++;

    const containerRecipe = document.createElement('div')
    containerRecipe.classList.add('containerRecette')
    document.querySelector('#app')?.appendChild(containerRecipe)

}
event.preventDefault()


}) 

