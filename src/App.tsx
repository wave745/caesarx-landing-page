import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BetaLandingPage from "./pages/BetaLandingPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BetaLandingPage />} />
        <Route path="/betalanding" element={<BetaLandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
