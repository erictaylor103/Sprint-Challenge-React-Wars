import React from 'react';
import styled from 'styled-components';
import Character from './Character';

const MainContainer = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 63px;
    
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;
//import the character info via props and map through each charData to render each piece of data to the card container div
const PageBody = props => {
    return (
        <MainContainer>
            <CardContainer>
                {props.data.map(props => {
                    return <Character charData={props} />
                })}
            </CardContainer>
        </MainContainer>
    )
}
export default PageBody;