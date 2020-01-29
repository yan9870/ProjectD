let slide = 0;
let line = document.getElementsByClassName('line')[0];

function next(n) {

  if (n == 1) {
    if (slide == -1828) {
      slide = 914;
    }
    slide = slide - 914;
    line.style.left = slide + 'px';
  }
  if (n == 0) {
    if (slide == 0) {
      slide = -2742;
    }
    slide = slide + 914;
    line.style.left = slide + 'px';
  }
}
