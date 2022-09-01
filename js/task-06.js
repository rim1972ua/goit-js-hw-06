const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length !== 6) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
  textInput.classList.remove("invalid");
  textInput.classList.add("valid");
});
