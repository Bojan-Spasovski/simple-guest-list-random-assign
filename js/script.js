// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign button variable
const assignButton = document.querySelector(".assign");
// assigned items list variable
const assignedItems = document.querySelector(".assigned-items");

/* 
Event listener for CLICK on ivnite using the addToList Fuction below 
and clearInput function to clear names, as well as watch out for 
limit of 8. ---Refactored---
*/

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  addToList(guest);
  clearInput();
  updateGuestCount();
});

/* 
Function for creating a new list of user inserted names and adding them 
to it.
*/

const addToList = function (guest) {
  if (guest !== "") {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
  }
};

/* 
Erase names after input
*/
const clearInput = function () {
  guestInput.value = "";
};

/* 
Funstion for limiting the list to 8, and hiding the button when limit 
is reached.
*/

const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "potato",
    "salad",
    "hummus",
    "cookies",
    "fruit",
    "pasta salad",
    "rissotto",
    "bread with ajvar"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
