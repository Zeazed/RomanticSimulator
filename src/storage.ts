
import Intrests from '../data/RomancesData.json'
import prompt from 'promise-prompt';
import colors from 'colors';
 
export async function main()  {
    console.log(" Welcome to the Main Menu of the brand new HTS Romantic Simulator! \nChoose a number that represents your choice: \n1. Start a new game \n2. How to play\n3. Credits\n4. Exit")
    var userchoice = prompt("")
    userchoice.then((userchoice:string)=>{
    if(userchoice === "1"){
        startnewgame()
    } else if(userchoice === "2"){
        howtoplay()
    } else if(userchoice === "3"){
        console.log("Coming soon!")
    } else if (userchoice === "4"){
        console.log("Thanks for playing!")
        process.exit()
    } else {
        console.log("Invalid choice!\n \n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n") 
        main()
    }
    
}) }

export async function startnewgame() {
    const name = prompt("What is your name? ");
    name.then((name:string)=> {
      console.log("Hello "+colors.bold.red(name)+"!")
   })
  }
  

function howtoplay() {
    console.log("Coming soon!")
}

export function tesasdt(){
console.log(Intrests[1].Name) 

}


