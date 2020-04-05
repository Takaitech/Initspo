import { useContext } from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import { CollectionsContext } from '../../contexts/CollectionsContext'

const CollectionsList =  [
    {photo: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg"},
    {photo: "https://cdn.inprnt.com/thumbs/3b/d7/3bd78abfe28bffa17d97538647cde5e1@2x.jpg?response-cache-control=max-age=2628000"},
    {photo: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg"},
    {photo: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg"}

]

const Collections:React.FC = () => {
    const {collections, dispatch} = useContext(CollectionsContext)

        const CollectionsContainer = styled.div`
            display: ${collections.open ? 'block' : "none"};
            width: calc(100vw - 301px);
            height: calc(100vh - 90px);
            margin: 0 auto;
        `;

    return(
        <CollectionsContainer >
            <Grid CollectionsList={CollectionsList} ></Grid>
        </CollectionsContainer>
    )


}


export default Collections