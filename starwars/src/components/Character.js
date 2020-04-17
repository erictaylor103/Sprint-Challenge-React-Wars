// Write your Character component here

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 18%;    
    margin-top:45px;
    background-color:white; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 10), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 10px solid #cd854c;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10% 30% 50% 70%;
    padding: 10px;

`;


const Character = props =>{ //passed the characters data via "props" from the data variable in App.js
    //console.log(props);
    
    return( //return the star wars character's data we collected via props
        <CardContainer>
            <h2>Name:       {props.charData.name}</h2>
                DOB:        {props.charData.birth_year}<br/><br/>
                Sex:        {props.charData.gender}<br/><br/>
                Height:     {props.charData.height}cm<br/><br/>                                            
        </CardContainer>
    )
}
export default Character;

