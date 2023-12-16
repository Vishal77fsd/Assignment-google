const textInput = document.getElementById("text_input");

textInput.addEventListener("keypress", (e) => {
  //   if user press enter
  if (e.key == "Enter") {
    window.open(`https://www.google.com/search?q=${textInput.value}`);
    textInput.value = "";
  }
});
