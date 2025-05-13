// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("description").textContent = "You just changed this text using JavaScript!";
});

// Modify CSS styles via JavaScript
document.getElementById("changeStyleBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#f0f8ff"; // light blue
  document.getElementById("main-title").style.color = "darkred";
});

// Add or remove an element when a button is clicked
document.getElementById("toggleBoxBtn").addEventListener("click", () => {
  const boxContainer = document.getElementById("box-container");
  const box = document.getElementById("magic-box");

  if (box) {
    boxContainer.removeChild(box);
  } else {
    const newBox = document.createElement("div");
    newBox.id = "magic-box";
    newBox.textContent = "✨ I'm a new box!";
    newBox.style.padding = "20px";
    newBox.style.backgroundColor = "lightgreen";
    newBox.style.marginTop = "10px";
    newBox.style.borderRadius = "10px";
    boxContainer.appendChild(newBox);
  }
});
