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

    const DialogContents = () => {
        return (
            <div className="dialog-layout">
                <div className="dialog">
                    <div className="dialog__header">
                        <div className="dialog__header__close-box">
                            <button className="close" onClick={closeDialog}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <span className="author-name">Evie Park</span>
                        </div>
                        <div className="dialog__header__button-box">
                            <button className="bookmark">
                                <span className="material-symbols-outlined">favorite</span>
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
                                return <div className="tag">{item.title}</div>
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
