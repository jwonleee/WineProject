import SearchContext from "./ContextAPI";

const SearchResult = () => {
    return (
        <>
            <SearchContext.Consumer>
                {
                    (value) => ( /* 소괄호, value-contextAPI에서 관리하는 초기값을 넣어줌 */
                        <div>
                            값: {value}
                        </div>
                    )
                }
            </SearchContext.Consumer>
        </>
    )
}

export default SearchResult;