const control = document.getElementById("font-size-control");
const text = document.getElementById("text");

// console.log(text.textContent);
text.style.fontSize = control.value + `px`;

control.addEventListener("input", (event) => {
  //   console.log(event.currentTarget.value);
  //   text.style.cssText = `"font-size: ${event.currentTarget.value}px`;
  text.style.fontSize = event.currentTarget.value + `px`;
});
