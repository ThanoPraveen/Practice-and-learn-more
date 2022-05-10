var accord = document.getElementsByClassName("according");
var point;

for (point = 0; point < accord.length; point++) {
  accord[point].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    // if (panel.style.display === "block") { // normal method
    if (panel.style.maxHeight) {
      // panel.style.display = "none"; // normal method
      panel.style.maxHeight = null;
    } else {
      // panel.style.display = "block"; // normal method
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
