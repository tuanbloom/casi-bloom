import React from 'react';
import FormColumn from './column';


const FourColumnRow = (props: { points: Array<number>, updatePoint: any, rowIndex: number }) => {

  const { points, updatePoint } = props

  const updateRow = (colIndex: number, colValue: number) => {

    console.log("updateRow", colIndex, colValue)

    points[colIndex] = colValue
    updatePoint(points)
  }

  return (
    <tr>
      {points.map((p, idx) => (<td><FormColumn colIndex={idx} point={p} updateRow={updateRow} /></td>))}
    </tr>
  );
};

export default FourColumnRow;
