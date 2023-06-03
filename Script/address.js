function gotoCart(){
    window.location.href='./cart.html'
}

function gotoLogin(){
    window.location.href='./signup.html'
}
function gotoHome(){
    window.location.href='../index.html'
}


let homeData = JSON.parse(localStorage.getItem('homeAddress')) 
let homeTime = JSON.parse(localStorage.getItem('homeTiming'))
document.getElementById('addUserAddress').textContent = homeData
document.getElementById('userTimingOfDel').textContent = homeTime


document.getElementById('changeAdd').addEventListener('click', function(){
    document.querySelector('.addresspopup').style.display = 'block'
})
    

function addressBack() {
    document.querySelector('.addresspopup').style.display = 'none'
}
function addressClose() {
    document.querySelector('.addresspopup').style.display = 'none'
}
// let homeData = JSON.parse(localStorage.getItem('homeAddress')) 
// let homeTime = JSON.parse(localStorage.getItem('homeTiming'))
// document.getElementById('newAdd').textContent = homeData
// document.getElementById('addnewTime').textContent = homeTime

function addConfirm(){
    var inputLoc = document.getElementById('addLoc').value;
    var inputTiming = document.getElementById('asap').value;

    localStorage.setItem('homeAddress', JSON.stringify(inputLoc))
    localStorage.setItem('homeTiming', JSON.stringify(inputTiming))

     window.location.href = 'address.html'
    document.querySelector('.addresspopup').style.display = 'none'
}

let totalItempresent=JSON.parse(localStorage.getItem('CartData')) || 0
document.getElementById('itemincart').textContent=totalItempresent.length+' '

let payableAm=JSON.parse(localStorage.getItem('payableAmount')) || 0
document.getElementById('payableTotal').textContent=payableAm


document.getElementById('uhavetoPay').textContent= '₹'+parseInt(payableAm+180+54)

localStorage.setItem('lastAmount', parseInt(payableAm+180+54))



//Storing data for final last page----------
let DeliveryDetails=[]
document.getElementById('gettingUserDetails').addEventListener('click', userDetail)
function userDetail(){
    let detail={
        name:document.getElementById('userName').value,
        mobile:document.getElementById('userPhone').value,
        email:document.getElementById('userEmail').value

    }
    
    DeliveryDetails.push(detail)

    localStorage.setItem('userDetails', JSON.stringify(DeliveryDetails))
}


//choosing payment method--------------
document.getElementById('showpaymentMethods').addEventListener('click', function(){
    document.getElementById('mainchoosepayment').style.display='block';
})
document.getElementById('closeMethod').addEventListener('click', function(){
    document.getElementById('mainchoosepayment').style.display='none';
})
document.getElementById('choosingMethodDoneBtn').addEventListener('click', function(){
    document.getElementById('mainchoosepayment').style.display='none';
})









//login signUP-----------
var usernameData=JSON.parse(localStorage.getItem('username'))
if(usernameData){
    document.getElementById('accountUser').textContent=usernameData.name;
}else{
    document.getElementById('accountUser').innerText='Account';
}





document.getElementById('gotopaymentgateway').addEventListener('click', function(){
    window.location.href='./payment.html'
})