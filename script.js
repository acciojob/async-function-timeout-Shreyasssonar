//your JS code here. If required.
// Get references to HTML elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const submitButton = document.getElementById('btn');

// Add click event listener to submit button
submitButton.addEventListener('click', async function() {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    await delayAndDisplay(text, delay);
});

// Async function to delay and display text
async function delayAndDisplay(text, delay) {
    await sleep(delay);
    outputDiv.textContent = text;
}

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
