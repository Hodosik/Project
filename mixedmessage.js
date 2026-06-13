//random message generator

function generateFirstWord() {
 const firstWords = ["World", "God", "Buddha", "Jesus", "Allah"];
 const randomIndex = Math.floor(Math.random() * firstWords.length);
 return firstWords[randomIndex];
 }


function generateSecondWord() {
 const SecondWords = ["heals", "ignores", "loves", "plays", "guides"];
 const randomIndex = Math.floor(Math.random() * SecondWords.length);
 return SecondWords[randomIndex];
 }


function generateThirdWord() {
 const thirdWords = ["stupids", "innovation", "cool stuff", "bamboo", "technology"];
 const randomIndex = Math.floor(Math.random() * thirdWords.length);
 return thirdWords[randomIndex];
 }

 for (let i = 0; i < 3; i++) {
  console.log("This is your No. " + (i + 1) + " wise message: " + generateFirstWord() + " " + generateSecondWord() + " " + generateThirdWord());
   }
console.log ("That is cool stuff, right?");
