import React from 'react'
import styled from 'styled-components'

const Regulation = () => {
  return (
   <RulesContainer>
    <h2> How to play dice game</h2>
    <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>Click on dice image</p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </div>
   </RulesContainer>
  )
}

export default Regulation

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0  auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`