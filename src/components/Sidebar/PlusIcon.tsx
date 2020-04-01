import styled from 'styled-components'

const PlusIcon = () => {

    return (
    <IconWrapper>
        <svg width="75px" height="75px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="m50 26c-0.55078 0-1 0.44922-1 1v22h-22c-0.55078 0-1 0.44922-1 1s0.44922 1 1 1h22v22c0 0.55078 0.44922 1 1 1s1-0.44922 1-1v-22h22c0.55078 0 1-0.44922 1-1s-0.44922-1-1-1h-22v-22c0-0.55078-0.44922-1-1-1z"/>
        </svg>
    </IconWrapper>)
    
}

const IconWrapper = styled.div`
    height: 75px;
    width: 75px;
    position: absolute;
    bottom: 25px;
    right: 50%;
    transform: translateX(50%);
`

export default PlusIcon