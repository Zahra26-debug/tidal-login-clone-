document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Basic validation (In reality, this would involve authentication logic)
    if (email === "" || password === "") {
      alert("Please fill in both fields.");
    } else {
      // Simulate login success
      alert("Login successful!");
    }
  });
  