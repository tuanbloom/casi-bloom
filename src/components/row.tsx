import React from 'react';


const FourColumnRow = (props: { points: Array<number> }) => {

  const { points } = props

  console.log(points)

  return (
    <tr>
      {points.map(p => (<td>{p}</td>))}
    </tr>
  );
};

export default FourColumnRow;
