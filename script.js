//Player's Character

const playerCharacter = {
    name: "placeholder",
    health: 0,
    attack: 0,
    stamina: 0,
    gold: 0,
    inventory: [],
}

//Button Controls

let btn1 = document.getElementById("btn1");
/* let btn1Clicked = btn1 = false; */
let btn2 = document.getElementById("btn2");
/* let btn2Clicked = btn2 = false; */
let btn3 = document.getElementById("btn3");
/* let btn3Clicked = btn3 = false; */
let btn4 = document.getElementById("btn4");
/* let btn4Clicked = btn4 = false; */
let btn5 = document.getElementById("btn5");
/* let btn5Clicked = btn5 = false; */
let btn6 = document.getElementById("btn6");
/* let btn6Clicked = btn6 = false; */


//this will save and load data at the same time
function saveLoadCharacter() {
    localStorage.setItem("playerCharacter", JSON.stringify(playerCharacter));//sets playerChacter into browser
    const storedObjectString = localStorage.getItem("playerCharacter");//grab playerCharacter from browser
    const storedPlayerCharacter = JSON.parse(storedObjectString);//json.parse to convert from string to object
    console.log(storedPlayerCharacter);
}


// Class Stats - Objects

const warriorStats = {
    name: "Warrior",
    health: 100,
    attack: 20,
    stamina: 10,
    gold: 1500,
    inventory: ["splintery_sword"],
}

const mageStats = {
    name: "Mage",
    health: 80,
    attack: 5,
    stamina: 30,
    gold: 1200,
    inventory: ["bland_staff"],
}

const archerStats = {
    name: "Archer",
    health: 60,
    attack: 10,
    stamina: 50,
    gold: 2500,
    inventory: ["fickle_bow"],
}


// Class Starts

function warriorStartGame() {
    Object.assign(playerCharacter, warriorStats);
    saveLoadCharacter();
    gameStart();
}


function shipsHavenBtns() {
    btn1.style.backgroundColor = "#a8dadc";
    btn1.textContent = "Merchant";
    btn2.style.backgroundColor = "#bbd0ff";
    btn2.textContent = "Blacksmith";
    btn3.style.backgroundColor = "#f49cbb";
    btn3.textContent = "Bard";
    btn4.style.backgroundColor = "#83c5be";
    btn4.textContent = "Town Guard";
    btn5.style.backgroundColor = "#4a5759";
    btn5.textContent = "Dockmen";
    btn6.style.backgroundColor = "#a3b18a";
    btn6.textContent = "▶";

    btn1.addEventListener("click",shipsHavenMerchant);
    btn2.addEventListener("click",shipsHavenBlacksmith);
    btn3.addEventListener("click",shipsHavenBard);
    btn4.addEventListener("click",shipsHavenTownGuard);
    btn5.addEventListener("click",shipsHavenDockmen);
}

// GAME START

function gameStart() {
    const upperBoxText = document.createElement('textarea'); //create new div
    upperBoxText.id = "upperBoxText";//sets Id
    upperBoxText.textContent = `Welcome to Ship's Haven young ${playerCharacter.name}!`;//add text
    const characterCardsReplace = document.getElementById("upperBox");//target Id
    characterCardsReplace.replaceWith(upperBoxText);//replace with new div

    upperBoxText.style.height = "303px";
    upperBoxText.style.width = "490px";
    upperBoxText.style.fontSize = "2rem";

    /* btn6.style.backgroundColor = "#a3b18a"; */
    btn6.textContent = "▶";
    btn6.addEventListener("click", function() {     //allows for text to change THEN run shipsHavenBtns()
        upperBoxText.value += "\n\n Select a location to travel!"
        shipsHavenBtns()
    })
}
  




// items - nested objects
const shopItems = {
    lightTunic: {
        name: "Light Tunic",
        gold: 90,
        defense: 10
    },
    shabbyShoes: {
        name: "Shabby Shoes",
        gold: 50,
        defense: 2,
    },
    raggedPants: {
        name: "Ragged Pants",
        gold: 150,
        defense: 8
    },
    whetstone: {
        name: "Whetstone",
        gold: 20,
        attack: 2
    },
    splinteryShield: {
        name: "Splintery Shield",
        gold: 120,
        defense: 12
    }
}



//Town Locations

function shipsHavenMerchant(){
    upperBoxText.value += "\n\n What can I get for ya!";


    btn1.textContent = "Light Tunic";
    btn1.style.backgroundColor = "#c6ac8f"

    
    btn2.textContent = "Shabby Shoes";
    btn2.style.backgroundColor = "#c6ac8f"

    btn3.textContent = "Ragged Pants";
    btn3.style.backgroundColor = "#c6ac8f"

    btn4.textContent = "Leave";
    btn5.textContent = "-";
    btn6.textContent = "Purchase";

    
}

function shipsHavenBlacksmith(){

}

function shipsHavenBard(){

}

function shipsHavenTownGuard(){

}

function shipsHavenDockmen(){

}
