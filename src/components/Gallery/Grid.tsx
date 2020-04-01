import GridBox from './GridBox'

interface Content {
    photo: string
}

interface Props {
    GridContent: Array<Content>
}

const Grid:React.FC<Props> = (GridContent) => {
    return (
        <ul>

        </ul>
    )
};

export default Grid;