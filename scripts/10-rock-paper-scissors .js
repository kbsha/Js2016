let result = '';
      let choice='';
        let computerMove = '';

      //  let score =  {
       //     win:  0,
       //     lost:  0,
       //     tie:  0
       // };
        
       let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        lost: 0,
        tie: 0
      };
      //scoreDisplay();
      for(i=1 ;i>0;i--)
    compMove();
   // scoreDisplay(); 
       function cheekFun(choice)
       {
       // let computerMove = compMove();
        if(choice === 'Rock')
        {
        if(computerMove === 'Rock')
        {
            result = 'tie';
        }else if(computerMove === 'paper')
        {
            result = 'losses !';
        } else if(computerMove === 'scissor')
        {    result = 'win';
        };
        if(result === 'tie')
        {score.tie += 1;}
        if(result === 'losses')
      {  score.lost+= 1;}

        if(result === 'win')
        {score.win+=1;}
    
       }
       if(choice === 'paper')
        {
        if(computerMove === 'Rock')
        {
            result = 'win';
        }else if (computerMove === 'paper')
        {
            result = 'tie';
        } else if(computerMove === 'scissor')
        {    result = 'losses';
        };
        if(result === 'tie')
        score.tie += 1;
        if(result === 'losses')
        score.lost+= 1;
        if(result === 'win')
        score.win+=1;


            }
       if(choice === 'scissor')
        {
        if(computerMove === 'Rock')
        {
            result = 'losses';
        }else if(computerMove === 'paper')
        {
            result = 'win';
        } else if(computerMove === 'scissor')
        {    result = 'tie';
        };
        if(result === 'tie')
        score.tie += 1;
        if(result === 'losses')
        score.lost+= 1;
        if(result === 'win')
        score.win+=1;
   // console.log(score);
           
//localStorage.setItem('score',JSON.stringify(score));
}
// localStorage.setItem('mes',score);
//localStorage.setItem('mes',JSON.stringify(score));  
localStorage.setItem('score',JSON.stringify(score));
//alert(`computer move ${computerMove} and you select ${choice} and result ${result} 
//win:${score.win} losse:${score.lost} tie: ${score.tie}`);  
/*let resultElement=document.body.querySelector('.js-result');
  resultElement.innerHTML=`you ${result} me`;
let scoreTextElement =document.body.querySelector('.js-score-text');
scoreTextElement.innerHTML=`  <br>
You: <img class="move-icon" src="images/${choice}-emoji.png"> Computer: <img class="move-icon" src="images/${computerMove}-emoji.png"> <br>  
win:${score.win} losse:${score.lost} tie: ${score.tie}`;
*/
//return choice;
scoreDisplay(choice);
//return choice;
//score=JSON.parse(localStorage.getItem('score'));

}
//scoreDisplay();

/*let array=['kibr','infinity'];
let test=document.body.querySelector('.test-class');

for( n=0;n<2;n++)
{test.innerHTML=`${array[n-1]} + ${array[n]}`};
*/
function scoreDisplay(choice)
{
  //let res=result;
  let resultElement=document.body.querySelector('.js-result');
  resultElement.innerHTML=`you ${result} me`;
  let scoreTextElement =document.body.querySelector('.js-score-text');
scoreTextElement.innerHTML=`  <br>
You: <img class="move-icon" src="images/${choice}-emoji.png"> Computer: <img class="move-icon" src="images/${computerMove}-emoji.png"> <br>  
win:${score.win} losse:${score.lost} tie: ${score.tie}`;
} 
    
    
function compMove()
      { 
        const randomNumber = Math.random();

        if(randomNumber>=0 && randomNumber< 1/3)
       {
         computerMove = 'Rock';
       }else if(randomNumber >= 1/3 && randomNumber < 2/3)
       {
         computerMove = 'paper';
       }else if (randomNumber>=2/3 && randomNumber<1)
       {  computerMove = 'scissor'}
     //  alert(`computer move; ${computerMove}`); 
     return computerMove;
    }