gameBoard = () => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const updateBoard = function(index, value){
        board[index] = value;
    }
    return {
        board: board,
        updateBoard: updateBoard
    }
}

const gameDisplayBoard = gameBoard();

//Create initial board DOM elements
for (let i = 0; i < gameDisplayBoard.board.length; i++){
    const div = document.createElement('div');
    const text = document.createElement('p');
    const node = document.createTextNode(gameDisplayBoard.board[i]);
    text.appendChild(node);
    div.appendChild(text);
    div.setAttribute('id',i);
    div.classList.add('board-block')
    const container = document.querySelector('.container');
    container.appendChild(div);
}

document.body.addEventListener('click', function(event){
    if (event.target.className === 'board-block'){
        const updateGameBoard = gameDisplayBoard.updateBoard(event.target.id, "X");
        const updateBlock = document.getElementById(event.target.id);
        updateBlock.querySelector('p').innerHTML = "X";
    }
})

