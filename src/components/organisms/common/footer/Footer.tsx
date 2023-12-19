import { useState } from "react"
import "./footer.scss"

interface Props {
    page: number
    totalPage: number
    funcPage: any
}

function Footer({ page, totalPage, funcPage }: Props) {
    const [step, setStep] = useState(0)

    // 페이지 리스트 UI 생성
    const newArr: number[] = new Array()
    for (let i = 1; i <= totalPage; i++) {
        newArr.push(i)
    }

    const length = newArr.length
    const divide = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0)
    const res = new Array()

    for (let i = 0; i <= divide; i++) {
        // 배열 0부터 n개씩 잘라 새 배열에 넣기
        res.push(newArr.splice(0, 10))
    }

    // ----------------------------------------------------------------------------------------------------

    const moveToPrev = () => {
        console.log("이전 버튼이 선택되었습니다.")
        if (step === 0) {
            return
        } else {
            setStep(step - 1)
        }
    }
    const moveToNext = () => {
        console.log("다음 버튼이 선택되었습니다.")
        if (step < res[step].length - 2) {
            setStep(step + 1)
        } else {
            return
        }
    }
    const moveToPage = (selected: number) => {
        funcPage(selected)
    }

    // ----------------------------------------------------------------------------------------------------

    const pages = res[step].map((item: number, index: number) => {
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
