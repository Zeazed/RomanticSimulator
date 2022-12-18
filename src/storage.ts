
import Intrests from '../data/RomancesData.json'
import prompt from 'promise-prompt';
import colors from 'colors';
import * as gfunction from './main'



export async function startnewgame() {
    const name = prompt("\n\n\n\n\n\nWhat is your name? ");
    name.then((name:string)=> {
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nHello "+colors.rainbow(name)+"!" +" and welcome to the amazing world of 'Romantic Simulator' \n\n Pick the first girl you want to talk to! \n\n 1. Summer Girl Larissa\n\n 2. Party Gurl Erica \n\n 3. Inside Girl Sandra")
      var userchoice = (prompt("")) 
      userchoice.then((userchoice:string)=>{
      if(userchoice === "1"){
      gfunction.SmrGrl()
    } else if(userchoice === "2"){
        gfunction.PrtyGrl()
      } else if(userchoice === "3"){
        gfunction.InsGrl()
      }
    })
   })
  }
  
export function quit(){
    console.log("\n\n\n\n\n\n\n\n Thanks for playing!!!")
    process.exit()
}

export function ending(){
    console.log("Congratulations! You have won the game")
}

export function howtoplay() {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYou choose a girl and talk to her! After you talk with her enough times, who knows what will happen :)")
    gfunction.main()
}

export function tesasdt(){
console.log(Intrests[1].Name) 

}

export function credits(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMade by Zeazed 2022")
    gfunction.main()
}


