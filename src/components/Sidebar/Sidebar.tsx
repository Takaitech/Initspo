import styled from 'styled-components'
import PlusIcon from './PlusIcon'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <CollectionTitle>{'Digital Art'.toUpperCase()}</CollectionTitle>
            <ScrollBar></ScrollBar>
            <PlusIcon></PlusIcon>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    height: calc( 100vh - 125px);
    width: 150px;
    position: absolute;
    right: 0;
    bottom: 0;
`

const ScrollBar = styled.div`
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        bottom: 125px;
        height: 30vh;
        width: 37px;
        background-color: #DBDBDB;
`

const CollectionTitle = styled.h1`
    transform-origin: 57.5px 38px;
    transform:rotate(90deg);  
    width: 35vh; 
`

export default Sidebar
