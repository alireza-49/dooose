import { useParams } from "react-router-dom"

const Winner = ({userNames}) => {
  const {playernumber} = useParams() 
  console.log(userNames,playernumber)
  return (
    <h3 className="winnig-message">{userNames[Number(playernumber) - 1]} won!</h3>
  )
}

export default Winner