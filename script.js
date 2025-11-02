function convert() {
  const km = document.getElementById("kmInput").value;
  const result = document.getElementById("result");

 
  if (km === "" || isNaN(km) || km < 0) {
    result.textContent = "يرجى إدخال رقم صالح (غير سالب)";
    result.style.color = "red";
    return;
  }

  const miles = (km * 0.621371).toFixed(3);
  result.textContent = `${km} كيلومتر = ${miles} ميل`;
  result.style.color = "green";
}

function clearFields() {
  document.getElementById("kmInput").value = "";
  document.getElementById("result").textContent = "";
}