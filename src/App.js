import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.ceil(Math.random() * 6));
    }
    return array;
  }

  const [dice, setDice] = useState(
    allNewDice().map((item) => ({
      value: item,
      isHeld: false,
      id: nanoid(),
    }))
  );

  function rollDice() {
    const newNums = allNewDice();
    setDice((prev) => {
      const newArray = [];
      for (let die of prev) {
        newArray.push({
          ...die,
          value: die.isHeld ? die.value : newNums.shift(),
        });
      }
      return newArray;
    });
  }

  function toggleHeld(id) {
    setDice((prev) =>
      prev.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    );
  }

  return (
    <main>
      <div className='text'></div>
      <div className="dice">
        {dice.map((die) => (
          <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            toggleHeld={() => {
              toggleHeld(die.id);
            }}
          />
        ))}
      </div>
      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
