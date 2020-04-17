import { useState } from 'react'
import styled from 'styled-components'


interface IProps {
    targeted: boolean;
}

const Header = () => {
    
    const [targeted, setTargeted] = useState(false)

    return (
    <HeaderContainer>
        <Logo src="images/Initspo-Min-Logo.png"
        onMouseEnter={(e) => setTargeted(true)}
        onMouseLeave={(e) => setTargeted(false)}></Logo>
        <LogoExtended targeted={targeted} src="images/Logo-extended.png"></LogoExtended>
    </HeaderContainer>

    )
}


const HeaderContainer = styled.div`
height: 90px;
position: relative;
z-index: 2;
`

const Logo = styled.img`
width: 250px;
position: absolute;
bottom: -9px;
left: 5px;
`

const LogoExtended = styled.img<IProps>`
display: ${props => props.targeted ? "block" : "none"};
position: absolute;
bottom: -195px;
left: 47px;
width: 61px;
`



export default Header;