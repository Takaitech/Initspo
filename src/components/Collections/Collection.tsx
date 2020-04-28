import styled from 'styled-components'

interface Props {
    collection: {

    };
}


const Collection: React.FC<Props> = ({collection}) => {
    return (
        <CollectionContainer >
        </CollectionContainer>
    );

}


const CollectionContainer = styled.li`
    list-style: none;
    width: 100px;
    height: 100px;
    background-color: black;
    margin: 40px;
    display: inline-block;
`

export default Collection