const pages = document.querySelectorAll('.page');

pages.forEach(page => {
  page.addEventListener('dragstart', handleDragStart);
  page.addEventListener('dragend', handleDragEnd);
});

document.addEventListener('dragover', event => {
  event.preventDefault();
});

function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', ''); // Required for drag initiation
  this.classList.add('dragging');
}

function handleDragEnd(event) {
  this.classList.remove('dragging');
}

document.addEventListener('drag', handleDrag);

function handleDrag(event) {
  const draggingPage = document.querySelector('.dragging');
  if (draggingPage) {
    const offsetX = event.clientX - draggingPage.offsetWidth / 2;
    const offsetY = event.clientY - draggingPage.offsetHeight / 2;
    draggingPage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
}