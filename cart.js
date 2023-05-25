// let data
// function display(obj) {
//     let mainDiv = document.querySelector('.mainContainer');
//     obj.forEach(function (element, index) {
//         let div1 = document.createElement('div');
//         div1.setAttribute('class', 'cards');
//         let div2 = document.createElement('div');
//         div2.setAttribute('class', 'cardsLeft')
//         let div3 = document.createElement('div');
//         div3.setAttribute('class', 'logo');
//         let img = document.createElement('img');
//         img.setAttribute('src', element.Image)
//         div3.append(img);
//         div2.append(div3);
//         // div1.append(div2);
//         let div4 = document.createElement('div');
//         div4.setAttribute('class', 'cardName')
//         let div5 = document.createElement('div');
//         div5.innerText = element.Name;
//         let div6 = document.createElement('div');
//         let span = document.createElement('span');
//         span.innerText = element.Varity;
//         let span2 = document.createElement('span');
//         span2.innerText = 'Remove item';
//         span2.addEventListener("click", function () {
//             removeCartData(element, index)
//         })
//         div6.append(span, span2);
//         div4.append(div5, div6)
//         // div1 2 work 
//         let div7 = document.createElement('div');
//         div7.setAttribute('class', 'right')
//         let span3 = document.createElement('span');
//         span3.innerHTML = '<img src="https://online.kfc.co.in/static/media/cart-minus-disabled.77dd1768.svg" alt="">'
//         let span4 = document.createElement('span');
//         span4.innerHTML = '1'
//         let span5 = document.createElement('span');
//         span5.innerHTML = '<img src="https://online.kfc.co.in/static/media/cart-plus.81d0f379.svg" alt="">';
//         let span6 = document.createElement('span')
//         span6.setAttribute('class', 'total');
//         span6.innerText = element.Price;
//         div7.append(span3, span4, span5, span6);
//         div1.append(div2, div4, div7);
//         mainDiv.append(div1);
//         span3.addEventListener('click', function () {
//             console.log("hello")
//             let count = +span4.innerText;
//             let price = +element.Price;

//             if (count == 1) {
//                 count = 1;
//             }
//             else {
//                 count--;
//             }

//             span4.innerText = count;
//             span6.innerText = (price * count).toFixed();
//             total();

//         })
//         span5.addEventListener('click', function () {
//             let count = +span4.innerText;
//             let price = +element.Price;
//             count++;
//             span4.innerText = count;
//             span6.innerText = (price * count).toFixed();
//             total();
//         })
//     });
// }







// function dataa(){
// let data=
// JSON.parse(localStorage.getItem('cartItems1')) || 
// JSON.parse(localStorage.getItem('cartItems2')) ||
// JSON.parse(localStorage.getItem('cartItems3')) || 
// JSON.parse(localStorage.getItem('cartItems4')) || 
// JSON.parse(localStorage.getItem('cartItems5')) || 
// JSON.parse(localStorage.getItem('cartItems6')) || 
// JSON.parse(localStorage.getItem('cartItems7')) || 
// JSON.parse(localStorage.getItem('cartItems8')) || 
// JSON.parse(localStorage.getItem('cartItems9')) || 
// JSON.parse(localStorage.getItem('cartItems10')) || 
// JSON.parse(localStorage.getItem('cartItems11')) || 
// JSON.parse(localStorage.getItem('cartItems12')) || []

// localStorage.setItem('cartData', JSON.stringify(data))
// }
// dataa()


