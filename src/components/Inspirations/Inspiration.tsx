import styled from 'styled-components'

interface Props {
    key: number;
    content: { 
        url: string;
        dimensions: {
            width: number;
            height: number;
        };
    };
};


interface IProps {
    content: { 
        url: string;
        dimensions: {
            width: number;
            height: number;
        };
    };
};



const Inspiration: React.FC<Props> = ({content}) => {

        return (
            <BoxContainer content={content}></BoxContainer>
        );
};

const BoxContainer = styled.li<IProps>`
    width: ${props => props.content.dimensions.width /4}px;
    /* max-width: calc(100vw - 301px); */
    height: ${props => props.content.dimensions.height/4}px;
    max-height: 150px; 
    margin: 10px;
    background-image: url(${props=> props.content.url});
    background-size: cover;
    list-style: none;
    background-repeat: no-repeat;
    float: left;
    background-position: center;
`




export default Inspiration;