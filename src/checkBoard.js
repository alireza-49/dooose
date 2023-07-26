const checkBoard = (board,type) => {
    //if 5 by 5 have a column with a winning match , all of the  column cells or 4 of them should be the same , same rule apply to rows
    //for each rows
    for(let i = 0; i < type; i++){
        let strick = 0;
        for(let k = 0; k < type; k++){
            if (board[i][k] === board[i][k + 1] && board[i][k] != 0){
                strick++;
            }
            else{
                strick = 0;
            }
            if (strick >= 3){
                return true;
            }
        }
    }
    //for each columns
    for(let i = 0; i < type; i++){
        let strick = 0;
        for(let k = 0; k < type; k++){
            //next line prevent the refrence error
            if (k + 1 > type - 1){
                break;
            }
            if (board[k][i] === board[k + 1][i] && board[k][i] != 0){
                strick++;
            }
            else{
                strick = 0;
            }
            if (strick >= 3){
                return true;
            }
        }
    }

    //now we check for the non linear patterns of winnig
    const checkBelowCellToRight = (cell,rowIndex,columnIndex,strick) =>{
        if (strick >= 3){

            return true;
        }
        if (columnIndex + 1 > type -1 || rowIndex + 1 > type - 1 ){
            return false;
        }
        if (cell === board[rowIndex + 1][columnIndex + 1] && cell != 0){
            if(checkBelowCellToRight(board[rowIndex + 1][columnIndex + 1] ,rowIndex + 1,columnIndex + 1,strick + 1)){
                return true;
            }
            
        }
        return false
    }
    const checkBelowCellToLeft = (cell,rowIndex,columnIndex,strick) =>{
        if (strick >= 3){

            return true;
        }
        if (columnIndex -1 < 0 || rowIndex + 1 > type - 1 ){
            return false;
        }
        if (cell === board[rowIndex + 1][columnIndex - 1] && cell != 0){
            if(checkBelowCellToLeft(board[rowIndex + 1][columnIndex - 1] ,rowIndex + 1,columnIndex - 1,strick + 1)){
                return true;
            }
            
        }
        return false
    }


    let winner = false;
    board.forEach((row,rowIndex) => {
        row.forEach((cell,columnIndex)=>{
            let strick = 0;
            if (checkBelowCellToRight(cell,rowIndex,columnIndex,strick)){
                winner = true;
            }
            strick = 0;
            if (checkBelowCellToLeft(cell,rowIndex,columnIndex,strick)){
                winner = true;
            }
        })
    });
    if (winner){
        return true
    }
    return false;
    
}
export default checkBoard



 