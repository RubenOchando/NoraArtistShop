function flipImage() {
    var image = document.querySelector('.image');
    image.classList.toggle('flipped');
  }

function showAlert(){
    var image = document.querySelector('.popup');

    alert("This is a TEST JavaScript alert! - ready to buy");
    
    redirectToPurchasePage();

}

function redirectToPurchasePage() {
    // Specify the URL of the new page
    var newPageUrl = "purchase/index.html";
  
    // Navigate to the new page
    window.location.href = newPageUrl;
  }