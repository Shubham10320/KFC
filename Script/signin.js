var attempt = localStorage.getItem("attempt") || 0;
    console.log(attempt);
    if (attempt >= 3) {
        document.getElementById("signin").getElementsByTagName("h2")[0].textContent = "Too Many Wrong Attempts";
        document.getElementById("signin").getElementsByTagName("h2")[0].style.color = "#ff2e00";

        document.getElementById("signin").getElementsByTagName("p")[1].textContent = "Click below to Sign up again using another number";
        document.getElementById("signin").getElementsByTagName("p")[1].style.color="#ff2e00";

        var arr=document.getElementById("otp").querySelectorAll("input");
        for(var i=0; i<4; i++){
            arr[i].placeholder="x";
            arr[i].disabled=true;
            arr[i].style.cursor="default";
        }
    }
    else{
    var user = JSON.parse(localStorage.getItem("username"));
    document.getElementById("signin").querySelector("span").textContent = user.phone;

    var otp = {
        d1: Math.floor(Math.random() * 10),
        d2: Math.floor(Math.random() * 10),
        d3: Math.floor(Math.random() * 10),
        d4: Math.floor(Math.random() * 10)
    }
    document.getElementById('alokotp').textContent="Your OTP is: "+otp.d1+" "+otp.d2+" "+otp.d3+" "+otp.d4


                setTimeout(()=>{
                    document.querySelector('section').style.display='block'
                }, 0)
                setTimeout(()=>{
                    document.querySelector('section').style.display='none'
                    

                }, 5000)

    

    function countdownTimer(a = 2) {
        var duration = a * 60; // 2 minutes in seconds
        var timer = setInterval(function () {
            var minutes = parseInt(duration / 60, 10);
            var seconds = parseInt(duration % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.getElementById("signin").getElementsByTagName("span")[1].textContent = minutes + ":" + seconds;

            if (--duration < 0) {
                clearInterval(timer);
                document.getElementById("signin").getElementsByTagName("button")[0].style.opacity = 1;
                document.getElementById("signin").getElementsByTagName("button")[0].addEventListener("click", function () {
                    event.preventDefault();
                    location.reload();
                })
            }
        }, 1000); // update timer every second (1000 milliseconds)
    }

    // Start the countdown timer
    countdownTimer();

    //login
    document.getElementById("otp").getElementsByTagName("input")[3].addEventListener("keyup", function () {
        login();
    });

    function login() {

        var inpt = document.getElementById("otp").getElementsByTagName("input");

        if (inpt[0].value && inpt[1].value && inpt[2].value && inpt[3].value) {
            document.getElementById("signin").getElementsByTagName("button")[1].style.opacity = 1;
            document.getElementById("signin").getElementsByTagName("button")[1].addEventListener("click", function () {

                
                if (inpt[0].value == otp.d1 && inpt[1].value == otp.d2 && inpt[2].value == otp.d3 && inpt[3].value == otp.d4) {
                    //document.getElementById("signin").getElementsByTagName("span")[1].remove();
                    window.location.href = "../index.html";
                }
                else {
                    localStorage.setItem("attempt", Number(attempt) + 1);
                    //document.getElementById("signin").getElementsByTagName("span")[1].remove();
                    document.getElementById("signin").getElementsByTagName("button")[0].style.opacity = 1;
                    document.getElementById("signin").getElementsByTagName("button")[0].addEventListener("click", function () {
                        event.preventDefault();
                        window.location.reload();
                    })

                        document.getElementById("signin").getElementsByTagName("p")[3].innerHTML = "Incorrect OTP";
                        document.getElementById("signin").getElementsByTagName("p")[3].style.color = "#ff2e00";
                    }
            })
        }
    }

    }