let all = document.querySelector('.all');
let won = document.getElementById('won');
let ret = document.getElementById('retry');

let body =document.body;

let play = 0;

let player1=document.querySelector('.player1');
let player2=document.querySelector('.player2');

let p1 = 0;
let p2 = 0;

let sign = document.getElementById('sign');
let sg1 = 'X';
let sg2 = 'O';

for (let i = 0; i < 3; i++) {


    let column = document.createElement('div');
    column.classList.add('column');
    all.appendChild(column);


    for (let j = 0; j < 3; j++) {


        let button = document.createElement('button');
        button.setAttribute('id','button')
        button.classList.add('btn'+((i*3)+j+1));


        button.addEventListener('click',()=>{


            button.disabled=true;
            if (play == 0) {


                button.innerText='X';
                button.style.backgroundColor='pink';
                check();
                body.style.backgroundColor='red'
                play = 1;


            }else if (play == 1) {


                button.innerText='O';
                button.style.backgroundColor='lightblue';
                check();
                body.style.backgroundColor='blue'
                play = 0;


            }
        });


        column.appendChild(button);
    }   
}

let butnAll = document.querySelectorAll('#button');
let buttons = document.getElementById('button');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');
let btn7 = document.querySelector('.btn7');
let btn8 = document.querySelector('.btn8');
let btn9 = document.querySelector('.btn9');


function check() {

  
    if ((btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X")|| (btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X")|| (btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X")|| (btn1.innerText=="X"&&btn4.innerText=="X"&&btn7.innerText=="X")|| (btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X")|| (btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X")|| (btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X")|| (btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X")) {
            
        butnAll.forEach(element => {
            
            element.disabled=true;
        });
        p1=p1+1;
        player1.innerText=p1;
        won.style.display='block'
        body.style.backgroundColor='red';
        sign.innerText=sg+(Math.floor(Math.random() * 2) + 1)
        
        

        
    } else if ((btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O")|| (btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O")|| (btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O")|| (btn1.innerText=="O"&&btn4.innerText=="O"&&btn7.innerText=="O")|| (btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O")|| (btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O")|| (btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O")|| (btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O")) {
           
        butnAll.forEach(element => {
           
            element.disabled=true;
        });
        p2=p2+1;
        player2.innerText=p2;
        won.style.display='block'
        body.style.backgroundColor='blue';
        sign.innerText=sg+(Math.floor(Math.random() * 2) + 1)
    }
}


ret.addEventListener('click',()=>{
    butnAll.forEach(element => {
        element.innerText="";
        play = 0;   
        element.disabled=false;
        element.style.backgroundColor='';
        won.style.display='none';
        body.style.backgroundColor=''
    });
    let rand = Math.floor(Math.random() * 2) + 1;
    if (rand==1) {
        sign.innerText=sg1;    
    }
    else{
        sign.innerText=sg2;
    }
    
})

