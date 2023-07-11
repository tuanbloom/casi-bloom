import { useState } from "react";
import NumberLayout from "./number-layout"
import Modal from 'react-bootstrap/Modal';

const PointInput = ({ showInput, point, handleModalPointSelect }: any) => {

  const [value, setValue] = useState([0, 0])

  const numberSelect = (pos: number, num: number) => {
    value[pos] = num
    const result = value.join('')

    setValue([...value])
    if (pos === 1) {
      handleModalPointSelect(result)
    }

  }

  const setPlayerAsWinner = () => {


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
        </Modal.Body>
      </Modal>
    </>
  )
}


export default PointInput