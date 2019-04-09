document
  .getElementById("loginBtn")
  .addEventListener("click", loginWithFB, false);

function loginWithFB() {
  FB.login(
    response => {
      console.log(response);

      console.log(response.status);
    },
    { scope: "public_profile,email,user_likes" }
  );
}
