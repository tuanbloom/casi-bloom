import { useEffect, useState } from "react"

const NumberLayout = ({ pos, active, handler }: any) => {

  const [posActive, setPosActive] = useState(0)

  useEffect(() => {

    setPosActive(Number(String(active).split('')[pos]))
  }, [active, pos])

  const updateSelection = (pos: number, num: number) => {

    setPosActive(num)
    handler(pos, num)
  }

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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

export default NumberLayout