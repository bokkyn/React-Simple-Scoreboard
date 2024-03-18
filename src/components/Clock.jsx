import Timer from './Timer';
import "./Clock.css"

function Clock() {
    const sec=Timer();
    return (
        <div>
            <p className='time'>Vrijeme: {sec}'</p>
        </div>
    );
  }

  
  
  export default Clock;
  