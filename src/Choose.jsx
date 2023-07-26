import React from 'react'
import { Link } from 'react-router-dom'

const Choose = () => {
  return (
    <div className='choose-game-container'>
        <Link to='/game/3' > 3 by 3</Link>
        <Link to='/game/5' > 5 by 5</Link>
        <Link to='/game/7' > 7 by 7</Link>
    </div>
  )
}

export default Choose