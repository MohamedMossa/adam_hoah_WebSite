
function changeLanguage() {
  // Get the current URL
  var currentUrl = window.location.href;
  // Check if the URL ends with 'index-ar.html'
  if (currentUrl.endsWith('index-ar.html')) {
    // Redirect to the English version
    window.location.href = 'index.html';
  } else {
    // Redirect to the Arabic version
    window.location.href = 'index-ar.html';
  }
}

document.getElementById("switch-lang").addEventListener("click", function() {
  changeLanguage();
});