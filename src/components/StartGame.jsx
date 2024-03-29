import styled from 'styled-components'

const StartGame = ( {toogle} ) => {
  return (
    <Container>
        <div>
        <img src='./images/dices.png' alt='dices' />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toogle} >Play Game</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 , auto;
    height: 100vh;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
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