export default function Rolls(props) {
  return(
    <div className='rolls'>
      <div className='hi-score'>
        <h4 className='hi-score--title'>High Score</h4>
        <div className='hi-score--score'>{props.hiScore}</div>
      </div>
      <div className='roll-tracker'>
        <h3 className='roll-tracker--title'>Rolls</h3>
        <div className='roll-tracker-rolls'>{props.rolls}</div>
      </div>
    </div>
  )
}