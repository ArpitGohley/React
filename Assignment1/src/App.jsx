import React from "react";
import Navbar from "./Navbar"
import {Footer,Footer1} from "./Footer"
import {Head,ClickMeButton,CheckAge,CheckNumber,ShowNumbers,CountEvenNumbers} from "./Header"


const App=()=>{
  
  return(
    <div>   

            <Head/>
             
             <br></br>
            <ClickMeButton/>
               
               <br></br>
            <CheckAge/>
              
              <br></br>
            <CheckNumber/>
             
             <br></br>
            <ShowNumbers/>

            <br></br>
            <CountEvenNumbers/>
           
    </div>
  )
}

export default App