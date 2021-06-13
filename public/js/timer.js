
import {getSeconds, diffDates, getDateObj} from "./utils.js"; // 1
import "./howler.js"; 

(function(){
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let working = false;
    

    const hoursP = document.querySelector(".hours-p");
    const minutesP = document.querySelector(".minutes-p");
    const secondsP = document.querySelector(".seconds-p");
    const hoursBtns = document.querySelector(".hours-btns");
    const minutesBtns = document.querySelector(".minutes-btns");
    const secondsBtns = document.querySelector(".seconds-btns");
    const startBtn =  document.querySelector(".start");
    
    hoursBtns.addEventListener('click', (ev)=>{
        if (ev.target.classList.contains('btn-up')) {
            ev.preventDefault();
            hours < 24 ? hours++ : hours = 0;
            hoursP.innerText = hours;    
        }    
        if (ev.target.classList.contains('btn-down')) { 
            ev.preventDefault();
            hours > 0 ? hours-- : hours = 24;
            hoursP.innerText = hours;    
        }         
    })
    minutesBtns.addEventListener('click', (ev)=>{
        if (ev.target.classList.contains('btn-up')) {
            ev.preventDefault();
            minutes < 59 ? minutes++ : minutes = 0;
            minutesP.innerText = minutes;    
        }    
        if (ev.target.classList.contains('btn-down')) {
            ev.preventDefault();
            minutes > 0 ? minutes-- : minutes = 59;
            minutesP.innerText = minutes;    
        }         
    })
    secondsBtns.addEventListener('click', (ev)=>{
        if (ev.target.classList.contains('btn-up')) {
            ev.preventDefault();
            seconds < 59 ? seconds++ : seconds = 0;
            secondsP.innerText = seconds;    
        }    
        if (ev.target.classList.contains('btn-down')) {
            ev.preventDefault();
            seconds > 0 ? seconds-- : seconds = 59;
            secondsP.innerText = seconds;    
        }         
    })
    let timerId;
    startBtn.addEventListener('click', (ev)=>{
        ev.preventDefault();
        if (working) {
            working = !working;
            clearInterval(timerId);    
        } else {
            working = !working;
            timerId = setInterval(()=>{
                if (getSeconds(hours, minutes, seconds) == 0) {
                    playBeep();
                    clearInterval(timerId); 
                } else {
                    startBtn.classList.toggle('red');
                    ({hours, minutes, seconds} = getDateObj(hours, minutes, seconds));
                    hoursP.innerText = hours;
                    minutesP.innerText = minutes;
                    secondsP.innerText = seconds; 
                    if (startBtn.classList.contains('red')) {
                        startBtn.classList.remove('red');    
                    }
                }        
            }, 1000)
        }
    })
    function playBeep(){
        var sound1 = new Howl({
            src: ['../media/beep.mp3'],
            loop: false,});
            sound1.once('load', function(){
                sound1.play();
              }); 
    }
    }
    
    )();