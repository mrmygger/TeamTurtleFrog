
/*Github API*/
  const url = "https://api.github.com/repos/clauspreuss/FrogQuizz/contents/frogquiz"
  const btnRepos = document.getElementById("btnQuiz")
  let file_content="";
    
  btnRepos.addEventListener("click", getRepos)

  async function getRepos() {
    
    const response = await fetch(url)
    const result = await response.json()
    file_content=JSON.parse(atob(result["content"]))
    console.log(file_content)
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
             HTMLhelperstring += "<button id = " + data[i].QuestionId + ">" + data[i].Answers[j] + "</button>"  ;
            
        }       
        HTMLhelperstring += ".</p>";
        HTMLString += HTMLhelperstring + "</li>";       
        
    }
    questionContainer.insertAdjacentHTML('beforeend', HTMLString);
}

/*End render Question*/

