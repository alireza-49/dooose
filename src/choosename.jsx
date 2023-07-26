import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ChooseName = ({setUserNames}) => {
    const [message,setMessage] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        if (!e.target.u1.value || !e.target.u2.value || e.target.u1.value === e.target.u2.value){
            setMessage('names can\'t be empty or same')
            setTimeout(() => {
                setMessage('')
            }, 2000);
            e.target.reset()
            return;
        }
        setUserNames([e.target.u1.value,e.target.u2.value])
        navigate('/choose');

    }
  return (
    <>
        <form onSubmit={(e) => {e.preventDefault();handleSubmit(e) }}>
            <input type="text" name='u1' placeholder='user 1' />
            <input type="text" name='u2' placeholder='user 2' />
            <button type="submit">start game</button>
            <h3>{message}</h3>

        </form>
    </>
  )
}

export default ChooseName