document.addEventListener('DOMContentLoaded', function() {
   
    var productImage = document.getElementById('productImage');
    var productImage1 = document.getElementById('productImage1');
    var productImage2 = document.getElementById('productImage2');


    productImage.addEventListener('mouseover', function() {
       
        productImage.src = 'img/card5_2.png';
    });

   
    productImage.addEventListener('mouseout', function() {
       
        productImage.src = 'img/card5.png';
    });

   
    productImage1.addEventListener('mouseover', function() {
        productImage1.src = 'img/card7_2.png';
    });

    productImage1.addEventListener('mouseout', function() {
        productImage1.src = 'img/card7.png';
    });

    productImage2.addEventListener('mouseover', function() {
      
        productImage2.src = 'img/card8_2.png';
    });

    
    productImage2.addEventListener('mouseout', function() {
     
        productImage2.src = 'img/card8.png';
    });









});
