import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Vendors from './pages/Vendors'
import TrackShipment from './pages/TrackShipment'
import Settings from './pages/Settings'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/track" element={<TrackShipment />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App
