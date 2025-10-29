//Select all .item elements
const items = document.querySelectorAll(".item");

//Function: set the clicked/active item
function setActive() {
  //Remove 'active' class from all item
  items.forEach((item) => item.classList.remove("active"));

  //Add 'active' class to the clicked item
  this.classList.add("active");
}

//Bind click events to each item
items.forEach((item) => {
  item.addEventListener("click", setActive);

  //Add keyboard accessibility: allow Enter or Space to trigger
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive.call(item);
    }
  });
});
