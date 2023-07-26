import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Choose from './Choose'
import Game from './Game'
import Winner from './Winner'
import { useState} from 'react'
import ChooseName from './choosename'

function App() {
const [userNames,setUserNames] = useState([])
  return (
    <div className='container'>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<ChooseName setUserNames={setUserNames}/>} />
          <Route path='/choose' element={<Choose/>} />
          <Route path='/game/:type' element={<Game userNames={userNames}/>} />
          <Route path='/winner/:playernumber' element={<Winner userNames={userNames}/>} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
