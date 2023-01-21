export default function Die(props) {
  return (
    <button
      type='button'
      className={`die ${props.isHeld ? 'held' : ''}`}
      onClick={props.toggleHeld}
    >
      <h1>{props.value}</h1>
    </button>
  );
}
