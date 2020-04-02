import styled from 'styled-components'

interface Props {
    key: number,
    BoxContent: { 
        photo: string
    }
}



const GridBox: React.FC<Props> = ({BoxContent}) => {
        console.log(BoxContent.photo)
        const BoxContainer = styled.li<{ url: string }>`
            width: 33.3%;
            height: 200px;
            background-image: url(${props=> props.url});
            background-size: contain;
            list-style: none;
            display: inline-block;
            background-repeat: no-repeat;
            float: left;
            background-position: center;
        `

        return (
            <BoxContainer url={BoxContent.photo}></BoxContainer>
        );

       
}




export default GridBox;