import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import { GameplayProps, LandingProps } from './interfaces'
import Gameplay from './components/Gameplay'
import RulesModal from './components/Modal'

function App() {
  const [players, setPlayers] = useState<string[]>([])
  const [player, setPlayer] = useState("")
  const [buyin, setBuyin] = useState(10)
  const [startGame, setStartGame] = useState(false)
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

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
      <h1 className='font-bold '>Open Poker</h1>
      <span 
        className='block text-right mt-2 underline rounded
         hover:text-fuchsia-400 hover:font-bold transition-transform' 
        onClick={() => setModalOpen(true)} >
          Rules
      </span>

      <RulesModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      {
        startGame
          ? <Gameplay {...gameplayProps} />
          : <Landing {...landingProps} />
      }

      <footer className="py-4 mt-10">
        <div className="container mx-auto justify-between items-center px-4">
          <p className="text-sm overline">Made with ❤️ by <a href="https://github.com/pranavgoyanka/">Pranav Goyanka</a></p>
        </div>
      </footer>
    </>
  )
}

export default App
