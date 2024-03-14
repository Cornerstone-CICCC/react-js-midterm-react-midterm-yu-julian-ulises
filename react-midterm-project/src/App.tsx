import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './components/home/Home'
import ScoreBoard from './components/scoreboard/ScoreBoard'
import Standings from './components/standings/Standings'
import News from './components/news/News'
import NotFound from './components/notfound/NotFound'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="scoreboard" element={<ScoreBoard />} />
            <Route path="standings" element={<Standings />} />
            <Route path="news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
