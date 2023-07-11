import { useState } from "react"
import PointInput from "./point-input"
import Button from 'react-bootstrap/Button'

const FormColumn = ({ result, updateRoundResult }: any) => {

  const [showModal, setShowModal] = useState(false)

  const handleModalPointSelect = (value: any) => {
    setShowModal(false)
    updateRoundResult(result.playerId, value)
  }

  return (
    <>
      <Button variant="secondary" onClick={() => { setShowModal(true) }}>{result.point}</Button>
      <PointInput showInput={showModal} point={result.point} handleModalPointSelect={handleModalPointSelect} />
    </>
  )
}

export default FormColumn