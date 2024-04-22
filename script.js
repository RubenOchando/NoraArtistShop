function flipImage() {
    var image = document.querySelector('.image');
    image.classList.toggle('flipped');
  }

function showAlert(){
    var image = document.querySelector('.popup');

    alert("This is a TEST JavaScript alert! - ready to buy");

   // redirectToPurchasePage();

}



function addToCart() {
    document.addEventListener('DOMContentLoaded', function() {
        var addToCartButton = document.querySelector('.popup');
        addToCartButton.addEventListener('click', addToCart);
    });
   
    //const price = parseFloat(document.querySelector('.back p:third-child').textContent.replace('Pris: NOK', ''));
    const price = parseFloat(document.getElementById('price').textContent.replace('Pris: NOK', ''));
    const quantity = 1 ;
    const totalPrice = price * quantity;
    localStorage.setItem('cartTotal', totalPrice);
    window.location.href = 'purchase/shopping-cart.html'; // Redirect to shopping cart page
}



function redirectToPurchasePage() {
    // Specify the URL of the new page
    var newPageUrl = "purchase/index.html";
  
    // Navigate to the new page
    window.location.href = newPageUrl;
  }