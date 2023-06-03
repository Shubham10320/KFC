//Guest User
document.getElementById("signin").getElementsByTagName("button")[1].addEventListener("click", function () {
    event.preventDefault();
    window.location.href = "../index.html";
})

// input field restriction
document.getElementById("signin").getElementsByTagName("input")[1].addEventListener("input",function(){
    event.preventDefault();
    var mob = document.getElementById("phone").value;
    if(mob.length>0 && mob.length<10){
        document.getElementById("signin").getElementsByTagName("p")[1].style.display="block";
    }
    else{
        document.getElementById("signin").getElementsByTagName("p")[1].style.display="none";
    }
})

// send code
document.getElementById("signin").getElementsByTagName("button")[0].addEventListener("click", function () {
    event.preventDefault();
    var mob = document.getElementById("phone").value;
    if(mob[0]==0 || !Number(mob)){
        document.getElementById("signin").getElementsByTagName("p")[1].style.display="block";
        return;
    }
    var user = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value
    }
    //console.log(typeof obj.name+"  "+obj.phone )
    localStorage.setItem("username",JSON.stringify(user));
    localStorage.setItem("attempt",0);
    window.location.href = "./verify.html";
})


