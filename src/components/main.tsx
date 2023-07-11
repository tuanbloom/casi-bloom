import FourColumnTable from "./table"

const MainPage = ({ showGame, game }: any) => {
  if (!showGame) {
    return null
  }

  return (
    <div className="App">
      <FourColumnTable farmers={game.players} />
    </div>
  )
}

export default MainPage