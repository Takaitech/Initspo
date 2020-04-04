import { createContext,useReducer } from 'react'
import { collectionsReducer } from '../reducers/collectionsReducer'

interface Props {
    children: React.ReactNode;
}

export const CollectionsContext = createContext<any>({})

const initState = {
    collections: [],
    current: 'ALL',
    open: false
}

const CollectionsContextProvider: React.FC<Props> = (props) => {
    const [collections, dispatch] = useReducer(collectionsReducer, initState)
     return(
        <CollectionsContext.Provider value={{collections, dispatch}}>
        {props.children}
        </CollectionsContext.Provider>
    )
}


export default CollectionsContextProvider