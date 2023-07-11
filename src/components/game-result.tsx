import { Player } from "../model/player";

const GameResult = ({ game, shouldShow }: any) => {

  if (!shouldShow) {
    return null
  }

  const ranks = game.players.map((player: Player) => {

    let total = 0
    for (const round of game.rounds) {
      for (const result of round.results) {
        if (result.playerId === player.id) {
          total += Number(result.point)
        }
      }
    }

    return { total, name: player.name }

  }).sort(((a: any, b: any) => b.total - a.total))


  return (<>
    <div className="row">
      {ranks.map((r: any) => (<><div className="col-6">{r.name}</div><div className="col-6">{r.total}</div></>))}
    </div>
  </>)
}

export default GameResult