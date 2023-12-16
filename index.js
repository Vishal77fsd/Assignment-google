const textInput = document.getElementById("text_input");
const boxContainer = document.getElementById("box_container");
const searchHistoryContainer = document.getElementById(
  "search_history_container"
);
let isOpen = false;

searchHistoryContainer.style.display = "none";

if (!localStorage.getItem("search_history")) {
  localStorage.setItem("search_history", JSON.stringify([]));
}

// To Store The Search History
textInput.addEventListener("keypress", (e) => {
  //   if user press enter
  if (e.key == "Enter") {
    let oldSearchHistory = JSON.parse(localStorage.getItem("search_history"));

    // We are just storing search history of length 10
    if (oldSearchHistory.length < 10) {
      const newSearchHistory = [textInput.value, ...oldSearchHistory];
      localStorage.setItem("search_history", JSON.stringify(newSearchHistory));
    } else {
      // if search history is greater than 10
      let newSearchHistory = oldSearchHistory.filter((history, index) =>
        index !== oldSearchHistory.length - 1 ? history : ""
      );
      newSearchHistory = [textInput.value, ...newSearchHistory];
      localStorage.setItem("search_history", JSON.stringify(newSearchHistory));
    }

    window.open(`https://www.google.com/search?q=${textInput.value}`);
    textInput.value = "";
  }
});

// To Open Search History
textInput.addEventListener("click", (e) => {
  console.log("extend");
  isOpen = !isOpen;

  // If true then show search history
  if (isOpen) {
    searchHistoryContainer.style.display = "block";
    let oldSearchHistory = JSON.parse(localStorage.getItem("search_history"));

    oldSearchHistory.forEach((searcHistory) => {
      const divElement = document.createElement("div");
      divElement.classList.add("search_history");

      const imgEle = document.createElement("img");
      imgEle.src =
        "https://img.icons8.com/?size=256&id=H0JqzxqGxPQm&format=png";
      imgEle.id = "search_history_img";

      divElement.innerText = searcHistory;
      divElement.prepend(imgEle);
      searchHistoryContainer.appendChild(divElement);
      console.log(searcHistory);
    });
  } else {
    searchHistoryContainer.style.display = "none";
    while (searchHistoryContainer.firstChild) {
      searchHistoryContainer.removeChild(searchHistoryContainer.firstChild);
    }
  }
});
