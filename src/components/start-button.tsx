const StartButton = ({ showStartButton, startFarming }: { showStartButton: boolean, startFarming: any }) => {
  if (!showStartButton) return null
  return (<button type="button" className="btn btn-primary" onClick={startFarming}>Start farming</button>)
}

export default StartButton