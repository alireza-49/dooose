const check3by3 = (board) => {
    // check if there is a horizontal or verital match
    for (let i = 0; i < 3 ; i++){
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]){
            if (board[i][0]){
                return true;
            }
            return false;
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]){
            if (board[0][i]){
                return true;
            }
            return false;
        }
    }
    if (board[1][1]){
        if (board[1][1] === board[2][0] && board[1][1] === board[0][2]){
            return true;
        }
        else if (board[1][1] === board[0][0] && board[1][1] === board[2][2]){
            return true;
        }
    }
    return false;

}
export default check3by3;