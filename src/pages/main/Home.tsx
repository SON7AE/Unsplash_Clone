import Header from "@components/organisms/common/header/Header"
import Navigation from "@components/organisms/common/header/Navigation"
import SearchBox from "@components/molecules/common/SearchBox"
import Card from "@/components/atoms/common/card/Card"
import Dialog from "@/components/organisms/main/Dialog"
import "./home.scss"

import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "mXSaXElt5u9C4xAlm4bVyaiywj9ZRoElzokF0a9_HAU"
const PER_PAGE = 20

function Home() {
    const [images, setImages] = useState([])
    const [open, setOpen] = useState(false)
    const [dialogData, setDialogData] = useState({})

    const searchValue = "nature"

    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=1&per_page=${PER_PAGE}`)
                console.log(res)
                setImages(res.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        getImages()
    }, [])

    const cardList = images.map((item: any) => {
        return <Card data={item} key={item.id} funcOpen={setOpen} setDetail={setDialogData} />
    })

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
            <div className="page__image-box">{cardList}</div>
            {/* 이미지 - 상세 다이얼로그 */}
            <Dialog isOpen={open} funcOpen={setOpen} props={dialogData} setDetail={setDialogData} />
        </div>
    )
}

export default Home
