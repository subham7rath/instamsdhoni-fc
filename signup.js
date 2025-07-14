// File: signup.js

function validateSignup(event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate names
  if (!nameRegex.test(fname) || !nameRegex.test(lname)) {
    alert("First and Last name should only contain letters.");
    return false;
  }

  // Validate DOB - must be 18+
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  if (age < 18 || isNaN(age)) {
    alert("You must be at least 18 years old.");
    return false;
  }

  // Validate email
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate phone
  if (!/^\d{10}$/.test(phone)) {
    alert("Enter a 10-digit phone number.");
    return false;
  }

  // Save mock session
  localStorage.setItem("user_logged_in", "true");

  alert("Signup successful! Redirecting to verification...");
  window.location.href = "verify.html";
}
