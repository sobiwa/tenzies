import { nanoid } from 'nanoid';
import Die from './components/Die';
import { useState, useEffect } from 'react';

export default function App() {
  const rollDie = () => Math.ceil(Math.random() * 6);

  function rollTenDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(rollDie());
    }
    return array;
  }

  const [dice, setDice] = useState(
    rollTenDice().map((item) => ({
      value: item,
      isHeld: false,
      id: nanoid(),
    }))
  );

  function rollDice() {
    setDice((prev) =>
      prev.map((die) => (die.isHeld ? die : { ...die, value: rollDie() }))
    );
  }

  function toggleHeld(id) {
    setDice((prev) =>
      prev.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    );
  }

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    console.log('Dice state has changed.')
  }, [dice])



  return (
    <main>
      <div className='text'>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className='dice'>
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
      <button className='roll-button' onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
