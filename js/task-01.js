const listWithId = document.getElementById("categories");

console.log(`Number of categories: ${listWithId.childElementCount}`);
console.log();

const listItems = document.querySelectorAll(".item");

listItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.firstElementChild.nextElementSibling.childElementCount}`
  );
  console.log();
});
