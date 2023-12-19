import { Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Home from "./pages/main/Home"

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Home />} />
            </Routes>
        </RecoilRoot>
    )
}

export default App
