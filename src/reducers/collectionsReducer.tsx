import { string } from "prop-types";

type Actions = 
    | {type: 'openCollections', boolean: boolean} 
   
interface Collections {
    name: string;
}
type InitType = 
    {
    collections?: Collections[];
    current?: string;
    open?: boolean;
}

    
export const collectionsReducer = (initState: InitType , action:Actions) => {
    switch(action.type) {
        case "openCollections":
            return {...initState, open: action.boolean}
        default:
            return initState;
    }
}

