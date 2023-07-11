import { useState } from "react"
import { Game } from "../model/game"
import GameResult from "./game-result"

const GameHistory = ({ histories }: any) => {

  const [selectGame, setSelectGame] = useState({})
  const [showGame, setShowGame] = useState(false)
  console.log(histories)

  const detailHandler = (game: Game) => {
    setSelectGame(() => game)
    setShowGame(() => true)
  }

  return (<>
    {histories.map((h: Game) => <><div className="col-6">{h.date.toString()}</div><div className="col-6">
      <button className="btn btn-info" onClick={() => { detailHandler(h) }}>Show</button></div>
    </>)}
    <GameResult game={selectGame} shouldShow={showGame} />
  </>)
}

export default GameHistory