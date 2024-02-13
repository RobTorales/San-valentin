import { useState } from 'react'
import './App.css'

const phrases = [
  "No",
  "Estas segura?",
  "Realmente segura?",
  "No me hagas esto :c",
  "Voy a llorar",
  "Vas a romper mi corazon :c",
];

function App() {
  
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick(){
    setNoCount(noCount + 1);
  }

  function getNoButtonText(){
    return phrases [Math.min(noCount, phrases.length -1)]
  } 
  return (
    <div className='container-valentine'>
      {yesPressed ? (
        <>
        <img src="https://media1.tenor.com/m/UHk41PVqqbgAAAAC/milk-and.gif"></img>
        </>
      ) : (
        <>
          <img src="https://media1.tenor.com/m/wbR-PWAKlioAAAAC/love-milk-and-mocha.gif">
          </img>

          <div>Queres ser mi san valentin?</div>
          <div>
            <button onClick={() => setYesPressed(true)} className='learn-more' style={{fontsize: yesButtonSize}}>
                  Si
            </button>
            <button onClick={handleNoClick} className='learn-more'>
                {getNoButtonText()}
            </button>
          </div>
        </>

        
      )}
    </div>
  )
}

export default App
