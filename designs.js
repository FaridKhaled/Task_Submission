const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');

function makeGrid() {
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  //clear table if exists on new submission
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  //create the table
  for (let i = 1; i <= height; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let j = 1; j <= width; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      gridCell.addEventListener('click', () => {
        let color = document.getElementById('colorPicker').value;
        gridCell.style.backgroundColor = color;
      })
     }
  }
}

//submit button event handling
sizePicker.addEventListener('submit', e => {
  e.preventDefault();
  makeGrid();
});

