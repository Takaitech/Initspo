import styled from 'styled-components'
import Inspiration from './Inspiration'

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
    return (
        <GridContainer>
            {gridContent.map((content: Content, index) => 
                <Inspiration key={index} content={content}></Inspiration>    
            )}
        </GridContainer>
    )
};

const GridContainer = styled.ul`
    text-align: left;
`

export default Grid;