import { Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Home from "./pages/main/Home"
import Following from "./pages/following"

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/following" element={<Following />} />
            </Routes>
        </RecoilRoot>
    )
}

export default App
