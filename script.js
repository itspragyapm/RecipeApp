async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=12&apiKey=${"44560f2abaef4e35b3ce11b0a02087df"}`
  );

  const data = await response.json();

  return data.recipes;
}

function displayRecipes(recipes) {
  const recipeContainer = document.getElementById('recipeContainer');
  recipeContainer.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2 class="recipe-title">${recipe.title}</h2>
      <p>${recipe.summary.substring(0, 100)}...</p>
      <button class="favorite-btn" onclick="toggleFavorite(this)">♡</button>
      <button onclick="showModal(${recipe.id})">View Details</button>
    `;
    recipeContainer.appendChild(recipeCard);
  });
}

function toggleFavorite(button) {
  button.classList.toggle('favorite');
}

async function showModal(recipeId) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${"44560f2abaef4e35b3ce11b0a02087df"}`);
  const recipe = await response.json();

  const modal = document.getElementById('recipeModal');
  const modalContent = document.getElementById('modalRecipeContent');
  modalContent.innerHTML = `
    <h2>${recipe.title}</h2>
    <img src="${recipe.image}" alt="${recipe.title}">
    <p>${recipe.instructions}</p>
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
    </ul>
  `;
  modal.style.display = 'block';
}

document.querySelector('.close').onclick = function() {
  document.getElementById('recipeModal').style.display = 'none';
}

function searchRecipes() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const recipeCards = document.querySelectorAll('.recipe-card');
  recipeCards.forEach(card => {
    const title = card.querySelector('.recipe-title').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterByCategory() {
  const category = document.getElementById('categoryFilter').value;
  const recipeCards = document.querySelectorAll('.recipe-card');
  recipeCards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

document.addEventListener('DOMContentLoaded', async () => {
  const recipes = await getRecipes();
  displayRecipes(recipes);
});
