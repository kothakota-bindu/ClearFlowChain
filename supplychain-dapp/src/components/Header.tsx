import { Link } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <h1>SupplyChain DApp</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/vendors">Vendors</Link>
        <Link to="/track">Track</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <ConnectButton />
    </header>
  )
}

export default Header
