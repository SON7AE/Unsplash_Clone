import Header from "@components/organisms/common/header/Header"
import Navigation from "@components/organisms/common/header/Navigation"
import SearchBox from "@components/molecules/common/SearchBox"
import Footer from "@components/organisms/common/footer/Footer"
import Card from "@components/atoms/common/card/Card"
import Dialog from "@components/organisms/main/Dialog"
import "./home.scss"

import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "mXSaXElt5u9C4xAlm4bVyaiywj9ZRoElzokF0a9_HAU"
const PER_PAGE = 30

function Home() {
    const [searchValue, setSearchValue] = useState("korea")
    const [images, setImages] = useState([]) // 초기 이미지 리스트 배열
    const [page, setPage] = useState(1) // 페이지
    const [totalPage, setTotalPage] = useState(0) // 전체 페이지 갯수

    const [open, setOpen] = useState(false)
    const [dialogData, setDialogData] = useState({})

    // API 호출
    const getImages = async () => {
        try {
            const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${page}&per_page=${PER_PAGE}`)
            setImages(res.data.results)
            setTotalPage(res.data.total_pages)
            console.log(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    // 최초 API 호출
    useEffect(() => {
        getImages()
    }, [])

    // 검색 값 변경시 API 호출
    useEffect(() => {
        setPage(1)
        getImages()
    }, [searchValue])

    // 페이지네이션 페이지 변경시 API 호출
    useEffect(() => {
        getImages()
    }, [page])

    const cardList = images.map((item: any) => {
        return <Card data={item} key={item.id} funcOpen={setOpen} setDetail={setDialogData} />
    })

    return (
        <div className="page">
            <Header funcSetValue={setSearchValue} funcPage={setPage} />
            <Navigation funcSetValue={setSearchValue} funcPage={setPage} />
            <div className="page__search-box">
                <div className="page__search-box__search">
                    <span className="title">Unsplash Photo</span>
                    <span className="desc">
                        인터넷의 시작 자료 출처입니다. <br />
                        모든 지역에 있는 크리에이터들의 지원을 받습니다.
                    </span>
                    <SearchBox funcSetValue={setSearchValue} />
                </div>
            </div>
            <div className="page__image-box">{cardList}</div>
            <Footer page={page} totalPage={totalPage} funcPage={setPage} />
            {/* 이미지 - 상세 다이얼로그 */}
            <Dialog isOpen={open} funcOpen={setOpen} props={dialogData} setDetail={setDialogData} />
        </div>
    )
}

export default Home
