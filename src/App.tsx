import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import './App.css';
import FarmerInput from './components/farmer-input';
import MainPage from './components/main';
import StartButton from './components/start-button';
import GameContext from './context/game';
import { Game } from './model/game';
import { Player } from './model/player';

function App() {

  const players = [1, 2, 3, 4].map(() => ({ id: v4(), name: '' } as Player))
  const newGame = { id: v4(), date: new Date(), active: false, players: players, rounds: [] } as Game

  const [game, setGame] = useState(newGame)
  let [showGame, setShowGame] = useState(false)
  let [showStartButton, setShowStartButton] = useState(true)


  useEffect(() => {
    const storedGames = localStorage.getItem('games');
    if (storedGames) {
      const games: Game[] = JSON.parse(storedGames);

      const activeGame = games.find(g => g.active);
      if (activeGame) {
        setGame(activeGame)
        startFarming()
      } 
    }
  }, [setGame, game]);


  const updatePlayerName = (pId: string, name: string) => {
    setGame((g) => {
      const newGame = { ...g }
      newGame.players.forEach(p => {
        if (p.id === pId) {
          p.name = name
        }
      })

      return newGame
    })
  }

  const updateGame = (g: Game) => {
    console.log(g)
    setGame({ ...g })
    return { ...g }

  }

  const startFarming = () => {

    setGame((g) => {
      const newGame = { ...g }
      newGame.active = true

      return newGame
    })

    setShowGame(true)
    setShowStartButton(false)
  }

  return (
    <GameContext.Provider value={{ game, setGame: updateGame }}>
      <div className="App">
        <div className="container">
          <div className='row mb-4'>
            <div className='col-md-12'>

              <StartButton showStartButton={showStartButton} startFarming={startFarming} />

            </div>
          </div>

          <FarmerInput game={game} shouldShow={!game.active} updateName={updatePlayerName} />
          <div className='row'>
            <div className='col-md-12'>
              <MainPage game={game} showGame={showGame} />
            </div>
          </div>

        </div>
      </div>
    </GameContext.Provider >

  );
}

export default App;
