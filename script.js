let cartCount = 0;

function addToCart() {

    cartCount++;

    const count = document.getElementById("count");

    if(count){
        count.innerText = cartCount;
    }

    alert("🛒 Product Added To Cart!");
}
function showOffer() {
    alert("🎉 Congratulations! 50% OFF Offer Activated!");
}