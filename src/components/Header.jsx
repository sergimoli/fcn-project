import uehortaLogo from '../assets/uehorta-logo.png'
import fcnLogo from '../assets/fcn-logo.png'

function Header() {
  return (
    <nav className="navbar navbar-light bg-white shadow w-100 fixed-top py-1 h-auto">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Izquierdo */}
        <img
          src={uehortaLogo}
          alt="UEHorta Logo"
          style={{ width: '50px', height: '40px' }}
        />

        {/* Logo Derecho */}
        <img
          src={fcnLogo}
          alt="FCN Logo"
          style={{ width: '50px', height: '40px' }}
        />
      </div>
    </nav>
  )
}

export default Header
