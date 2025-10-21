 const loginForm = document.getElementById("login_form");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("user_name").value.trim();
      const password = document.getElementById("password").value;

    //   const users = JSON.parse(localStorage.getItem("users")) || [];
    //   const user = users.find((u) => u.email === email && u.password === password);

      if (username === "admin" && password === "123") {
        // localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`Welcome back, ${username}!`);
        window.location.href = "../index.html";
      } else {
        alert("Invalid email or password.");
      }
    });