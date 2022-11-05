import {useDispatch} from 'react-redux'
import {getGoals, deleteGoal} from '../features/goals/goalSlice'

function GoalItem({goal}) {
  const dispatch = useDispatch()
  
  return (
    <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <button onClick={async () => {
            await dispatch(deleteGoal(goal._id))
            dispatch(getGoals())
          }} className='close'>
          X
        </button>
    </div>
  )
}

export default GoalItem