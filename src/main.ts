#!/usr/bin/env node
import prompt from 'promise-prompt';
import colors from 'colors';
import * as functions from './storage'
import { use } from 'chai';
import Intrests from '../data/RomancesData.json'
import fs from 'fs';
import { off } from 'process';

export async function main()  {
    console.log("\n\n\nWelcome to the Main Menu of the brand new HTS Romantic Simulator! \n\nChoose a number that represents your choice: \n\n1. Start a new game \n\n2. How to play\n\n3. Credits\n\n4. Exit\n\n")
    var userchoice = prompt("")
    userchoice.then((userchoice:string)=>{
    if(userchoice === "1"){
        functions.startnewgame()
    } else if(userchoice === "2"){
        functions.howtoplay()
    } else if(userchoice === "3"){
        functions.credits()
    } else if (userchoice === "4"){
        functions.quit()
    } else {
        console.log("Invalid choice!\n \n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n") 
        main()
    }
 
}) }

main()

const Larissa = {
    Romantic: Intrests[0].LRomanticCompatibility
}

export function SmrGrl(){
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThis is Larissa! The Summer Girl who loves long walks on beaches and tanning \n\n Select between these options \n\n 1. Talk to her \n\n 2. Check what she likes \n\n 3. Check Status \n\n 4. Quit")
const userchoice = prompt("")
userchoice.then((userchoice:string) =>{
    if(userchoice === "1" && Larissa.Romantic === 0) {
        console.log("\n\n\n\n\n\n\n\n'Awwww you are sooo cute, heres my phone number'")
        if(Larissa.Romantic === undefined) return
        Larissa.Romantic += 10
        console.log("\nYour Compatability with Larissa: " + Larissa.Romantic + "\n")
        SmrNext()
    } else if(userchoice === "2") {
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nShe likes:" + Intrests[0].Likes)
        SmrNext()
    } else if(userchoice === "3") {
        console.log(Larissa.Romantic)
        SmrNext()
    } else if(userchoice === "4") {
        functions.quit()
    }
})
}

function SmrNext() {
    if(Larissa.Romantic === 70){
        console.log("\n\nWhat do you want to do now? \n\n 1. Marry her! \n\n 2. Talk to her \n\n 3. Check what she likes \n\n 4. Check Status \n\n 5. Quit \n\n") 
        const userchoice = prompt("")
        userchoice.then((userchoice:string) =>{
            if(userchoice === "1") {
                console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n You are now married with Larissa!!!!! Congratulations!!")
                console.log("You have now won the game! Thanks for playing!")

            }
        if(userchoice === "2") {
         console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMarry her now!!!")
         SmrNext()
        }
        if(userchoice === "3") {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + Intrests[0].Likes)
            SmrNext()
        }
        if(userchoice === "4") {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + Larissa.Romantic)
            SmrNext()
        }
        if(userchoice === "5") {
            functions.quit()
        }
        })
    } else{
    console.log("\n\nWhat do you want to do now? \n\n 1. Talk to her \n\n 2. Check what she likes \n\n 3. Check Status \n\n 4. Quit \n\n")
    const userchoice = prompt("")
userchoice.then((userchoice:string) =>{
    if(Larissa.Romantic === undefined) return
    if(userchoice === "1" && Larissa.Romantic < 30) {
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYou are so cute! You have to hang out with me and my friends sometime!")
        Larissa.Romantic += 20
        SmrNext()
    }  else if(userchoice === "1" && Larissa.Romantic >= 30 && Larissa.Romantic < 70 ){
        console.log("\n\n\n\n\n\n\nI think I love you...")
        Larissa.Romantic += 40
        SmrNext()
    }
    if(userchoice === "2") {
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nShe likes:" + Intrests[0].Likes)
        SmrNext()
    }  
    if(userchoice === "3") {
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ Your Compatability: " + Larissa.Romantic)
        SmrNext()
    }  
    if(userchoice === "4") {
        functions.quit()
    }
   

})
}
}

const Erica = {
    Romantic: Intrests[1].ERomanticCompatibility
}

export function PrtyGrl(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThis is Erica! The Party Girl who loves partying and having fun! \n\n Select between these options \n\n 1. Talk to her \n\n 2. Check what she likes \n\n 3. Check Status \n\n 4. Quit")
    const userchoice = prompt("")
    userchoice.then((userchoice:string) =>{
        if(userchoice === "1" && Erica.Romantic === 0) {
            console.log("\n\n\n\n\n\n\n\nYou compliment her")
            console.log("'Awwww you are sooo cute, heres my phone number so that we can have a drink sometime!'")
            if(Erica.Romantic === undefined) return
            Erica.Romantic += 10
            console.log("\nYour Compatability with Erica: " + Erica.Romantic + "\n")
            PrtyNext()
        } else if(userchoice === "2") {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nShe likes:" + Intrests[1].Likes)
            PrtyNext()
        } else if(userchoice === "3") {
            console.log(Erica.Romantic)
            PrtyNext()
        } else if(userchoice === "4") {
            functions.quit()
        }
    })
    }

    function PrtyNext() {
        if(Erica.Romantic === 70){
            console.log("\n\nWhat do you want to do now? \n\n 1. Marry her! \n\n 2. Talk to her \n\n 3. Check what she likes \n\n 4. Check Status \n\n 5. Quit \n\n") 
            const userchoice = prompt("")
            userchoice.then((userchoice:string) =>{
                if(userchoice === "1") {
                    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n You are now married with Erica!!!!! Congratulations!!")
                    console.log("You have now won the game! Thanks for playing!")
    
                }
            if(userchoice === "2") {
             console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMarry her now!!!")
             PrtyNext()
            }
            if(userchoice === "3") {
                console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + Intrests[1].Likes)
                PrtyNext()
            }
            if(userchoice === "4") {
                console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + Erica.Romantic)
                PrtyNext()
            }
            if(userchoice === "5") {
                functions.quit()
            }
            })
        } else{
        console.log("\n\nWhat do you want to do now? \n\n 1. Talk to her \n\n 2. Check what she likes \n\n 3. Check Status \n\n 4. Quit \n\n")
        const userchoice = prompt("")
    userchoice.then((userchoice:string) =>{
        if(Erica.Romantic === undefined) return
        if(userchoice === "1" && Erica.Romantic < 30) {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYou are so cute! You have to party and have fun with me next weekend!")
            Erica.Romantic += 20
            PrtyNext()
        }  else if(userchoice === "1" && Erica.Romantic >= 30 && Erica.Romantic < 70 ){
            console.log("\n\n\n\n\n\n\nI think I love you...")
            Erica.Romantic += 40
            PrtyNext()
        }
        if(userchoice === "2") {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nShe likes:" + Intrests[1].Likes)
            PrtyNext()
        }  
        if(userchoice === "3") {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ Your Compatability: " + Erica.Romantic)
            PrtyNext()
        }  
        if(userchoice === "4") {
            functions.quit()
        }
       
    
    })
    }
    }

    const Sandra = {
        Romantic: Intrests[2].SRomanticCompatibility
    }

export function InsGrl(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThis is Sandra! The Inside Girl who loves being at home and watching movies! \n\n Select between these options \n\n 1. Talk to her \n\n 2. Check what she likes \n\n 3. Check Status \n\n 4. Quit")
    const userchoice = prompt("")
    userchoice.then((userchoice:string) =>{
        if(userchoice === "1" && Sandra.Romantic === 0) {
            console.log("\n\n\n\n\n\n\n\nYou compliment her")
            console.log("'I usually don't talk to people that much but you seem alright! Here's my number'")
            if(Sandra.Romantic === undefined) return
            Sandra.Romantic += 10
            console.log("\nYour Compatability with Sandra: " + Sandra.Romantic + "\n")
            SandraNext()
        } else if(userchoice === "2") {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nShe likes:" + Intrests[2].Likes)
            SandraNext()
        } else if(userchoice === "3") {
            console.log(Sandra.Romantic)
            SandraNext()
        } else if(userchoice === "4") {
            functions.quit()
        }
    })
    }

    function SandraNext() {
        if(Sandra.Romantic === 70){
            console.log("\n\nWhat do you want to do now? \n\n 1. Marry her! \n\n 2. Talk to her \n\n 3. Check what she likes \n\n 4. Check Status \n\n 5. Quit \n\n") 
            const userchoice = prompt("")
            userchoice.then((userchoice:string) =>{
                if(userchoice === "1") {
                    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n You are now married with Sandra!!!!! Congratulations!!")
                    console.log("You have now won the game! Thanks for playing!")
    
                }
            if(userchoice === "2") {
             console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMarry her now!!!")
             SandraNext()
            }
            if(userchoice === "3") {
                console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + Intrests[2].Likes)
                SandraNext()
            }
            if(userchoice === "4") {
                console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + Sandra.Romantic)
                SandraNext()
            }
            if(userchoice === "5") {
                functions.quit()
            }
            })
        } else{
        console.log("\n\nWhat do you want to do now? \n\n 1. Talk to her \n\n 2. Check what she likes \n\n 3. Check Status \n\n 4. Quit \n\n")
        const userchoice = prompt("")
    userchoice.then((userchoice:string) =>{
        if(Sandra.Romantic === undefined) return
        if(userchoice === "1" && Sandra.Romantic < 30) {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYou are so cute! You have to come home and watch movies with me!")
            Sandra.Romantic += 20
            SandraNext()
        }  else if(userchoice === "1" && Sandra.Romantic >= 30 && Sandra.Romantic < 70 ){
            console.log("\n\n\n\n\n\n\nI think I love you...")
            Sandra.Romantic += 40
            SandraNext()
        }
        if(userchoice === "2") {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nShe likes:" + Intrests[2].Likes)
            SandraNext()
        }  
        if(userchoice === "3") {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ Your Compatability: " + Sandra.Romantic)
            SandraNext()
        }  
        if(userchoice === "4") {
            functions.quit()
        }
       
    
    })
    }
    }





