const cells=document.querySelectorAll('.a');
const resultText=document.querySelector('.result');
const resetButton=document.querySelectorById('reset');
let currentPlayer = 'X';
let gameBoard=['','','','','','','','',''];
let gameActive = true;

const winning=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const checkWinner=()=>{
    for(let combo of winningCombinations){
        const [a,b,c] = combo;
        if(gameBoard[a]&&gameBoard[a]===gameBoard[b]&&gameBoard[a]===gameBoard[c]){
            resultText.textContent='Player ${gameBoard[a]} won';
            gameActive=false;
            resetButton.disabled=false;
        }
    }
    if(!gameBoard.includes('')&&gameActive){
        resultText.textContent="It's a draw";
        resetButton.disabled=false;
    }
};

const handleClick=(cell,index)=>{
    if(gameBoard[index]===''&&gameActive){
        cell.value=currentPlayer;
        gameBoard[index]=currentPlayer;
        checkWinner();
        if(gameActive){
            currentPlayer=currentPlayer==='X'?'O':'X';
            resultText.textContent='Player ${currentPlayer}s turn';
        }
    }
};

cells.forEach((cell,index)=>{
    cell.addEventListener('click',()=>handleClick(cell,index));
})

resetButton.addEventListener('click',()=>handleClick(cell,index))