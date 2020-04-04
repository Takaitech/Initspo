import { useContext } from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import { CollectionsContext } from '../../contexts/CollectionsContext'

const gridContent =  [
    {url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg", dimensions: {width: 881, height: 495}},
    {url: "https://cdn.inprnt.com/thumbs/3b/d7/3bd78abfe28bffa17d97538647cde5e1@2x.jpg?response-cache-control=max-age=2628000", dimensions: { width: 720, height: 720}},
    {url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg", dimensions: {width: 881, height: 495}},
    {url: "https://cdn.gamer-network.net/2018/usgamer/nier-automata_key-art_hed.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/nier-automata-postmortem-yoko-taro-platinumgames.jpg", dimensions: {width: 881, height: 495}}

]

const Inspirations:React.FC = () => {
    const {collections, dispatch} = useContext(CollectionsContext)

        const InspirationsContainer = styled.div`
        display: ${collections.open ? "none" : 'block'};
        width: calc(100vw - 301px);
        height: calc(100vh - 90px);
        margin: 0 auto;
        border: #E8E8E8 1px solid;
        text-align: center;
        `;

    return(
        <InspirationsContainer >
            <Grid gridContent={gridContent} ></Grid>
        </InspirationsContainer>
    )


}


export default Inspirations