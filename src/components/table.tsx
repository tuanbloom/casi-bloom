import { useContext } from 'react';
import { v4 } from 'uuid';
import gameContext from '../context/game';
import { RoundRecord, RoundResult } from '../model/round-record';
import DangerButton from './danger-button';
import PrimaryButton from './primary-button';
import FourColumnRow from './row';
import { Player } from '../model/player';

const FourColumnTable = ({ farmers, finishFarming }: any) => {
  const context = useContext(gameContext)


  const addRecord = () => {
    const updatedGame = { ...context.game }
    const newRoundResults = updatedGame.players.map(p => ({ playerId: p.id, point: 0 } as RoundResult))
    const newRound = { id: v4(), results: newRoundResults, winnerId: '' } as RoundRecord
    updatedGame.rounds.push(newRound)
    context.setGame({ ...updatedGame })
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='row position-fixed'>
            {farmers.map((p: Player) => (<div className="col-3">{p.name}</div>))}
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className='row mb-4  '>
          {context.game.rounds.map((round) => (<FourColumnRow
            key={round.id}
            round={round}
          />))}
        </div>
      <div className='row'>
          <div className='col-6'>
          <PrimaryButton addRecord={addRecord} title='Add record' />

        </div>
          <div className='col-6'>
            <DangerButton handler={finishFarming} title='Finish' />
        </div>
      </div>
    </div>
    </>
  );
};

export default FourColumnTable;
