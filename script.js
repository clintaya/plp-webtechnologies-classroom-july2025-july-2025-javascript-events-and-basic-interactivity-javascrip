// ==========================
// Part 1: Event Handling
// ==========================

// Show message button
document.getElementById("showMessageBtn").addEventListener("click", function () {
  document.getElementById("messageArea").textContent = "Hello! You clicked the button";
});

// Toggle box visibility
document.getElementById("toggleBoxBtn").addEventListener("click", function () {
  document.getElementById("box").classList.toggle("hidden");
});

// ==========================
// Part 2: Interactive Features
// ==========================

// Feature 1: Add new list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Dynamic Item";
  document.getElementById("dynamicList").appendChild(newItem);
});

// Feature 2: Change background color randomly
document.getElementById("changeColorBtn").addEventListener("click", function () {
  const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffcc99"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// ==========================
// Part 3: Form Validation
// ==========================

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission until validated

  // Reset error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formFeedback").textContent = "";

  let valid = true;

  // Username validation: at least 3 characters
  const username = document.getElementById("username").value.trim();
  if (username.length < 3) {
    document.getElementById("usernameError").textContent = "Username must be at least 3 characters long.";
    valid = false;
  }

  // Email validation: regex pattern
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Password validation: at least 6 characters, must contain number
  const password = document.getElementById("password").value.trim();
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters long and include at least one number.";
    valid = false;
  }

  // Final feedback
  if (valid) {
    document.getElementById("formFeedback").textContent = "✅ Signup successful!";
    document.getElementById("formFeedback").className = "success";
  } else {
    document.getElementById("formFeedback").textContent = "❌ Please fix the errors above and try again.";
    document.getElementById("formFeedback").className = "error";
  }
});
