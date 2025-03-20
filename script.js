






const button = document.getElementById("myButton");
const dropdown = document.getElementById("dropdownMenu");

button.addEventListener("click", (event) => {
    event.stopPropagation();
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (event) => {
  if (!event.target.matches('#myButton')) {
    dropdown.style.display = "none";
  }
});
