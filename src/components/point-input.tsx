import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import NumberLayout from "./number-layout";
import NegativeNumberLayout from "./negative-number-layout";

const PointInput = ({ showInput, point, handleModalPointSelect, setPlayerAsWinner }: any) => {

  const [value, setValue] = useState([0, 0])

  const numberSelect = (pos: number, num: number) => {
    value[pos] = num
    const result = value[0] * 10 + value[1]

    setValue([...value])
    if (pos === 1) {
      handleModalPointSelect(result)
    }
  }

  const negativeNumberSelect = (pos: number, num: number) => {
    value[pos] = num
    const result = value[0] * 10 + value[1]

    setValue([...value])
    if (pos === 1) {
      handleModalPointSelect(result)
    }
  }

  return (
    <>
      <Modal show={showInput} >
        <Modal.Header>
          <Modal.Title>Select Point</Modal.Title>
          <div className="row">
            <div className="col"><button onClick={setPlayerAsWinner} className="btn btn-danger">Winner</button></div>
          </div>
        </Modal.Header>
        <Modal.Body>

          <div className="row">
            <div className="col-6">
              <NumberLayout pos={0} active={point} handler={numberSelect} />

            </div>
            <div className="col-6">
              <NumberLayout pos={1} active={point} handler={numberSelect} />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <NegativeNumberLayout pos={0} active={point} handler={negativeNumberSelect} />

            </div>
            <div className="col-6">
              <NegativeNumberLayout pos={1} active={point} handler={negativeNumberSelect} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default PointInput