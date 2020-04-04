import styled from 'styled-components'

interface Props {
    key: number;
    content: { 
        url: string;
        dimensions: {
            width: number;
            height: number;
        };
    }
}
const Inspiration: React.FC<Props> = ({content}) => {
        const BoxContainer = styled.li<{ url: string }>`
            width: ${content.dimensions.width /4}px;
            /* max-width: calc(100vw - 301px); */
            height: ${content.dimensions.height/4}px;
            max-height: 150px;
            margin: 10px;
            background-image: url(${props=> props.url});
            background-size: cover;
            list-style: none;
            display: inline-block;
            background-repeat: no-repeat;
            float: left;
            background-position: center;
        `

        return (
            <BoxContainer url={content.url}></BoxContainer>
        );

       
}




export default Inspiration;