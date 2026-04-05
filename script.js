// Function to show welcome message
function showMessage() {
    alert("Welcome to My DevOps Website 🚀");
}

// Change background color
function changeColor() {
    document.body.style.backgroundColor = "#f0f8ff";
}

// Display current date and time
function showDateTime() {
    const now = new Date();
    document.getElementById("time").innerHTML =
        "Current Time: " + now.toLocaleString();
}