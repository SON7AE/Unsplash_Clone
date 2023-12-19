import { Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Home from "./pages/main/Home"
import Bookmarks from "./pages/bookmarks/Index"

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Home />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
        </RecoilRoot>
    )
}

export default App
