// function toggle_show(id) {
//   document.getElementById(id).style.display = document.getElementById(id).style.display == 'none' ? 'block' : 'none';
// }

// function toggle_show(id) {
//   document.querySelector(class).style.display = document.querySelector(class).style.display == 'none' ? 'block' : 'none';
// }

document.querySelector('.entry-title').addEventListener('click', () => {
  document.querySelector('.entry-title').classList.toggle('active');
});

document.addEventListener('keydown', (event) => {
  if (event.code == 'Space') {
    const entryTitle = document.querySelector('.entry-title');
    entryTitle.parentNode.removeChild(entryTitle);
  }
});