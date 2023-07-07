import React, { useEffect, useState } from 'react';
import FourColumnRow from './row';
import DangerButton from './danger-button';
import PrimaryButton from './primary-button';

const FourColumnTable = ({ farmers }: { farmers: string[] }) => {

  const [points, setPoints]: [Array<Array<number>>, any] = useState([[0, 0, 0, 0]])

  useEffect(() => {
    const storedPoints = localStorage.getItem('points');
    if (storedPoints) {
      setPoints(JSON.parse(storedPoints));
    }

  }, []);

  const addRecord = () => {
    const newPoints = [...points, [0, 0, 0, 0]]
    setPoints(newPoints)
    localStorage.setItem('points', JSON.stringify(points))
  }

  const finishGame = () => {
    const newPoints = [...points, [0, 0, 0, 0]]
    setPoints(newPoints)
    localStorage.setItem('points', JSON.stringify(points))
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            {farmers.map(name => (<th>{name}</th>))}
          </tr>
        </thead>
        <tbody>
          {points.map(p => (<FourColumnRow points={p} />))}
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
