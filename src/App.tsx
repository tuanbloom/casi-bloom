import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import MainPage from './components/main';
import FarmerInput from './components/farmer-input';
import { useEffect, useState } from 'react';
import StartButton from './components/start-button';

function App() {

  const [names, setNames]: [string[], any] = useState(['', '', '', ''])
  let [showInputName, setShowInputName]: [boolean, any] = useState(true)
  let [showApp, setShowApp]: [boolean, any] = useState(false)
  let [showStartButton, setShowStartButton]: [boolean, any] = useState(true)


  useEffect(() => {
    const storedName = localStorage.getItem('names');
    if (storedName) {
      setNames(JSON.parse(storedName));
      startFarming()
    }

  }, []);

  const updateName = (event: any, index: number) => {
    names[index] = event.target.value
    setNames(names)
    localStorage.setItem('names', JSON.stringify(names))
  }

  const startFarming = () => {
    setShowInputName(false)
    setShowApp(true)
    setShowStartButton(false)
  }

  return (
    <div className="App">
      <div className="container">
        <div className='row'>
          <div className='col-md-12'>

            <StartButton showStartButton={showStartButton} startFarming={startFarming} />

          </div>
        </div>

        <div className='row'>
          {names.map((__emptyString, num) => (<FarmerInput farmerIndex={num} shouldShow={showInputName} updateName={updateName} title={"Farmer " + num} />))}
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <MainPage farmers={names} showApp={showApp} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
