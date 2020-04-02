import styled from 'styled-components'

const Header = () => {
    
    
    return (
    <HeaderContainer>
        <Logo src="images/Initspo-Min-Logo.png"></Logo>
        <LogoExtended src="images/Logo-extended.png"></LogoExtended>
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

const LogoExtended = styled.img`
    position: absolute;
    bottom: -195px;
    left: 47px;
    width: 61px;
`

export default Header;