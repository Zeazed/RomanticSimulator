"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credits = exports.tesasdt = exports.howtoplay = exports.ending = exports.quit = exports.startnewgame = void 0;
const RomancesData_json_1 = __importDefault(require("../data/RomancesData.json"));
const promise_prompt_1 = __importDefault(require("promise-prompt"));
const colors_1 = __importDefault(require("colors"));
const gfunction = __importStar(require("./main"));
async function startnewgame() {
    const name = (0, promise_prompt_1.default)("\n\n\n\n\n\nWhat is your name? ");
    name.then((name) => {
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nHello " + colors_1.default.rainbow(name) + "!" + " and welcome to the amazing world of 'Romantic Simulator' \n\n Pick the first girl you want to talk to! \n\n 1. Summer Girl Larissa\n\n 2. Party Gurl Erica \n\n 3. Inside Girl Sandra");
        var userchoice = ((0, promise_prompt_1.default)(""));
        userchoice.then((userchoice) => {
            if (userchoice === "1") {
                gfunction.SmrGrl();
            }
            else if (userchoice === "2") {
                gfunction.PrtyGrl();
            }
            else if (userchoice === "3") {
                gfunction.InsGrl();
            }
        });
    });
}
exports.startnewgame = startnewgame;
function quit() {
    console.log("\n\n\n\n\n\n\n\n Thanks for playing!!!");
    process.exit();
}
exports.quit = quit;
function ending() {
    console.log("Congratulations! You have won the game");
}
exports.ending = ending;
function howtoplay() {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYou choose a girl and talk to her! After you talk with her enough times, who knows what will happen :)");
    gfunction.main();
}
exports.howtoplay = howtoplay;
function tesasdt() {
    console.log(RomancesData_json_1.default[1].Name);
}
exports.tesasdt = tesasdt;
function credits() {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMade by Zeazed 2022");
    gfunction.main();
}
exports.credits = credits;
