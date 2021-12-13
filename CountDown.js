/*
This function takes a number from user input and subtracts it every 1 second
Once the user's number reaches half way it displays an alert
It also updates text on the main HTML file
*/
/*
This function also cancels the CountDown() function
*/
function CountDown(){
    playStation();
    var currTime = window.prompt("Please enter the number of seconds you would like for the countdown: ");
    var halfTime = currTime / 2;
    var x = halfTime % 2;
    if(currTime % 2 !== 0){
        halfTime = halfTime + 2 - x;
    }
    var timeDown = setInterval(function() {
        currTime = currTime - 1;
        document.getElementById("timer").innerHTML = "T-Minus: " + currTime;
        if(currTime == 0){
            clearInterval(timeDown);
            document.getElementById("timer").innerHTML = "TAKEOFF";
        }
        if(currTime == halfTime){
            alert("Half of the Countdown Remaining: " + halfTime + " Seconds");
        }
    }, 1000);
    var alertButton2 = document.getElementById("stopButton");
            alertButton2.addEventListener("click", function(event) {
                clearInterval(timeDown);
            });
}
/*
These two functions add the audio file into the code. Then allows the audio file to be played on the webpage.
*/
function playStation(){
    mySound = new sound("Star Tours - Repair Bay Audio Loop.mp3");
    mySound.play();
}
function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

/*function loginInfo(){
    var firstName = window.prompt("Please enter in First Name. Must be equal to or less than 20 characters.");
    var lastName = window.prompt("Please enter in Last Name. Must be equal to or less than 20 characters.");
    var name = firstName + " " + lastName;
    var username = name.length;
    var code = window.prompt("Please enter in Passcode. Must be equal to or less than 3 digits.");
    var passcode = code.length;
}
*/
function login(){
    var login = false;
    var firstName = window.prompt("Please enter in First Name. Must be equal to or less than 20 characters.");
    var lastName = window.prompt("Please enter in Last Name. Must be equal to or less than 20 characters.");
    var name = firstName + " " + lastName;
    var username = name.length;
    var code = window.prompt("Please enter in Passcode. Must be equal to or less than 3 digits.");
    var passcode = code.length;
    while(login == false){
        if(username <= 20 && passcode <= 3){
            login = true;
        } else {
            var firstName = window.prompt("Please enter in First Name. Must be equal to or less than 20 characters.");
            var lastName = window.prompt("Please enter in Last Name. Must be equal to or less than 20 characters.");
            var name = firstName + " " + lastName;
            var username = name.length;
            var code = window.prompt("Please enter in Passcode. Must be equal to or less than 3 digits.");
            var passcode = code.length;
        }
    }
    
}

