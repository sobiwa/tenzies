import { nanoid } from 'nanoid';
import Die from './components/Die';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from './useWindowSize';

export default function App() {
  const [tenzies, setTenzies] = useState(false);

  function rollDie() {
    return Math.ceil(Math.random() * 6);
  }

  function rollTenDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(rollDie());
    }
    return array;
  }

  function newDice() {
    return rollTenDice().map((item) => ({
      value: item,
      isHeld: false,
      id: nanoid(),
    }));
  }

  const [dice, setDice] = useState(newDice());

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

  //check for win
  useEffect(() => {
    const num = dice[0].value;
    if (dice.every((die) => die.isHeld && die.value === num)) {
      setTenzies(true);
    }
  }, [dice]);

  function newGame() {
    setDice(newDice());
    setTenzies(false);
  }

  const size = useWindowSize();

  return (
    <main>
      <div className='text'>
        {tenzies && <Confetti width={size.width} height={size.height} />}
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
      <button className='roll-button' onClick={tenzies ? newGame : rollDice}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
