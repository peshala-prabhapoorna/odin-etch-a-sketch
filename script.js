const DEFAULT_GRID_SIZE = 32;
const MAX_GRID_SIZE = 100;

drawGrid(DEFAULT_GRID_SIZE);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    let gridSize = prompt('Set the grid size:', DEFAULT_GRID_SIZE);
    if (gridSize > MAX_GRID_SIZE) gridSize = MAX_GRID_SIZE;
    drawGrid(gridSize);
});

function drawGrid(gridSize) {
    const grid = document.querySelector('#grid');
    grid.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }

        grid.appendChild(row)
    }

    grid.addEventListener('mouseover', (event) => {
        const targetCell = event.target;
        targetCell.classList.add('highlight');
    });
}
