//step1 : import react
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    color: red;
`

//step2 : create a function (component)
const Text = (props) => {
    return (
        <StyledWrapper>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </StyledWrapper>
    )
}

//step3 : export
export default Text;