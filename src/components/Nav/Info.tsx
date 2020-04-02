import styled from 'styled-components'

interface Props {

}

const Info: React.FC<Props> = () => {
        return (
            <Button>Info Icon</Button>
        );
}


const Button = styled.button`
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
`


export default Info