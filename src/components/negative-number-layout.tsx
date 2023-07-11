import { useEffect, useState } from "react"

const NegativeNumberLayout = ({ pos, active, handler }: any) => {

  const [posActive, setPosActive] = useState(0)

  useEffect(() => {


    if (pos === 0) {
      setPosActive(Math.ceil(active / 10))
    }

    else if (pos === 1) {
      setPosActive(active % 10)
    }

  }, [active, pos])

  const updateSelection = (pos: number, num: number) => {

    setPosActive(num)
    handler(pos, num)
  }

  const nums = []

  for (let i = 0; i > -10; i--) {
    nums.push(i)
  }

  return (
    <>

      {
        nums.map(num => (
          <button className={"btn " + (num === posActive ? "btn-primary" : "btn-default")} onClick={() => { updateSelection(pos, num) }}>{String(num)}</button>
        ))
      }

    </>
  )

}

export default NegativeNumberLayout