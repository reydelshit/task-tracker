import { useState } from 'react';
import TrackerBody from './TrackerBody';


const TrackerContainer = () => {


    const [task, setTask] = useState([])
    const [taskk, setTaskk] = useState('')

    const [date, setDate] = useState(Boolean)

    const [important, setImportant] = useState(null)


    function trackerSubmit(e){
        e.preventDefault()

        const taskHolder = {
            taskTitle: taskk,
            dates: date
        }

        setTask([...task.concat(taskHolder)])
        setTaskk('')

    }


    return ( 
            <form className="form" onSubmit={trackerSubmit}>
            <label htmlFor="text">Task</label>
            <input type="text" 
                name="te~xt" 
                placeholder="add ur task here"
                onChange={(e) => setTaskk(e.target.value)}
                value={taskk}/>
            <label htmlFor="date">Date</label>
            <input type="date" 
                onChange={(e) => setDate(e.target.value)}
                name="date" 
                value={this}/>
            <label htmlFor="checkbox">Important?</label>
            <input type="checkbox"
                onChange={(e) => setTaskk(e.target.value)}
                name="checkbox"
                value={important}/>


            <button className="submitBtn" onSubmit={trackerSubmit}>Add</button>


            <TrackerBody title= {task.map((y) => <h1>{y.taskTitle}</h1>)}
                            dates= {task.map((y) => <h1>{y.dates}</h1>)}
            />
        </form>

     );
}
 
export default TrackerContainer;