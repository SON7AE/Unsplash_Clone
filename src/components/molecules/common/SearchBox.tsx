import "./SearchBox.scss"

function SearchBox() {
    return (
        <div className="search-box">
            <div className="search-box__search">
                <input type="text" placeholder="찾으실 이미지를 검색하세요." className="input" />
                <img src="src/assets/icons/search.svg" alt="" />
            </div>
        </div>
    )
}

export default SearchBox
