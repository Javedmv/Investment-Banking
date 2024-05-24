import Header from './component/Header';
import Results from './component/Results';
import Userinput from './component/Userinput';
import { useState } from 'react';
function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier,newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: newValue
        }
    });
  }

  return (
    <>
      <Header />
      <Userinput onChange={handleChange} userInput={userInput}/>
      <Results input={userInput}/>
    </>
  )
}

export default App
