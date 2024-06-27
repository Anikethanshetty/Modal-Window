'use strict'; 
let nuumber =  Math.trunc(Math.random()*21);
let score = 20;
let highscore = 0;

let displayMessage = function(parameter){
    document.querySelector('.message').textContent=parameter;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    
    if (!guess){
          displayMessage('No Number!');
    }
    else if (guess==nuumber){
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor='#60b347';

        if(score>highscore){
            highscore=score;
            document.querySelector('.label-highscore').textContent=`🥇 Highscore:  ${highscore} `;

        }
}

    else if (guess!==nuumber){
        if(score>1){
            
            const condition = guess>nuumber?"Too High!":"Too Low!"
            displayMessage(condition)
            score--
            document.querySelector('.score').textContent=score;
            document.querySelector('body').style.backgroundColor="red";
            
            }else{
               displayMessage('You Lost The Game!');
                document.querySelector('.score').textContent=0;
                // document.querySelector('.body').style.backgroundColor="red";
            } 
    }})

    document.querySelector('.btn-again').addEventListener('click',function(){
        score=20;
        nuumber =  Math.trunc(Math.random()*21);
         displayMessage('Start Guessing...');
        document.querySelector('.score').textContent=20;
        document.querySelector('.guess').value="";
        document.querySelector('body').style.backgroundColor="#222"
      
    }
    
    
    
    )









//     else if (guess>nuumber){
    
    
       
//     }
   
//     else if (guess<nuumber){
//         if(score>1){
//             document.querySelector('.message').textContent='Too Low!';
//             score--
//             document.querySelector('.score').textContent=score;
//             document.querySelector('body').style.backgroundColor="red";
//         }
//         else{
//             document.querySelector('.message').textContent='You Lost The Game!';
//             document.querySelector('.score').textContent=0;
           
//         }
     
//     }
  
// })

