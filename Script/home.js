
function navbar() {
    document.querySelector('.shubhamnav').style.display = 'block'
    document.querySelector('.material-symbols-outlined').style.display = 'none'
    document.getElementById('navclose').style.display = 'block';

}

document.getElementById('navclose').addEventListener('click', function () {
    document.querySelector('.shubhamnav').style.display = 'none'
    document.querySelector('.material-symbols-outlined').style.display = 'block'
    document.getElementById('navclose').style.display = 'none';
})


//------- slider-------
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("kfc-posters");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//-------page linking---------
document.getElementById('navbar-menu').addEventListener('click', function () {
    location.href = './HTML/product.html';
})
document.getElementById('navbar-about').addEventListener('click', function () {
    location.href = './HTML/deals.html';
})
document.getElementById('navbar-account').addEventListener('click', function () {
    location.href = './HTML/signup.html';
})
document.getElementById('navbar-cart-bucket').addEventListener('click', function () {
    location.href = './HTML/cart.html';
})
document.getElementById('navbar-kfc-logo').addEventListener('click', function () {
    location.href = 'index.html';
})




// -------after clicking on images moving to product page
document.getElementById("periperi").addEventListener("click", function () {
    periperidiv();
})
function periperidiv() {
    window.location = "./HTML/product.html#periperiday";
}

document.getElementById("match").addEventListener("click", function () {
    matchdiv();
})
function matchdiv() {
    window.location = "./HTML/product.html#matchday";
}

document.getElementById("deal").addEventListener("click", function () {
    dealdiv();
})
function dealdiv() {
    window.location = "./HTML/product.html#dealday";
}

document.getElementById("chickenbucket").addEventListener("click", function () {
    chickendiv();
})

function chickendiv() {
    window.location = "./HTML/product.html#chickenbucketday";
}

document.getElementById("legpiece").addEventListener("click", function () {
    legdiv();
})
function legdiv() {
    window.location = "./HTML/product.html#legpieceday";
}
document.getElementById("rolls").addEventListener("click", function () {
    rolldiv();
})
function rolldiv() {
    window.location = "./HTML/product.html#rollsday";
}
document.getElementById("boxmeal").addEventListener("click", function () {
    boxmealdiv();
})
function boxmealdiv() {
    window.location = "./HTML/product.html#boxmealday";
}

document.getElementById('product').addEventListener('click', function () {
    location.href = 'product.html';
})
function reedemBtn() {
    window.location.href = './HTML/deals.html'
}

let addCartArr = JSON.parse(localStorage.getItem("CartData")) || [];
let valueofPrice = 0;
let allPrice = JSON.parse(localStorage.getItem("CartData")) || [];
function totalPrice() {
    allPrice.forEach(function (elem) {
        console.log(elem.price)
        valueofPrice += parseInt(elem.price);
    })
    document.getElementById('navbar-price').innerText = '₹' + valueofPrice + '.00';
}
totalPrice()


// -----getting username-----
var usernameData = JSON.parse(localStorage.getItem('username'))
if (usernameData) {
    document.getElementById('navbar-account').textContent = usernameData.name;
 }else{
    document.getElementById('navbar-account').textContent='Sign In'
 }




// -----home popup to change address
function changeAddress() {
    document.querySelector('.addresspopup').style.display = 'block'
    // var inputValue=document.getElementById('pickdel').value;
    // var inputLoc=document.getElementById('addLoc').value;
    // var inputTiming=document.getElementById('asap').value,
}
function addressBack() {
    document.querySelector('.addresspopup').style.display = 'none'
}
function addressClose() {
    document.querySelector('.addresspopup').style.display = 'none'
}

let homeData = JSON.parse(localStorage.getItem('homeAddress')) || ''
let homeTime = JSON.parse(localStorage.getItem('homeTiming')) || ''



function addConfirm() {
    var inputLoc = document.getElementById('addLoc').value;
    var inputTiming = document.getElementById('asap').value;

    localStorage.setItem('homeAddress', JSON.stringify(inputLoc))
    localStorage.setItem('homeTiming', JSON.stringify(inputTiming))

    document.getElementById('newAdd').textContent = inputLoc
    document.getElementById('addnewTime').textContent = inputTiming

    // window.location.href = '../index.html'
    document.querySelector('.addresspopup').style.display = 'none'
}
 document.getElementById('newAdd').textContent = homeData
 document.getElementById('addnewTime').textContent = homeTime