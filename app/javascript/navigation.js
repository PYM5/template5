function toggleMenu() {
  const menu = document.getElementById("homeMenu");
  menu.classList.toggle("hidden");
}

// JavaScript to handle the Back to Top button
document.addEventListener("DOMContentLoaded", function() {
  // Get the button
  var backToTopButton = document.getElementById("backToTop");

  // Show the button when the user scrolls down 100px from the top of the document
  window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backToTopButton.classList.remove("hidden");
      } else {
          backToTopButton.classList.add("hidden");
      }
  };

  // When the user clicks on the button, scroll to the top of the document
  backToTopButton.onclick = function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Smooth scrolling
      });
  };
});
