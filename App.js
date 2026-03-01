let gameSeq = []; 
let userSeq = [];
let arr = [];

let btns = ['red', 'yellow', 'green', 'purple'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');
let p = document.querySelector('p');

document.addEventListener('keypress',function(){
if(started == false){
    console.log('Game is Started!');
    started = true;
    levelUp();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
      btn.classList.remove("flash");  
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
      btn.classList.remove("userFlash");  
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
    arr.push(level);
    p.innerText = 'Highest Score is : ' + greatherthan();
}

function checkAns(idx){
   if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        console.log('same value!');
   }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout( function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },150);
        reset();
   }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll('.btn');

for(let btn of allBtns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}
   
    function greatherthan(){
    let max = arr[0];
    for(let ar of arr){
        if(ar > max){
            max = ar;
        }
    }
    return max;
}

//Nothing is not more important than learning so plz learn bro...