const searchInput = document.querySelector('#search-input')
const searchBtn = document.querySelector('button')
const mealList = document.querySelector('#meal-card')
const mealResults = document.querySelector('#result')
const getRecipe = document.querySelector('#get-recipe')

//event listeners


// get meal list with ingredient
searchBtn.addEventListener('click', getMeals)

function getMeals() {
  let searchInput = document.querySelector('#search-input').value.trim()
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#meal-name').innerHTML = searchInput
      let resultList = ''
      if (data.meals) {
        data.meals.forEach(meal => {
          resultList += ` 
            <div class="flex flex-col rounded-xl w-72  py-3 meal-card"  >
                <div class="w-72 h-72"  >
                    <img class="rounded-t-lg object-cover w-full h-full drop-shadow-md" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                </div>
                <div class="text-center font-body text-xl bg-black bg-opacity-30 rounded-b-md flex flex-col" data-id="${meal.idMeal}">
                    <span class="font-semibold">${meal.strMeal} </span>
                    <span><a href="" class="text-cyan-300 italic underline leading-relaxed get-recipe" >Get Recipes</a></span>
                </div>
            </div>
          </div>`
        })
        mealResults.classList.remove('hidden')
      } else {
        html = 'Sorry, no meal found with this ingredient'
      }
      mealList.innerHTML = resultList
    })
}



// get recipe of selected meal
 mealList.addEventListener('click', getMealRecipe)

function getMealRecipe(e){
  e.preventDefault();
  if(e.target.classList.contains('get-recipe')){
      let mealItem = e.target.parentElement.parentElement;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
      .then(response => response.json())
      .then(data => detailsModal(data.meals));
      console.log(mealItem);
  }
}

function detailsModal(meal){
  console.log(meal);
  meal = meal[0]
}
