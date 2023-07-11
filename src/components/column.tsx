import { useContext, useState } from "react"
import PointInput from "./point-input"
import Button from 'react-bootstrap/Button'
import gameContext from "../context/game"

const FormColumn = ({ result, round, updateRoundResult }: any) => {

  const context = useContext(gameContext)

  const [showModal, setShowModal] = useState(false)

  const handleModalPointSelect = (value: any) => {
    setShowModal(false)
    updateRoundResult(result.playerId, value)
  }

  const setPlayerAsWinner = () => {

    const updatedRound = context.game.rounds.find(r => r.id === round.id)
    if (updatedRound) {
      updatedRound.winnerId = result.playerId
    }

    context.setGame({ ...context.game })
    setShowModal(false)
    updateRoundResult(result.playerId, 0)
  }

  return (
    <div className="col-3 mb-2">
      <Button
        variant={"secondary " + (result.playerId === round.winnerId ? "btn-danger" : (result.point > 0 ? "btn-warning" : ""))}
        onClick={() => { setShowModal(true) }}>{result.point}</Button>
      <PointInput
        showInput={showModal}
        point={result.point}
        handleModalPointSelect={handleModalPointSelect}
        setPlayerAsWinner={setPlayerAsWinner} />
    </div>
  )
}

export default FormColumn