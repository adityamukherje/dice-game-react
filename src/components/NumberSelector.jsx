import styled from 'styled-components'
const NumberSelector = ({selectedNumber , setError , setSelectedNumber , error}) => {
    
    const arrayNumber = [1,2,3,4,5,6];

    function numberSelectorHandler(value){
        setSelectedNumber(value)
        setError("");
    }
  return (
    <NumberSelectorContainer>
        <p className='error'> {error} </p>
       <div className='count'>
       {
            arrayNumber.map((value , i) =>(
                <Box isSelected={selectedNumber === value} key={i} onClick= {() => numberSelectorHandler (value)}  >{value}</Box>
            ) , [])
        }
       </div>
       <p>selected number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: end;
    .error{
        color: red;
    }
    .count{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
`

const Box = styled.div `
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white" )};
    color: ${(props) => (props.isSelected ? "white" : "black" ) };
`