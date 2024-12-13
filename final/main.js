import { recipes } from './recipes.js'; // Correct import

// Get references to HTML elements
const recipesContainer = document.getElementById('recipes-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Function to create a recipe card
function createRecipeCard(recipe) {
    return `
    <article class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <h2>${recipe.name}</h2>
        <p><strong>Ingredients:</strong></p>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
        </ol>
    </article>`;
}

// Function to display recipes
function displayRecipes(recipesToShow) {
    recipesContainer.innerHTML = ''; // Clear current recipes
    recipesToShow.forEach(recipe => {
        recipesContainer.insertAdjacentHTML('beforeend', createRecipeCard(recipe));
    });
}

// Display all recipes initially
displayRecipes(recipes);

// Function to filter recipes based on search query
function filterRecipes(query) {
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()))
    );
    displayRecipes(filteredRecipes);
}

// Add event listener to search button
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    filterRecipes(query);
});

// Add 'Enter' key functionality
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        filterRecipes(query);
    }
});