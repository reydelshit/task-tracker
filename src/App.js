import { useState } from 'react';
import TrackerContainer from './TrackerContainer'
import './style.css'
import TrackerBody from './TrackerBody';

const App = () => {


    const [renderAddTracker, setRenderAddTracker] = useState(false)


    const render = () => {
        renderAddTracker ? setRenderAddTracker(false) : setRenderAddTracker(true)
    }

    return ( 
        <div className="main">
            <header className="header">
                <h1>Task Tracker</h1>
                <button className='addBtn' onClick={render}>{ renderAddTracker ? 'Close' : 'Add'}</button>
            </header>
        {renderAddTracker && <TrackerContainer />}
        <TrackerBody/>
        </div>
     );
}
 
export default App;