/*Chuck Norris API*/

randomFact()

.then(response => {
console.log ('success');
})
.catch((err) => {
console.log (err);
});
async function randomFact() {
const response = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
"method": "GET",
"headers": {
"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
"x-rapidapi-key": "f1b9cdd739mshde6ae1d4455ff9cp12a493jsn0545889061c2",
"accept": "application/json"
}
// async function randomFact() {
// const response = await fetch("https://webknox-trivia-knowledge-facts-v1.p.rapidapi.com/trivia/random", {
// "method": "GET",
// "headers": {
// 	"x-rapidapi-host": "webknox-trivia-knowledge-facts-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "f1b9cdd739mshde6ae1d4455ff9cp12a493jsn0545889061c2"
//     }
})
const myTxt = await response.json();
const {value} = myTxt;
//change value to success, trivia if we use trivia knowledge facts:
//const {success, trivia} = myTxt 
if (value.length > 140 ){
    randomFact();
}
else if (value.length <140) {
    console.log(myTxt)
    document.getElementById('fact').textContent = value; 
    }
else 
    return 0;

}