import { useState, useEffect } from "react";



 function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let i=0;
        const interval = setInterval(() => {
           
            if (i<90){
                setSeconds(seconds => seconds + 1);
                i=i+1;

            }
           console.log("sekunde " + seconds,"i " + i);  //sekunde ce uvik stat nula, koristimo useState
        }, 500);
        
        return () => clearInterval(interval);
    }, []);
return seconds;
  }

  
  
  export default Timer;
  