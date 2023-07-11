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

const LOCAL_KEY = {
  ACTIVE_GAME: "ACTIVE_GAME",
  HISTORY_GAME: "HISTORY_GAME",
}

function App() {

  const players = [1, 2, 3, 4].map(() => ({ id: v4(), name: '' } as Player))
  const newGame = { id: v4(), date: new Date(), active: false, players: players, rounds: [] } as Game

  const [game, setGame] = useState(newGame)
  let [showGame, setShowGame] = useState(false)
  let [showStartButton, setShowStartButton] = useState(true)

  const getGameFromLocal = () => {
    const storedActiveGame = localStorage.getItem(LOCAL_KEY.ACTIVE_GAME);
    if (storedActiveGame) {
      const game: Game = JSON.parse(storedActiveGame);
      return game
    }

    return null
  }

  const updateGameToLocal = () => {
    localStorage.setItem(LOCAL_KEY.ACTIVE_GAME, JSON.stringify(game))
  }


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

  const updateGame = (updatedGame: Game) => {
    console.log("updateGame", updatedGame)
    setGame(updatedGame)
    updateGameToLocal()
    return updatedGame  

  }

  const startFarming = () => {
    if (game.players.some(p => p.name === "")) {
      return
    }

    setGame((g) => {
      const newG = { ...g }
      newG.active = true
      updateGameToLocal()
      setShowGame(true)
      setShowStartButton(false)
      return newG
    })

  }

  const resumeFarming = () => {

    setShowGame(true)
    setShowStartButton(false)
  }

  const finishFarming = () => {
    const histories = localStorage.getItem(LOCAL_KEY.HISTORY_GAME) || JSON.stringify([])
    localStorage.setItem(LOCAL_KEY.HISTORY_GAME, JSON.stringify([...JSON.parse(histories), game]))
    localStorage.removeItem(LOCAL_KEY.ACTIVE_GAME)


    setShowGame(false)
    setShowStartButton(true)

    setGame(() => newGame)
  }

  useEffect(() => {
    console.log("Effect game", game)
    if (game.active) {
      resumeFarming()
    }

  }, [game, setGame])

  useEffect(() => {

    const activeGame = getGameFromLocal()
    if (activeGame) {
      setGame(activeGame)
    }
  }, []);

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
              <MainPage finishFarming={finishFarming} game={game} showGame={showGame} />
            </div>
          </div>

        </div>
      </div>
    </GameContext.Provider >

  );
}

export default App;
