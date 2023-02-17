// const clicks = document.querySelectorAll(".click")

// const firstTop = document.querySelectorAll('div[class="about"]')
// const secondTop = document.querySelectorAll('h2[class="movie"]')
// const thirdTop = document.querySelectorAll('div[class="guest-book"]')


// clicks[0].onclick = () => {
//   window.scroll({top: firstTop, behavior: 'smooth'})
// }
// clicks[1].onclick = () => {
//   window.scroll({top: secondTop, behavior: 'smooth'})
// }
// clicks[2].onclick = () => {
//   window.scroll({top: thirdTop, behavior: 'smooth'})
// }

const clicks = document.querySelectorAll(".click")
const sections = document.querySelectorAll("section")
const firstTop = sections[0].offsetTop
const secondTop = sections[1].offsetTop


clicks[0].onclick = function() {
  window.scroll({top: firstTop, behavior: 'smooth'})
}
clicks[1].onclick = function() {
  window.scroll({top: secondTop, behavior: 'smooth'})
}
clicks[2].onclick = function() {
  window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
}