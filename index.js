
const form = document.querySelector('form') // grab the form 
form.addEventListener("submit" , convertUSDtoWon) // listen for submit or onsubmit

function convertUSDtoWon(event) { // conversion
    event.preventDefault() // stop form from refreshing page
    const usd = Number(event.target.usd.value) // get form value
    const won = usd / 0.00078 // convert to Won
    // now display on page:
    document.querySelector("h2").innerText = 
    "$" + usd.toLocaleString() +" USD is equal to " + won.toLocaleString()+ ' Korean Won'
}
