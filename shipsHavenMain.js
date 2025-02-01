function shipsHavenMain() {  //Pulls up the main display for Ship's Haven

    //These are all the other locations you can travel to from the main screen
    //this effects text and colors of the buttons and display
    function shipsHavenMerchant() {
        upperBoxText.innerHTML += "<br/><br/> What can I get for ya!";
        scrollToBottom(upperBoxText);


        btn1.textContent = "Light Tunic";
        btn1.style.backgroundColor = "#c6ac8f"
        shopBtns();

        btn2.textContent = "Shabby Shoes";
        btn2.style.backgroundColor = "#c6ac8f"
        shopBtns();

        btn3.textContent = "Ragged Pants";
        btn3.style.backgroundColor = "#c6ac8f"
        shopBtns();

        btn4.textContent = "Leave";
        btn4.style.backgroundColor = "#8ecae6"
        shopBtns();

        btn5.textContent = `${playerCharacter.gold}💰`;
        btn5.style.backgroundColor = "#e76f51"
        shopBtns();

        btn6.textContent = "Purchase";
        btn6.style.backgroundColor = "#84a98c"
        shopBtns();
    }



    function shipsHavenBlacksmith() {
        console.log("2");
    }

    function shipsHavenBard() {
        console.log("3");
    }

    function shipsHavenTownGuard() {
        console.log("4");
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

    clearButtonEvents(); //clears and sets new buttons every time the function is ran

    btn1.addEventListener("click", shipsHavenMerchant);
    btn2.addEventListener("click", shipsHavenBlacksmith);
    btn3.addEventListener("click", shipsHavenBard);
    btn4.addEventListener("click", shipsHavenTownGuard);
    btn5.addEventListener("click", shipsHavenDockmen);
    btn6.addEventListener("click", playerInventoryDisplay);

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
    btn6.textContent = "Inventory";
}

