let data = JSON.parse(localStorage.getItem('CartData')) || []
document.getElementById('length').textContent = data.length;



display(data)
if (data.length > 0) {
    document.querySelector('#doshopping').style.display = 'none'
    display(data)
    totalPrice()
} else {
    document.querySelector('.shubhamPaymentCart').style.display = 'none'
    document.getElementById('shubhamcartItem').style.display = 'none'
    document.getElementById('cartshubhamfirstdiv').style.display = 'none'
    doShopping();
}

// totalPrice()
function totalPrice() {
    var total = 0
    var totalsum = 0
    for (var i = 0; i < data.length; i++) {
        total += parseInt(data[i].price)
    }
    document.getElementById('subtotal').textContent = total;
    var gst = document.getElementById('gst').textContent = 54
    var res = document.getElementById('res').textContent = 180
    totalsum = gst + res
    document.getElementById('totalSum').textContent = parseInt(total + totalsum)
    document.getElementById('navbar-price').innerText='₹'+parseInt(total+totalsum)+'.00';

    localStorage.setItem('payableAmount', total)
}
 


function doShopping() {

    let div = document.createElement('div')
    div.id = 'doShopping'

    let child1 = document.createElement('div')
    child1.id = 'headingBox'
    let h1 = document.createElement('h1')
    h1.textContent = `YOUR CART IS EMPTY. LET'S START AN ORDER!`
    h1.id = 'emptyHeading'

    let btn = document.createElement('button')
    btn.textContent = 'Start Order'
    btn.id = 'startOrder'
    btn.addEventListener('click', function(){
        window.location.href='./product.html'
    })

    child1.append(h1, btn)

    let child2 = document.createElement('div')
    child2.id = 'doShopImage'

    let img = document.createElement('img')
    img.src = 'https://online.kfc.co.in/static/media/empty_cart.32f17a45.png'
    img.alt = 'EmptyImage'
    child2.append(img)
    div.append(child1, child2)
    document.querySelector('#doshopping').append(div)
}


function display(data) {
    document.getElementById('length').textContent = data.length;
    document.getElementById('shubhamcartItem').textContent = ''
    data.map(function (elem, idx) {

        let box1 = document.createElement('div')
        box1.id = 'box1'

        let img = document.createElement('img')
        img.src = elem.image;
        img.setAttribute('class', 'cartImage')

        let box2 = document.createElement('div')
        box2.id = 'box2'

        let boxname = document.createElement('div')
        boxname.id = 'boxname'

        let name = document.createElement('p')
        name.textContent = elem.name
        name.setAttribute('class', 'cartName')
        boxname.append(name)


        let boxtyperemove = document.createElement('div')
        boxtyperemove.id = 'boxtyperemove'
        let type = document.createElement('p')
        type.textContent = elem.type
        type.setAttribute('class', 'cartType')

        let remove = document.createElement('p')
        remove.textContent = 'Remove item'
        remove.setAttribute('class', 'cartRemove')
        remove.addEventListener('click', function () {
            removeCartData(elem, idx)
        })

        boxtyperemove.append(type, remove)
        box2.append(boxname, boxtyperemove)


        let box3 = document.createElement('div')
        box3.id = 'box3'


        let boxqunatity = document.createElement('div')
        boxqunatity.id = 'boxquantity'
        let minus = document.createElement('span');
        minus.innerHTML = '<ion-icon name="remove-outline"></ion-icon>'
        minus.setAttribute('class', 'minus')
        minus.onclick = function () {
            minusfun(count.textContent)
        }
        
        function minusfun(val) {

            if (val == 1) {
                return
            } else {
                let amount = parseInt(val) - 1;
                let totalamount = parseInt(elem.price * amount);
                count.textContent = parseInt(amount);
                price.textContent = "₹" + totalamount;

                var subtotal = document.getElementById('subtotal').textContent
                var last = parseInt(subtotal) - parseInt(elem.price)
                document.getElementById('subtotal').textContent = last

                var gst = document.getElementById('gst').textContent = 54
                var res = document.getElementById('res').textContent = 180
                totalsum = gst + res
                document.getElementById('totalSum').textContent = parseInt(last + totalsum)
                document.getElementById('navbar-price').innerText='₹'+parseInt(last+totalsum)+'.00';

            }

        }

        let count = document.createElement('span');
        count.innerText = '1'
        count.setAttribute('class', 'count')

        let plus = document.createElement('span');
        plus.innerHTML = '<img src="https://online.kfc.co.in/static/media/cart-plus.81d0f379.svg" alt="">';
        plus.setAttribute('class', 'plus')
        plus.addEventListener('click', function () {
            let amount = parseInt(count.textContent) + 1;
            let totalamount = parseInt(elem.price * amount);
            count.textContent = parseInt(amount);
            price.textContent = "₹" + totalamount;
            var subtotal = document.getElementById('subtotal').textContent
            var last = parseInt(subtotal) + parseInt(elem.price)
            document.getElementById('subtotal').textContent = last
            var gst = document.getElementById('gst').textContent = 54
            var res = document.getElementById('res').textContent = 180
            totalsum = gst + res
            document.getElementById('totalSum').textContent = parseInt(last + totalsum)
            
         document.getElementById('navbar-price').innerText='₹'+parseInt(last+totalsum)+'.00';
        })
        
        

        let boxprice = document.createElement('div')
        boxprice.id = 'boxprice'
        let price = document.createElement('span')
        price.setAttribute('class', 'cartPrice');
        price.innerText = "₹" + elem.price;

        boxqunatity.append(minus, count, plus)
        boxprice.append(price)

        box3.append(boxqunatity, boxprice)


        box1.append(img, box2, box3)
        document.getElementById('shubhamcartItem').append(box1)


    })
}

function removeCartData(elem, idx) {
    data.splice(idx, 1)
    localStorage.setItem('CartData', JSON.stringify(data))
    display(data)
    totalPrice()
}






document.getElementById('disblock').addEventListener('click', function(){
    document.querySelector('.discountPop').style.display='block'
})
document.getElementById('applyDiscountButton').addEventListener('click', function(){
    document.querySelector('.discountPop').style.display='none'
})



document.getElementById('applyDiscountButton').addEventListener('click', function(){
    discountdedo()
    // document.querySelector('.discountPop').style.display='none'
})
function discountdedo(){
   var inputVal=document.getElementById('discountField').value 
   if(inputVal==='masai30'){
      document.getElementById('headingshubhamchaubey').textContent='Applied Coupon Successfully'
      var t=parseInt( document.getElementById('subtotal').textContent)
      var change=(t*3/10)
      document.getElementById('subtotal').textContent=t-change
      document.getElementById('totalSum').textContent=t-change 
      document.getElementById('navbar-price').innerText='₹'+parseInt(t-change)+'.00';
   }
   
}


var usernameData=JSON.parse(localStorage.getItem('username'))
if(usernameData){
    document.getElementById('navbar-account').textContent=usernameData.name;
}else{
    document.getElementById('navbar-account').innerText='Sign In';
}





function changeAddress() {
    document.querySelector('.addresspopup').style.display = 'block'
}

function addressBack() {
    document.querySelector('.addresspopup').style.display = 'none'
}
function addressClose() {
    document.querySelector('.addresspopup').style.display = 'none'
}


let homeData = JSON.parse(localStorage.getItem('homeAddress')) 
let homeTime = JSON.parse(localStorage.getItem('homeTiming'))
document.getElementById('newAdd').textContent = homeData
document.getElementById('addnewTime').textContent = homeTime

function addConfirm(){
    var inputLoc = document.getElementById('addLoc').value;
    var inputTiming = document.getElementById('asap').value;

    localStorage.setItem('homeAddress', JSON.stringify(inputLoc))
    localStorage.setItem('homeTiming', JSON.stringify(inputTiming))

    document.getElementById('newAdd').textContent = inputLoc
    document.getElementById('addnewTime').textContent = inputTiming

    // window.location.href = '/KFC/HTML/deals.html'
    document.querySelector('.addresspopup').style.display = 'none'
}













