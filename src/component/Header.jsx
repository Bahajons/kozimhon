import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../style/style.scss'
const Header = () => {



  return (
    <>
      <div className="menu">
        <div className='container-fluid'>
          <nav className="navbar text-light navbar-expand-lg">
            <Link className="navbar-brand logo" to="/"><img className="w-100" src="../img/logo_white.png" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <img src="../img/menu.png" alt="menu" />
              {/* <span className="navbar-toggler-icon"></span> */}
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/"><span>Home</span> </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/modul"><span>Modul</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact"><span>Contact</span></Link>
                </li>
              </ul>
              <span className="navbar-text">
                <a className="text-decoration-none num" href="tel:998910010509">+99891 001 05 09</a>
              </span>
            </div>
          </nav>
        </div>
        <div className="load d-none">
          <div className="loading"></div>
        </div>
      </div>
    </>
  )
}
export default Header;