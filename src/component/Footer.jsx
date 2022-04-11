import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Ижтимоий тармоқлар</h4>
              <ul>
                <li><a href="https://t.me/KozimxonTuraev"><i class="fa-brands fa-telegram"></i>Telegram</a></li>
                <li><a href="https://www.instagram.com/kozimxon_turaev/"><i class="fa-brands fa-instagram"></i>Instagram</a></li>
                <li><a href="https://www.facebook.com/kozimxonturaev/"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
                <li><a href="https://www.youtube.com/channel/UCsAjvumJ1T_5EW0792YQHTQ"><i class="fa-brands fa-youtube"></i>YouTube</a></li>
              </ul>
            </div>
            <div className="col-md-5">
              <h4>Алоқа</h4>
              <ul>
                <li><a href="mailto:kozimxonturaev8@gmail.com">Email: kozimxonturaev8@gmail.com</a></li>
                <li><a href="tel:998910010509">Tel: +998910010509</a></li>
              </ul>
            </div>
            <div className="col-md-3 offset-md-0 offset-3">
              <Link to="/"><img className='w-100' src="../../img/logo_white.png" alt="" /></Link>
              <h2 className='mt-md-4 mt-2 text-center'>Copyright © 2022, kozimxon.uz</h2>
            </div>
          </div>
          <hr />
          <a className='text-center iset' href="http://iset.uz/">Created by iset.uz</a>
        </div>
      </div>
    </>
  )
}
export default Footer;