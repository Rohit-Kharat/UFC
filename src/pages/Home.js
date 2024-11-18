import {useEffect} from 'react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutDetails from "../components/WorkoutDetails"
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"
import '../pages/Home.css'
const Home =()=>{
    const {workouts,dispatch} = useWorkoutsContext()
    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if(response.ok){
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
        };fetchWorkouts()
    },[])
    return(<>
    <div className='title'><p>FIGHT TILL THE END</p>
    <p>PAIN IS TEMPORARY, GLORY IS FOREVER</p></div>
    <div className='frontDesign'>
    
        <div className='column1'>
            <div className="photo1"></div>
            <div className="photo2"></div>
            
        </div>
        <div className='column2'>
        <div className="photo3"></div>
            <div className="photo4"></div>
            <div className="photo5"></div>
           
        </div>
        <div className='column3'>
            <div className="photo6"></div>
            <div className="photo7"></div>
           
        </div>
    </div>
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
        </>
    ) 
}
export default Home;