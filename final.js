function renderResult(){

    let winnerProfile=localStorage.getItem("Winner"); 
    
    
    let txtHeading="";
    let txtProfile="";
    let imgProfileURL="";
    let imgAlttxt="";

    switch(winnerProfile) {
        case "Hipster":
          txtHeading="You are a Hipster Turtle Frog!";
          txtProfile="Like a true hipster turtle frog, you wear your manbun with great pride, you make the best cold brewed coffee, and when possible you enjoy listening to vinyls. Some day you will have an almost self-sufficient vegetable and herb garden, but let’s be real, you can not grow pumpkin spice lattes at home. Hipster turtle frog wants you to close the macbook, jump on your bike and go treat yourself to a new cactus or pretty succulent."
          imgProfileURL="./fotos/hipsterfrog.jpg";
          imgAlttxt="Turtle frog as a hipster";  
          break;
        case "The Catlady":
          txtHeading="You are a Turtle Frog Catlady!";
          txtProfile="You are catlady Turtle Frog, if you dont already share your condo, with 17 cats, then one day you will. Each cat just has so much personality and you have no problem telling them apart, it’s really more of a problem when it comes to humans. Turtle Frog Catlady wants you to put away your crochet grannysquare blanket, say goodbye to the lovelies and treat yourself to a new lint roller.";
          imgProfileURL="./fotos/catladyfrog.jpg";
          imgAlttxt="Turtle frog as a catlady";  
           break;
        case "The Party Animal":
          txtHeading="You are a Party Turtle Frog!";
          txtProfile="You are Party Turtle Frog, living for the weekend. You make the best coctails, have the best pick-up lines and you know your dance moves. But life isn’t always easy for a Party Turtle Frog, the hangovers hunts you for days, and somehow you aunt always wants to celebrate her birthday with a lovely sunday brunch. Party Turtle Frog wants you to get yourself some take away, forget the hangovers and get ready for tonight.";
          imgProfileURL="./fotos/partyfrog.jpg";
          imgAlttxt="Turtle frog as a party animal";  
          break;

        case "The Couchpotato":
          txtHeading=`You are a Turtle Frog Couchpotato!`;
          txtProfile="You are a Turtle Frog Couchpotato, you live by the words; no hurries, no worries. You are easy going and can always recommend some awesome tv shows, but should someone dare to take your seat in the couch, they are dead to you. Turtle Frog Couchpotato wants you to go stock up on snacks and rewatch your favorite show."
          imgProfileURL="./fotos/couchpotatofrog.jpg";
          imgAlttxt="Turtle frog as a couchpotato";  
         break;

        case "The Fitness Freak":
          txtHeading="You are a Fitness Turtle Frog!";
          txtProfile="You are a Fitness Turtle Frog, you are always looking for ways to keep active, and will most likely be doing squats whenever the opportunity arises, that Kardashian butt is not gonna make itself. You take more selfies than instagram models and  own more tanktops than you would like to admit. Fitness Turtle Frog wants you to stop measuring you biceps and go boil yourself some chicken and maybe even treat yourself to a protein shake.";
          imgProfileURL="./fotos/fitnessfrog.jpg";
          imgAlttxt="Turtle frog as a fitness freak";  
          break;
        case "The Gamer":
          txtHeading="You are a Gamer Turtle Frog!";
          txtProfile="You are a Gamer Turtle Frog, you never loose a game, unless your opponents are using aimhack, thats a fact. You are very well liked in your team, but things can escalate quickly and you made sure to get the highest quality gear, so that the sound quality is on point when you are yelling noob at the top of your lungs. Gamer Turtle Frog wants you to know, that if you don’t have dual screens, you are a noob! ";
          imgProfileURL="./fotos/gamerfrog.jpg";
          imgAlttxt="Turtle frog as a gamer";  
          break;
                                
        default:
          txtHeading="Turtle Frog Couchpotato!";
          txtProfile="You are a Turtle Frog Couchpotato, you live by the words; no hurries, no worries. You are easy going and can always recommend some awesome tv shows, but should someone dare to take your seat in the couch, they are dead to you. Turtle Frog Couchpotato wants you to go stock up on snacks and rewatch your favorite show."
          imgProfileURL="./fotos/couchpotatofrog.jpg";
          imgAlttxt="Turtle frog as a couchpotato";  
      }

      document.getElementById("profileHeader").innerHTML=txtHeading;
      let img=document.getElementById("profileImage");
      img.src=imgProfileURL;
      img.alt=imgAlttxt;
      document.getElementById("profileTekst").innerHTML=txtProfile;

      
}
