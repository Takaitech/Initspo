import styled from 'styled-components'
import Inspiration from './Inspiration'
import { useState } from 'react'

interface Content {
        url: string;
        dimensions: {
            width: number;
            height: number;
        };
}

interface Props {
    gridContent: Array<Content>
}


const Grid:React.FC<Props> = ({gridContent}) => {

    let [showGrid, setShowGrid] = useState(true)
    
    let selectInspo = (event: React.MouseEvent) => {
        setShowGrid(!showGrid)
        console.log(showGrid)
    }
    return (
        <GridContainer>
            {gridContent.map((content: Content, index) => 
                <Inspiration key={index} content={content} onClick={selectInspo} showGrid={showGrid}></Inspiration>    
            )}
        </GridContainer>
    )
};

const GridContainer = styled.ul`
    text-align: left;
`

export default Grid;