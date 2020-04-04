import Header from '../src/components/Header/Header'
import Nav from '../src/components/Nav/Nav'
import Inspirations from '../src/components/Inspirations/Inspirations'
import Collections from '../src/components/Collections/Collections'
import Sidebar from '../src/components/Sidebar/Sidebar'
import CollectionsContextProvider from '../src/contexts/CollectionsContext'

const Home = () => (
    <CollectionsContextProvider>
        <div>
            <Header></Header>
            <Nav></Nav>
            <Inspirations></Inspirations>
            <Collections></Collections>
            <Sidebar></Sidebar>
        </div>
    </CollectionsContextProvider>
    )


export default Home