import styled from 'styled-components'

interface Props {

}

const Settings: React.FC<Props> = () => {
        return (
            <Button>Settings Icon</Button>
        );
}

const Button = styled.button`
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`

export default Settings