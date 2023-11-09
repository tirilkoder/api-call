// Fetches HTML element from "index.html"
const boredCard = document.querySelector(".bored_card");

// Fetches the data from the url and displays it in the browser
function getActivity() {
    fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
    // Removes the activity paragraph before it adds a new one
      boredCard.innerHTML = "";
      console.log(data);
    // Create a new paragraph element with the activity text from the data object
    const newParagraph = document.createElement("p");
    newParagraph.innerText = data.activity;
    // Adds the new paragraph to div "bored_card"
    boredCard.appendChild(newParagraph);
    })
    // If there is an error, log it to the console
    .catch((error) => console.log(error));
}