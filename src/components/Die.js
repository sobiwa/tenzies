export default function Die(props) {
  return (
    <div
      className={`die ${props.isHeld ? "held" : ""}`}
      onClick={props.toggleHeld}
    >
      <h1>{props.value}</h1>
    </div>
  );
}
