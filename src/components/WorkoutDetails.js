import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import '../components/WorkoutDetail.css'
const WorkoutDetails=({workout})=>{
    const {dispatch} = useWorkoutsContext();

    const handleClick = async()=>{
        const response = await fetch('/api/workouts/'+workout._id,{
            method:'DELETE'
        })
        const json = await response.json()

            if(response.ok){
                dispatch({type:'DELETE_WORKOUT',payload:json})
            }
        
    }
    return(<>
        <div class="card">
 
  

        <div className="workout-details">
            <h4>Exercise : {workout.title}</h4>
            <p><strong>LOAD(kg): </strong>{workout.load}</p>
            <p><strong>REPS: </strong>{workout.reps}</p>
            <p>DATE: {workout.createdAt}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
        </div>
        </>
    )
}
export default WorkoutDetails;