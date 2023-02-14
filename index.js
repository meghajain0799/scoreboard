let initialScore = document.getElementById("home-score");
let homeScore = 0;
let guestScore = 0;
let homeFoulScore = 0;
let guestFoulScore = 0;
let periodCount =0;
let message = "";

function homeAdd1(){
    homeScore += 1;
    document.getElementById("home-score").innerText = homeScore;
}

function homeAdd2(){
    homeScore += 2;
    document.getElementById("home-score").innerText = homeScore;
}

function homeAdd3(){
    homeScore += 3;
    document.getElementById("home-score").innerText = homeScore;
}

function guestAdd1(){
    guestScore += 1;
    document.getElementById("guest-score").innerText = guestScore;
}

function guestAdd2(){
    guestScore += 2;
    document.getElementById("guest-score").innerText = guestScore;
}

function guestAdd3(){
    guestScore += 3;
    document.getElementById("guest-score").innerText = guestScore;
}

function homeFoulCount(){
     homeFoulScore +=1;
     document.getElementById("home-foul-score").innerText = homeFoulScore;
}

function period(){
    periodCount +=1;
    document.getElementById("period").innerText = periodCount;
}

function guestFoulCount(){
    guestFoulScore +=1;
    document.getElementById("guest-foul-score").innerText = guestFoulScore;
}

const startingMinutes = 5;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("timer");
let intervalId;
let winningTeam;

function timer(){
   if(time>0){
    //console.log(time);
    let minutes = Math.floor(time/60);
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    let seconds = time %60;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
   }
  else
  {
    if(homeScore>guestScore)
    {
        message = 'Time Up!\nHome wins🙌';
        alert(message);
    }
     else if(homeScore<guestScore)
    {
        message = 'Time Up!\nGuest wins😒';
        alert(message);
    }
    else{
        message = 'Time Up!\nTie 😐';
        alert(message);
    }
    
    resetTimer();
  }

}

function resetTimer(){
    time = startingMinutes * 60;
    countdownEl.innerHTML = '05:00';
    stopTimer();
}

function startTimer(){
   intervalId = setInterval(timer, 1000);
   //for now using with timer
   winningTeam = setInterval(checkWinner, 1000);
}

function stopTimer() {
     clearInterval(intervalId);
     //for now using with timer
     clearInterval(winningTeam);
  }

  function resetGame(){
    homeScore = 0;
    guestScore =0;
    homeFoulScore =0;
    periodCount=0;
    guestFoulScore=0;
    document.getElementById("home-score").innerText = homeScore;
    document.getElementById("guest-score").innerText = guestScore;
    document.getElementById("home-foul-score").innerText = homeFoulScore;
    document.getElementById("period").innerText = periodCount;
    document.getElementById("guest-foul-score").innerText = guestFoulScore;
    resetTimer();
  }


  function checkWinner(){
    if(time>0){
        if(homeScore>guestScore){
            document.getElementById("home").style.color ="#ffff00";
            document.getElementById("guest").style.color = "whitesmoke"
        }
        else if(guestScore>homeScore){
            document.getElementById("home").style.color ="whitesmoke";
            document.getElementById("guest").style.color = "#ffff00"
        }
        else{
            document.getElementById("home").style.color ="whitesmoke";
            document.getElementById("guest").style.color = "whitesmoke"
        }
    }
  }