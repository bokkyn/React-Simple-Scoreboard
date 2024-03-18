import { useState} from 'react'
import './App.css'
import Goal from './components/Goal.jsx'
import Clock from './components/Clock.jsx'
import Club from './components/Club.jsx'
import Score from './components/Score.jsx'
import Okvir from './components/Okvir.jsx'
import Podaci from "./components/Podaci.jsx"

function App() {
  const [broj, postaviBroj] = useState(0);
  const [broj2, postaviBroj2] = useState(0);

  const uvecajBroj = () => {
  postaviBroj(broj + 1);}

  const uvecajBroj2 = () => {
    postaviBroj2(broj2 + 1);}

    /*Ove dvije funkcije bi se morale moc napisat na bolji nacin
    al ako iden napisat ka funkciju uvecaj(broj, postavi), kojoj bi za argumente
    jedan put sla broj1 i postaviBroj1, a drugi put broj2 i postaviBroj2
    izbaci mi error za previse re-rendera, gleda san kako ga izbjec sa useeffecton
    ali onda mi kaze da mi props akcija nije funkcija
    dsvs*/

  return (
    <div className='body'>
      <Okvir>
       <div className='maliDiv'>
       <Clock></Clock>
  </div> 
      <div className='maliDiv'>
      <Podaci podatak="Stadion" value="Maksimir" ></Podaci>
      
      </div>
      <div className='maliDiv'>
      <Podaci podatak="Gledatelji" value="6.061" ></Podaci>
      
      </div>
      
      <div className='maliDiv'>
       <Club link="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dinamo_Zagreb_logo.png/600px-Dinamo_Zagreb_logo.png"></Club> 
       <Score score1={broj} score2={broj2}></Score>
       <Club link="https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/HNK_Hajduk_Split.svg/1200px-HNK_Hajduk_Split.svg.png"></Club>
      </div>
    <div className='maliDiv'>
    <Goal id="1" ime="Gol! Dinamo" akcija={uvecajBroj}></Goal>
     <Goal id="2" ime="Gol! Hajduk" akcija={uvecajBroj2}></Goal>
    </div>
    
      </Okvir>

    </div>
  )
}

export default App
