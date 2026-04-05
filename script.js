// Popup automatically when page loads
window.onload = function () {
    alert("Welcome to Multi Environment Static Website 🚀");
};

// Change background color
function changeColor() {
    const colors = ["lightblue", "lightgreen", "lightyellow", "lavender"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
// Show current time
function showTime() {
    const now = new Date();
    document.getElementById("time").innerHTML =
        "Current Time: " + now.toLocaleString();
}