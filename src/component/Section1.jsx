import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../style/style.scss'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

const Section1 = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className='section1'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h2>Қадриятларга асосланган бизнесни бошқариш бир ойлик коучинг дастури.</h2>
          </div>
          <div className="col-md-6  text-center">
            <div className='ceo'>
              <img className='w-75' src="../img/kozimhon.png" alt="" />

              <div className="circle" data-toggle="modal" data-target="#exampleModal">
                <span onClick={() => setOpen(true)} className="icon">
                  <img src="../img/play.png" alt="" />
                </span>
              </div>

            </div>
          </div>
        </div>
        {/* Modal start */}

        <React.Fragment>
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Jlfuj_nZCfs" onClose={() => setOpen(false)} />
        </React.Fragment>


        {/* Modal end */}
      </div>
    </div>
  )
}
export default Section1;