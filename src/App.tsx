import { useState } from 'react'
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
    setStartGame
  }

  const gameplayProps: GameplayProps = {
    buyin,
    players,
    setStartGame
  }

  return (
    <>
      <h1 className='font-bold'>Open Poker</h1>
      {
        startGame
          ? <Gameplay {...gameplayProps} />
          : <Landing {...landingProps} />
      }

      <footer className="py-4 mt-10 overline">
        <div className="container mx-auto justify-between items-center px-4">
          <p className="text-sm">Made with ❤️ by Pranav Goyanka</p>
        </div>
      </footer>
    </>
  )
}

export default App
