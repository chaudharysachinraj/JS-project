let food = document.querySelector('.food');

let Indian = document.getElementById("Indian");
let Canadian = document.getElementById("Canadian");
let American = document.getElementById("American");
let Thai = document.getElementById("Thai");
let British = document.getElementById("British");
let Russian = document.getElementById("Russian");


let recipe;


const fetchData = async (area) => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);

    const data = await api.json();
    recipe = data.meals;

    console.log(recipe);

    showData(recipe);
};


const searchRecipe = async () => {
    let input = document.getElementById("search");
    input.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            let inputvalue = input.value;

            const api = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`);

            const data = await api.json();
            recipe = data.meals;
            // console.log(inputvalue);

            showData(recipe);
        }
    });
};
searchRecipe();


let showData = (recipe) => {
    food.innerHTML = recipe.map(
        (meal) => `
    <div style="text-align: center">
    <div>
    <img src= ${meal.strMealThumb} style="width:220px; border:2px solid blue; border-radius: 10px;" />
    </div>
    <h5 style="margin-top:10px">${meal.strMeal}</h5>
    </div>
    `).join(" ")
}


fetchData('indian');

American.addEventListener("click", () => {
    console.log('button clicked');
    fetchData("American")
});

Indian.addEventListener("click", () => {
    console.log('button clicked');
    fetchData("Indian")
});

Canadian.addEventListener("click", () => {
    console.log('button clicked');
    fetchData("Canadian")
});

Thai.addEventListener("click", () => {
    console.log('button clicked');
    fetchData("Thai")
});

British.addEventListener("click", () => {
    console.log('button clicked');
    fetchData("British")
});

Russian.addEventListener("click", () => {
    console.log('button clicked');
    fetchData("Russian")
});



// showData()
