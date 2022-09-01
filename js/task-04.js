let counterValue = 0;

const displayValue = document.getElementById("value");

// v1
const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');

decrButton.addEventListener("click", () => {
  counterValue -= 1;
  displayValue.textContent = counterValue;
});

incrButton.addEventListener("click", () => {
  counterValue += 1;
  displayValue.textContent = counterValue;
});

// v2 - not work
// const counter = document.getElementById("counter");

// const handleClick = (event) => {
//   if (
//     (event.Target = document.querySelector('button[data-action="decrement"]'))
//   ) {
//     counterValue -= 1;
//   } else if (
//     (event.Target = document.querySelector('button[data-action="increment"]'))
//   ) {
//     counterValue += 1;
//   }
//   return (displayValue.textContent = counterValue);
// };

// counter.addEventListener("click", handleClick);
