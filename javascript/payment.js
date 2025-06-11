function processPayment() {
  const name = document.getElementById("name").value;
  const cardNum = document.getElementById("cardNum").value;
  const cvv = document.getElementById("cvv").value;



  if (!name || !cardNum || !cvv) {
    alert("Please fill all required fields.");
    return;
  }

  

  // Show success popup
  document.getElementById("success-message").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
  

  // Optional: Auto-hide after 3 seconds and clear form
  setTimeout(() => {
    document.getElementById("success-message").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.querySelector("form").reset();
  }, 3000);
}
