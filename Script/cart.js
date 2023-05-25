let data=JSON.parse(localStorage.getItem('CartData')) || []

display(data)

function display(data){

    document.getElementById('shubhamcartItem').textContent=''
    data.map(function(elem,idx){

        let box1=document.createElement('div')
        box1.id='box1'
        
        let img=document.createElement('img')
        img.src=elem.image;
        img.setAttribute('class', 'cartImage')

        let box2=document.createElement('div')
        box2.id='box2'

        let boxname=document.createElement('div')
        boxname.id='boxname'

        let name=document.createElement('p')
        name.textContent=elem.name
        name.setAttribute('class', 'cartName')
        boxname.append(name)


        let boxtyperemove=document.createElement('div')
        boxtyperemove.id='boxtyperemove'
        let type=document.createElement('p')
        type.textContent=elem.type
        type.setAttribute('class', 'cartType')

        let remove=document.createElement('p')
        remove.textContent='Remove item'
        remove.setAttribute('class', 'cartRemove')
        remove.addEventListener('click', function(){
            removeCartData(elem, idx)
        })

        boxtyperemove.append(type, remove)
        box2.append(boxname, boxtyperemove)


        let box3=document.createElement('div')
        box3.id='box3'

        
        let boxqunatity=document.createElement('div')
        boxqunatity.id='boxquantity'
        let minus = document.createElement('span');
        minus.innerHTML = '<ion-icon name="remove-outline"></ion-icon>'
        minus.setAttribute('class', 'minus')
        minus.onclick=function(){
            minusfun(count.textContent)
        }
        function minusfun(val){
            if(val==1){
                return
            }else{
            let amount=parseInt(val)-1;
            let totalamount=parseInt(elem.price*amount);
            count.textContent=parseInt(amount);
            price.textContent="₹"+totalamount;
            }
        }
    
        let count = document.createElement('span');
        count.innerText = '1'
        count.setAttribute('class', 'count')

        let plus = document.createElement('span');
        plus.innerHTML = '<img src="https://online.kfc.co.in/static/media/cart-plus.81d0f379.svg" alt="">';
        plus.setAttribute('class', 'plus')
        plus.addEventListener('click', function(){
            let amount=parseInt(count.textContent)+1;
            let totalamount=parseInt(elem.price*amount);
            count.textContent=parseInt(amount);
            price.textContent="₹"+totalamount;

        })
    
        let boxprice=document.createElement('div')
        boxprice.id='boxprice'
        let price = document.createElement('span')
        price.setAttribute('class', 'cartPrice');
        price.innerText = "₹"+ elem.price;
        
        boxqunatity.append(minus, count, plus)
        boxprice.append(price)

        box3.append(boxqunatity, boxprice)


        box1.append(img, box2, box3)
        document.getElementById('shubhamcartItem').append(box1)


    })
}

function removeCartData(elem, idx){
    data.splice(idx, 1)
    localStorage.setItem('CartData', JSON.stringify(data))
    display(data)
}
