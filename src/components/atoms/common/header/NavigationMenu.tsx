import { Link } from "react-router-dom"
import "./navigationMenu.scss"

interface Navigation {
    path: string
    label: string
    isActive: boolean
}
interface Props {
    data: Navigation
}

function NavigationMenu({ data }: Props) {
    return (
        <Link to={data.path} className={`menu ${data.isActive ? "active" : "inactive"}`}>
            <span className="menu__label">{data.label}</span>
        </Link>
    )
}

export default NavigationMenu
