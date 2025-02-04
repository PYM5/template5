// ------------------------------------------------------
// FUNCTION POUR SWITCHER LA NAVBAR DESKTOP OU MOBILE
// Utilise la classe hidden pour cacher ou montrer le menu
// Utilise dans la partie HTML la variable TailwindCSS custombp
function toggleMenu() {
  const menu = document.getElementById("homeMenu");
  menu.classList.toggle("hidden");
}

// ------------------------------------------------------
// BOUTON GO TO THE TOP OF THE PAGE
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

// ------------------------------------------------------
// BOUTON GO TO THE TOP OF THE PAGE
