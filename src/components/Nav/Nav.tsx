import styled from 'styled-components'
import { useState } from 'react'
import ShowCollections from './ShowCollections'
import Info from './Info'
import Settings from './Settings'

// interface Props {

// }

const Nav: React.FC = () => {    

    return (
        <NavContainer >
            <Logo></Logo>
            <ShowCollections ></ShowCollections>
            <Info></Info>
            <Settings></Settings> 
        </NavContainer>
    )
}


const NavContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0; 
    height: 100vh;
    width: 150px;
    background-color:  #f8f8f8;
    text-align: center;
    z-index: 1;
`;

const Logo = styled.svg`
    position: absolute;
`




export default Nav