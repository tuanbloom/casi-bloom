import React, { useEffect, useState } from 'react';
import FourColumnRow from './row';
import DangerButton from './danger-button';
import PrimaryButton from './primary-button';
import UUID from 'uuid'

const FourColumnTable = ({ farmers }: { farmers: string[] }) => {

  const [rowPoints, setRowPoints]: [Array<Array<number>>, any] = useState([[0, 0, 0, 0]])

  useEffect(() => {
    const storedPoints = localStorage.getItem('points');
    if (storedPoints) {
      setRowPoints(JSON.parse(storedPoints));
    }

  }, []);

  const addRecord = () => {
    const newPoints = [...rowPoints, [0, 0, 0, 0]]
    setRowPoints(newPoints)
    localStorage.setItem('points', JSON.stringify(rowPoints))
  }

  const finishGame = () => {
    // const newPoints = [...points, [0, 0, 0, 0]]
    // setPoints(newPoints)
    // localStorage.setItem('points', JSON.stringify(points))
  }

  const updatePoint = (index: number, value: any) => {
    console.log("updatePoint", index, value)
    rowPoints[index] = value
    setRowPoints([...rowPoints])
    localStorage.setItem('points', JSON.stringify(rowPoints))
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
          {rowPoints.map((row, idx) => (<FourColumnRow rowIndex={idx} points={row} updatePoint={updatePoint} />))}
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
