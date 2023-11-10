// Fetches HTML element from "index.html"
const boredCard = document.querySelector(".bored_card");

// Fetches the data from the url and displays it in the browser
function randomJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
    // Removes the quote paragraph before it adds a new one
      boredCard.innerHTML = "";
      console.log(data);
      
    // Create a new paragraph element with the setup text from the data object
    const setupParagraph = document.createElement("p");
    setupParagraph.textContent = data.setup || "No joke found";
    setupParagraph.className = "setup";
    
    // Create a new paragraph element with the punchline text from the data object
    const punchlineParagraph = document.createElement("p");
    punchlineParagraph.textContent = data.punchline;
    punchlineParagraph.className = "punchline";
   
    // Adds the new paragraph to div "bored_card"
    boredCard.appendChild(setupParagraph);
    boredCard.appendChild(punchlineParagraph); 
    })
    
    // If there is an error, log it to the console
    .catch((error) => console.log(error));
}