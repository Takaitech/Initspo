import styled from 'styled-components'
import CollectionsButton from './CollectionsButton'

const Nav = () => {

    return (
    <NavContainer >
        <Logo></Logo>
        <CollectionsButton></CollectionsButton>
    </NavContainer>
)}

const NavContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 150px;
    background-color:  #f8f8f8;
    text-align: center;
`;

const Logo = styled.svg`
    position: absolute;
`




export default Nav