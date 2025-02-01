import { useState } from "react";
import "./App.css";

function Game(props: { players: string[]; money: number }) {
  const lose = props.money;
  const win = (props.players.length - 1) * lose;
  const [count, setCount] = useState(
    props.players.map((name) => ({ name, score: 0 }))
  );
  return (
    <div className="App">
      {count.map((player) => (
        <>
          <div>
            <button
              onClick={() => {
                let modifyObj = Object.create(count) as typeof count;
                modifyObj.map((obj, i) => {
                  if (player.name === obj.name) {
                    obj.score += win;
                  } else {
                    console.log(obj.name);
                    obj.score -= lose;
                  }
                });
                setCount(modifyObj);
              }}
            >
              {player.name}
            </button>
            <span> {player.score} </span>
          </div>
          <br />
        </>
      ))}
    </div>
  );
}

function App() {
  const [isGame, setGame] = useState(false);
  const [player, setPlayer] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [money, setMoney] = useState(10);
  return (
    <div>
      <h1>Full-on Juwaari</h1>
      {isGame ? (
        <Game players={player} money={money}></Game>
      ) : (
        <div>
          <div>
            money:{" "}
            <input
              type="text"
              value={money}
              onChange={(e) => setMoney(parseInt(e.target.value))}
            />
          </div>

          <div>
            name:{" "}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={() => {
                if (input) {
                  setPlayer([...player, input]);
                  setInput("");
                }
              }}
            >
              Add name
            </button>
          </div>
          <h2>players:</h2>
          {player.map((p) => (
            <div>{p}</div>
          ))}
          <br />

          <br />
          <br />
          <div>
            <button
              onClick={() => {
                setGame(true);
              }}
            >
              Start Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
