var accord = document.getElementsByClassName("according");
var point;

for (point = 0; point < accord.length; point++) {
  accord[point].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
