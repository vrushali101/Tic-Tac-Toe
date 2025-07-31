
//export default function GameBoard({onSelectSquare,activePlayerSymbol}) {
export default function GameBoard({ onSelectSquare, board }) {
  //const [gameBoard,setGameBoard]=useState(intialGameBoard);
  // function handleSelectSquare(rowIndex,colIndex){
  //     setGameBoard(
  //         (prevGameBoard)=>{
  //             const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
  //             updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
  //             return updatedBoard
  //         }
  //     );
  //     onSelectSquare();
  // }

  

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button> */}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
