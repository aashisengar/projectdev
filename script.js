// Get references to the result input element and all the buttons
const result = document.getElementById("result");
const buttons = document.querySelectorAll("input[type='button']");

// Add click event listeners to all the buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.value === "=") {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = "Error";
            }
        } else if (button.value === "c") {
            result.value = "";
        } else {
            result.value += button.value;
        }
    });
});
