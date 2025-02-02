import React from 'react'
import { LandingProps } from '../interfaces'

const Landing = ({buyin, setBuyin, player, setPlayer, players, setPlayers, startGame, setStartGame}: LandingProps) => {
  return (
    <>

<div className='flex items-center'>
      <span className='w-24'>
        {"Buy In:"}
      </span>
      <input 
        className='flex-1 m-2 p-0.5 outline-2 rounded'
        type='text'        
        placeholder={`Enter ${"Buy In"}`}
        value={buyin}
        onChange={(event) =>{           
          if (!Number.isNaN(parseInt(event.target.value))) {
            setBuyin(parseInt(event.target.value))
          } else {
            setBuyin(10)
          }
          // console.log(`${label} is ${value}`)
        }}
      />
    </div>
        
      <div className='flex items-center'>
        <span className='w-24'>
        {"Player Name:"}
        </span>
        <input 
          className='m-2 p-0.5 outline-2 flex-1 rounded'
          type='text'        
          placeholder={`Enter ${"Player Name"}`}
          value={player}
          onChange={(event) =>{ 
            setPlayer(event.target.value)
            // console.log(`${"Player Name"} is ${player}`)
          }}
        />
        <button 
          className='w-7 outline-2 p-2 rounded bg-green-300 py-0.5'
          onClick={() => {
            const newPlayer: string = player
            if (newPlayer.length == 0) {
              return;
            }
            setPlayers((oldPlayers: string[])=> [...oldPlayers, newPlayer])
            setPlayer('')
          }}
          >
          +
        </button>
      </div>

      <h2 className='text-2xl mt-[20px] overline font-bold'>Players</h2>

      <div className='text-xl mt-[10px]'>
        {players.map((player, index) => (
          <p className='m-[10px] flex' key={index}> 
          <button 
            className='w-7 bg-red-300 py-0' 
            onClick={() => {
              const tempPlayers: string[] = [...players];
              tempPlayers.splice(index, 1);
              setPlayers(tempPlayers);
            }}>
            X
          </button> 
          <span className='flex-auto text-left font-semibold'>
            {player}
          </span>
          </p>
        ))}
      </div>

      <button 
        className='mt-[20px] outline-2 p-2 rounded bg-green-300 text-xl'
        onClick={() => {
          players.length > 1
          ? setStartGame(true)
          : alert("Need atleast two players to start the game!")
          }}>
        Start Game
      </button>
    </>
  )
}

export default Landing