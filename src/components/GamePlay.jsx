import React from 'react'
import { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import Regulation from './Regulation'


const GamePlay = () => {
    const [showRules , setShowRules] = useState(false);
    const [error , setError] = useState("")
    const [total, setTotal] = useState(0)
    const[selectedNumber , setSelectedNumber] = useState();
    const[currentDice , setCurrentDice] = useState(1)

    function rule(){
        setShowRules((prev) => !prev)
    }

    function generateRandomNumber (min , max) {
        return Math.floor( Math.random() * (max-min) + min );
       }
       function resetScore(){
        setTotal(0)
       }
       function roledice (){
        if(!selectedNumber) {
           setError(("you have not select a number"))
           return
        }
       
        const randomNumber = generateRandomNumber(1 , 7)
        setCurrentDice(randomNumber )
        if(selectedNumber === randomNumber){
            setTotal((prev) => prev + randomNumber)
           }
           else{
            setTotal((prev) => prev - randomNumber)
           }
           setSelectedNumber(false)
       }

      

  return (
    <MainContainer>
        <div className='top-section'>
        <TotalScore total={total} />
        <NumberSelector setError = {setError} selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber}
                              error={error} />
        </div>
        <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice} roledice={roledice} />
        <div className='btn'>
            <OutlineButton onClick={resetScore} >Reset</OutlineButton>
            <Button onClick={rule}> {showRules? "Hide" : "Show" }  rules</Button>
        </div>
       {showRules &&  <Regulation/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div `
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
    margin: 0%, auto;
    padding-top: 70px;
    .top-section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        margin-top: 40px;
    }
`
const Button = styled.button`
     min-width: 220px;
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    background: #000;
    color: white;
    font-size: 16px;
    border: 1px solid  transparent;
    cursor: pointer;
    transition: 0.4s background ease-in ;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`

const OutlineButton = styled.button`
     min-width: 220px;
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    background: white;
    color: black;
    font-size: 16px;
    border: 1px solid  black;
    cursor: pointer;
   
    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
       
    }
`
