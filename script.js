
// RE-USABLE FUNCTIONS
// shipsHavenMain()         : returns to the main page of Ship's Haven
// shipsHavenMerchant()     : returns to the Ship's Haven Merchant
// travellingBlacksmith()   : returns to the travelling Blacksmith
// shipsHavenBard()         : returns to the Ship's Haven Bard
// shipsHavenDockmen()      : returns to the Ship's Haven Dockmen
// shipsHavenTownGuard()    : returns to the Ship's Haven Town Guard
// shopBtns()               : adds the shop buttons to the lower screen - needs to be more modular though
//addItemsToShop ()         : add item in conjunction with item1 to shops

////// FUNCTIONS///////

function addItemsToShop(item1,item2,item3) {
    btn1.textContent = item1.name;
    btn1.style.backgroundColor = "#c6ac8f"
    shopBtns(item1, item2, item3);

    btn2.textContent = item2.name;
    btn2.style.backgroundColor = "#c6ac8f"
    shopBtns(item1, item2, item3);

    btn3.textContent = item3.name;
    btn3.style.backgroundColor = "#c6ac8f"
    shopBtns(item1, item2, item3);

    btn4.textContent = "Leave";
    btn4.style.backgroundColor = "#8ecae6"
    shopBtns(item1, item2, item3);

    btn5.textContent = `${playerCharacter.gold}💰`;
    btn5.style.backgroundColor = "#e76f51"
    shopBtns(item1, item2, item3);

    btn6.textContent = "Purchase";
    btn6.style.backgroundColor = "#84a98c"
    shopBtns(item1, item2, item3);
}

function shopBtns(item1, item2, item3) {

    function shopItem1() {
        console.log("A");
        playerCharacter.selectedItem = "btn1";
        upperBoxText.innerHTML += `<br/><br/> ${item1.name}`
        upperBoxText.innerHTML += `<br/>   Gold: ${item1.gold}`
        upperBoxText.innerHTML += `<br/>   Defense: ${item1.armor}`
        btn1.style.background = "grey";
        btn2.style.background = "#c6ac8f"
        btn3.style.background = "#c6ac8f"
        scrollToBottom(upperBoxText);
    }

    function shopItem2() {
        console.log("B");
        playerCharacter.selectedItem = "btn2";
        upperBoxText.innerHTML += `<br/><br/> ${item2.name}`
        upperBoxText.innerHTML += `<br/>   Gold: ${item2.gold}`
        upperBoxText.innerHTML += `<br/>   Defense: ${item2.armor}`
        btn1.style.background = "#c6ac8f";
        btn2.style.background = "grey"
        btn3.style.background = "#c6ac8f"
        scrollToBottom(upperBoxText);
    }

    function shopItem3() {
        console.log("C");
        playerCharacter.selectedItem = "btn3";
        upperBoxText.innerHTML += `<br/><br/> ${item3.name}`
        upperBoxText.innerHTML += `<br/>   Gold: ${item3.gold}`
        upperBoxText.innerHTML += `<br/>   Defense: ${item3.armor}`
        btn1.style.background = "#c6ac8f";
        btn2.style.background = "#c6ac8f"
        btn3.style.background = "grey"
        scrollToBottom(upperBoxText);
    }

    function shopLeave() {
        console.log("D");
        shipsHavenMain();
    }

    function shopGold() {
        console.log("E");
        playerCharacter.selectedItem = "btn5";
    }

    function shopPurchase() {
        console.log("Purchase Clicked");
        btn1.style.background = "#c6ac8f";
        btn2.style.background = "#c6ac8f"
        btn3.style.background = "#c6ac8f"
        if (playerCharacter.selectedItem == "btn1") {
            upperBoxText.innerHTML += "<br/><br/> Thank you for your purchase!"
            scrollToBottom(upperBoxText);
            playerCharacter.gold -= item1.gold;
            playerCharacter.armor += item1.armor;
            playerCharacter.inventory.push(item1.name);
            btn5.textContent = `${playerCharacter.gold}💰`;
            console.log(playerCharacter.gold);
            console.log(playerCharacter.armor);
        }
        else if (playerCharacter.selectedItem == "btn2") {
            upperBoxText.innerHTML += "<br/><br/> Thank you for your purchase!"
            scrollToBottom(upperBoxText);
            playerCharacter.gold -= item2.gold;
            playerCharacter.armor += item2.armor;
            playerCharacter.inventory.push(item2.name);
            btn5.textContent = `${playerCharacter.gold}💰`;
            console.log(playerCharacter.gold);
            console.log(playerCharacter.armor);
        }
        else if (playerCharacter.selectedItem == "btn3") {
            upperBoxText.innerHTML += "<br/><br/> Thank you for your purchase!"
            scrollToBottom(upperBoxText);
            playerCharacter.gold -= item3.gold;
            playerCharacter.armor += item3.armor;
            playerCharacter.inventory.push(item3.name);
            btn5.textContent = `${playerCharacter.gold}💰`;
            console.log(playerCharacter.gold);
            console.log(playerCharacter.armor);
        }
        else {
            console.log("please select an item first");
            scrollToBottom(upperBoxText);
        }
        playerCharacter.selectedItem = null;
        console.log(playerCharacter.selectedItem);
    }

    clearButtonEvents();

    btn1.addEventListener("click", shopItem1);
    btn2.addEventListener("click", shopItem2);
    btn3.addEventListener("click", shopItem3);
    btn4.addEventListener("click", shopLeave);
    btn5.addEventListener("click", shopGold);
    btn6.addEventListener("click", shopPurchase);

}


function clearButtonEvents() {  // creates a root copy of each btn, creates a clean slate without any eventListeners
    btn1.replaceWith(btn1.cloneNode(true));
    btn2.replaceWith(btn2.cloneNode(true));
    btn3.replaceWith(btn3.cloneNode(true));
    btn4.replaceWith(btn4.cloneNode(true));
    btn5.replaceWith(btn5.cloneNode(true));
    btn6.replaceWith(btn6.cloneNode(true));

    // takes the copy and gives it the id back 
    btn1 = document.getElementById("btn1");
    btn2 = document.getElementById("btn2");
    btn3 = document.getElementById("btn3");
    btn4 = document.getElementById("btn4");
    btn5 = document.getElementById("btn5");
    btn6 = document.getElementById("btn6");
}

function assignButtonEvent(button, eventHandler, textContent, backgroundColor) {
    button.removeEventListener("click", button._eventHandler); // Remove previous event listener if any
    button.addEventListener("click", eventHandler); // Add new event listener
    button._eventHandler = eventHandler; // Store the event handler reference for later removal
    button.textContent = textContent; // Set button text content
    button.style.backgroundColor = backgroundColor; // Set button background color
}





//Player's Character

const playerCharacter = {
    name: "placeholder",
    health: 0,
    armor: 0,
    attack: 0,
    stamina: 0,
    gold: 0,
    inventory: [],
    selectedItem: null
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


//scrollwheel
function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight
}



//this will save and load data at the same time
function saveLoadCharacter() {
    localStorage.setItem("playerCharacter", JSON.stringify(playerCharacter));//sets playerChacter into browser
    const storedObjectString = localStorage.getItem("playerCharacter");//grab playerCharacter from browser
    const storedPlayerCharacter = JSON.parse(storedObjectString);//json.parse to convert from string to object
    console.log(storedPlayerCharacter);
}

// Class Starts

function warriorStartGame() {
    Object.assign(playerCharacter, warriorStats);
    saveLoadCharacter();
    gameStart();
}


// Class Stats - Objects

const warriorStats = {
    name: "Warrior",
    health: 100,
    armor: 20,
    attack: 20,
    stamina: 10,
    gold: 1500,
    inventory: ["Splintery Sword"],
}

const mageStats = {
    name: "Mage",
    health: 80,
    armor: 10,
    attack: 5,
    stamina: 30,
    gold: 1200,
    inventory: ["bland_staff"],
}

const archerStats = {
    name: "Archer",
    health: 60,
    armor: 5,
    attack: 10,
    stamina: 50,
    gold: 2500,
    inventory: ["fickle_bow"],
}



// SHIP'S HAVEN MAIN SCREEN

function shipsHavenMain() {

    btn1.style.backgroundColor = "#a8dadc"; //theme the main screen buttons
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
    btn6.textContent = "Inventory";

    clearButtonEvents(); //clear then set the location buttons
    btn1.addEventListener("click", shipsHavenMerchant);
    btn2.addEventListener("click", travellingBlacksmith);
    btn3.addEventListener("click", shipsHavenBard);
    btn4.addEventListener("click", shipsHavenTownGuard);
    btn5.addEventListener("click", shipsHavenDockmen);
    btn6.addEventListener("click", playerInventoryDisplay);


    // Merchant shop \\  

    function shipsHavenMerchant() {
        upperBoxText.innerHTML += "<br/><br/> What can I get for ya!";
        scrollToBottom(upperBoxText);

        //Items used in shop
        const item1 = shopItems.lightTunic;
        const item2 = shopItems.shabbyShoes;
        const item3 = shopItems.raggedPants;
        addItemsToShop(item1,item2,item3)
    }


    // Blacksmith shop \\

    function travellingBlacksmith() {
        console.log("travellingBlacksmith");
        upperBoxText.innerHTML += "<br/><br/> What can I do for you!";
        scrollToBottom(upperBoxText);

        //Items used in shop
        const item1 = shopItems.whetstone;
        const item2 = shopItems.splinteryShield;
        const item3 = shopItems.raggedPants;
        addItemsToShop(item1,item2,item3)
    }

    function shipsHavenBard() {
        console.log("3");
    }


    // TOWN GUARD \\

    function shipsHavenTownGuard() {
        console.log("4");


    }
}



function shipsHavenDockmen() {
    console.log("5");
}

function playerInventoryDisplay() {
    console.log("6");
    if (playerCharacter.inventory.length < 0) {
        upperBoxText.innerHTML += "<br/><br/> Nothing to Display";
        scrollToBottom(upperBoxText);
    }
    else {
        upperBoxText.innerHTML += "<br/><br/><br/> Inventory";
        scrollToBottom(upperBoxText);
        upperBoxText.innerHTML += `<br/><br/> -${playerCharacter.inventory.join("<br/>-")}`;
        scrollToBottom(upperBoxText);
    }
}










function shipsHavenBardBtns() {  // BARD BUTTONS - Incomplete

    function bard1() {
        console.log("1");
    }

    function bard2() {
        console.log("2");
    }

    function bard3() {
        console.log("3");
    }

    function bardLeave() {
        console.log("4");
    }

    function bardMoney() {
        console.log("5");
    }

    function bardContinue() {
        console.log("6");
    }

    clearButtonEvents();

    btn1.addEventListener("click", bard1);
    btn2.addEventListener("click", bard2);
    btn3.addEventListener("click", bard3);
    btn4.addEventListener("click", bardLeave);
    btn5.addEventListener("click", bardMoney);
    btn6.addEventListener("click", bardContinue);

    btn1.style.backgroundColor = "#a8dadc";   // need to move these later
    btn1.textContent = "Btn1";
    btn2.style.backgroundColor = "#bbd0ff";
    btn2.textContent = "Btn2";
    btn3.style.backgroundColor = "#f49cbb";
    btn3.textContent = "Btn3";
    btn4.style.backgroundColor = "#83c5be";
    btn4.textContent = "Btn4";
    btn5.style.backgroundColor = "#4a5759";
    btn5.textContent = "Btn5";
    btn6.style.backgroundColor = "#a3b18a";
    btn6.textContent = "Btn6";
}






// GAME START

function gameStart() {
    const upperBoxText = document.createElement('div'); //create new div
    upperBoxText.id = "upperBoxText"; //sets Id
    upperBoxText.innerHTML = `Welcome to Ship's Haven young ${playerCharacter.name}!`; //add text
    scrollToBottom(upperBoxText);
    const characterCardsReplace = document.getElementById("upperBox"); //target Id
    characterCardsReplace.replaceWith(upperBoxText); //replace with new div

    // Add scrollable styles
    upperBoxText.style.height = "303px";
    upperBoxText.style.width = "474px";
    upperBoxText.style.fontSize = "2rem";
    upperBoxText.style.overflowY = "scroll";
    upperBoxText.style.border = "1px solid #ccc";
    upperBoxText.style.padding = "10px";
    upperBoxText.style.backgroundColor = "#fff";

    btn6.textContent = "▶";
    btn6.addEventListener("click", function () { //allows for text to change THEN run shipsHavenBtns()
        upperBoxText.innerHTML += "<br/><br/> Select a location to travel!";
        scrollToBottom(upperBoxText);
        shipsHavenMain();
    });
}





// ITEMS \\
const shopItems = {
    lightTunic: { name: "Light Tunic", gold: 90, armor: 10 },
    shabbyShoes: { name: "Shabby Shoes", gold: 50, armor: 2, },
    raggedPants: { name: "Ragged Pants", gold: 150, armor: 8 },
    whetstone: { name: "Whetstone", gold: 20, attack: 2 },
    splinteryShield: { name: "Splintery Shield", gold: 120, armor: 12 },
}

