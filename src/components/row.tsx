import { useContext } from 'react';
import gameContext from '../context/game';
import { RoundResult } from '../model/round-record';
import FormColumn from './column';


const FourColumnRow = ({ round }: any) => {

  const context = useContext(gameContext)

  console.log(round)

  const updateRoundResult = (playerId: string, colValue: number) => {
    const newGame = { ...context.game }
    const currentRound = newGame.rounds.find(r => r.id === round.id)
    if (currentRound) {
      const playerInRound = currentRound?.results.find(r => r.playerId === playerId)
      if (playerInRound) {
        playerInRound.point = colValue

        context.setGame(newGame)
      }
    }


  }

  return (
    <tr>
      {round.results.map((result: RoundResult) => (<td><FormColumn key={result.playerId} result={result} updateRoundResult={updateRoundResult} /></td>))}
    </tr>
  );
};

export default FourColumnRow;
