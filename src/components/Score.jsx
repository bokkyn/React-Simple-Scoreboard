
import "./Score.css"


function Score(props) {


    function uvecaj(score, postavi){
        postavi(score+1);
    }


    return (
        <div>
            <p className='score'>{props.score1} : {props.score2} </p>
        </div>
    );
  }

  
  
  export default Score;
  