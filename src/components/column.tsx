import { useState } from "react"
import PointInput from "./point-input"
import Button from 'react-bootstrap/Button'

const FormColumn = ({ point, colIndex, updateRow }: any) => {

  const [showModal, setShowModal] = useState(false)

  const handleModalPointSelect = (value: any) => {
    setShowModal(false)
    updateRow(colIndex, value)
  }

  return (
    <>
      <Button variant="secondary" onClick={() => { setShowModal(true) }}>{point}</Button>
      <PointInput showInput={showModal} point={point} handleModalPointSelect={handleModalPointSelect} />
    </>
  )
}

export default FormColumn