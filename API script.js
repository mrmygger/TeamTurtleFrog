let resultArray=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
let file_content="";
let txtWinner="";


function loadQuiz(){
/*Github API*/
const url = "https://api.github.com/repos/clauspreuss/FrogQuizz/contents/frogquiz";

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
   
  let HTMLString = "<header><h1>Question</h1><section class=progressbar><div class='circle' id='100' style='background: black;'>1</div><div class='circle' id='101'>2</div><div class='circle' id='102'>3</div><div class='circle' id='103'>4</div><div class='circle' id='104'>5</div><div class='circle' id='105'>6</div><div class='circle' id='106'>7</div><div class='circle' id='107'>8</div><div class='circle' id='108'>9</div><div class='circle' id='109'>10</div>"

  //for(n=100;n<110;n++){
   // HTMLString+="<div class=circle id=" + n + "></div>";
    //<div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div><div class=circle></div>
//  }
  HTMLString+="</section></header><main class=questionVSanswers>";

  for (var i = 0; i < data.length; i++) {  
    
      HTMLString += "<li style=display:none id=" + data[i].QuestionId+ "><section class=question> <h2>"  + data[i].Question +"</h2><button id=backButton_" + data[i].QuestionId + " class=backButton>Back</button></section><ul class=answers>";
      let HTMLhelperstring = "";
      for (let j = 0; j <= data[i].Answers.length-1; j++) {
           HTMLhelperstring += "<button id = " +i+"_"+ j + " class=transition>" + data[i].Answers[j] + "</button>"  ;
          
      }       
  // HTMLhelperstring += "</main>";
  if(i<9){
      HTMLString += HTMLhelperstring + "<button id=btn_" + data[i].QuestionId + " class=nextbtn>Next</button></ul></li>"; 
    }
  else{
    HTMLString += HTMLhelperstring + "<button id='btnCalculate' class=showResultbtn>Frog Me!</button></ul></li>";
 
  }     
      
  }
  HTMLString+="</main>";
  questionContainer.insertAdjacentHTML('beforeend', HTMLString);

  //Add eventlisteners
  document.getElementById('btnCalculate').addEventListener('click', determinQuizwinner);
  
  //Get all <button> elements in the document with class="transition (answers)"
  const buttons = document.querySelectorAll(".transition");
  for (const button of buttons) {
    button.addEventListener('click', function(event) {
      //Første giver spørgmål/position andet tal giver svar
      let quizzanswer=button.id.split("_");
      resultArray[quizzanswer[0]]=quizzanswer[1];
      console.log(resultArray); 
      })
  }
  //Make first question & back button visible
  document.getElementById("1").style.display = "flex";
  //style first progress bar
  document.getElementById("100").style.background="black";


  
  //Add eventlisteners
  //Get all <button> elements in the document with class="nextbtn"
  const nxtbuttons = document.querySelectorAll(".nextbtn");
  for (const button of nxtbuttons) {
    button.addEventListener('click', function(event) {
      let txtId=button.id;
      let hlpArray=txtId.split("_");
      //Make me invincible and show next question until question 10
      //hlpArray=current question and hlpInt++ next question
      
      let hlpInt=hlpArray[1];
      if (resultArray[hlpInt-1]>-1){
        document.getElementById(+hlpInt+100).style.background="black";

        hlpInt++;
        document.getElementById(hlpArray[1]).style.display="none";
        
        if (hlpInt<11){
          document.getElementById(hlpInt).style.display="flex";
         } 
        if (hlpInt==10){
        //next button skal hides
        //document.getElementById("btn_10").style.display="none";
        //document.getElementById('btnCalculate').style.display="block";
        }
      }else{
        alert("Select an answer before you click next!");
    }
    })
  }

  //

  //Add eventlisteners
  //Get all <button> elements in the document with class="backButton"
  const backbuttons = document.querySelectorAll(".backButton");
  for (const bbutton of backbuttons) {
    bbutton.addEventListener('click', function(event) {
      let btxtId=bbutton.id;
      let bckhlpArray=btxtId.split("_");
      //On what question are we - gå one back
      //Make me invincible and show last question until question 1
      //hlpArray=current question and hlpInt-- previous question
      let bckhlpInt=bckhlpArray[1];
      
      bckhlpInt--;
      document.getElementById(+bckhlpInt+100).style.background="#DAECF3";
      document.getElementById(bckhlpArray[1]).style.display="none";
      
      if (bckhlpInt>0){
        document.getElementById(bckhlpInt).style.display="flex";
         } 
      if (bckhlpInt==0){
        //Go to start page
        window.location = "index.html";
        
      }
    })
  }
}

}



function determinQuizwinner(){
  if (resultArray[9]>-1){
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
}else{
  alert("Select an answer before you click show result!");
} 
}

/*End render Question*/

