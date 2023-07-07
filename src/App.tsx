import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import MainPage from './components/main';
import FarmerInput from './components/farmer-input';
import { useState } from 'react';

function App() {

  const [names, setNames]: [string[], any] = useState(['', '', '', ''])
  let [showInputName, setShowInputName]: [boolean, any] = useState(true)
  let [showApp, setShowApp]: [boolean, any] = useState(false)

  const updateName = (event: any, index: number) => {
    names[index] = event.target.value
    setNames(names)

  }

  const startFarming = () => {
    setShowInputName(false)
    setShowApp(true)
  }

  return (
    <div className="App">
      <div className="container">
        <div className='row'>
          <div className='col-md-12'>
            <button type="button" className="btn btn-primary" onClick={startFarming}>Start farming</button>
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
