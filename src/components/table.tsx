import React from 'react';
import FourColumnRow from './row';
import ButtonAdd from './button-add';

const FourColumnTable = ({ farmers }: { farmers: string[] }) => {

  const points: Array<number> = [0, 0, 0, 0]

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            {farmers.map(name => (<th>{name}</th>))}
          </tr>
        </thead>
        <tbody>
          <FourColumnRow points={points} />
          <ButtonAdd />
        </tbody>
      </table>
    </div>
  );
};

export default FourColumnTable;
