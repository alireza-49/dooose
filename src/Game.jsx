import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CloseIcon from '@mui/icons-material/Close';
import check3by3 from './check3by3';
import checkBoard from './checkBoard';

const Game = ({userNames}) => {
    const {type} = useParams();
    const [turn,setTurn] = useState(1)
    const [board,setBoard] = useState([])
    //populate array that represent the board on every mount
    useEffect(() => {
        const game_type = Number(type)
        let temp = []
        for (let i = 0; i < game_type; i++){
            temp[i] = []
            for (let k = 0; k < game_type; k++){
                temp[i][k] = 0
            }
        } 
        setBoard([...temp])
    },[])
    
    //check if someone won with every chanage in the board and if someone won redirect to winner route
    const navigate = useNavigate()

    useEffect(()=>{
        if (board.length === 0){
            return;
        }
        const winnerId = turn === 1 ? 2 : 1
        if (Number(type) === 3){
            const winner = check3by3(board);
            if(winner){
                navigate('/winner/' +  winnerId)
            }
        }
        else{
            const winner = checkBoard(board,Number(type))
            if(winner){
                navigate('/winner/' + winnerId)
            }
        }
    })
    //on every move change ui and update button and board
    const handleBoard = (e,position) => {
        e.target.disabled = true;
        const temp = board;
        temp[position[0]][position[1]] = turn;
        setBoard(temp)
        setTurn(turn === 1 ? 2 : 1)
    }
    return (
    <div className='game-container'>
        <h3>Its {userNames[turn]} turn </h3>
        {
            board.map((column,rowNumber) => {
                return(
                <div className='row' key={rowNumber}> 
                    {
                        column.map((item,columnNumber) => {
                            const position = [rowNumber,columnNumber]
                            return(
                                <button className={'board-item ' + `item${board[rowNumber][columnNumber]}`}  key={rowNumber + ' ' + columnNumber}
                                    onClick={(e)=>{handleBoard(e,position)}}>
                                    {board[rowNumber][columnNumber] == 1 ? <PanoramaFishEyeIcon/> : (board[rowNumber][columnNumber] == 2 ? <CloseIcon />:null)}
                                </button>
                            )
                        })
                    }
                </div>)
            })
        }
    </div>
  )
}

export default Game