import Header from "@components/organisms/common/header/Header"
import Card from "@components/organisms/bookmarks/Card"
import { useState } from "react"

interface Bookmark {
    url: string
    isActive: boolean
}

function Bookmarks() {
    const [searchValue, setSearchValue] = useState("korea")
    const [page, setPage] = useState(1) // 페이지

    const storedData = localStorage.getItem("bookmarks")
    const bookmarks = JSON.parse(storedData)

    const cardList = bookmarks.map((item: Bookmark) => {
        return <Card data={item} />
    })

    return (
        <div className="page">
            <Header funcSetValue={setSearchValue} funcPage={setPage} />
            <div className="page__image-box">{cardList}</div>
        </div>
    )
}

export default Bookmarks
