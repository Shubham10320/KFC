let addCartArr = JSON.parse(localStorage.getItem("CartData")) || [];



var usernameData = JSON.parse(localStorage.getItem('username')) || []
if (usernameData) {
    document.getElementById('navbar-account').textContent = usernameData.name;
} else {
    document.getElementById('navbar-account').textContent = 'Sign In';
}





let match_day = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33781-0.jpg?ver=14.56",
        name: "Howzzat Biryani Combo",
        type: "Non Veg",
        price: "725.00",
        des: "Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33783-0.jpg?ver=14.56",
        name: "Super 6s Bucket Meal",
        type: "Non veg",
        price: "978.00",
        des: "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33784-0.jpg?ver=14.56",
        name: "Super 4s Bucket Meal",
        type: "Non veg",
        price: "869.00",
        des: "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33785-0.jpg?ver=14.56",
        name: "Super 6s Bucket",
        type: "Non veg",
        price: "869.00",
        des: "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33786-0.jpg?ver=14.56",
        name: "Super 4s Bucket",
        type: "Non veg",
        price: "608.00",
        des: "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33787-0.jpg?ver=14.56",
        name: "Dream Team Bucket",
        type: "Non veg",
        price: "944.00",
        des: "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]"

    }]

let periperi = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000194.jpg?ver=29.2",
        name: "5 Leg Pc & 2 Dips Bucket",
        type: "Non Veg * Serves 2",
        price: "449.00",
        des: "Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2 delicous dips (20gm each)"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000315.jpg?ver=29.2",
        name: "Super 6s Bucket Meal",
        type: "Non veg* Serves 3-4",
        price: "978.00",
        des: "Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips [20gms]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000192.jpg?ver=29.2",
        name: "Super 4s Bucket Meal",
        type: "Non veg",
        price: "869.00",
        des: "Save 22% on Leg Pc Bucket with 10 KFC Peri Peri Leg Pc & 4 dips [20gms each]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000193.jpg?ver=29.2",
        name: "Super 6s Bucket",
        type: "Non veg",
        price: "869.00",
        des: "5 Spicy Peri Peri Leg Pieces, 2 Dips [20gms], 1 Med Fries & a Pepsi PET"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000195.jpg?ver=29.2",
        name: "Super 4s Bucket",
        type: "Non veg",
        price: "608.00",
        des: "5 Spicy Peri Peri Leg Pieces, 2 Dips [20gms], 1 Med Fries & a Pepsi PET"
    }]

let exclusiveDeal = [{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000240.jpg?ver=29.2",
    name: "The Allu Arjun Combo",
    type: "Non veg * Serves 2",
    price: "448.00",
    des: "Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a DipEnjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip"
}]

let chicken_bucket = [{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32775-0.jpg?ver=14.56",
    name: "5pc Leg Piece Bucket Meal",
    type: "Non veg",
    price: "650.00",
    des: "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=14.56",
    name: "Friendship Bucket",
    type: "Non veg",
    price: "734.00",
    des: "Save Rs. 172 on 3pc Hot & Crispy, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=14.56",
    name: "Bucket for Two",
    type: "Non veg",
    price: "629.00",
    des: "Flat Rs. 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn [serves 2-3]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32295-0.jpg?ver=14.56",
    name: "10 strips & 2 Dips Bucket",
    type: "Non veg",
    price: "495.00",
    des: "Flat Rs. 125 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32774-0.jpg?ver=14.56",
    name: "5pc Leg Piece Bucket & 2 Dips",
    type: "Non veg",
    price: "524.00",
    des: "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32169-0.jpg?ver=14.56",
    name: "Ultimate Savings Bucket",
    type: "Non veg",
    price: "734.00",
    des: "Save 35% on signature bucket of 4pc Hot & crispy, 6 Wings, 4 strips, 3 Dips & Pepsi PET [serves 2-3 ]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32293-0.jpg?ver=14.56",
    name: "Big 12",
    type: "Non veg",
    price: "755.00",
    des: "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31946-0.jpg?ver=14.56",
    name: "Mingles Bucket Meal",
    type: "Non veg",
    price: "503.00",
    des: "Save Rs. 71 on 4 Hot Wings, 2 Chicken Strips, Reg Popcorn, medium fries & Pepsi PET [serves 2 ]"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32197-0.jpg?ver=14.56",
    name: "Big 8",
    type: "Non veg",
    price: "719.00",
    des: "Save 29% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [serves 2- 3 ]"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31897-41326.jpg?ver=14.56",
    name: "5pc Smoky Red Chicken",
    type: "Non veg",
    price: "524.00",
    des: "Flat 20% off on 5pc Smoky red grilled chicken [serves 2]"
}, {
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30640-40488.jpg?ver=14.56",
    name: "8 pc Hot & Crispy Chicken",
    type: "Non veg",
    price: "786.00",
    des: "Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30636-40484.jpg?ver=14.56",
    name: "6 Pc Hot & Crispy",
    type: "Non veg",
    price: "650.00",
    des: "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]"
}];

let leg_Piece = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000194.jpg?ver=29.2",
        name: "5 Leg Pc & 2 Dips Bucket",
        type: "Non Veg * Serves 2",
        price: "449.00",
        des: "Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2 delicous dips (20gm each)"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000315.jpg?ver=29.2",
        name: "Super 6s Bucket Meal",
        type: "Non veg* Serves 3-4",
        price: "978.00",
        des: "Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips [20gms]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000192.jpg?ver=29.2",
        name: "Super 4s Bucket Meal",
        type: "Non veg",
        price: "869.00",
        des: "Save 22% on Leg Pc Bucket with 10 KFC Peri Peri Leg Pc & 4 dips [20gms each]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000193.jpg?ver=29.2",
        name: "Super 6s Bucket",
        type: "Non veg",
        price: "869.00",
        des: "5 Spicy Peri Peri Leg Pieces, 2 Dips [20gms], 1 Med Fries & a Pepsi PET"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000195.jpg?ver=29.2",
        name: "Super 4s Bucket",
        type: "Non veg",
        price: "608.00",
        des: "5 Spicy Peri Peri Leg Pieces, 2 Dips [20gms], 1 Med Fries & a Pepsi PET"
    }]

let roll = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32050-0.jpg?ver=14.56",
        name: "All Chicken Box",
        type: "Non veg",
        price: "199.00",
        des: "A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32053-0.jpg?ver=14.56",
        name: "Classic Zinger Box",
        type: "Non veg",
        price: "329.00",
        des: "A classic deal for Zinger lovers : Get 1 Classic Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32383-0.jpg?ver=14.56",
        name: "Zinger Tandoori Box",
        type: "Non veg",
        price: "329.00",
        des: "A deal for the Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33527-0.jpg?ver=14.56",
        name: "Popcorn Biryani Box",
        type: "Non veg",
        price: "345.00",
        des: "Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & Pepsi"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32055-0.jpg?ver=14.56",
        name: "Veg Zinger Box",
        type: "Veg",
        price: "329.00",
        des: "A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & a Pepsi"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33526-0.jpg?ver=14.56",
        name: "Veg Biryani Box",
        type: "Veg",
        price: "293.00",
        des: "Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & a Pepsi"
    }];

let new_lunch = [{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000240.jpg?ver=29.2",
    name: "The Allu Arjun Combo",
    type: "Non veg",
    price: "329.00",
    des: "Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000154.jpg?ver=29.2",
    name: "Solo Feast",
    type: "Non veg",
    price: "329.00",
    des: "Treat yourself with 1 Hot & Crispy, 2 Strips, 2 Wings, 1 Buttered Bun, 1 Dip & Pepsi PET"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000150.jpg?ver=29.2",
    name: "Mega Feast",
    type: "Non veg",
    price: "345.00",
    des: "Feast up with 2 Hot & Crispy, 2 Smoky Red Chicken, 1 Bun, 1 Rice & gravy, Med Fries & Pepsi PET"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000202.jpg?ver=29.2",
    name: "Strips & Rice Combo",
    type: "Non veg",
    price: "345.00",
    des: "4 strips, 1 Dips, flavorful Rice & Gravy at a deal price"
}]

let biryani_bucket = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33517-0.jpg?ver=14.56",
        name: "Classic Biryani Combo",
        type: "Non veg",
        price: "777.00",
        des: "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33518-0.jpg?ver=14.56",
        name: "Smoky Grilled Biryani Combo",
        type: "Non veg",
        price: "777.00",
        des: "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33845-0.jpg?ver=14.56",
        name: "Howzzat Biryani Combo",
        type: "Non veg",
        price: "725.00",
        des: "Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET [serves 2-3]"
    }, {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33449-42353.jpg?ver=14.56",
        name: "Classic Chicken Biryani Bucket (Large)",
        type: "Non veg",
        price: "499.00",
        des: "Large portions of Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Gravies [serves 2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33450-42354.jpg?ver=14.56",
        name: "Popcorn Chicken Biryani Bucket (Large",
        type: "Non veg",
        price: "499.00",
        des: "Large portions of Biryani rice served with Chicken Popcorn & 2 Gravies [serves 2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33451-42355.jpg?ver=14.56",
        name: "Smoky Grilled Biryani Bucket (Large",
        type: "Non veg",
        price: "499.00",
        des: "Large portions of Biryani rice served with 2 pc Smoky Red Chicken & 2 Gravies [serves 2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33445-42349.jpg?ver=14.56",
        name: "Classic Chicken Biryani Bucket",
        type: "Non veg",
        price: "241.00",
        des: "Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy [serves 1]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33446-42350.jpg?ver=14.56",
        name: "Popcorn Chicken Biryani Bucket",
        type: "Non veg Serves 1",
        price: "241.00",
        des: "Hyderabadi style Biryani rice served with Popcorn & Spicy Gravy [serves 1]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33447-42351.jpg?ver=14.56",
        name: "Smoky Grilled Biryani Bucket",
        type: "Non veg Serves 1",
        price: "241.00",
        des: "Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy [serves 1]"
    }, {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33448-42352.jpg?ver=14.56",
        name: "Veg Biryani Bucket",
        type: "Veg Serves 1",
        price: "198.00",
        des: "Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy [serves 1]"
    }];

let box_meal = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33524-0.jpg?ver=14.56",
        name: "Classic Biryani Combo",
        type: "Non veg Serves 2-3",
        price: "777.00",
        des: "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33525-0.jpg?ver=14.56",
        name: "Smoky Grilled Biryani Combo",
        type: "Non veg Serves 2-3",
        price: "777.00",
        des: "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33064-0.jpg?ver=14.56",
        name: "Super Snacker Combo",
        type: " Non veg Serves 1-2",
        price: "473.00",
        des: "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33065-0.jpg?ver=14.56",
        name: "Chick’n Wings Combo",
        type: "Non veg Serves 1-2",
        price: "473.00",
        des: "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33519-0.jpg?ver=14.56",
        name: "Stay Home Bucket",
        type: "Non veg Serves 3",
        price: "828.00",
        des: "Save 21% on 4pc Hot & Crispy, 4 Wings, 6 Chicken Strips & 2 dips [serves 3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33520-0.jpg?ver=14.56",
        name: "Family Feast",
        type: "Non veg Serves 3",
        price: "870.00",
        des: "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33066-0.jpg?ver=14.56",
        name: "Classic Zinger Meal",
        type: "Non veg Serves 1",
        price: "362.00",
        des: "Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black [serves 1]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33067-0.jpg?ver=14.56",
        name: "Chick'n Strips Solo Combo",
        type: "Non veg Serves 1",
        price: "440.00",
        des: "Go solo with 1 pc Hot & Crispy, 3 strips, Medium Fries & a chilled Pepsi Black [serves 1]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33068-0.jpg?ver=14.56",
        name: "Chick'n Fries Solo Combo",
        type: "Non veg Serves 1",
        price: "440.00",
        des: "Try this classic pairing of 2pc Hot & Crispy, Medium Fries, 2 Dips & a chilled Pepsi Black [serves 1]"
    }];

let burger = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32576-0.jpg?ver=14.56",
        name: "2 Chicken Krisper Burgers",
        type: " Non veg",
        price: "240.00",
        des: "2 delicious chicken value burgers - at only 109 each!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32573-0.jpg?ver=14.56",
        name: "2 Veg Krisper Burgers",
        type: "Veg",
        price: "166.00",
        des: "2 delicious veg value burgers - at only 69 each!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32578-0.jpg?ver=14.56",
        name: "Chicken & Krispers Combo",
        type: "Non veg",
        price: "545.00",
        des: "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32579-0.jpg?ver=14.56",
        name: "Veg-Non-Veg Krispers Combo",
        type: "Non veg",
        price: "387.00",
        des: "Pack of 4 burgers - 2 veg & 2 chicken value burgers at a deal price !"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32230-41486.jpg?ver=14.56",
        name: "Tandoori Zinger Burger",
        type: "Non veg",
        price: "209.00",
        des: "Chicken zinger with a delicious tandoori sauce"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32232-0.jpg?ver=14.56",
        name: "Mixed Zinger Doubles",
        type: "Non veg",
        price: "366.00",
        des: "Best-seller combo of classic chicken zinger & tandoori zinger"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30663-40505.jpg?ver=14.56",
        name: "Classic Zinger Burger",
        type: "Non veg",
        price: "199.00",
        des: "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32172-0.jpg?ver=14.56",
        name: "Buddy Meal",
        type: "Non veg",
        price: "524.00",
        des: "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32403-41750.jpg?ver=14.56",
        name: "Veg Zinger Burger",
        type: "Veg",
        price: "188.00",
        des: "Signature veg burger with crispy patties, veggies & a tangy sauce"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32574-0.jpg?ver=14.56",
        name: "2 Veg Krispers Meal",
        type: "Veg",
        price: "282.00",
        des: "2 veg value burgers, crispy medium fries & 2 delicious dips at a deal price!"
    }];

let snacks = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32841-42014.jpg?ver=14.56",
        name: "Choco Mud Pie",
        type: "Veg",
        price: "135.00",
        des: "Chocolate lovers unite! Say hello to our creamy chocolate & cake dessert- a must try!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32842-42015.jpg?ver=14.56",
        name: "Coffee Mousse Cake",
        type: "Veg",
        price: "135.00",
        des: "Coffee, chocolate, cake…what's not to love? Enjoy this for coffee-licious temptations!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31984-0.jpg?ver=14.56",
        name: "Chicken & Fries Bucket",
        type: "Non veg",
        price: "314.00",
        des: "Save 37% on this favorite combo of 2pc Hot & Crispy chicken with Medium Fries"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31964-0.jpg?ver=14.56",
        name: "Mingles Bucket",
        type: "Non veg Serves 1-2",
        price: "356.00",
        des: "Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn [serves 1-2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30678-40515.jpg?ver=14.56",
        name: "4pc Hot & Crispy Chicken",
        type: "Non veg",
        price: "450.00",
        des: "4 pcs of signature Hot & crispy chicken at a deal price"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30675-40512.jpg?ver=14.56",
        name: "Large Popcorn",
        type: "Non veg",
        price: "240.00",
        des: "Signature bite-sized boneless chicken, with special spices"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31867-41289.jpg?ver=14.56",
        name: "Medium Popcorn",
        type: "Non veg",
        price: "173.00",
        des: "Signature bite-sized boneless chicken, with special spices"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31866-41288.jpg?ver=14.56",
        name: "Regular Popcorn",
        type: "Non veg",
        price: "121.00",
        des: "Signature bite-sized boneless chicken, with special spices"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32287-41499.jpg?ver=14.56",
        name: "Large Fries",
        type: "Veg",
        price: "125.00",
        des: "Jazz up your meal with crispy large fries!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31412-41042.jpg?ver=14.56",
        name: "Medium Fries",
        type: "Veg",
        price: "104.00",
        des: "Jazz up your meal with crispy fries!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30676-40513.jpg?ver=14.56",
        name: "2 pc Hot & Crispy Chicken",
        type: "Non veg",
        price: "241.00",
        des: "Signature Hot & crispy chicken"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30919-40700.jpg?ver=14.56",
        name: "2 pc Smoky Red Chicken",
        type: "Non veg",
        price: "261.00",
        des: "Spicy, red, grilled chicken"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30673-40510.jpg?ver=14.56",
        name: "6pc Boneless Chicken strips",
        type: "Non veg",
        price: "272.00",
        des: "Tender, juicy, signature boneless chicken strips"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32229-41485.jpg?ver=14.56",
        name: "4pc Hot Chicken Wings",
        type: "Non veg",
        price: "173.00",
        des: "Seasoned, signature KFC chicken wings"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30677-40514.jpg?ver=14.56",
        name: "1 pc Hot & Crispy Chicken",
        type: "Non veg",
        price: "121.00",
        des: "Signature Hot & crispy chicken"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30913-40694.jpg?ver=14.56",
        name: "1 Pc Smoky Red Chicken",
        type: "Non veg",
        price: "131.00",
        des: "Spicy, red, grilled chicken"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30674-40511.jpg?ver=14.56",
        name: "3pc Boneless Chicken strips",
        type: "Non veg",
        price: "173.00",
        des: "Tender, juicy, signature boneless chicken strips"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31388-41030.jpg?ver=14.56",
        name: "2 pc Veg Patty",
        type: "Veg",
        price: "163.00",
        des: "Delicious, crispy, veg add-on!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32290-41502.jpg?ver=14.71",
        name: "Tandoori Masala Dip",
        type: "Veg",
        price: "30.00",
        des: "Special tandoori flavored dip, to add a twist to your meal!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32291-0.jpg?ver=14.71",
        name: "Pack of 4 Dips",
        type: "Veg",
        price: "115.00",
        des: "Adding dips is always a good idea!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31747-0.jpg?ver=14.71",
        name: "Pack of 2 Dips",
        type: "Veg",
        price: "60.00",
        des: "Adding dips is always a good idea!"
    }];

let beverages = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30683-40520.jpg?ver=14.56",
        name: "Pepsi PET",
        type: "Veg",
        price: "60.00",
        des: "Pepsi Pet Bottle"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31373-41015.jpg?ver=14.56",
        name: "Pepsi Can 330 ml",
        type: "Veg",
        price: "60.00",
        des: "Pepsi Can 330 ml"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31374-41016.jpg?ver=14.56",
        name: "7UP Can 330 ml",
        type: "Veg",
        price: "60.00",
        des: "7UP Can 330 ml"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31376-41018.jpg?ver=14.56",
        name: "Pepsi Black Can 330 ml",
        type: "Non veg",
        price: "60.00",
        des: "Pepsi Black Can 330 ml"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31375-41017.jpg?ver=14.56",
        name: "Mirinda Can 330 ml",
        type: "Veg",
        price: "60.00",
        des: "Mirinda Can 330 ml"
    }]


function priceSort() {
    let filterprice = document.getElementById('filterprice').value
    if (filterprice === 'htl') {
        var ans = match_day.sort(function (a, b) {
            return b.price - a.price;
        })
        match(ans)
    }

    if (filterprice === 'htl') {
        var ans = periperi.sort(function (a, b) {
            return b.price - a.price;
        })
        periperidata(ans)
    }
    if (filterprice === 'htl') {
        var ans = exclusiveDeal.sort(function (a, b) {
            return b.price - a.price;
        })
        dealdata(ans)
    }
    if (filterprice === 'htl') {
        var ans = chicken_bucket.sort(function (a, b) {
            return b.price - a.price;
        })
        chickendata(ans)
    }

    if (filterprice === 'htl') {
        var ans = leg_Piece.sort(function (a, b) {
            return b.price - a.price;
        })
        legdata(ans)
    }
    if (filterprice === 'htl') {
        var ans = roll.sort(function (a, b) {
            return b.price - a.price;
        })

        rolldata(ans)
    }
    if (filterprice === 'htl') {
        var ans = new_lunch.sort(function (a, b) {
            return b.price - a.price;
        })
        lunchdata(ans)
    }


    if (filterprice === 'htl') {
        var ans = biryani_bucket.sort(function (a, b) {
            return b.price - a.price;
        })
        biryanidata(ans)
    }

    if (filterprice === 'htl') {
        var ans = box_meal.sort(function (a, b) {
            return b.price - a.price;
        })
        boxdata(ans)
    }
    if (filterprice === 'htl') {
        var ans = burger.sort(function (a, b) {
            return b.price - a.price;
        })
        burgerdata(ans)
    }
    if (filterprice === 'htl') {
        var ans = snacks.sort(function (a, b) {
            return b.price - a.price;
        })
        snacksdata(ans)
    }
    if (filterprice === 'htl') {
        var ans = beverages.sort(function (a, b) {
            return b.price - a.price;
        })
        beveragesdata(ans)
    }

    
    if (filterprice === 'lth') {
        var ans = match_day.sort(function (a, b) {
            return a.price-b.price;
        })
        match(ans)
    }

    if (filterprice === 'lth') {
        var ans = periperi.sort(function (a, b) {
            return a.price-b.price;
        })
        periperidata(ans)
    }
    if (filterprice === 'lth') {
        var ans = exclusiveDeal.sort(function (a, b) {
            return a.price-b.price;
        })
        dealdata(ans)
    }
    if (filterprice === 'lth') {
        var ans = chicken_bucket.sort(function (a, b) {
            return a.price-b.price;
        })
        chickendata(ans)
    }

    if (filterprice === 'lth') {
        var ans = leg_Piece.sort(function (a, b) {
            return a.price-b.price;
        })
        legdata(ans)
    }
    if (filterprice === 'lth') {
        var ans = roll.sort(function (a, b) {
            return a.price-b.price;
        })

        rolldata(ans)
    }
    if (filterprice === 'lth') {
        var ans = new_lunch.sort(function (a, b) {
            return a.price-b.price;
        })
        lunchdata(ans)
    }


    if (filterprice === 'lth') {
        var ans = biryani_bucket.sort(function (a, b) {
            return a.price-b.price;
        })
        biryanidata(ans)
    }

    if (filterprice === 'lth') {
        var ans = box_meal.sort(function (a, b) {
            return a.price-b.price;
        })
        boxdata(ans)
    }
    if (filterprice === 'lth') {
        var ans = burger.sort(function (a, b) {
            return a.price-b.price;
        })
        burgerdata(ans)
    }
    if (filterprice === 'lth') {
        var ans = snacks.sort(function (a, b) {
            return a.price-b.price;
        })
        snacksdata(ans)
    }
    if (filterprice === 'lth') {
        var ans = beverages.sort(function (a, b) {
            return a.price-b.price;
        })
        beveragesdata(ans)
    }

}




match(match_day)
function match(match_day) {
    document.getElementById("product_match").textContent = ''
    match_day.forEach((elem) => {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image")
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.innerText = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')


        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("product_match").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}

periperidata(periperi)
function periperidata(periperi) {
    document.getElementById("periperiproduct").textContent = ''
    periperi.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')
        price.style.color = 'red'

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("periperiproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}



dealdata(exclusiveDeal)
function dealdata(exclusiveDeal) {
    document.getElementById("dealproduct").textContent = ''
    exclusiveDeal.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = ' ̶₹̶6̶7̶8̶.̶0̶0̶ ̶   ' + "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')
        price.style.color = 'red'

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("dealproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}



chickendata(chicken_bucket)
function chickendata(chicken_bucket) {
    document.getElementById("chickenbucketproduct").textContent = ''
    chicken_bucket.forEach(function (elem) {
        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("chickenbucketproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}



legdata(leg_Piece)
function legdata(leg_Piece) {
    document.getElementById("legpieceproduct").textContent = ''
    leg_Piece.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("legpieceproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}

rolldata(roll)
function rolldata(roll) {
    document.getElementById("rollproduct").textContent = ''
    roll.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("rollproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}



lunchdata(new_lunch)
function lunchdata(new_lunch) {
    document.getElementById("launchproduct").textContent = ''
    new_lunch.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("launchproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}



biryanidata(biryani_bucket)
function biryanidata(biryani_bucket) {
    document.getElementById("biryanibucketproduct").textContent = ''
    biryani_bucket.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("biryanibucketproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}


boxdata(box_meal)
function boxdata(box_meal) {
    document.getElementById("boxmealproduct").textContent = ''
    box_meal.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("boxmealproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}



burgerdata(burger)
function burgerdata(burger) {
    document.getElementById("burgerproduct").textContent = ''
    burger.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("burgerproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}


snacksdata(snacks)
function snacksdata(snacks) {
    document.getElementById("snacksproduct").textContent = ''
    snacks.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("snacksproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}


beveragesdata(beverages)
function beveragesdata(beverages) {
    document.getElementById("beveragesproduct").textContent = ''
    beverages.forEach(function (elem) {

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = elem.image;

        let name = document.createElement("h4");
        name.innerText = elem.name;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let price = document.createElement("p");
        price.textContent = "₹" + elem.price;
        price.setAttribute('id', 'shubhamprice')

        let des = document.createElement("p");
        des.innerText = elem.des;

        let button = document.createElement("button");
        button.setAttribute("class", "Button");
        button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;

        box.append(img, name, type, price, des, button);
        document.getElementById("beveragesproduct").append(box);

        button.addEventListener("click", function () {
            if (check(elem.name) === false) {
                addToCart(elem)
                showPopUP()
            } else {
                hidePopUp()
            }
            totalPrice();
        })
    })
}

function showPopUP() {
    setTimeout(function () {
        document.getElementById('pop').textContent = 'Item Added to Cart...'
        document.querySelector('.popup').style.display = 'block'
    }, 0)
    setTimeout(function () {
        document.querySelector('.popup').style.display = 'none'
    }, 2000)
}

function hidePopUp() {
    setTimeout(function () {
        document.getElementById('pop').textContent = 'Item is already in cart...'
        document.querySelector('.popup').style.display = 'block'
    }, 0)
    setTimeout(function () {
        document.querySelector('.popup').style.display = 'none'
    }, 2000)
}


document.getElementById("match").addEventListener("click", function () {
    matchdiv();
})
function matchdiv() {
    window.location = "#matchday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'bold'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}





document.getElementById("periperi").addEventListener("click", function () {
    periperidiv();
})
function periperidiv() {
    window.location = "#periperiday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'bold'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}



document.getElementById("deal").addEventListener("click", function () {
    dealdiv();
})

function dealdiv() {
    window.location = "#dealday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'bold'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}


document.getElementById("chickenbucket").addEventListener("click", function () {
    chickendiv();
})

function chickendiv() {
    window.location = "#chickenbucketday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'bold'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}


document.getElementById("legpiece").addEventListener("click", function () {
    legdiv();
})
function legdiv() {
    window.location = "#legpieceday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'bold'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}


document.getElementById("rolls").addEventListener("click", function () {
    rolldiv();
})
function rolldiv() {
    window.location = "#rollsday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'bold'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}



document.getElementById("launch").addEventListener("click", function () {
    lunchdiv();
})
function lunchdiv() {
    window.location = "#launchday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'bold'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}



document.getElementById("biryanibucket").addEventListener("click", function () {
    biryanibucketdiv();
})
function biryanibucketdiv() {
    window.location = "#biryanibucketday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'bold'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}


document.getElementById("boxmeal").addEventListener("click", function () {
    boxmealdiv();
})
function boxmealdiv() {
    window.location = "#boxmealday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'bold'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}



document.getElementById("burgers").addEventListener("click", function () {
    burgersdiv();
})
function burgersdiv() {
    window.location = "#burgersday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'bold'
    // document.getElementById("snacks").style.fontWeight = 'normal'
}



document.getElementById("snacks").addEventListener("click", function () {
    snacksdiv();
})
function snacksdiv() {
    window.location = "#snacksday";
    // document.getElementById("beverages").style.fontWeight = 'normal'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'bold'
}



document.getElementById("beverages").addEventListener("click", function () {
    beveragesdiv();
})
function beveragesdiv() {
    window.location = "#beveragesday";
    // document.getElementById("beverages").style.fontWeight = 'bold'
    // document.getElementById("match").style.fontWeight = 'normal'
    // document.getElementById("periperi").style.fontWeight = 'normal'
    // document.getElementById("deal").style.fontWeight = 'normal'
    // document.getElementById("legpiece").style.fontWeight = 'normal'
    // document.getElementById("chickenbucket").style.fontWeight = 'normal'
    // document.getElementById("rolls").style.fontWeight = 'normal'
    // document.getElementById("launch").style.fontWeight = 'normal'
    // document.getElementById("biryanibucket").style.fontWeight = 'normal'
    // document.getElementById("boxmeal").style.fontWeight = 'normal'
    // document.getElementById("burgers").style.fontWeight = 'normal'
    // document.getElementById("snacks").style.fontWeight = 'normal'

}


let allButton = document.querySelectorAll('.menuBtn')
allButton.forEach((elem) => {
    elem.addEventListener('click', function (event) {
        allButton.forEach(element => {
            element.style.fontWeight = 'normal'
        })
        event.target.style.fontWeight = 'bold'
    })
})




function addToCart(elem) {
    addCartArr.push(elem);
    // console.log("Hi")
    localStorage.setItem("CartData", JSON.stringify(addCartArr))
}

function check(name) {
    let checkCart = addCartArr.filter(function (elem) {
        return name === elem.name
    })
    if (checkCart.length > 0) {
        return true;
    } else {
        return false;
    }
}

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


document.getElementById('navbar-menu').addEventListener('click', function () {
    location.href = '/KFC/HTML/product.html';
})
document.getElementById('navbar-about').addEventListener('click', function () {
    location.href = '/KFC/HTML/deals.html';
})
document.getElementById('navbar-account').addEventListener('click', function () {
    location.href = '/KFC/HTML/signup.html';
})
document.getElementById('navbar-cart-bucket').addEventListener('click', function () {
    location.href = '/KFC/HTML/cart.html';
})
document.getElementById('navbar-kfc-logo').addEventListener('click', function () {
    location.href = '/KFC/HTML/index.html';
})