const readLineSync = require('readline-sync');

const name = readLineSync.question('Hi,I am Quizee.I am a very interactive quiz application.So,what is your name?\n');

console.log(`\nHello ${name}, welcome to Quizee !! Good to see you.Lets begin..\n`);

 const questions=[
   {
   question : 'Who did England beat in the final of the 2019 Cricket World Cup?',
   options : ['India','New Zealand','Australia','South Africa'],
   answer : 2
   },
   {
   question : 'What was the first Disney film that was produced in color?',
   options : ['Cinderella','Snow White and the Seven Dwarfs','Sleeping Beauty','Pocahontas'],
   answer : 2
   },
   {
   question : 'What is the name of the company that published the Mario Kart video game?',
   options : ['Nintendo','Electronic Arts (EA)','SEGA','Xbox'],
   answer : 1
   },
   {
   question : 'How many eyes does a spider have?',
   options : [1,2,4,8],
   answer : 4
   },
   {
   question : 'What was the name of Harry Potter’s pet owl?',
   options : ['Dobby','Nimbus','Hedwig','Fenwick'],
   answer : 3
   }];

let points = logic();
console.log(displayResults(points));

function displayQuestions(i)
{
   console.log(`Q${i+1}. ${questions[i].question}`);
}

function displayOptions(i)
{
   for(let optionIndex=0;optionIndex<4;optionIndex++)
  {
     console.log(`${optionIndex+1}. ${questions[i].options[optionIndex]}`);
  }
}

function validateResponse(userResponse)
{
   if(userResponse===1 || userResponse===2 || userResponse===3 || userResponse===4)
     return true;
   else
     return false;
}

function logic()
{
   let score=0;
   for(let i=0;i<questions.length;i++)
   {
     displayQuestions(i);
     displayOptions(i);
     const userResponse = parseInt(readLineSync.question('\nEnter your option: '));
     if(validateResponse(userResponse))
     {
       if(userResponse===questions[i].answer)
         {
           console.log('Correct Answer\n');
           score+=1;
         }
       else
         {    
           console.log('Wrong Answer');
           console.log(`Your answer: ${questions[i].options[userResponse-1]} , Correct answer: ${questions[i].options[questions[i].answer-1]}\n`);
         }
      }
      else
       {
         console.log('\nPlease enter valid option (1/2/3/4) next time.\n');
       }
  }
return score;
}

function displayResults(points)
{
   console.log(`Quiz over.Congrats ! You have scored ${points} out of ${questions.length}.`);
}
  
 

