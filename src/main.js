const hero = document.querySelector('.hero');
const magnifyingGlass = document.querySelector('.magnifying-glass');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('button');
const mealList = document.querySelector('#meal-card');
const mealResults = document.querySelector('#result');
const getRecipe = document.querySelector('#get-recipe');

// nav search bar
// magnifyingGlass.addEventListener('click', () => {
//   searchInput.classList.toggle('hidden');
//   magnifyingGlass.classList.add('invisible');
// });

// get meal list with ingredient
searchBtn.addEventListener('click', getMeals);

function getMeals() {
  let searchInput = document.querySelector('#search-input').value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let resultList = '';
      if (data.meals) {
        data.meals.forEach(meal => {
          resultList += ` 
          <div class="flex flex-wrap w-full">
            <div class="flex flex-col rounded-xl py-3 meal-card" data-id="${meal.idMeal}" >
                <div class="w-72 h-72">
                    <img class="rounded-lg object-cover w-full h-full drop-shadow-md" src="${meal.strMealThumb}" alt="food" />
                </div>
                <div class="text-center font-body text-xl bg-black bg-opacity-30 rounded-b-md flex flex-col">
                    <span class="font-semibold">${meal.strMeal} </span>
                    <span><a href="" class="text-cyan-300 italic underline leading-relaxed">Get Recipes</a></span>
                </div>
            </div>
          </div>`;
        });
        mealResults.classList.remove('hidden');
      } else {
        html = 'Sorry, no meal found with this ingredient';
      }
      mealList.innerHTML = resultList;
    });
}

// get recipe of selected meal
getRecipe.addEventListener('click', recipeDetails);

function recipeDetails(e) {
  e.preventDefault();
  if (e.target.id.contains('get-recipe')) {
    let meal = e.target.parentElement;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.dataset.id}`)
      .then(res => res.json())
      .then(data => recipeDetails(data.meals));
    console.log(meal);
  }
}
