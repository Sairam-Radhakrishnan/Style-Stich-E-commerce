var sidenav = document.querySelector(".side-navbar")


function showNavbar(){
    sidenav.style.left = "0"
}

function closeNavbar(){
    sidenav.style.left = "-60%"
}

// Collection JS code



function subscribe() {
    const sub = document.getElementById("sub").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!sub) {
        window.alert("Please enter an Email Id to subscribe!");
    } else if (!emailRegex.test(sub)) {
        window.alert("Please enter a valid Email Id!");
    } else {
        window.alert("Thanks! Subscribed for Newsletter");
    }
}




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
      

function calculateTotal() {
    const selectedSize = parseFloat(document.querySelector('input[name="size"]:checked').value);
    const name = document.getElementById("name-products").textContent;
    const dis = document.getElementById("name-price");
    const quantity = parseFloat(document.getElementById("quantity").value);
    const totalAmount = selectedSize * quantity;
    dis.textContent = name + " " + "Qty "+ quantity + " Rs. " + totalAmount;

    
    
    
}
function removeFromBag(){
    const dis = document.getElementById("name-price");
    dis.textContent = ""
    
}




function calculateTotal1() {

    const selectedSize1 = parseFloat(document.querySelector('input[name="size1"]:checked').value);
    const name1 = document.getElementById("name-products1").textContent;
    const dis1 = document.getElementById("name-price1");
    const quantity1 = parseFloat(document.getElementById("quantity1").value);
    const totalAmount1 = selectedSize1 * quantity1;
    dis1.textContent = name1 + " " + "Qty "+ quantity1 + " Rs. " + totalAmount1;
}

function removeFromBag1(){
    const dis1 = document.getElementById("name-price1");
    dis1.textContent = ""
    
}

function calculateTotal2() {

    const selectedSize2 = parseFloat(document.querySelector('input[name="size2"]:checked').value);
    const name2 = document.getElementById("name-products2").textContent;
    const dis2 = document.getElementById("name-price2");
    const quantity2 = parseFloat(document.getElementById("quantity2").value);
    const totalAmount2 = selectedSize2 * quantity2;
    dis2.textContent = name2 + " " + "Qty "+ quantity2 + " Rs. " + totalAmount2;
}

function removeFromBag2(){
    const dis2 = document.getElementById("name-price2");
    dis2.textContent = ""
    
}



function calculateTotal3() {

    const selectedSize3 = parseFloat(document.querySelector('input[name="size3"]:checked').value);
    const name3 = document.getElementById("name-products3").textContent;
    const dis3 = document.getElementById("name-price3");
    const quantity3 = parseFloat(document.getElementById("quantity3").value);
    const totalAmount3 = selectedSize3 * quantity3;
    dis3.textContent = name3 + " " + "Qty "+ quantity3 + " Rs. " + totalAmount3;
}

function removeFromBag3(){
    const dis3 = document.getElementById("name-price3");
    dis3.textContent = ""
    
}

function calculateTotal4() {

    const selectedSize4 = parseFloat(document.querySelector('input[name="size4"]:checked').value);
    const name4 = document.getElementById("name-products4").textContent;
    const dis4 = document.getElementById("name-price4");
    const quantity4 = parseFloat(document.getElementById("quantity4").value);
    const totalAmount4 = selectedSize4 * quantity4;
    dis4.textContent = name4 + " " + "Qty "+ quantity4 + " Rs. " + totalAmount4;
}

function removeFromBag4(){
    const dis4 = document.getElementById("name-price4");
    dis4.textContent = ""
    
}

function calculateTotal5() {

    const selectedSize5 = parseFloat(document.querySelector('input[name="size5"]:checked').value);
    const name5 = document.getElementById("name-products5").textContent;
    const dis5 = document.getElementById("name-price5");
    const quantity5 = parseFloat(document.getElementById("quantity5").value);
    const totalAmount5 = selectedSize5 * quantity5;
    dis5.textContent = name5 + " " + "Qty "+ quantity5 + " Rs. " + totalAmount5;
}

function removeFromBag5(){
    const dis5 = document.getElementById("name-price5");
    dis5.textContent = ""
    
}

function calculateTotal6() {

    const selectedSize6 = parseFloat(document.querySelector('input[name="size6"]:checked').value);
    const name6 = document.getElementById("name-products6").textContent;
    const dis6 = document.getElementById("name-price6");
    const quantity6 = parseFloat(document.getElementById("quantity6").value);
    const totalAmount6 = selectedSize6 * quantity6;
    dis6.textContent = name6 + " " + "Qty "+ quantity6 + " Rs. " + totalAmount6;
}

function removeFromBag6(){
    const dis6 = document.getElementById("name-price6");
    dis6.textContent = ""
    
}
function calculateTotal7() {

    const selectedSize7 = parseFloat(document.querySelector('input[name="size7"]:checked').value);
    const name7 = document.getElementById("name-products7").textContent;
    const dis7 = document.getElementById("name-price7");
    const quantity7 = parseFloat(document.getElementById("quantity7").value);
    const totalAmount7 = selectedSize7 * quantity7;
    dis7.textContent = name7 + " " + "Qty "+ quantity7 + " Rs. " + totalAmount7;
}

function removeFromBag7(){
    const dis7 = document.getElementById("name-price7");
    dis7.textContent = ""
    
}
function send(){
    const name  = document.getElementById("name").value;
    const mail = document.getElementById("mail").value
   const msg =  document.getElementById("msg").value;

   if(!name){
    
    window.alert("Please Enter Name")
   }
   else if(!mail){
    
    window.alert("Please Enter Mail")
   }
   else if(!msg){
    
    window.alert("Please Enter Your Message")
   }
   else{ window.alert("Thank You We will get back to you. Appreciate you reaching out")}
   
   
}