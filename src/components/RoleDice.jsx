
import styled from 'styled-components'

const RoleDice = ({currentDice , setCurrentDice , roledice}) => {
   

  
  return (
    <DiceContainer>
        <div className='dice' onClick={roledice} >
            <img src={`/images/dice_${currentDice}.png`} alt='dice1' />
        </div>
        <p>Click on the dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;

    }
`