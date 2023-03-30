$(document).ready(function() {

    var value = parseInt($("#amount").val());

    $("#minus").click(function() {
      if (value > 1) {
        value--;
        $("#amount").val(value)
      }
    });
    
    $("#plus").click(function() {
      value++;
      $("#amount").val(value)
    });


        // Get the thumbnail images
        var thumbImages = $("img[id^='thumb']");
        var thumbImagesModal = $("img[id^='preview_thumb']");
        console.log(thumbImagesModal);
    
        // Add click event handlers to the thumbnail images
        thumbImages.click(function() {
          // Get the source of the clicked thumbnail image
          var src = $(this).attr("src");
          
          // Set the source of the main image to the clicked thumbnail image
          $("#show_thumb").attr("src", src);


          thumbImages.removeClass("active opacity-50");
    
          // Add the "active" class to the clicked thumbnail image
          $(this).addClass("active opacity-50");
        });

        thumbImagesModal.click(function() {
            // Get the source of the clicked thumbnail image
            var src = $(this).attr("src");
            
            // Set the source of the main image to the clicked thumbnail image
            $("#show_thumb_preview").attr("src", src);
  
  
            thumbImagesModal.removeClass("active opacity-75");
      
            // Add the "active" class to the clicked thumbnail image
            $(this).addClass("active opacity-75");
          });


var cart = []; // initialize an empty cart array
var nextCartItemID = 0;
// when the "Add to Cart" button is clicked
$('#add_to_cart').on('click', function() {
  var item = {
    id: nextCartItemID++, // assign a unique ID to the item
    name: $("#name_product").text(), // replace with the actual name of the product
    price: parseFloat($('#price_product').text().replace('$', '')), // replace with the actual price of the product
    quantity: parseInt($('#amount').val()) // get the quantity from the input field and convert to an integer
  };

  cart.push(item); // add the item to the cart array
  
  updateCart();// update the HTML content of the cart
});

function updateCart() {
  var cartItems = $('#cart_item');
  cartItems.empty(); // remove all existing items from the cart
  var counter = 0;

  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];

      const html = `
      <div id="cart_item_${item.id}" class="row align-items-center p-2">
        <div class="col-3 p-0">
            <img src="/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg" height="75" width="75">
        </div>
        <div class="col-8 lh-1 p-0">
            <p>${item.name}</p>
            <p>$${item.price} x ${item.quantity} <b>$${(item.price * item.quantity).toFixed(2)}</b></p>
        </div>
        <div class="col-1 p-0">
            <svg data-cart-item-id="${item.id}" id="delete" class="btn btn-sm border-0" width="30" height="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </div>
        <div class="col-12 p-0 py-2">
            <button id="checkout" class="btn text-white rounded-3 w-100">Checkout</button>
        </div>
      </div>
`;
    
      cartItems.append(html);// add the item to the cart HTML
      counter++;
      $('#cart_count').text(counter);
    
    }

    $('#delete').click(function(){
      var cartItemID = $(this).data('cart-item-id');
      $('#cart_item_' + cartItemID).remove();
      // remove the item from the cart array
      cart = cart.filter(item => item.id !== cartItemID);
      counter--;
      $('#cart_count').text(counter);

    })
     

  } else {
    cartItems.append('<div>Your cart is empty</div>'); // show a message if the cart is empty
  }
}

  });

  
  