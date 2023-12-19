import { Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Home from "./pages/main/Home"

function App() {
    return (
        <RecoilRoot>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit" element={<Home />} />
                <Route path="/following" element={<Home />} />
                <Route path="/photoPlus" element={<Home />} />
                <Route path="/oneColor" element={<Home />} />
                <Route path="/3dRender" element={<Home />} />
                <Route path="/nature" element={<Home />} />
                <Route path="/texture" element={<Home />} />
                <Route path="/interior" element={<Home />} />
                <Route path="/film" element={<Home />} />
                <Route path="/experimental" element={<Home />} />
            </Routes> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Home />} />
            </Routes>
        </RecoilRoot>
    )
}

export default App
