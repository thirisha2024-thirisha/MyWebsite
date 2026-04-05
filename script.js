// Popup when URL opens
window.addEventListener("load", function () {
    alert("Welcome! CI/CD Website Successfully Deployed 🚀");
});

// Show Current Time
function showTime() {
    const now = new Date();
    document.getElementById("time").innerHTML =
        "Current Time: " + now.toLocaleString();
}

// Change Background Color
function changeColor() {
    const colors = ["lightblue", "lightgreen", "lightyellow", "lavender"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Automatic Dark Mode (after 7 PM)
const hour = new Date().getHours();
if (hour >= 19) {
    document.body.classList.add("dark-mode");
}