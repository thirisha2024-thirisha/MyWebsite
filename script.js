function showMessage() {
    alert("Welcome to Multi environment Static Website 🚀");
}

function changeColor() {
    document.body.style.backgroundColor = "#e6f7ff";
}

function showTime() {
    const now = new Date();
    document.getElementById("time").innerHTML =
        "Current Time: " + now.toLocaleString();
}