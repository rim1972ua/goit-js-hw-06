const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => {
  textInput.classList.remove("valid");
  textInput.classList.remove("invalid");
  if (textInput.value.length !== 6) {
    textInput.classList.add("invalid");
  }
  textInput.classList.add("valid");
});
