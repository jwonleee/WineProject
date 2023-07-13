import { useContext, useEffect, useRef } from "react";
import SearchContext, { SearchConsumer, SearchProvider} from "../SM/ContextAPI";
import RedWineAPI2 from "./RedWineAPI2";
import WhiteWineAPI2 from "./WhiteWineAPI2";


const SearchBySemin = () => {

    const { state, action } = useContext(SearchContext);
    

    return (
            <>
                
                <WhiteWineAPI2/>
                <RedWineAPI2/>
            </>
    )
}

export default SearchBySemin;