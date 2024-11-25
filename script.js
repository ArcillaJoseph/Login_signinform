const coords = { x: 0, y: 0};
const circles = document.querySelectorAll(".circle");

circles.forEach(function(circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;

  animateCircles(){

});

function animatedCircles() {

    let x = coords.x;
    let y = coords.y;

 circles.forEach(function(circle, index) {
  circle.style.left = coords.x - 12 + "px";
  circle.styleMap.top = coords.y - 12 + "px";
  circle.x = x;
  circle.y = y;
  
  const nextCircle = circles[index + 1] || circles[0];
  x
  console.log(coords);
 });

}



document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both email and password.");
    } else {
        alert("Login Successful!");
    }
});

document.querySelector(".forgot-password").addEventListener("click", function(event) {
    event.preventDefault(); 
    alert("Please check your email to reset your password.");
});

document.querySelector(".signup-prompt a").addEventListener("click", function(event) {
    event.preventDefault(); 
    alert("Redirecting to Sign Up page...");

});