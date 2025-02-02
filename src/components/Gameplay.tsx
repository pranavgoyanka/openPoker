import { useEffect, useState } from "react";
import { GameplayProps } from "../interfaces";

const Gameplay = ({ buyin, players, setStartGame }: GameplayProps) => {
  const [winnings, setWinnings] = useState<number[]>([]);
  const [totalPot, setTotalPot] = useState(0);
  const [roundWinner, setRoundWinner] = useState(-1);
  const [leader, setLeader] = useState("no one");

  useEffect(() => {
    const tempWin: number[] = [];
    for (let i = 0; i < players.length; i++) {
      tempWin.push(0);
    }
    setWinnings(tempWin);
  }, []);

  useEffect(() => {
    if (roundWinner == -1) {
      return;
    }

    const tempWin: number[] = [...winnings];

    for (let i = 0; i < players.length; i++) {
      if (i == roundWinner) {
        tempWin[i] += buyin;
      } else {
        tempWin[i] -= buyin;
      }
    }

    setWinnings(tempWin);
    setRoundWinner(-1);
    setTotalPot((oldPot) => (oldPot += players.length * buyin));

    const maxIndex = tempWin.reduce(
      (maxIdx, num, idx, arr) => (num > arr[maxIdx] ? idx : maxIdx),
      0,
    );
    setLeader(players[maxIndex]);
  }, [roundWinner]);

  return (
    <>
      <p className="text-right mt-2">
        {/* <img className="w-5 inline" src="credit_card.svg" alt="buy-in" />  */}
        {"Buy In: "}
        {buyin}
      </p>
      <p className="text-right">
        {/* <img className="inline" src="pot.svg" alt="total-pot" /> */}
        {"Total Pot: "}
        {totalPot}
      </p>
      <p className="text-right text-fuchsia-300 font-bold">
        {/* <img className="inline" src="leader.svg" alt="leader" /> */}
        {"Leader: "}
       {leader}
      </p>

      <div className="mt-5">
        {players.map((player, index) => (
          <p className="m-[10px] " key={index}>
            <button
              className=""
              onClick={() => {
                setRoundWinner(index);
              }}
            >
              {player} ({winnings[index]})
            </button>
          </p>
        ))}
      </div>

      <button
        className="mt-[20px] bg-red-300 hoverable "
        onClick={() => {
          setStartGame(false);
        }}
      >
        End Game
      </button>
    </>
  );
};

export default Gameplay;
