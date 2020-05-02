
//set up initial display
let size = 4;
createResetButton();
createChangeSquareButton();
createSketchPad();

function createResetButton(){
    // creating clear button
    let reset = document.createElement('button');
    reset.innerText="Reset Squares";
    reset.style.cssText=" display: inline; margin-left:45vw; font-size:20px;"
    document.body.appendChild(reset);

    // register mouse click
    reset.addEventListener('click', clearGrid);
}

function createChangeSquareButton(){
    // creating clear button
    let change = document.createElement('button');
    change.innerText="Change Square Size";
    change.style.cssText="display: inline;  font-size:20px;"
    document.body.appendChild(change);

    // register mouse click
    change.addEventListener('click', changeSquareSize);

}

function createSketchPad(){
    // creating the grid container
    let container = document.createElement('div');
    container.id="container";

    container.style.cssText = `margin-left: 40vw; margin-top: 5vh;
    height: 500px; width: 500px;  border: 10px solid black;
        display: grid;
        grid-template-columns: repeat(1fr,${size});
        grid-template-rows: repeat(1fr,${size});`;

    // creating the grid cells
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= size; j++){
            let newDiv = document.createElement('div');
            let cellNumber = (i-1)*size+j-1;

            newDiv.classList.add('cell');
            newDiv.id =`${cellNumber}`;
            newDiv.style.cssText = `grid-area: cell${i};
            grid-row: ${i}/${i+1}; grid-column: ${j}/${j+1};
            background-color: white; border-width: 10px;
            text-align:center;"`;

            //register mouse movements
            newDiv.addEventListener('mouseenter', colorChange);
            container.appendChild(newDiv);
        }
    }
    document.body.appendChild(container);
}

function colorChange(){
    this.style.backgroundColor= "black";
}

function changeSquareSize(){
    do{
        size = +prompt("How many squares do you want each side to be?\n\
For best performance choose a number less than 50.");
    } while(isNaN(size))
    clearGrid();
}

function clearGrid(){
    let container = document.body.querySelector('#container');
    document.body.removeChild(container);

    createSketchPad();
}