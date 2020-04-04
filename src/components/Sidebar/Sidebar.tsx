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
    background-color: #F8F8F8;
    height: calc( 100vh - 90px);
    width: 150px;
    position: absolute;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const ScrollBar = styled.div`
        height: 15vh;
        width: 37px;
        background-color: #DBDBDB;
        margin: 0 auto;
`

const CollectionTitle = styled.h1`
    writing-mode: vertical-lr;
    text-orientation: mixed;
    line-height: 2em;
    margin: 0 auto;
    margin-bottom: 30px;
    min-height: 40vh;
`

export default Sidebar
