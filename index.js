const $social = document.querySelector('.social')
const display = ['./images/fb.png', './images/tw.png', './images/is.png', './images/gp.png']

const $htmlContent = []
for (let i = 0; i < display.length; i++) {
  $htmlContent.push(`<img class="thumbnail" src=${display[i]} data-text="" alt="social">`)
}

$social.innerHTML = $htmlContent.join(' ')