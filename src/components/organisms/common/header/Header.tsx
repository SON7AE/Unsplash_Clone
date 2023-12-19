import { useNavigate } from "react-router-dom"
import "./header.scss"

interface Props {
    funcSetValue: any
    funcPage: any
}

function Header({ funcSetValue, funcPage }: Props) {
    const navigate = useNavigate()
    const moveToHome = () => {
        navigate("/")
        funcSetValue("korea")
        funcPage(1)
    }

    return (
        <div className="header">
            <div className="header__logo-box" onClick={moveToHome}>
                <span className="header__logo-box__logo">Unsplash</span>
            </div>
            <div className="header__function-box">
                <button className="header__function-box__button">사진제출</button>
                <button className="header__function-box__button">
                    <span className="label">북마크</span>
                    <span className="material-symbols-outlined">favorite</span>{" "}
                </button>
                <span>Evie | evie@willog.io</span>
            </div>
        </div>
    )
}

export default Header
