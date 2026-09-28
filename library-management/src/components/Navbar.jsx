import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/books', label: 'Books' },
  { to: '/issue-book', label: 'Issue Book' },
  { to: '/history', label: 'Library History' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand-wrap">
        <div>
          <p className="brand-name">LibraryHub</p>
          <span className="brand-subtitle">Management system</span>
        </div>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
