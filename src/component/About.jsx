import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../style/style.scss'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

const About = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="about py-2 py-md-4">
        <div className="container-fluid text-light py-2 py-md-4">
          <div className='position-relative'>
            <h1 className='text-center py-2'>Козимхон Тураев ким?</h1>
            <ul className='pl-md-5 pl-3'>
              <li><p>Козимхон Тураев халқаро тажрибага эга бизнес тренер ва консултант бўлиб,
                АҚШ, Япония ва Европада таълим олган.</p></li>
              <li><p> Procter & Gamble дистрибюторлик компаниясида HR Менеджер лавозимида ишлаган.</p></li>
              <li><p>2012 – 2018 йилларда Саудия Арабистонида жойлашган Ислом Тараққиёт Банкида аввал HR бўлимида, сўнгра Инвестиция бўлимида фаолият олиб борган.</p> </li>
              <li><p>Ҳозирда IsBF компаниясининг асосчиларидан бири ва кўплаб компаниялар, банклар ва тадбиркорларга Ислом Молияси, HR ва Бизнесда Барака Омиллари мавзуларида тренинг ва консалтинг ҳизматларини кўрсатиб келмоқда.</p> </li>
            </ul>
            <div className="circle">
              <span onClick={() => setOpen(true)} className="icon">
                <img src="../img/play.png" alt="" />
              </span>
            </div>
          </div>
          {/* Modal start */}

          <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="r-H0oWTqfOc" onClose={() => setOpen(false)} />
          </React.Fragment>

          {/* Modal end */}
        </div>
      </div>
    </>
  )
}
export default About;