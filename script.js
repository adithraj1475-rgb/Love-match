const yourName = document.getElementById("yourName");
const partnerName = document.getElementById("partnerName");

const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");
const percentage = document.getElementById("percentage");
const message = document.getElementById("message");


checkBtn.addEventListener("click", function () {

  const name1 = yourName.value.trim().toLowerCase();
  const name2 = partnerName.value.trim().toLowerCase();


  // Check if names are entered
  if (name1 === "" || name2 === "") {

    alert("Please enter both names ❤️");

    return;
  }


  // Allow only letters and spaces
  if (!/^[a-zA-Z ]+$/.test(name1) ||
      !/^[a-zA-Z ]+$/.test(name2)) {

    alert("Please enter names using letters only.");

    return;
  }


  /*
    Create a number from the names.

    The same two names will always
    produce the same percentage.
  */

  const combinedName = name1 + name2;

  let total = 0;


  for (let i = 0; i < combinedName.length; i++) {

    total += combinedName.charCodeAt(i) * (i + 1);

  }


  // Generate percentage between 50 and 100
  const lovePercentage = 50 + (total % 51);


  // Show percentage
  percentage.textContent = lovePercentage + "%";


  // Message based on percentage
  if (lovePercentage >= 90) {

    message.textContent =
      "Amazing match! You two have great chemistry! 💖";

  }

  else if (lovePercentage >= 75) {

    message.textContent =
      "Looks like a strong connection! ❤️";

  }

  else if (lovePercentage >= 60) {

    message.textContent =
      "There may be some nice chemistry here! 💕";

  }

  else {

    message.textContent =
      "A fun result! Real relationships depend on trust and communication. 😊";

  }


  // Display result
  result.classList.add("show");

});


resetBtn.addEventListener("click", function () {

  yourName.value = "";
  partnerName.value = "";

  percentage.textContent = "0%";

  message.textContent =
    "Enter two names to calculate your score.";

  result.classList.remove("show");

});