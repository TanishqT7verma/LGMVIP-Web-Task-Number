function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("email").value;

  displayData(name, gender, email);
}

function displayData(name, gender, email) {
  document.getElementById("displayedName").textContent = name;
  document.getElementById("displayedGender").textContent = gender;
  document.getElementById("displayedEmail").textContent = email;

  document.getElementById("registrationForm").classList.add("hidden");
  document.getElementById("displayData").classList.remove("hidden");
}