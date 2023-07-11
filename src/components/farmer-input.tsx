import { Player } from "../model/player"

const FarmerInput = ({ game, shouldShow, updateName }: any) => {

  if (!shouldShow) {
    return null
  }


  return (
    <>
      {
        game.players.map((p: Player) => (<div className="row">
          <div className='col-md-6'>Farmer {p.name}</div>
          <div className='col-md-6'>
            <input type='text' onBlur={(event) => { updateName(p.id, event.target.value) }} />
          </div>
        </div>))
      }
    </>

  )
}

export default FarmerInput