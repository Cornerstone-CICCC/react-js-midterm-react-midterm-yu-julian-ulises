import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import ScoreBoard from './pages/Scoreboard/ScoreBoard'
import Standings from './pages/Standings/Standings'
import Ranking from './pages/Ranking/Ranking'
import NotFound from './pages/Notfound/NotFound'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="scoreboard" element={<ScoreBoard />} />
            <Route path="standings" element={<Standings />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
