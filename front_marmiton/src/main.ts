import './style.css'

const addButton = document.querySelector('.addButton') as HTMLButtonElement;
const nomRecette = document.querySelector('.nomrecette') as HTMLInputElement;
const lienRecette = document.querySelector('.lienrecette') as HTMLInputElement;
const dureeRecette = document.querySelector('.dureerecette') as HTMLInputElement;
const noteRecette = document.querySelector('.noterecette') as HTMLInputElement;

loadRecipes();

addButton.addEventListener("click", function(event){
if (nomRecette.value != "" && lienRecette.value != "" && dureeRecette.value != "" && noteRecette.value != "") {

  addRecipe(nomRecette.value, lienRecette.value, dureeRecette.value, noteRecette.value);


}
  createRecipe(nomRecette.value, dureeRecette.value, noteRecette.value, lienRecette.value);
    
event.preventDefault()


}) 

let idCounter = 0;

function titleRecipe() {
  if (idCounter === 0){
    const titleRecipe = document.createElement("h2");
    titleRecipe.innerText = "Mes Recettes";
    document.querySelector('#app')?.appendChild(titleRecipe);
    idCounter ++;
  }
}

function createRecipe(name:string, duration:string, notes:string, url:string) {
  titleRecipe();
  const containerRecipe = document.createElement('div')
  containerRecipe.classList.add('containerRecette')

  const recipe= document.createElement('div')
  recipe.classList.add('recette')

  const information= document.createElement('div')
  information.classList.add('information')

  const nom = document.createElement('div')
  nom.classList.add('nom')
  nom.innerText = name

  const duree = document.createElement('div')
  duree.classList.add('duree')
  duree.innerText = duration 

  const note = document.createElement('div')
  note.classList.add('note')
  note.innerText = notes

  const lien = document.createElement('div')
  lien.classList.add('img')
  lien.innerText = url

  const img= document.createElement('img')
  img.classList.add('img')
  img.setAttribute('src', url)
  
  information.appendChild(nom)
  information.appendChild(duree)
  information.appendChild(note)
  img.appendChild(lien)
  recipe.appendChild(information)
  recipe.appendChild(img)
  containerRecipe.appendChild(recipe)
  document.querySelector('#app')?.appendChild(containerRecipe)

}

async function addRecipe(nomRecette:string, lienRecette:string, dureeRecette:string, noteRecette:string) {
    const response = await fetch('http://localhost:3030/recipes', {
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        method: "POST",
        body: JSON.stringify({
          name: nomRecette, url: lienRecette, duration: dureeRecette, note: noteRecette
        }),
      })
      console.log(response)
      const data = await response.json()
      console.log(data)
    }

async function loadRecipes(){
  const response = await fetch(`http://localhost:3030/recipes`);
  const recipes = await response.text();
  let recipesArray:{ id: number; name: string; url: string; duration: string; note: string}[] = JSON.parse(recipes)
  titleRecipe();
  for (const element of recipesArray){
  createRecipe(element.name, element.duration, element.note, element.url)
  }
}