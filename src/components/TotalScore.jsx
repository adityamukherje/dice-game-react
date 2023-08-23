import React from 'react'
import styled from 'styled-components'
const TotalScore = ({total}) => {
  return (
    <ScoreContainer>
        <div>
            <h1>{total}</h1>
            <p>total score</p>
        </div>
    </ScoreContainer>
  )
}

export default TotalScore
const ScoreContainer = styled.div ` 
    max-width: 200px;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`