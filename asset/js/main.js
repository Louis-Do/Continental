// window.onload = function () {
//     document.getElementById("name-btn").onclick = function () {
//       document.getElementById("name-1").focus();
//     };
//   };
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
function scrollToMenu() {
  document
    .getElementById("content")
    .scrollIntoView({ behavior: "smooth" });
}
function scrollToContact() {
  document
    .getElementById("contact")
    .scrollIntoView({ behavior: "smooth" });
}