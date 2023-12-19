import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import NavigationMenu from "@components/atoms/common/header/NavigationMenu"
import "./navigation.scss"

interface Navigation {
    path: string
    label: string
    isActive: boolean
}

function Navigation() {
    const [menu, setMenu] = useState([
        {
            index: 0,
            path: "/",
            label: "보도/편집 전용",
            isActive: true,
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
            isActive: false,
        },
        {
            index: 3,
            path: "/oneColor",
            label: "단색",
            isActive: false,
        },
        {
            index: 4,
            path: "/3dRender",
            label: "3D 렌더링",
            isActive: false,
        },
        {
            index: 5,
            path: "/nature",
            label: "자연",
            isActive: false,
        },
        {
            index: 6,
            path: "/texture",
            label: "텍스처 및 패턴",
            isActive: false,
        },
        {
            index: 7,
            path: "/interior",
            label: "건축 및 인테리어",
            isActive: false,
        },
        {
            index: 8,
            path: "/film",
            label: "필름",
            isActive: false,
        },
        {
            index: 9,
            path: "/experimental",
            label: "실험적인",
            isActive: false,
        },
    ])

    const location = useLocation()
    useEffect(() => {
        menu.forEach((item: Navigation) => {
            if (item.path === location.pathname || location.pathname.includes(item.path)) {
                item.isActive = true
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
