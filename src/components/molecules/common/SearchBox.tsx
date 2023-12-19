import { useState } from "react"
import "./SearchBox.scss"

interface Props {
    funcSetValue: any
}

function SearchBox({ funcSetValue }: Props) {
    const [text, setText] = useState("")
    const onChange = (event: any) => {
        setText(event.target.value)
    }
    // 엔터키 입력
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            funcSetValue(text) // 작성한 Input 값 부모컴포넌트로 전달
        }
    }

    return (
        <div className="search-box">
            <div className="search-box__search">
                <input type="text" placeholder="찾으실 이미지를 검색하세요." className="input" value={text} onChange={onChange} onKeyDown={handleKeyDown} />
                <img src="src/assets/icons/search.svg" alt="" />
            </div>
        </div>
    )
}

export default SearchBox
