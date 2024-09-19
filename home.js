const addMonyBtn = document.getElementById("add-mony");
addMonyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // ----input add
  const amountAdd = document.getElementById("add-amount").value;
  const monyPin = document.getElementById("mony-pin").value;
  //   if ---
  if (monyPin === "1234") {
    const mainMonys = document.getElementById("main-mony").innerText;

    const mainMany = parseFloat(mainMonys);
    const amount = parseFloat(amountAdd);
    const newAmount = mainMany + amount;
    document.getElementById("main-mony").innerText = newAmount;
    // ---
    const container = document.getElementById("mony-container");
    container.style.backgroundColor = "green";
  } else {
    const container = document.getElementById("mony-container");
    container.style.backgroundColor = "red";
  }
});

// ----------
document.getElementById("out-mony").addEventListener("click", function (event) {
  event.preventDefault();
  const outAmounts = document.getElementById("out-amount").value;
  const outAmount = parseFloat(outAmounts);
  const outPin = document.getElementById("out-pin").value;

  // ---

  if (outPin === "12345") {
    const mainOuts = document.getElementById("main-mony").innerText;
    const mainOut = parseFloat(mainOuts);
    const newOut = mainOut - outAmount;
    document.getElementById("main-mony").innerText = newOut;
  }
});

document.getElementById("add-cash").addEventListener("click", function () {
  const addCashMony = document.getElementById("add-cash-mony");
  addCashMony.classList.remove("hidden");
  const cashOutMony = document.getElementById("cash-out-mony");
  cashOutMony.classList.add("hidden");
});

// btn2
document.getElementById("out-cash").addEventListener("click", function () {
  const addCashMony = document.getElementById("cash-out-mony");
  addCashMony.classList.remove("hidden");
  const cashOutMony = document.getElementById("add-cash-mony");
  cashOutMony.classList.add("hidden");
});
