import Timer from './Timer';
import "./Goal.css"


function Goal(props) {

    const sec=Timer();
    const hajduk = ["Livaja", "Sahiti", "Brekalo", "Krovinović", "Pukštas", "Elez", "Mikanović"];
    const dinamo = ["Petković", "Baturina", "Špikić", "Mišić"];
    
        
    function getRandomStringFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      }


    function handleClick(){
        props.akcija()
        const golDiv = document.getElementById(props.id);
    const paragraph = document.createElement('p');
    if(props.id==2){
        const player = getRandomStringFromArray(hajduk);
        paragraph.textContent = `${sec}' - ${player}`;
    }
    if(props.id==1){
        const player = getRandomStringFromArray(dinamo);
        paragraph.textContent = `${sec}' - ${player}`;
    }
    
    golDiv.appendChild(paragraph);

      }

    return(
    <div>
        <button  onClick={handleClick}>{props.ime}</button>
        <div id={props.id} className='gol'></div>
    </div>
    );
  }

  export default Goal
  