import '../style/style.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { modul } from '../component/var/modul'
import Gost from './Gost'
import { Link } from 'react-router-dom'
const Modul = () => {
  return (<>
    <div className="modul py-md-5 py-2">
      <div className="container-fluid">
        <div>
          <h2 className='text-center py-2 py-md-5'>Бизнес Курсдаги Модуллар</h2>
        </div>
        <div id="accordion">
          {modul.map((item, index) => {
            return (<>
              <div class="card" key={index}>
                <div class="card-header p-0" id={"head" + index}>
                  <button class="btn collapsed  mt-2" data-toggle="collapse" data-target={"#collapsed" + index} aria-expanded="false" aria-controls={"collapsed" + index}>
                    {index + 1 + "." + item.name}
                  </button>
                </div>
                <div id={"collapsed" + index} class="collapse" aria-labelledby={"head" + index} data-parent="#accordion">
                  <div class="card-body py-2">
                    <ul className='list-unstyled'>
                      {item.descr.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>)
          })}
        </div>
        <div>
          <h2 className='text-center py-md-5 py-2'>Бу коучинг дастури кимлар учун</h2>
          <div className="row">
            <div className="col-md-3  col-sm-6 col-12">
              <div className="box my-2">
                <div className="box-header">
                  <img className='w-75 mx-auto' src="../img/boss_whit.png" alt="" />
                </div>
                <div className="box-body">
                  <h3 className='text-center'>Замонавий ва Исломий қадриятларга асосланган ҳолда ўз бизнесини бошқармоқчи бўлган бизнес эгалари</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3  col-sm-6 col-12">
              <div className="box my-2">
                <div className="box-header">
                  <img className='w-75 mx-auto' src="../img/hr_manager_whit.png" alt="" />
                </div>
                <div className="box-body">
                  <h3 className='text-center'>Бизнес эгалари, ўрта поғонадаги раҳбарлар ва HR менежерлар;</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3  col-sm-6 col-12">
              <div className="box my-2">
                <div className="box-header">
                  <img className='w-75 mx-auto' src="../img/sherik_whit.png" alt="" />
                </div>
                <div className="box-body">
                  <h3 className='text-center'>Шерикчиликда иш юритаётган тадбиркорлар;</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3  col-sm-6 col-12">
              <div className="box my-2">
                <div className="box-header">
                  <img className='w-75 mx-auto' src="../img/servis_whit.png" alt="" />
                </div>
                <div className="box-body">
                  <h3 className='text-center'>Сервис тизимини ривожлантириш орқали савдони оширмоқчи бўлган тадбиркорлар</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <Link className='btn btn-outline-light btn-lg mt-md-5 mt-2' to={'/contact'}>Рўйхатдан ўтиш</Link>
          </div>
        </div>
      </div>
    </div>
    <Gost />
  </>)
}
export default Modul;