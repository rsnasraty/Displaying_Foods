const createFood = food => {
  return `
  <div>
    <h2 class="food">${food.name}</h2>
    <p class="category"></p>${food.category}</p>
    <p class="ethnicity">${food.ethnicity}</p>
    </div>`;
};

const addFoodToDom = foodHtml => {
  const foodList = document.querySelector("#container");
  foodList.innerHTML += foodHtml;
};

const url = "http://localhost:7088/food";

fetch(url)
  .then(foods => foods.json())
  .then(parsedFoods => {
    parsedFoods.forEach(food => {
      const foodInfo = createFood(food);
      addFoodToDom(foodInfo);
    });
    console.table(parsedFoods);
  });
