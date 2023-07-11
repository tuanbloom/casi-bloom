import { useContext } from 'react';
import gameContext from '../context/game';
import { RoundResult } from '../model/round-record';
import FormColumn from './column';


const FourColumnRow = ({ round }: any) => {

  const context = useContext(gameContext)

  const updateRoundResult = (playerId: string, colValue: number) => {

    const newGame = { ...context.game }
    const currentRound = newGame.rounds.find(r => r.id === round.id)
    if (currentRound) {

      currentRound.results.forEach((_result: RoundResult) => {
        if (_result.playerId === playerId) {
          _result.point = Number(colValue)
        }
      });

      currentRound.results.forEach((_result: RoundResult) => {

        if (_result.playerId === currentRound.winnerId) {
          _result.point = round.results.filter((r: RoundResult) => r.playerId !== round.winnerId && r.point < 0)
            .reduce((t: number, r: RoundResult) => Number(t) + Number(r.point), 0) * -1
        }
      });

      const playerInRound = currentRound.results.find((r: RoundResult) => r.playerId === playerId)
      if (playerInRound && playerInRound !== round.winnerId) {
        playerInRound.point = Number(colValue)
      }

      context.setGame({ ...newGame })
    }

  }

  return (
    <>
      {round.results.map((result: RoundResult) => (<FormColumn
        key={result.playerId}
        result={result}
        round={round}
        updateRoundResult={updateRoundResult} />))}
    </>
  );
};

export default FourColumnRow;
