import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../style/style.scss'
const Sheet = () => {
  return (
    <>
      <div className="sheet py-3 py-md-5">
        <div className="container-fluid">
          <h1 className="text-center py-md-4 py-2">Тренингдан лавҳалар</h1>
          <div className="row">
            <div className="col-md-4 mt-2">
              <div className='iframe'>
                <iframe src="https://www.youtube.com/embed/HbcvVMg2E2M" frameBorder="0"></iframe>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className='iframe'>
                <iframe src="https://www.youtube.com/embed/yqCitcxFDP8" frameBorder="0"></iframe>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className='iframe'>
                <iframe src="https://www.youtube.com/embed/llw0jHggows" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <Link className='btn btn-outline-light btn-lg mt-md-5 mt-2' to={'/contact'}>Рўйхатдан ўтиш</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Sheet;