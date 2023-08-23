import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";


function App() {
  const [isGameStarted , setIsGameStarted] = useState(false);
  
  const toogleGameplay = () =>{
    setIsGameStarted((prev) => !prev)
  }
  return (
  <div>
    {
      isGameStarted ? <GamePlay/> : <StartGame toogle = {toogleGameplay} />
    }
  </div>
  );
}

export default App;
