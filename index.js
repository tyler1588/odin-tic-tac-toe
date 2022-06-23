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

(function displayBoard(){
    for (let i = 0; i < gameBoard().board.length; i++){
        const div = document.createElement('div');
        const text = document.createElement('p');
        const node = document.createTextNode(gameBoard().board[i]);
        text.appendChild(node);
        div.appendChild(text);
        div.setAttribute('id',i);
        div.classList.add('board-block')
        const container = document.querySelector('.container');
        container.appendChild(div);
    }
})();

function createPlayer(role){
    return {
        role: role,
        roundsPlayed: 0,
        updateRoundsPlayed (){
            this.roundsPlayed += 1;
        }
    }
}

(function game(){
    const player1 = createPlayer('X');
    const player2 = createPlayer('O');
    const newBoard = gameBoard();
    let currentPlayer;
    document.body.addEventListener('click', function(event){
        if (event.target.className === 'board-block'){
            if (player1.roundsPlayed <= player2.roundsPlayed){
                currentPlayer = player1;
            } else {
                currentPlayer = player2;
            }
            const updateBoard = newBoard.updateBoard(event.target.id,currentPlayer.role);
            currentPlayer.updateRoundsPlayed();
            const updateBlock = document.getElementById(event.target.id);
            updateBlock.querySelector('p').innerHTML = currentPlayer.role;
            for (let i = 0; i < newBoard.board.length; i++){
                //Check that the board isn't empty
                if (newBoard.board[i] != ""){
                    //Check for horizontal winner
                    if ((i === 0 || i === 3 || i === 6) && newBoard.board[i] === newBoard.board[i+1] && newBoard.board[i+1] === newBoard.board[i+2]){
                        console.log("The winner is " + newBoard.board[i])
                    }
                    //Check for vertical winner
                    if ((i === 0 || i === 1 || i === 2) && newBoard.board[i] === newBoard.board[i+3] && newBoard.board[i+3] === newBoard.board[i+6]){
                        console.log("The winner is " + newBoard.board[i])
                    }
                    //Check for left diagonal winner
                    if (i === 4 && newBoard.board[i] === newBoard.board[i-4] && newBoard.board[i] === newBoard.board[i+4]){
                        console.log("The winner is " + newBoard.board[i])
                    }
                    //Check for right diagonal winner
                    if (i === 4 && newBoard.board[i] === newBoard.board[i-2] && newBoard.board[i] === newBoard.board[i+2]){
                        console.log("The winner is " + newBoard.board[i])
                    }
                }
            }
            
        }
    })
})();