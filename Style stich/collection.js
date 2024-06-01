var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase();
    for (var count = 0; count < productlist.length; count = count + 1) {
        var productName = productlist[count].querySelector("p").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});

