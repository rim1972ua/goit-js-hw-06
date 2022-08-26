const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

const items = [];

ingredients.forEach((item) => {
  const li = document.createElement("li");

  li.textContent = item;
  li.classList.add("item");

  items.push(li);
});

list.append(...items);
