function showInfo() {
    alert("This is the section of general information.");
  }

  function showGallery() {
    alert("This is the interactive gallery.");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      document.getElementById("weatherText").innerText = "Soleado, 24°C";
    }, 1500);
  });