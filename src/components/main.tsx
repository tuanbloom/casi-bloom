import FourColumnTable from "./table"

const MainPage = ({ showGame, game, finishFarming }: any) => {
  if (!showGame) {
    return null
  }

  return (
    <div className="App">
      <FourColumnTable farmers={game.players} finishFarming={finishFarming} />
    </div>
  )
}

export default MainPage