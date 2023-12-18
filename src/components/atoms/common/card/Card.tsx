import "./card.scss"

interface Props {
    data: any
    funcOpen: any
    setDetail: any
}

function Card({ data, funcOpen, setDetail }: Props) {
    const openDialog = () => {
        console.log("이미지가 클릭되었습니다.")
        funcOpen(true)
        setDetail(data)
    }

    return (
        <div className="card" onClick={openDialog}>
            <img src={data.urls.small} alt={data.alt_description} className="card__image" />
        </div>
    )
}

export default Card
