import FourColumnTable from "./table"

const MainPage = ({ showApp, farmers }: { showApp: boolean, farmers: string[] }) => {

  if (!showApp) {
    return null
  }

  return (
    <div className="App">
      <FourColumnTable farmers={farmers} />
    </div>
  )
}

export default MainPage