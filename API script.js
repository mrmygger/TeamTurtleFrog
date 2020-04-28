

/*Github API*/
const url = "https://api.github.com/repos/clauspreuss/FrogQuizz/contents/frogquiz"
const btnRepos = document.getElementById("btnQuiz")
let resultArray=[,,,,,,,,,]
let profileScore=[,,,,,]
let file_content="";
  
btnRepos.addEventListener("click", getRepos)

async function getRepos() {
  
  const response = await fetch(url)
  const result = await response.json()
  file_content=JSON.parse(atob(result["content"]))
  renderHTML(file_content);     
}
/*End Github API*/

/*Render question*/
function renderHTML(data) {
  const questionContainer = document.getElementById("question");
  let HTMLString = "";

  for (let i = 0; i < data.length; i++) {       
      
      HTMLString += "<li> <p> Question no. " + data[i].QuestionId + " " + data[i].Question;
      let HTMLhelperstring = "";
      for (let j = 0; j <= data[i].Answers.length-1; j++) {
           HTMLhelperstring += "<button id = " +i+"_"+ j + " class=quizzbutton>" + data[i].Answers[j] + "</button>"  ;
          
      }       
      HTMLhelperstring += "</p>";
      HTMLString += HTMLhelperstring + "</li>";       
      
  }
  questionContainer.insertAdjacentHTML('beforeend', HTMLString);

  //Add eventlisteners
  //Get all <button> elements in the document with class="quizzbutton"

  const buttons = document.querySelectorAll(".quizzbutton")
  for (const button of buttons) {
    button.addEventListener('click', function(event) {
      //Første giver spørgmål/position andet tal giver svar
      let quizzanswer=button.id.split("_")
      resultArray[quizzanswer[0]]=quizzanswer[1] 
      })
  }
}

document.getElementById('btnCalculate').addEventListener('click', determinQuizwinner);

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
      countCouchpotato=countCouchpotato+helperArray[2];
      countFitnessFreak=countFitnessFreak+helperArray[4];
      countGamer=countGamer+helperArray[5];
  
  }
  console.log("Hipster" ,countHipster);
  console.log("Catlady :", countCatLady);
  console.log("The Party Animal: ",countPartyAnimal);
  console.log("Couchpotato: ",countCouchpotato);
  console.log("The Fitness Freak: ", countFitnessFreak);
  console.log("The Gamer: ", countGamer);  
}
/*End render Question*/