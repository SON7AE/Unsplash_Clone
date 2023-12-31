import { useEffect, useState } from "react"
import "./dialog.scss"

interface Props {
    isOpen: boolean
    props: any
    funcOpen: any
    setDetail: any
}

function Dialog({ isOpen, props, funcOpen, setDetail }: Props) {
    const closeDialog = () => {
        funcOpen(false)
        setDetail({})
    }
    // ESC Key 입력시, 다이얼로그 닫기
    useEffect(() => {
        const escKeyModalClose = (e: any) => {
            if (e.key === "Escape") {
                funcOpen(false)
                setDetail({})
            }
        }
        // esc key를 눌렀을 때 Modal 창 close
        window.addEventListener("keydown", escKeyModalClose) // 위에 만들어 놓은 escKeyModalClose를 keydown했을 때 이벤트로 등록한다. 즉, esc를 눌렀을 때 modal창 종료
        return () => window.removeEventListener("keydown", escKeyModalClose) // 위의 이벤트를 제거
    }, [funcOpen])

    // ----------------------------------------------------------------------------------------------------

    const addBookmark = (image: any) => {
        window.alert("북마크에 추가되었습니다.")

        const storedData = localStorage.getItem("bookmarks")
        let newData = {
            url: image.urls.small,
            isActive: true,
        }

        if (storedData === null) {
            let newArr = []
            newArr.push(newData)

            localStorage.setItem("bookmarks", JSON.stringify(newArr))
        } else {
            let newArr = []

            const parsedData = JSON.parse(storedData)
            newArr = [...parsedData]
            newArr.push(newData)

            localStorage.setItem("bookmarks", JSON.stringify(newArr))
        }

        funcOpen(false)
        setDetail({})
    }

    const DialogContents = () => {
        return (
            <div className="dialog-layout">
                <div className="dialog">
                    <div className="dialog__header">
                        <div className="dialog__header__close-box">
                            <button className="close" onClick={closeDialog}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <img src={props.user.profile_image.small} alt="" className="profile" />
                            <span className="author-name">{props.user.name}</span>
                        </div>
                        <div className="dialog__header__button-box">
                            <button className="bookmark" onClick={() => addBookmark(props)}>
                                북마크 추가 +
                            </button>
                            <button className="download">다운로드</button>
                        </div>
                    </div>
                    <div className="dialog__body">
                        <img src={props.urls.small} alt={props.alt_description} className="dialog__body__image" />
                    </div>
                    <div className="dialog__footer">
                        <div className="dialog__footer__info-box">
                            <div className="item">
                                <span className="item__label">이미지 크기</span>
                                <span className="item__value">
                                    {props.width} X {props.height}
                                </span>
                            </div>
                            <div className="item">
                                <span className="item__label">업로드</span>
                                <span className="item__value">{props.created_at.split("T")[0]}</span>
                            </div>
                            <div className="item">
                                <span className="item__label">마지막 업데이트</span>
                                <span className="item__value">{props.updated_at.split("T")[0]}</span>
                            </div>
                            <div className="item">
                                <span className="item__label">다운로드</span>
                                <span className="item__value">{props.likes}</span>
                            </div>
                        </div>
                        <div className="dialog__footer__tags">
                            {props.tags.map((item: any) => {
                                return (
                                    <div className="tag" key={item.title}>
                                        {item.title}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (isOpen) {
        return <DialogContents />
    } else {
        return null
    }
}

export default Dialog
