import { useContext, useEffect, useState } from 'react';
import DangerButton from './danger-button';
import PrimaryButton from './primary-button';
import FourColumnRow from './row';
import { Player } from '../model/player';
import gameContext from '../context/game';
import { RoundRecord, RoundResult } from '../model/round-record';
import { v4 } from 'uuid';

const FourColumnTable = ({ farmers }: { farmers: Player[] }) => {
  const context = useContext(gameContext)

  const [rowPoints, setRowPoints]: [Array<Array<number>>, any] = useState([[0, 0, 0, 0]])

  useEffect(() => {
    const storedPoints = localStorage.getItem('points');
    if (storedPoints) {
      setRowPoints(JSON.parse(storedPoints));
    }

  }, []);

  const addRecord = () => {
    const updatedGame = { ...context.game }
    const newRoundResults = updatedGame.players.map(p => ({ playerId: p.id, point: 0 } as RoundResult))
    const newRound = { id: v4(), results: newRoundResults, winnerId: '' } as RoundRecord
    updatedGame.rounds.push(newRound)
    context.setGame({ ...updatedGame })
    // const newPoints = [...rowPoints, [0, 0, 0, 0]]
    // setRowPoints(newPoints)
    // localStorage.setItem('points', JSON.stringify(rowPoints))
  }

  const finishGame = () => {
    // const newPoints = [...points, [0, 0, 0, 0]]
    // setPoints(newPoints)
    // localStorage.setItem('points', JSON.stringify(points))
  }

  const updatePoint = (index: number, value: any) => {
    rowPoints[index] = value
    setRowPoints([...rowPoints])
    localStorage.setItem('points', JSON.stringify(rowPoints))
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            {farmers.map(p => (<th>{p.name}</th>))}
          </tr>
        </thead>
        <tbody>
          {context.game.rounds.map((round) => (<FourColumnRow
            key={round.id}
            round={round}
            updatePoint={updatePoint} />))}
        </tbody>
      </table>
      <div className='row'>
        <div className='col-md-4'>
          <PrimaryButton addRecord={addRecord} title='Add record' />

        </div>
        <div className='col-md-4'>
          <DangerButton handler={finishGame} title='Finish' />
        </div>
      </div>
    </div>
  );
};

export default FourColumnTable;
