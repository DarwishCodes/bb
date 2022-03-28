// Footer Accordian
// Adapted from W3 Schools Collapsible guide
var coll = document.getElementsByClassName("expander__toggle");
var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      // toggles active or not
    //   alert("test");
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      // toggle hiding or showing
      if (content.style.display === "block"){
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
  });
}