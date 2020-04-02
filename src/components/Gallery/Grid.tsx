import styled from 'styled-components'
import GridBox from './GridBox'

interface Content {
    photo: string
}

interface Props {
    GridContent: Array<Content>
}


const Grid:React.FC<Props> = ({GridContent}) => {
    return (
        <GridContainer>
            {GridContent.map((content: Content, index) => 
                <GridBox key={index} BoxContent={content}></GridBox>    
            )}
        </GridContainer>
    )
};

const GridContainer = styled.ul`
    text-align: left;
`

export default Grid;