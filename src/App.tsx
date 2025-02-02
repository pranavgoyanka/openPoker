import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
import { GameplayProps, LandingProps } from './interfaces'
import Gameplay from './components/Gameplay'

function App() {
  const [players, setPlayers] = useState<string[]>([])
  const [player, setPlayer] = useState("")
  const [buyin, setBuyin] = useState(10)
  const [startGame, setStartGame] = useState(false)

  const landingProps: LandingProps = {
    buyin,
    setBuyin,
    player,
    setPlayer,
    players,
    setPlayers,
    startGame,
    setStartGame
  }

  const gameplayProps: GameplayProps = {
    buyin,
    players,
    setStartGame
  }

  return (
    <>
      <h1 className='font-bold'>Full On Juwaari</h1>
      {
        startGame 
        ? <Gameplay {...gameplayProps} />
        : <Landing {...landingProps} />
      }
    </>
  )
}

export default App
