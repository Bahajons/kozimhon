import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../style/style.scss'
import { faq } from "../component/var/faq_src"
const Faq = () => {


  return (
    <div className='faq'>
      <div className="container-fluid">
        <h1 className='text-center text-light py-3'>Кўп сўраладиган саволлар</h1>
        <div id="accordion">
          {faq.map((item, index) =>{
            return(<>
            <div class="card" key={index}>
              <div class="card-header p-0" id={"heading"+index}>
                <button class="btn collapsed  mt-2" data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="false" aria-controls={"collapse"+index}>
                  {item.name}
                </button>
              </div>
              <div id={"collapse"+index} class="collapse" aria-labelledby={"heading"+index} data-parent="#accordion">
                <div class="card-body">
                  {item.description}
                </div>
              </div>
            </div>
            </>)
          })}

        </div>
      </div>
    </div>
  )
}
export default Faq;