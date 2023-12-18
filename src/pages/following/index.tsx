import Header from "@components/organisms/common/header/Header"
import Navigation from "@components/organisms/common/header/Navigation"
import SearchBox from "@components/molecules/common/SearchBox"
import "../main/home.scss"

function Following() {
    return (
        <div className="page">
            <Header />
            <Navigation />
            <div className="page__search-box">
                <div className="page__search-box__search">
                    <span className="title">Unsplash Photo</span>
                    <span className="desc">
                        인터넷의 시작 자료 출처입니다. <br />
                        모든 지역에 있는 크리에이터들의 지원을 받습니다.
                    </span>
                    <SearchBox />
                </div>
            </div>
            <span>팔로잉 페이지 입니다.</span>
        </div>
    )
}

export default Following
