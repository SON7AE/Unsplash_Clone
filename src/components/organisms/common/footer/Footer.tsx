import "./footer.scss"

interface Props {
    page: number
    totalPage: number
    funcPage: any
}

function Footer({ page, totalPage, funcPage }: Props) {
    const moveToPrev = () => {
        console.log("이전 버튼이 선택되었습니다.")
        if (page <= 1) return
        else funcPage(page - 1)
    }
    const moveToNext = () => {
        console.log("다음 버튼이 선택되었습니다.")
        if (page >= totalPage) return
        else funcPage(page + 1)
    }
    const moveToPage = (selected: number) => {
        console.log(selected + "페이지 버튼이 선택되었습니다.")
        funcPage(selected)
    }

    // 페이지 리스트 UI 생성
    const newArray = new Array()
    for (let i = 1; i <= totalPage; i++) {
        newArray.push(i)
    }

    const pages = newArray.map((item: number, index: number) => {
        return (
            <button className={`pagination__button ${index === page - 1 ? "active" : "inactive"}`} key={item} onClick={() => moveToPage(item)}>
                {item}
            </button>
        )
    })

    return (
        <div className="footer">
            <div className="pagination">
                <button className="pagination__button" onClick={moveToPrev}>
                    <img src="src/assets/icons/arrow-left.svg" alt="" />
                </button>
                {pages}
                <button className="pagination__button" onClick={moveToNext}>
                    <img src="src/assets/icons/arrow-right.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Footer
