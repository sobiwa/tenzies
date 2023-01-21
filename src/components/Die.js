export default function Die(props) {
  let num;
  switch (props.value) {
    case 1:
      num = 'one';
      break;
    case 2:
      num = 'two';
      break;
    case 3:
      num = 'three';
      break;
    case 4:
      num = 'four';
      break;
    case 5:
      num = 'five';
      break;
    case 6:
      num = 'six';
      break;
    default:
      break;
  }

  return (
    <button
      type='button'
      className={`die ${props.isHeld ? 'held' : ''}`}
      onClick={props.toggleHeld}
    >
      {/* <h1>{props.value}</h1> */}
      <div className={`dots ${num}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
}
