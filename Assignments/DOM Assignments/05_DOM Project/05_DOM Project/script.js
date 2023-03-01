let third = document.querySelector(".nav-center div:nth-child(3)");

let nav = document.createElement("a");
nav.href="index.html";
nav.className="btn";
nav.innerText="Pro subscription";

third.append(nav);


let last = document.querySelector(".tags-container div");
let recipe = document.createElement("a");
recipe.href="#";
recipe.innerText="Chinese (7)";

last.append(recipe);


let recipeG = document.querySelector(".recipe-gallery");
let card = document.createElement("div");
card.className="card";

let aRecipeCard = document.createElement("a");
aRecipeCard.href = "#"
aRecipeCard.className = "recipe-text";

let imgRecipe = document.createElement("img");
imgRecipe.src = "./img/recipe-2.jpeg";
imgRecipe.className = "recipe-img";

let h5 = document.createElement("h5");
h5.className = "recipe-name";
h5.innerText = "Shahi Paneer";

let p = document.createElement("p");
p.className = "recipe-disp";
p.innerText = "Prep : 25min | Cook : 45min"; 

aRecipeCard.append(imgRecipe);
aRecipeCard.append(h5);
aRecipeCard.append(p);
card.append(aRecipeCard);
recipeG.append(card);