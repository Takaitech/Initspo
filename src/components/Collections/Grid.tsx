import Collection from './Collection'

interface Content {
    photo: string
}

interface Props {
    CollectionsList: Array<Content>
}

const Grid: React.FC<Props> = ({CollectionsList}) => {
        return (
            <ul>
                {CollectionsList.map((collection, index) => (
                    <Collection key={index} collection={collection}></Collection>
                ))}
            </ul>
        );
}

export default Grid