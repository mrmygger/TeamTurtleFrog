let resultArray=[,,,,,,,,,];
let profileScore=[,,,,,];
let file_content="";
let txtWinner="";


function loadQuiz(){
/*Github API*/
const url = "https://api.github.com/repos/clauspreuss/FrogQuizz/contents/frogquiz";
const btnRepos = document.getElementById("btnQuiz");

/* only for test development
document.getElementById('btnCalculate').style.display="none";  
*/
document.getElementById('btnQuiz').style.display="none";

btnRepos.addEventListener("click", getRepos);

getRepos();

async function getRepos() {
  
  const response = await fetch(url);
  const result = await response.json();
  file_content=JSON.parse(atob(result["content"]));
  renderHTML(file_content);     
}
/*End Github API*/

/*Render question*/
function renderHTML(data) {
  const questionContainer = document.getElementById("question");



   
  let HTMLString = "<header><h1>Question 1.</h1><section class=progressbar><div class=circle marked></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div></section></header><main class=questionVSanswers>";

  for (let i = 0; i < data.length; i++) {  
    
      HTMLString += "<li style=display:none id=" + data[i].QuestionId+ "><section class=question> <h2>"  + data[i].Question +"</h2><button id=backButton class=backButton>Back</button></section><ul class=answers>";
      let HTMLhelperstring = "";
      for (let j = 0; j <= data[i].Answers.length-1; j++) {
           HTMLhelperstring += "<button id = " +i+"_"+ j + " class=transition>" + data[i].Answers[j] + "</button>"  ;
          
      }       
     // HTMLhelperstring += "</main>";
  if(i<9){
      HTMLString += HTMLhelperstring + "<button id=btn_" + data[i].QuestionId + " class=nextbtn>Next</button></ul></li>"; 
    }
  else{
    HTMLString += HTMLhelperstring + "<button id='btnCalculate' class=showResultbtn>Show result</button></ul></li>";
 
  }     
      
  }
  HTMLString+="</main>";
  questionContainer.insertAdjacentHTML('beforeend', HTMLString);

  //Add eventlisteners
  document.getElementById('btnCalculate').addEventListener('click', determinQuizwinner);
  //Get all <button> elements in the document with class="transition"

  const buttons = document.querySelectorAll(".transition");
  for (const button of buttons) {
    button.addEventListener('click', function(event) {
      //Første giver spørgmål/position andet tal giver svar
      let quizzanswer=button.id.split("_");
      resultArray[quizzanswer[0]]=quizzanswer[1]; 
      })
  }
  //Make first question visible
  document.getElementById("1").style.display = "flex";

  //Add eventlisteners
  //Get all <button> elements in the document with class="nextbtn"

  const nxtbuttons = document.querySelectorAll(".nextbtn");
  for (const button of nxtbuttons) {
    button.addEventListener('click', function(event) {
      let txtId=button.id;
      let hlpArray=txtId.split("_");
      //Make me invincible and show next question until question 10
      let hlpInt=hlpArray[1];
      hlpInt++;
      document.getElementById(hlpArray[1]).style.display="none";
      
      if (hlpInt<11){
        document.getElementById(hlpInt).style.display="flex";
         } 
      if (hlpInt==10){
        //next button skal hides
        document.getElementById("btn_10").style.display="none";
        //document.getElementById('btnCalculate').style.display="block";
    }
    })
  }
}

}

//document.getElementById('btnCalculate').addEventListener('click', determinQuizwinner);

function determinQuizwinner(){
  
  let countHipster=0;
  let countCatLady=0;
  let countPartyAnimal=0;
  let countCouchpotato=0;
  let countFitnessFreak=0;
  let countGamer=0;

  //Loop result and count on each profile
  for(i=0;i<resultArray.length;i++){
    
    let helperArray=file_content[i].Weight[resultArray[i]]
    
      countHipster=countHipster+helperArray[0];
      countCatLady=countCatLady+helperArray[1];
      countPartyAnimal=countPartyAnimal+helperArray[2];
      countCouchpotato=countCouchpotato+helperArray[3];
      countFitnessFreak=countFitnessFreak+helperArray[4];
      countGamer=countGamer+helperArray[5];
  
  }
  
  //Sort result

  let winner=Math.max(countHipster, countCatLady, countPartyAnimal,countCouchpotato,countFitnessFreak,countGamer);
  
  if (countHipster==winner){
    txtWinner="The Hipster";
  }
  if (countCatLady==winner){
    txtWinner="The Catlady";
  }
  if (countPartyAnimal==winner){
    txtWinner="The Party Animal";
  }
  if (countCouchpotato==winner){
    txtWinner="The Couchpotato";
  }
  if (countFitnessFreak==winner){
    txtWinner="The Fitness Freak";
  }
  if (countGamer==winner){
    txtWinner="The Gamer";
  }

  //Write to local storage
  window.localStorage.setItem('Winner',txtWinner);

  //Go to result page
  window.location = "final.html";
   
}

/*End render Question*/

