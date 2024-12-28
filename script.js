const DEFAULT_GRID_SIZE = 16;

const grid = document.querySelector('#grid');

for (let i = 0; i < DEFAULT_GRID_SIZE; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < DEFAULT_GRID_SIZE; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', `border: 1px solid plum;`);
        row.appendChild(cell);
    }

    grid.appendChild(row)
}