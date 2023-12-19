import "./card.scss"

interface Props {
    data: any
}

function Card({ data }: Props) {
    return (
        <div className="card">
            <img src={data.url} alt="북마크에 추가된 이미지" className="card__image" />
        </div>
    )
}

export default Card
