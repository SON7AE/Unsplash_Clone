import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import NavigationMenu from "@components/atoms/common/header/NavigationMenu"
import "./navigation.scss"

interface Props {
    funcSetValue: any
    funcPage: any
}
interface Navigation {
    index: number
    path: string
    label: string
    searchValue: string
    isActive: boolean
}

function Navigation({ funcSetValue, funcPage }: Props) {
    const [menu, setMenu] = useState([
        {
            index: 0,
            path: "/edit",
            label: "보도/편집 전용",
            searchValue: "edit",
            isActive: false,
        },
        {
            index: 1,
            path: "/following",
            label: "팔로잉",
            searchValue: "following",
            isActive: false,
        },
        {
            index: 2,
            path: "/photoPlus",
            label: "Unsplash Photo+",
            searchValue: "photo",
            isActive: false,
        },
        {
            index: 3,
            path: "/oneColor",
            label: "단색",
            searchValue: "one color",
            isActive: false,
        },
        {
            index: 4,
            path: "/3dRender",
            label: "3D 렌더링",
            searchValue: "3d rendering",
            isActive: false,
        },
        {
            index: 5,
            path: "/nature",
            label: "자연",
            searchValue: "nature",
            isActive: false,
        },
        {
            index: 6,
            path: "/texture",
            label: "텍스처 및 패턴",
            searchValue: "texture",
            isActive: false,
        },
        {
            index: 7,
            path: "/interior",
            label: "건축 및 인테리어",
            searchValue: "interior",
            isActive: false,
        },
        {
            index: 8,
            path: "/film",
            label: "필름",
            searchValue: "film",
            isActive: false,
        },
        {
            index: 9,
            path: "/experimental",
            label: "실험적인",
            searchValue: "experimental",
            isActive: false,
        },
    ])

    const location = useLocation()
    useEffect(() => {
        menu.forEach((item: Navigation) => {
            item.isActive = false

            if (item.path === location.pathname || location.pathname.includes(item.path)) {
                item.isActive = true
                funcSetValue(item.searchValue)
                funcPage(1)
            } else {
                item.isActive = false
            }
        })
        setMenu([...menu])
    }, [location.pathname])

    const navigationMenu = menu.map((item: Navigation) => {
        return <NavigationMenu data={item} key={item.label} />
    })

    return <div className="navigation">{navigationMenu}</div>
}

export default Navigation
