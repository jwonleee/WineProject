import { createContext, useState } from "react";


//1. 초기값 설정
const SearchContext = createContext({
    state : {search: ''},
    action : {
        setSearch : () => {}
    }
});

//2. Provider컴포넌트 재정의
//매개값의 이름은 반드시 children으로 구조분해할당 합니다.
//useState를 활용해서 데이터를 관리합니다.
const SearchProvider = ({children}) => {
    const [search, setSearch] = useState({search: ''});
    const value = {
        state : search,
        action : {setSearch}
    }
    //Provider 반환
    return (
        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    )
}

//3. 외부에서 사용가능 하도록 consumer, provider 반환
const SearchConsumer = SearchContext.Consumer;
export {SearchProvider, SearchConsumer}

export default SearchContext;