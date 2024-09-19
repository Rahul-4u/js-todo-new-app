const btnLogin = document.getElementById("button-login");
btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  //   -----------

  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  // condison---
  if (phoneNumber === "1234" && pinNumber === "Harekrishna") {
    window.location.href = "/home.html";
  } else {
    alert("tumi rang");
  }
});
